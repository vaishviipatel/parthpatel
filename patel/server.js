import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ limit: '10kb' }));

app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:5173',
    'http://localhost:3000',
  ],
  methods: ['POST'],
  credentials: true
}));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { success: false, message: 'Too many requests, please try again later.' },
});

app.use('/api/contact', contactLimiter);

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: { rejectUnauthorized: false },
  debug: true,
  logger: true
});

transporter.verify((error) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email server is ready');
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ success: false, message: 'Please fill all fields' });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio - ${name.trim()}" <${process.env.EMAIL_USER}>`,
      to: 'parthpatelap1100@gmail.com',
      replyTo: email.trim(),
      subject: `New message from ${name.trim()}`,
      text: message.trim(),
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; line-height: 1.6;">
          <h2 style="color: #2563eb; margin-bottom: 16px;">New Contact Message</h2>
          
          <p><strong>From:</strong> ${name.trim()} (${email.trim()})</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          
          <div style="white-space: pre-wrap; background: #f9fafb; padding: 16px; border-radius: 8px;">
            ${message.trim().replace(/\n/g, '<br>')}
          </div>
        </div>
      `
    });

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Email error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});