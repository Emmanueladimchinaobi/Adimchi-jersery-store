const sendOrderEmail = require("../utils/sendEmail");
const Order = require("../models/Order");

// Create Order
exports.createOrder = async (req, res) => {

    try {

        const order = await Order.create(req.body);

        await sendOrderEmail(order);

        res.status(201).json(order);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Orders
exports.getOrders = async (req, res) => {

    try {

        const orders = await Order.find().sort({
            createdAt: -1
        });

        res.json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};