
var mongoose = require('mongoose');
   // user = require('users');
   var User=require('./users');
  // User = mongoose.model('User',userSchema) ;
mongoose.connect('mongodb://db_usr:db_pass@ds229008.mlab.com:29008/db_ringapp2018')
.then(
 () => {
         var newUser1 = new User({
             name: "Nimrod",
             age: 20,
             status: "A",
             group:["sports", "music" , "books"]
         });
         newUser1.save();      
     User.find({age:{$gt:10,$lt:29}, status:{$in:["A","B"]}},
    (err,user)=>{
        if(err) console.log(`query error: ${err}`);
        console.log(user);
    });
  },
  
 err => {
 console.log(`connection error: ${err}`);
 }
 );

 