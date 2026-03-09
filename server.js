const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the /public directory
app.use(express.static(path.join(__dirname, 'public')));

// Contact form API endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // Validate request
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }
    
    // Simulate processing the message (e.g., saving to DB or sending email)
    console.log(`\n--- New Contact Form Submission ---`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log(`-----------------------------------\n`);
    
    // Send JSON success response
    res.status(200).json({
        success: true,
        message: "Message received"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
