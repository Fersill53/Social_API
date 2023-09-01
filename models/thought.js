const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    user: mongoose.Schema.Types.ObjectId, // reference to user ID
    content: String,
    reactions: [{ type: String, username: String }],
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Thought', thoughtSchema);