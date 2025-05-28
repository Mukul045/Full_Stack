    const express = require('express');
    const app = express();
    const port = 3000;

    // Set EJS as the view engine
    app.set('view engine', 'ejs');

    // Define a route to render an EJS template
    app.get('/', (req, res) => {
      // Data to pass to the template
      const data = {
        title: 'My Express App',
        message: 'Hello, EJS!'
      };
      // Render the 'index' template with the provided data
      res.render('index', data);
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });