const Transaction = require('../models/Transactions');

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
const getTransactions=async(req,res)=>{
// res.status(200).send('GET TRANSACTIONS');

try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }}

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
const deleteTransactions=(req,res)=>{
res.status(200).send('DELETE TRANSACTIONS');
}

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
const addTransactions=(req,res)=>{
res.status(200).send('ADD TRANSACTIONS');
}



module.exports={getTransactions,deleteTransactions,addTransactions};