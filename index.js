/*const app=require('./app');
console.log(app);*/


/*const fs=require('fs');
fs.writeFileSync("hello.txt","this is first file");
console.log(__dirname);
console.log(__filename);*/

// const http=require('http');
// http.createServer((req,res)=>{
//     res.write("hello this is my first server ever");
//     res.end();
// }).listen(4500);

/*const colors=require('colors');
console.log('hello'.red);*/


//creating api
/*const http=require('http');
const data=require('./data');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(4500);*/


//command line se argument pass karaana h
/*console.log(process)
console.log(process.argv)*/

//the output is
/* PS C:\Users\hibba\OneDrive\Documents\html\hibban\Node js> node .\index.js  
 [
   'C:\\Program Files\\nodejs\\node.exe',
   'C:\\Users\\hibba\\OneDrive\\Documents\\html\\hibban\\Node js\\index.js'
 ]*/


/*
PS C:\Users\hibba\OneDrive\Documents\html\hibban\Node js> node .\index.js hello hibban
[
 'C:\\Program Files\\nodejs\\node.exe',
 'C:\\Users\\hibba\\OneDrive\\Documents\\html\\hibban\\Node js\\index.js',
 'hello',
 'hibban'
]
*/

// console.log(process.argv[2]);
/*
PS C:\Users\hibba\OneDrive\Documents\html\hibban\Node js> node .\index.js hello hibban
hello
*/


//creating a file and remove the file using the command line argument
/*const fs=require('fs');
const input=process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}
else{
    console.log("the input is invalid");
}*/


//creating the files in the another directory in a loop
/*const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,"files");
console.log(dirPath);
for(var i=0;i<5;i++){
  fs.writeFileSync(`${dirPath}/hello${i}.txt`,`this is hello${i}`);
}*/


//creating the files in the another directory in a loop second apporoach
/*const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
fs.readdir(dirPath,(err,files)=>{
  console.log(files);
  files.forEach((items)=>{
    console.log(items)
  })
})*/

//read the files
/*const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,"files");
fs.readdir(dirPath,(err,files)=>{
    // console.log(files);
    files.forEach((item) => {
        console.log("this file is ",item);
    });
})*/



/*
//crud operations c(create),R(read),u(update) and d(delete)
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const exactPath = `${dirPath}/apple.txt`;

fs.writeFileSync(exactPath, "this is apple"); //create the file
//read the file
fs.readFile(exactPath, 'utf8', (err, files) => {
  console.log(files);
});

//update the file
fs.appendFile(exactPath," this is updated file and this apple.txt",(err)=>{
    if(!err){
      console.log("this is updated  file");
    }
})

//rename the file
fs.rename(exactPath,`${dirPath}/fruit.txt`,(err)=>{
    if(!err){
      console.log("this is renamed file");
    }
})*/


/*
//connection with database mysql
var  mysql= require('mysql');
var con =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root1',
    database:'hibban'
})

con.connect((err)=>{
  if(err) throw err;
    con.query('select * from student',(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
});*/



/*
//connection with database and the the response result on the server http
const http= require('http');
const mysql= require('mysql');
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root1',
    database:'hibban'
})
con.connect((err)=>{
  if(err) throw err;
  console.log("connected");
})

http.createServer((req,res)=>{
  res.writeHead(200,{'content-Type':'applicatio\json'});
  con.query('select * from student',(err,result)=>{
    if(err) throw err;
    res.write(JSON.stringify(result));
    res.end();
  })
}).listen(4500);
*/


/*
//os module functions
const os=require('os');
console.log(os.freemem());
console.log(os.arch());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.loadavg());
console.log(os.platform());
console.log(os.release());
console.log(os.totalmem());
console.log(os.type());
*/


// const http=require('http');
// http.createServer((req,res)=>{
//   if(req.url=='/api/data' && req.method=='GET'){
//     const responseData={
//       message:'Hello from backend!',
//       data:[1,2,3,4]
//     };
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.write(JSON.stringify(responseData));
//     res.end();
//   }
// }).listen(4500);


//handle the asynchronous data in nodejs
/*
let a=10;
let b=0;
let waitingData=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(30);
  },2000);
});

waitingData.then((data)=>{
  b=data;
  console.log(a+b);
})*/




//express.js 
//it is a web framework
//npm i express //it is for install express

/*const express=require('express');
const app=express();

app.get('',(req,res)=>{
  res.send(`<h1>this is home page</h1><a href="/about">go to about page</a>`);
})
app.get('/about',(req,res)=>{
  res.send([
    {
      name:'hibban',
      email:'hibban@gmail.com'
    },
    {
      name:'Raani',
      email:'raani@gmail.com'
    },
    {
      name:'baaji',
      email:'baaji@gmail.com'
    }

  ]);
})
app.get('/contact',(req,res)=>{
  res.send(`
    <input placeholder="name"/>
  `);
})

app.listen(8000);*/


//make Html Pages and render using express
/*const express=require('express');
const path=require('path');

const publicPath=path.join(__dirname,'public');
const app=express();

app.use(express.static(publicPath));
app.listen(80);*/




//remove extension from url
/*const express=require('express');
const path=require('path');

const publicPath=path.join(__dirname,'public');
const app=express();

app.get('/',(req,res)=>{
  res.sendFile(`${publicPath}/index.html`);
})
app.get('/help',(req,res)=>{
  res.sendFile(`${publicPath}/help.html`);
})
app.get('*',(req,res)=>{
  res.sendFile(`${publicPath}/pageNotFound.html`);
})
app.listen(5000);*/


//using the template engine we try to build dynamic web page using ejs
const express=require('express');
const path=require('path');

const publicPath=path.join(__dirname,'public');
const app=express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
  res.send(`${publicPath}/index.html`);
})
app.get('/profile',(req,res)=>{
  const user={
    name:'hibban',
    email:'hibban@gmail.com',
    skills:['php','c++','python','java']
  }
  res.render('profile',{user});
})

app.get('/login',(req,res)=>{
    res.render('login');
})
app.listen(5000);