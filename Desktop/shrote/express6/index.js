var express = require('express');
app = express();
port = process.env.port || 3000;
app.listen(port);

app.use('/assets',express.static(`${__dirname}/public`));



app.get('/playmusic/:music_id',(req,res)=>{

  res.send(`<!doctype html><html>
  <head><title></title>
  </head>
  <body> 
  <h1>  ${req.params.music_id} </h1>
  </body>
  </html>`);

});

app.post('/savemusic/:songs',(req,res)=>{
    var un=req.body.songs;
    console.log($body)
   res.json({un:un});
});

app.put('/product',(req,res)=>{

  res.json({page:'product'})
});


console.log('listening on port ${port}');