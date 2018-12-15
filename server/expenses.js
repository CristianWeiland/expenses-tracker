module.exports = function(app, conn) {
  app.get('/expenses', function (req, res) {
    const query = `SELECT id, category, description, value, completed, completed_at, due_date
      FROM EXPENSES
      WHERE deleted_at IS NULL`;

    conn.query(query, function (error, results, fields) {
        if (error) {
          console.log(error);
          throw error;
          return;
        }
        res.status(200).send(results);
    });
  });

  app.post('/expense', function (req, res) {
    const data = req.body.data;
    const dateCol = data.paid ? 'completed_at' : 'due_date';
    console.log(data);

    const insert = `INSERT INTO EXPENSES(category, value, completed, ${dateCol}, description, created_at)
    VALUES (?, ?, ?, NOW(), ?, NOW())`;
    conn.query(insert,
      [data.category, data.value, data.paid, data.description],
      function (error, results, fields) {
        if (error) {
          console.log(error);
          throw error;
          return;
        }
        res.status(200).send('Expense saved successfully!');
    });
  });
}
