var mongoose = require("mongoose");

let post = require("../models/posts.modl");
const User = require("../models/user");
const Agency = require("../models/travelAgency");
const Transorts = require("../models/trans_type");

exports.createNewPost = async function (req, res) {
  //   let newDoc = await post.create({
  //     title: "new Post",
  //     content: "test post",
  //     numberOfLikes: 55
  //   });

  let newDoc = await post.create(req.body);

  var result = await post.findById(newDoc._id);
  console.log(result);

  res.status(201).json(result);
};

exports.fetchAllPosts = async function (req, res) {
  let allDocs = await post.find().populate("user");
  return res.status(201).json(allDocs);
};

exports.createNewUser = async function (req, res) {
  if (!req.body.name)
    return res.status(422).json({ mg: "plz i need your name" });

  let newDoc = await User.create(req.body);

  var result = await User.findById(newDoc._id);
  console.log(result);

  res.status(201).json(result);
};

exports.fetchAlluser = async function (req, res) {
  let allDocs = await User.find();
  return res.status(200).json(allDocs);
};

exports.createNewAgency = async function (req, res) {
  //if(!req.body.name) return res.status(422).json({"mg" : "plz i need your name"});

  let newDoc = await Agency.create(req.body);
  console.log(req.body);
  var result = await Agency.findById(newDoc._id);
  console.log(result);

  res.status(201).json(result);
};

exports.createNewTrans = async function (req, res) {
  //if(!req.body.name) return res.status(422).json({"mg" : "plz i need your name"});

  let newDoc = await Transorts.create(req.body);
  console.log(req.body);
  var result = await Transorts.findById(newDoc._id);
  console.log(result);

  res.status(201).json(result);
};
