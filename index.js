const express = require(`express`);
const app = express();

app.get('/', (req, res)=>{
  res.send("Home sweet home");
});

app.listen(()=>{
 console.log(`hola node`)
});