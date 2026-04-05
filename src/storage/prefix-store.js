const fs = require("node:fs");
const path = require("node:path");
const { DatabaseSync } = require("node:sqlite");

class PrefixStore {
  constructor(filename, defaultPrefix) {
    this.filename = path.resolve(filename);
    this.defaultPrefix = defaultPrefix;

    fs.mkdirSync(path.dirname(this.filename), { recursive: true });

    this.db = new DatabaseSync(this.filename);
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS guild_prefixes (
        guild_id TEXT PRIMARY KEY,
        prefix TEXT NOT NULL
      )
    `);

    this.selectStatement = this.db.prepare(
      "SELECT prefix FROM guild_prefixes WHERE guild_id = ?"
    );
    this.upsertStatement = this.db.prepare(`
      INSERT INTO guild_prefixes (guild_id, prefix)
      VALUES (?, ?)
      ON CONFLICT(guild_id) DO UPDATE SET prefix = excluded.prefix
    `);
  }

  getPrefix(guildId) {
    if (!guildId) {
      return this.defaultPrefix;
    }

    const row = this.selectStatement.get(String(guildId));
    return row?.prefix || this.defaultPrefix;
  }

  setPrefix(guildId, prefix) {
    this.upsertStatement.run(String(guildId), prefix);
    return prefix;
  }
}

module.exports = {
  PrefixStore
};
