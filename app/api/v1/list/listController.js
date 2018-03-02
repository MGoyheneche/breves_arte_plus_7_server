'use strict';
var mcapi = require('mailchimp-api');
var mc = new mcapi.Mailchimp(process.env.MC_API_KEY);

exports.index = function (req, res) {
  mc.lists.list({}, function(data) {
    res.send(data);
  });
};

exports.show = function (req, res){
  mc.lists.list({filters:{list_id: req.params.id}}, function(data) {
    res.send(data)
  }, function(error) {
    res.send(error)
  });
};

exports.subscribe = function (req, res){
  console.log("subscribe");
  console.log(req.body);
  mc.lists.subscribe({id: process.env.MAILCHIMP_LIST_ID_BREVES_ARTE_PLUS_7_DAILY, email: {email: req.body.email}}, function(data) {
    res.send(data)
  }, function(error) {
    res.send(error)
  });
};

exports.unsubscribe = function (req, res){
  console.log("unsubscribe");
  console.log(req.body);
  mc.lists.unsubscribe({id: process.env.MAILCHIMP_LIST_ID_BREVES_ARTE_PLUS_7_DAILY, email: {email: req.body.email}}, function(data) {
    res.send(data)
  }, function(error) {
    res.send(error)
  });
};
