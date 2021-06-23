const express= require('express');
const MensRanking = require('../models/men');
const router = new express.Router();
// const MensRanking =require('../models/men');

router.get('/',(req,res)=>{
    res.send("Hello from router component");
});

router.post("/mens", async (req, res) => {
    try {
        const user = new MensRanking(req.body);
        const createUSer = await user.save();
        if (!createUSer)throw new Error('No List available');
        res.status(201).send(createUSer);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.route('/publish-review/').post( async (req, res) => {
    try {
        let {programCode, revsion} = req.body;
        let userId=1;

        let results = await programBackendDb.guiConfigurationPublishReviewCopy(userId,programCode);

        if (results && results.rows && results.rows.length){
            if (results.rows[0].func_gui_configurationpublishreviewcopy == true){
                return res.send({
                    status:'success',
                    programCode:programCode,
                    results:[]
                })
            }
        }
        return res.status(303).send({
            status:'failed',
            errorCode:'publish a review (Freeze) not accepted'
        })
    } catch(e) {
        return res.status(500).send({
            status:'failed',
            errorCode:e.message
        })
    }
})




router.get('/mens', async (req,res)=>{
    try {
        const menData = await MensRanking.find({}).sort({"ranking":1});
       res.send(menData);
        
    } catch (error) {
        res.status(400).send(error);
        }
});

router.get('/mens/:id', async (req,res)=>{
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findById(_id);
         res.send(getMen);      
    } catch (error) {
        res.status(400).send(error);        
    }
});

router.patch('/mens/:id', async (req,res)=>{
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
        if(!getMen) throw new Error('Someting went wrong');        
        res.send(getMen);        
    } catch (error) {
        res.status(400).send(error);        
    }
});

router.delete('/mens/:id', async (req,res)=>{
    try {
        const _id = req.params.id;
        const removed = await MensRanking.findByIdAndDelete(_id);
        if(!removed) throw new Error('Someting went wrong');
         res.status(200).send(removed);
        
    } catch (error) {
        res.status(400).send(error);
        
    }
});

module.exports = router;