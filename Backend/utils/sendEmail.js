const { Resend } = require("resend");
console.log("RESEND KEY:", process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);

const sendOrderEmail = async (order) => {
    console.log("📨 Sending email for order:", order.customerName);

    try {
        const result = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.OWNER_EMAIL,
            subject: "🛒 New Jersey Store Order",
            text: `New order from ${order.customerName}`
        });

        console.log("✅ Resend response:", result);

    } catch (error) {
        console.error("❌ Email Error:", error);
    }
};

module.exports = sendOrderEmail;