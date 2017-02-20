// This is the file that we need to be specific with what we are looking for, where we are trying to send information to, etc. The ORM is the file that needs to be generic enough so that, it could be passed from project to project. If it helps you to think, you are not going to be able to change Sequelize, which is essentially what the ORM is in this application. This is the file that should be specific to the content regarding just this application, not ORM.JS.

var orm = require('../config/orm.js');
var burgerData = {
    //Here, we are going to be creating the selectAll function that fires when it hears a request from burgers_controller.js on this method. We are not going to be sending in any parameters here, just waiting for the callback. 
    selectAll: function(callBack){
       return orm.selectAll("burgers", function(res){
            callBack(res);
        });
    },

    // Here, we are going to be creating the insertOne function that fires when it hears a request from burgers_controller.js on this method. Just like before, we are going to be inserting one value, which is the burger_name, and we are going to set it up for a callBack to send that data back, once it hears from the ORM.js file. 
    insertOne: function(burger_name, callBack){
        //Here, we are going to pass in the table name, and pass in the column name, and the value that we are trying to pass in. In this case, we are passing in the burger_name column, and also adding the value of what burger_name is. 
        return orm.insertOne("burgers", {burger_name: burger_name}, function(res){
            callBack(res);
        });
    },

    //Here, we are going to be creating the updateOne function that fires when it hears a request from burgers_controller.js on this method. Just like before, we are going to be inserting one parameter, which is the ID, and we are going to set it up for a callBack to send that data back, once it hears from the ORM.js file. 
    updateOne: function(id, callBack){
        //Here, we are going to pass in the table name, set the value of devoured to true by passing in two values, the column name, and the value itself, and we are also passing in the 
        return orm.updateOne("burgers", {devoured: true}, {id: id}, function(res){
            callBack(res);
        });
    }
};

module.exports = burgerData;