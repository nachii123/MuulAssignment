cube(`DataTable`, {
    sql: `SELECT * FROM data_table`,  
    measures: {
      count: {
        type: `count`,
        drillMembers: [name, timestamp]
      },
      totalValue: {
        sql: `value`,
        type: `sum`
      }
    },    dimensions: {
      id: {
        sql: `id`,
        type: `number`,
        primaryKey: true
      },
      name: {
        sql: `name`,
        type: `string`
      },
      timestamp: {
        sql: `timestamp`,
        type: `time`
      }
    }
  });  