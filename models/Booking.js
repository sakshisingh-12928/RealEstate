import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BookingSchema = new Schema({
    name: {type: String},
    Email : {type: String},
    mobileNo : {type : String},
    address : {type : String},
    check_in_date : {type : String},
    check_out_date : {type : String},
    TotalAmountUnit : {type : String},
    paymentStatus : {type : String},
    Bookingstatus : {type : String},
})
    
   
{ timestamps: true }; // Correct placement of timestamps

const Booking = model('Booking', BookingSchema);

export default Booking
 
