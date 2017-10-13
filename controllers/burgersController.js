var express = require("express");

var router = express.Router();

//will import the Sequelize models
var db = require("../models/");


// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  db.Burger.findAll()
    .then(function(dbBurger){
      console.log("dbBurger");
      //send burger to handlebars
      var hbsObject = { burger: dbBurger };
      return res.render("index", hbsObject);
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // creating a burger
  db.Burger.create({
    burger_name: req.body.burger_name
  })
  .then(function(dbBurger) {
    console.log(dbBurger);
    res.redirect("/");
  });
});

// route to eat burger and update 
router.put("/burgers/update", function(req, res) {
  db.Burger.update({
    devoured: true
  },
    {
      where: {
        id: req.body.burger_id
      }
    }
  ).then(function(dbBurger){
    res.redirect("/");
  });
});

module.exports = router;
