var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Page = require('../models/page.js');
var adminUser = require('../models/admin-users.js');


router.get('/', function(req, res){
    res.send('wwwwwww');
});

router.get('/pages', function(req, res){
    return Page.find(function(err, pages){
        if(!err){
            return res.send(pages);
        }
        else{
            return res.send(500, err);
        }
    })
});


router.post('/pages/add', function(req, res){
    var page = new Page({
        title: req.body.title,
        url: req.body.url,
        content: req.body.content,
        menuIndex: req.body.menuIndex,
        date: new Date(Date.now())
    });

    page.save(function(err){
        if(!err){
            return res.send(200, page);
        }
        else{
            return res.send(500, err);
        }
    });
});

module.exports = router;
