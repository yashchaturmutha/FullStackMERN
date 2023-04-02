const express = require('express');
const router = express.Router();
const {getTransactions,deleteTransactions,addTransactions}=require('../controllers/transactions');

// router.get('/',(req,res)=>{
//     console.log("Get");
//     res.status(200).send("Hello");
// });

router.get('/',getTransactions);
router.delete('/:id',deleteTransactions);
router.post('/',addTransactions);

module.exports=router;