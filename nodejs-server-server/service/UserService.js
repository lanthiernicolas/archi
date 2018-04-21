'use strict';



/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body User Created user object
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body.phone);
    var mysql = require('mysql');

    var mySqlClient = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "archibald"
    });
    var updateQuery = "INSERT INTO `user` ( `firstName`, `lastName`, `password`, `userStatus`, `phone`, `email`, `username`) VALUES ('"+body.firstName+"', '"+body.lastName+"', "+body.password+",'"+body.userStatus+"','"+body.phone+"', '"+body.email+"', '"+body.username+"')";
    mySqlClient.query(
      updateQuery,
      function select(error, results, fields) {
        if (error) {
          console.log(error);
          mySqlClient.end();
          return;
        }
        else{
          var examples = {};
        examples['application/json'] = {
      "OK" : "Ajout OK" 
     };             }
     });
     if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
})
}


/**
 * Creates list of users with given input array
 * 
 *
 * body List List of user object
 * no response value expected for this operation
 **/
exports.createUsersWithArrayInput = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Creates list of users with given input array
 * 
 *
 * body List List of user object
 * no response value expected for this operation
 **/
exports.createUsersWithListInput = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * username String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUser = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user by user name
 * 
 *
 * username String The name that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.getUserByName = function(username) {
  return new Promise(function(resolve, reject) {
    console.log(username);
    var mysql = require('mysql');

    var mySqlClient = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "archibald"
    });
    
    var selectQuery = "SELECT * FROM user where username = '" + username + "'";
 
    console.log(selectQuery);
    mySqlClient.query(
      selectQuery,
      function select(error, results, fields) {
        if (error) {
          console.log(error);
          mySqlClient.end();
          return;
        }
          
        if ( results.length > 0 )  { 
          var firstResult = results[ 0 ];
          console.log('email: ' + firstResult['email']);
          console.log('phone: ' + firstResult['phone']);
          var examples = {};
examples['application/json'] = {
"firstName" : firstResult['firstName'],
"lastName" : firstResult['lastName'],
"password" : firstResult['password'],
"userStatus" : firstResult['userStatus'],
"phone" :  firstResult['phone'],
"id" : firstResult['id'],
"email" : firstResult['email'],
"username" : firstResult['username']
};
        } else {
          console.log("Pas de données");
            var examples = {};
             examples['application/json'] = {
           "NO_DATA" : "Pas de données en base avec le username:" + username
          };             
        
        
        }

        if (Object.keys(examples).length > 0) {
          resolve(examples[Object.keys(examples)[0]]);
        } else {
          resolve();
        }
        mySqlClient.end();
      }
    );
    
    

    
  });
}


/**
 * Logs user into the system
 * 
 *
 * username String The user name for login
 * password String The password for login in clear text
 * returns String
 **/
exports.loginUser = function(username,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs out current logged in user session
 * 
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updated user
 * This can only be done by the logged in user.
 *
 * username String name that need to be updated
 * body User Updated user object
 * no response value expected for this operation
 **/
exports.updateUser = function(username,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

