module.exports = function(app) {
  app.get('/expense', function (req, res) {
    res.send('Hello World Expense!');
  });

  app.post('/expense', function (req, res) {
    console.log(req.body.data);
    // TODO: database
    res.send('Expense saved successfully!', 201);
  });
}