var connection = require('./connection.js');
var mysql = require('mysql');
// Here, we are creating an ORM, which refers to Object Relational Mapping, where are setting up the ORM to interact with our Database using an object that contains functions and queries. The function fires when it receives information, takes those perameters, and sends them into the query, which interacts with the database depending on the objective.   
// Remember, ?? is looking for a tablename or a colname, ? is looking for a value.
var orm = {
    //Here, we are taking two parameters, and using them later on in the function. 
    selectAll: function (tableName, callBack){
        //Here, we define our query string so that it takes in the parameters that we are about to establish in connection.query. 
        var queryString = 'SELECT * FROM ??;' ;
        //HEre, we call queryString, and we pass in the tableName as an array, since that's what it requres, and then we pass in a function that returns the result after the query is called. 
        connection.query(queryString, [tableName], function(error, result){
            if(error){
                throw error;
            }
            callBack(result);
        });
    },
     //Here, we are taking in a tableName parameter, which is a string, and a values parameter, which is an object property, which we will pass in as an array. 
    insertOne: function(tableName, values, callBack){
        // Here we are creating our queryString, where we are going to insert the tableName in the first value ??, and then we are going to look at the burger_name column and insert the burger_name into it. Since in the mysql code we are auto-incrementing the id, auto-setting the devoured value to false, and automatically adding a time-stamp, we do not need to insert any other value in this application.  
        var queryString = 'INSERT INTO ?? SET ?;';
        connection.query(queryString, [tableName, values], function (error, result){
            if(error){
                throw error;
            }
            callBack(result);
        });
    },
 
    // Here, we are taking in a tableName string, a values object, and a where object, and a callBack function. 
    updateOne: function (tableName, values, where, callBack){
        //Here, we are going to set the querystring to update the tableName Set the values and select to to this where the id is = to what we pass in. 
        var queryString = 'UPDATE ?? SET ? WHERE ?;';
        //Here, we are calling our queryString, pass in the tableName column selector with the column name, the value column devoured, set it to true, and do this where the id = the id that we pass in. 
        connection.query(queryString, [tableName, values, where], function (error, result){
            if(error){
                throw error;
            }
            callBack(result);
        });
    }

};

module.exports = orm;