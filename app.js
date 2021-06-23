const express= require('express');
const app = express();
const port = process.env.PORT || 3003;
require("./src/db/conn");
const mensRouting = require('./src/routers/mensRouting');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
const dataFile = require("./src/data.json")

app.use(cors())
app.use(bodyParser.json());
app.use(mensRouting);

app.get('/data1',(req,res)=>{
    var info= dataFile.friends;
    res.send(info);
})

app.get('/data', async ( req, res ) => {
    try {

         let  programcode  = 'AAATestProg';
        let results = await dataFile.deliveries(programcode);
                  
        return res.send( {
            status: 'success',
            programCode: programcode,
             results
        } );
    } catch ( e ) {
        let v = `get programcompanycontact ${ e.message }`;
        logger.error( v );
        return res.status( 500 ).send( {
            status: 'failed',
            errorCode: e.message
        } )
    }
} );



app.listen(port,()=>{
    console.log(`Connection on Port: ${port} is successful`);
})

