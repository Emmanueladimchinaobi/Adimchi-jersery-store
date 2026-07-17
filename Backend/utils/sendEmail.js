const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendOrderEmail = async (order) => {
    console.log("📨 Sending email for order:", order.customerName);

    try {

        const items = order.items.map(item =>
            `• ${item.name}
   Size: ${item.size}
   Quantity: ${item.quantity}
   Price: ₦${item.price.toLocaleString()}`
        ).join("\n\n");

        const result = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.OWNER_EMAIL,
            subject: "🛒 New Jersey Store Order",
            text: `
NEW ORDER RECEIVED

Customer:
${order.customerName}

Phone:
${order.phone}

Address:
${order.address}

----------------------------------

ITEMS

${items}

----------------------------------

Total:
₦${order.total.toLocaleString()}

Payment Method:
${order.paymentMethod}

Payment Status:
${order.paymentStatus || "Pending"}

Order Status:
${order.orderStatus || "Pending"}

----------------------------------

Order Time:
${new Date(order.createdAt || Date.now()).toLocaleString()}
`
        });

        console.log("✅ Resend response:", result);

    } catch (error) {
        console.error("❌ Email Error:", error);
    }
};

module.exports = sendOrderEmail;