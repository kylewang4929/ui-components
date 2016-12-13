'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabMenu = exports.WaterDashboard = exports.BaseDashboard = exports.AirDashboard = undefined;

var _Dashboard = require('./lib/Dashboard');

var _TabMenu = require('./lib/TabMenu');

var _TabMenu2 = _interopRequireDefault(_TabMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AirDashboard = _Dashboard.AirDashboard;
exports.BaseDashboard = _Dashboard.BaseDashboard;
exports.WaterDashboard = _Dashboard.WaterDashboard;
exports.TabMenu = _TabMenu2.default;
