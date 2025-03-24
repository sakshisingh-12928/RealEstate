import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const FinanceSchema = new Schema({
    name: {type: String},
    Amount : {type: String},
    transactionType : {type: String},
    category : {type: String},
    paymentMode : {type: String},
    transactionDate : {type: String},
    status : {type: String},
})
    
   
{ timestamps: true }; // Correct placement of timestamps

const Finance = model('Finance', FinanceSchema);

export default Finance
    