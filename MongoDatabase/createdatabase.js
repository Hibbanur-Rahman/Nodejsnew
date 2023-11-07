var MongoClient= require('mongodb').MongoClient;
var url="mongodb://localhost:4500/MongoDatabse";
MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    console.log("Database created!");
    db.close();
})