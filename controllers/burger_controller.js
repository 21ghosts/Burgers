var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger.js");

router.get("/", function (req, res) {
    burgers.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.create([
        "name", "devoured"
    ], [
            req.body.burgers_name, req.body.devoured
        ], function () {
            res.redirect("/");
        });
});

router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    cat.update({
        sleepy: req.body.sleepy
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burgers.delete(condition, function () {
        res.redirect("/");
    });
});
// Export routes for server.js to use.
module.exports = router;