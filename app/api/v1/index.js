'use strict';

var express = require('express');
var lists = require('./list/listController');
var movies = require('./movie/movieController');
var helper = require('./helper/helperController');

var router = express.Router();

// Lists
router.get('/lists', lists.index);
router.get('/lists/:id', lists.show);
router.post('/lists/subscribe/', lists.subscribe);
router.post('/lists/unsubscribe/', lists.unsubscribe);

// Movies
router.get('/movies', movies.static);
// router.get('/movies/:date', lists.show); TODO

// Helper
router.get('/helper/lists-for-email/:email', helper.listsForEmail);

module.exports = router;
