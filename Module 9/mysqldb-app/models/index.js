"use strict";
const User = require("./user"); //require the model
const Post = require("./post"); //require the model
const Comment = require("./comment"); //require the model

async function init() {
  await User.sync(); //sync the model
  await Post.sync();
  await Comment.sync();
}

init();
module.exports = {
  User, Comment, Post //export the model
};
