const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/user');
const Thought = require('./models/thought');

require('./database');

const app = express();
app.use(bodyParser.json());

//add a though

app.post('/thought', async (req, res) => {
    const thought = new Thought(req.body);
    try {
        await thought.save();
        res.status(201).send(thought);
    } catch (error) {
        res.status(400).send(error);
    }
});

//Get thoughts

app.get('/thoughts/:userId', async (req, res) => {
    try {
        const thoughts = await Thought.find({ user: req.params.userId });
        res.send(thoughts);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/thought/:thoughtId/reaction', async (req, res) => {
    const thought = await Thought.findById(req.params.thoughtId);
    thought.reactions.push(req.body);
    try {
        await thought.save();
        res.send(thought);
    } catch (error) {
        res.status(500).send(error);
    }
});