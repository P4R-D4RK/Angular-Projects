express = require('express');

const app = express();

const port = 3000;

// Routes
app.use( '/api/auth', require('./routes/auth') )


app.listen(port, () => {
    console.log(`Server running on the port ${port}`);
})