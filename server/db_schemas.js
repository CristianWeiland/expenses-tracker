module.exports = function(conn) {
  const tables = [
    // `drop table EXPENSES`,
    `CREATE TABLE IF NOT EXISTS EXPENSES (
      id INT NOT NULL AUTO_INCREMENT,
      category VARCHAR(63),
      value FLOAT,
      completed TINYINT(1),
      due_date DATETIME,
      completed_at DATETIME,
      description TEXT,
      created_at DATETIME,
      updated_at DATETIME,
      deleted_at DATETIME,
      PRIMARY KEY (ID)
    )`,
    `CREATE TABLE IF NOT EXISTS USERS (
      id INT NOT NULL AUTO_INCREMENT,
      first_name TEXT,
      last_name TEXT,
      gender ENUM('m','f'),
      age INT,
      birth_date DATE,
      created_at DATETIME,
      updated_at DATETIME,
      deleted_at DATETIME,
      PRIMARY KEY (ID)
    )`
  ];

  tables.forEach((createTable) => {
    conn.query(createTable, function (error, results, fields) {
      if (error) throw error;
    });
  });
}