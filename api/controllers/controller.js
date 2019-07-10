'use strict';
const mongoose = require('mongoose');
const Widgets = mongoose.model('Widgets');
const Data = mongoose.model('Data');
const Info = mongoose.model('Info');

exports.listAllWidgets = function(req, res) {
  Widgets.find({}, function(err, widget) {
    if (err)
      res.send(err);
    res.json(widget);
  });
};

exports.createWidget = function(req, res) {
  const newWidget = new Widgets(req.body);
  newWidget.save(function(err, widget) {
    if (err)
      res.send(err);
    res.json(widget);
  });
};

exports.readWidget = function(req, res) {
  Widgets.findById(req.params.widgetId, function(err, widget) {
    if (err)
      res.send(err);
    res.json(widget);
  });
};

exports.updateWidget = function(req, res) {
  Widgets.findOneAndUpdate({_id: req.params.widgetId}, req.body, {new: true}, function(err, widget) {
    if (err)
      res.send(err);
    res.json(widget);
  });
};

exports.deleteWidget = function(req, res) {
  Widgets.remove({
    _id: req.params.widgetId
  }, function(err, widget) {
    if (err)
      res.send(err);
    res.json({ message: 'Widget successfully deleted!' });
  });
};

exports.listAllData = function(req, res) {
    Data.find({}, function(err, data) {
    if (err)
        res.send(err);
      res.json(data);
    });
};
  
exports.createData = function(req, res) {
    const newData = new Widgets(req.body);
    newData.save(function(err, data) {
    if (err)
        res.send(err);
      res.json(data);
    });
};
  
exports.readData = function(req, res) {
    Data.findById(req.params.dataId, function(err, data) {
    if (err)
        res.send(err);
      res.json(data);
    });
};
  
exports.updateData = function(req, res) {
    Data.findOneAndUpdate({_id: req.params.dataId}, req.body, {new: true}, function(err, data) {
    if (err)
        res.send(err);
      res.json(data);
    });
};
  
exports.deleteData = function(req, res) {
    Data.remove({
      _id: req.params.dataId
    }, function(err, data) {
    if (err)
        res.send(err);
      res.json({ message: 'Data successfully deleted!' });
    });
};

exports.listAllInfo = function(req, res) {
    Info.find({}, function(err, info) {
    if (err)
        res.send(err);
      res.json(info);
    });
};
  
exports.createInfo = function(req, res) {
    const newInfo = new Widgets(req.body);
    newInfo.save(function(err, info) {
    if (err)
        res.send(err);
      res.json(info);
    });
};
  
exports.readInfo = function(req, res) {
    Info.findById(req.params.infoId, function(err, info) {
    if (err)
        res.send(err);
      res.json(info);
    });
};
  
exports.updateInfo = function(req, res) {
    Info.findOneAndUpdate({_id: req.params.infoId}, req.body, {new: true}, function(err, info) {
    if (err)
        res.send(err);
      res.json(info);
    });
};
  
exports.deleteInfo = function(req, res) {
    Info.remove({
      _id: req.params.infoId
    }, function(err, info) {
    if (err)
        res.send(err);
      res.json({ message: 'Info successfully deleted!' });
    });
};