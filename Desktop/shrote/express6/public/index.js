var express = require('express');
  app = express();
 port = process.env.port || 3000;
 app.listen(port);

app.use('/assets',express.static(`${__dirname}/public`));



 app.get('/myprofile',(req,res)=>{

    res.send(`<!doctype html><html>
    <head><title></title>
    <link href=assets/style.css rel=stylesheet></head>
    <body> 
    <h1>balia </h1>
    </body>
    </html>`);

 });

 app.post('/category',(req,res)=>{
     res.json({page:'catagory'})
 });

 app.put('/product',(req,res)=>{
    res.json({page:'product'})
});

 console.log('listening on port ${port}');