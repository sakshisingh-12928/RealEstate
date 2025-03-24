import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const LeaseSchema = new Schema({
    name: {type: String},
    Email : {type: String},
    mobileNo : {type : String},
    address : {type : String},
    LeaseDateStart : {type : String},
    LeaseEndDate : {type : String},
    MonthlyRent : {type : String},
    SecurityDeposit : {type : String},
    PaymentStatus : {type : String},
    LeaseStatus : {type : String},
})
    
   
{ timestamps: true }; // Correct placement of timestamps

const Lease = model('Lease', LeaseSchema);

export default Lease
 
