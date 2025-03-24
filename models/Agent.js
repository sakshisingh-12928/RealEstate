import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const AgentSchema = new Schema({
    name: {type: String},
    Email : {type: String},
    mobileNo : {type : String},
    address : {type : String},
    licenseNo : {type : String},
    experience : {type : String},
    commisionRate : {type : String},
    status : {type : String}
})
    
   
 { timestamps: true }; // Correct placement of timestamps

const Agent = model('Agent', AgentSchema);

export default Agent;
