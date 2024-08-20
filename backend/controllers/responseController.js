
const Response = require('../models/Response');

exports.saveResponse = async (req, res) => {
  try {
    const newResponse = new Response({
      answers: req.body.answers,
    });
    await newResponse.save();
    res.status(201).json({ message: 'Response saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getResponses = async (req, res) => {
  try {
    const responses = await Response.find();
    res.status(200).json(responses);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
