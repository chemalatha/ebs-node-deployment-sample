const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello wordl!!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('App running on 3000 port...');
})