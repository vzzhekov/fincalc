/**
 * Created by vzhekov on 8/12/2014.
 */

/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Present Value' });
};