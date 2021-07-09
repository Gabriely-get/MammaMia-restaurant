export default  {
    development: {
      client: 'sqlite3',
      connection: {
        filename: 'src/database/dev.sqlite'
      },
      migrations: {
          directory: 'src/database/migrations'
      },
      seeds: {
          directory: 'src/database/seeds'
      },
      useNullAsDefault: true
    }
  };
  