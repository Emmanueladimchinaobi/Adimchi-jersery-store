const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    items: [
        {
            name: String,
            size: String,
            quantity: Number,
            price: Number,
            image: String
        }
    ],

    total: {
        type: Number,
        required: true
    },

    paymentMethod: {
        type: String,
        default: "Bank Transfer"
    },

    paymentStatus: {
        type: String,
        default: "Pending"
    },

    orderStatus: {
        type: String,
        default: "Pending"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Order", orderSchema);