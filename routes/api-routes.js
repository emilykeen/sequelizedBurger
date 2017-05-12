var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/", function(req, res) {
    db.Burgers.findAll({})
    .then(function(dbsequelizeBurger) {
      res.json(dbsequelizeBurger);
    });
  });


  // POST route for saving a new post
  app.post("/", function(req, res) {
    console.log(req.body);
    db.Burgers.create({
      burger_name: req.body,
      devoured:false
    })
    .then(function(dbsequelizeBurger) {
      res.json(dbsequelizeBurger);
    });
  });

  // PUT route for updating posts
  app.put("/:id", function(req, res) {
    db.Burgers.update({devoured:true},
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbsequelizeBurger) {
      res.json(dbsequelizeBurger);
    });
  });
};
