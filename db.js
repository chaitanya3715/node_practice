const mongoose = require ('mongoose');

// define mongodb connection url
const mongoURL= 'mongodb://localhost:27017/camdb'

//setup mongodb connection 
mongoose.connect(mongoURL
//     ,{
// //   useNewUrlParser:true,
// //   useUnifiedTopology:true
// }
);

// Get default connection object
//Mongoose maintains a default conncetion object representing the mongo connection 

const db= mongoose.connection;

db.on('connected',()=>{
    console.log('connected to MongoDB Server'); 
})

db.on('error',(err)=>{
    console.error('Error in Connection MongoDB Server',err); 
})

db.on('disconnected',()=>{
    console.log('Disconnected MongoDB Server'); 
})

// export db connection 
module.exports =db; 