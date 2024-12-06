const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { Server } = require('socket.io'); // Import Socket.IO
const http = require('http'); // Required to attach Socket.IO to server
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, { cors: { origin: '*' } }); // Attach Socket.IO
const uri = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());



mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.error('Connection failed:', err));

// Schema and Model
const messageSchema = new mongoose.Schema({
  name: String,
  text: String,
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

// REST API to fetch messages
app.get('/messages', async (req, res) => {
  const messages = await Message.find().sort({ timestamp: 1 });
  res.json(messages);
  console.log("messgaes is accessed")
});

// REST API to post a new message
app.post('/messages', async (req, res) => {
  const { name, text } = req.body;
  const newMessage = await Message.create({ name, text });

  // Emit the new message to all connected clients
  io.emit('newMessage', newMessage);

  res.status(201).json(newMessage);
});

// Socket.IO Connection
io.on('connection', (socket) => {

  // Handle disconnection
  socket.on('disconnect', () => {
  });
});

// Start the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
