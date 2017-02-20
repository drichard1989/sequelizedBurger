// Here, we are requiring our burger.js file, which is in the models folder. In practice, we have built routes in this file that call on functions in burger.js that feed into our ORM functions to interact with our database when the route is called. 
var burgerData = require('../models/burger.js');

module.exports = function (app){
    //Here, we are creating the route to retrieve all of the burgers in the DB. The function that we are creating here will take in a request from the user, but will actually not send any parameters from the user specifically since we want all of the data. We are just going to grab all of the data from the database when the user visits the home page, and we are going to use handlebars to display all of that data on the webpage. 
    app.get("/", function (request, response){
        burgerData.selectAll(function(data){
            var burgerObj = {
                burgers: data
            };
            response.render("index", burgerObj);
        });
    });

// Here, we are going to construct the route to post a new burger to the DB. The form field only will take in the burger name, and since I have set up the database to auto increment the ID as usual, and also, by default, set the devoured value to false, we do not need to pass in either of those pieces of information. I just need to pass in the name of the burger, and I need to grab the column that I want to post that in, which is burger_name, when I make that post.
    app.post("/", function(request, response){
        //Here, we are going to be setting up the post route to listen for a request, and in this function, send this data using the insertOne method, through to the burgers.js file. After that, we are going to write a function that returns the response that the client is expecting.
        // console.log(request.body);
        burgerData.insertOne(request.body.burger_name, function(data){
            // Since we passed in the burger name, for this application, the burgers are going to be displayed on the home page once the data has been added to the database. I don't think I need to use that information here, so I am going to re-direct them to the home page. 
            //Once the burgerData function has all the data it needs, it is going to send the data here, which is the response. We are waiting for a response, and once it occurs, we redirect them to the home page.
            response.redirect("/");
        });
    });

// Here, we are going to contruct a route that allows us to update the devoured status to true. In order to do this, we are going to need to grab the data by the unique identifyer, (ID), and change it from false, to true. We are going to need to grab the row name, grab the column name, and change the value from false to true.  
// Note: In order to test this route in POSTMAN, we need to do the following settings in POSTMAN: Select POST, change our url to http://localhost:3000/?_method=put , change the body content to x-www-form-urlencoded, and place our id and id that you want to select as the key and the value. 
    app.put("/", function (request, response){
        // Here, we are going to be setting up the put route to listen for a request, and in this function, send this data using the updateOne method, through to the burgers.js file. After that, we are going to write a function that returns the response that the client is expecting. 
        burgerData.updateOne(request.body.id, function (data){

            //Since we passed in the id, for this application, the burgers are going to be moved on the homepage from one column to the next once the status of devoured has been changed in the database. I don't think I need to use that information specifically here. 
            response.redirect("/");
        });
    });

};