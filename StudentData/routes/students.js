var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next){
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

var data = {
   "students" : [{
      "name" : "mahesh",
      "subject" : ["Tamil","English","Maths","Science"],
      "class" : "v",
      "id": 1001
   },
    {
      "name" : "suresh",
      "subject" : ["Tamil","English","Maths","Science"],
      "class" : "vi",
      "id": 1002
   },
   {
      "name" : "ramesh",
      "subject" : ["Tamil","English","Maths","Science"],
      "class" : "vii",
      "id": 1003
   }]
};

res.json(data);

});

module.exports = router;