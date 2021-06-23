const mongoose =require ('mongoose');

const mongouri = 'mongodb+srv://admin:admin123@cluster0.puyt2.mongodb.net?retryWrites=true&w=majority';

mongoose.connect(mongouri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("No connection")
});

