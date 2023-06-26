const app=require('./app');
console.log(app);


const fs=require('fs');
// fs.writeFileSync("hello.txt","this is first file");
console.log(__dirname);
console.log(__filename);

// const http=require('http');
// http.createServer((req,res)=>{
//     res.write("hello this is my first server ever");
//     res.end();
// }).listen(4500);

const colors=require('colors');
console.log('hello'.red);