const exerciseModel = require('./Model/exercise');
const mongoose = require('mongoose');
const post = async (req, res) => {
    const exercise = new exerciseModel(req.body);
  
    try {
      await exercise.save();
      res.send(exercise);
    } catch (error) {
      res.status(500).send(error);
    }
}

const get = async (req, res) => {
  const exercise = await exerciseModel.find({});

  try {
    res.send(exercise);
  } catch (error) {
    res.status(500).send(error);
  }
}

const put =  async (req, res) => {
    
    const exercise = await exerciseModel.findByIdAndUpdate({_id:req.params.id},{...req.body})
    try {
    res.send(exercise);
  } catch (error) {
    res.status(500).send(error);
  }
}

const del = async(req, res) => {
    const exercise = await exerciseModel.findByIdAndDelete(req.params.id)
    try {
    res.send(exercise);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
    post,
    get,
    put,
    del
}
