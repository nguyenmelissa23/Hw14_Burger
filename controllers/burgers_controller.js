var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            devouredTrue: [], 
            devouredFalse: []
        };
        res.render("index", hbsObject);
    });

    burger.post("/addBurger", function(req,res){
        burger.create([
            "burger_name"
        ],[
            req.body.burger_name
        ], function(){
            res.redirect("/");
        });
    });

    burger.post("/devourBurger", function(req,res){
        burger.update({
            devour: true
        }, condition, function(){
            res.redirect("/");
        });
    });
})
