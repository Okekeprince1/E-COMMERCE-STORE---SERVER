import mongoose, { Schema } from 'mongoose';

const AddressSchema = new Schema ({
    street: { 
        type: String, 
        required: true,
    },
    aptNum: String,
    postalCode : {
        type: String,
        required: true,
        maxlength: 6,
    },
    city: { 
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true,
    },
    geo: {
        type: { type: String },
        coords: [Number],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    instructions: {
        type: String
    }
}, { timestamps: true })

export default mongoose.model('Address', AddressSchema);