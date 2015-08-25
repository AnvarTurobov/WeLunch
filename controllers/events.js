var passport = require("passport");
var express = require('express');
var router = express.Router();
var jwtauth = require('../config/jwtauth.js');
var User = require('../models/user');
var Event = require('../models/event');
module.exports = router;


// POST - NEW EVENT 
router.post('/', function (req, res){
  Event.create(req.body, function (err){
    if (err) res.send(err)
    res.send({status: 201 });
  })
});

// INDEX - EVENTs
router.get('/', function (req, res) {
  Event.find(function (err,events) {
    if(err) res.send(err);
    res.json(events);
  })
})

<<<<<<< HEAD

router.get('/',jwtauth, function(req, res) {
  Event.find(function(err, events) {
    if (err) res.send(err);
=======
router.get('/', function(req, res) {
  Event.find({}, function(err, events) {
    if (err)
      res.send(err);
>>>>>>> e1851dc51fecd81f33af842305a67b2b5813b676

    res.json(events);
  });
});

router.get('/showpage', function (req,res) {
  res.render('show_event.ejs')
})
<<<<<<< HEAD
// GET - EVENT SHOW
router.get('/:id', jwtauth, function (req, res) {
  Event.findById(req.params.id, function (err, event) {
=======
/*// GET - EVENT SHOW
router.get('/:id', function (req, res) {
  Event.findById(req.params.id, function (err, user) {
>>>>>>> e1851dc51fecd81f33af842305a67b2b5813b676
    if (err) res.send(err);
      if(event){
        return res.json(event);
      } else{
        res.json({ message: 'Event not found' });
      }
    });
});
*/

// POST - EVENT CREATE
router.post(function(req, res) {
 Event.create(req.body, function (err,event) {
  if (err) res.send(err);
  res.json({ message: 'Event has been successfuly saved', event: event})
}) 
});


// GET - NEW
router.get('/new', function (req,res) {
  res.render('create_event.ejs');
});

router.get('/events', function (req,res) {
  res.render('');
});


// PUT - EVENT UPDATE
router.put('/:id', function(req, res){
  Event.findByIdAndUpdate(req.params.id,req.body, function (err, event) {
    res.json({ message: "Event has been successfuly updated", event: event})
  });
});

