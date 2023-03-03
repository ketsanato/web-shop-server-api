const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();


const port = process.env.PORT;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


const conn = require('./connect/mongodb');

const authRouters =require('./routers/auth.routers');
const cookiesRouters =require('./routers/cookies.routers');
const userTypeRouters =require('./routers/usertype.routers');
const usersRouters =require('./routers/users.routers');

app.use("/api",authRouters);
app.use("/api",cookiesRouters);
app.use("/api",userTypeRouters);
app.use("/api",usersRouters);


app.get('/api/server-time',(req,res)=>{
    const now= new Date();
    const time = {
        hour:now.getHours(),
        minute:now.getMinutes(),
        second:now.getSeconds()
    }
    res.json(time)
})

app.get('/',(req,res)=>{

    res.send('This is Server');

}
)


app.listen(port,()=>{

    console.log('Server listenting on port' + port);
})



exports.app=app