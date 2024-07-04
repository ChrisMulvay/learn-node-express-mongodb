module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorials.create);

    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);

    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial by id
    router.get("/:id", tutorials.findOne);

    // Update a Tutorial by id
    router.put("/:id", tutorials.update);

    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials', router);
};

/**
 * We use a common controller from "/controllers/tutorial.controller.js"
 * We also need to include routes in "server.js" right before "app.listen()"
 *    require("./app/routes/tutorial.routes")(app);
 */