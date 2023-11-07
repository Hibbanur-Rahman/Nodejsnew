const http=require('http');
http.createServer((req,res)=>{
  if(req.url=='/api/data' && req.method=='GET'){
    const responseData={
      message:'Hello from backend!',
      data:[1,2,3,4]
    };
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(responseData));
    res.end();
  }
}).listen(8000);