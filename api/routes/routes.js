'use strict';
module.exports = function(app) {
  const api = require('../controllers/controller');

  app.route('/widgets')
    .get(api.listAllWidgets)
    .post(api.createWidget);

  app.route('/widgets/:widgetId')
    .get(api.readWidget)
    .put(api.updateWidget)
    .delete(api.deleteWidget);

  app.route('/data')
    .get(api.listAllWidgets)
    .post(api.createWidget);

  app.route('/data/:dataId')
    .get(api.readWidget)
    .put(api.updateWidget)
    .delete(api.deleteWidget);

  app.route('/info')
    .get(api.listAllWidgets)
    .post(api.createWidget);

  app.route('/info/:infoId')
    .get(api.readWidget)
    .put(api.updateWidget)
    .delete(api.deleteWidget);
};