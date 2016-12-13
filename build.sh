babel src --out-dir lib --copy-files --ignore style.scss

sass ./src/Dashboard/BaseDashboard/style.scss ./lib/Dashboard/BaseDashboard/style.css
sass ./src/Dashboard/AirDashboard/style.scss ./lib/Dashboard/AirDashboard/style.css
sass ./src/Dashboard/WaterDashboard/style.scss ./lib/Dashboard/WaterDashboard/style.css
sass ./src/TabMenu/style.scss ./lib/TabMenu/style.css

babel src --out-dir lib
babel index.es6 --out-file index.js