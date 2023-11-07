var  mysql= require('mysql');
var con =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root1',
    database:'hibban'
})

con.connect((err)=>{
    if(err) {
        throw new err;
    }
    con.createQuery('select * from student',(err,result)=>{
        if(err) throw new err;
        console.log(result);
    });
});