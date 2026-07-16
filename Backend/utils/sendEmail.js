const { Resend } = require("resend");
console.log("RESEND KEY:", process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);

const sendOrderEmail = async (order) => {
    try {

        const items = order.items.map(item =>
            `• ${item.name} (Size: ${item.size}) x${item.quantity} - ₦${item.price.toLocaleString()}`
        ).join("\n");

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.OWNER_EMAIL,
            subject: "🛒 New Jersey Store Order",
            text: `
New Order Received

Customer: ${order.customerName}

Phone: ${order.phone}

Address:
${order.address}

Items:
${items}

Total: ₦${order.total.toLocaleString()}

Payment Method:
${order.paymentMethod}

Payment Status:
${order.paymentStatus}

Order Status:
${order.orderStatus}
            `
        });

        console.log("✅ Order email sent");

    } catch (error) {
        console.error("❌ Email Error:", error);
    }
};

module.exports = sendOrderEmail;