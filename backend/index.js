import express from 'express';
import mongoose from 'mongoose';
import { PORT } from './config.js';
import { mongoDBURL } from './config.js';
import bookRoute from './routes/bookRoute.js';
import cors from 'cors';


const app= express();

//Middleware for parsing request body
app.use(express.json());
//Middleware for handling cors policy
//option 1 :allow all originis with default of cors (*)
app.use(cors());

//option 2 : allow custom origins 
//app.use(
  //      cors({
    //            origin:'http://localhost:5555',
      //          methods:['GET', 'POST','PUT ', 'DELETE'],
        //        allowedHeaders:['content-type'], 
        //})
//)

app.get('/',(request,response) => {
        console.log(request);
        return response.status(234).send("harbi weld el coba");
})

app.use('/books',bookRoute);




mongoose.connect(mongoDBURL)
        .then(()=>{
                console.log('Connected to MongoDB...');
                app.listen(PORT,()=>{
                        console.log(`Server is running at http://localhost:${PORT}`);
                });
        })
              
        .catch((err)=>{
                console.error('Could not connect to MongoDB',err);
        } );






