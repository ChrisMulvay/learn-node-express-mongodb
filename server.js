const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Chris's application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/**
 * What the above code does
 * -------------------------
 * 
 * Imports the express and cors modules contained within the "node_modules" directory.
 *  - Express is a framework for building a REST API on a Node.js Server.
 *  - Cors is a node package for providing a Connect/Express middleware that can be used to enable CORS with various options.
 * 
 * We create an Express app adding CORS middleware using the 'app.use()' method weher we set the origin to http://localhost:8081.
 * Next we defined a simple GET Route for testing.
 * The server is setup to listen on PORT 8080 for incoming requests.
 * 
 *  - To run the server in a terminal type:  node server.js
 *  - Next open a tab on your browser and visit http://localhost:8080 to view the message.
 *  - To STOP the server running in the terminal Ctrl + c.
 */