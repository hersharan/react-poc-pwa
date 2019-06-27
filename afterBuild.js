const fs = require('fs-extra');
const paths = require('./config/paths');

fs.readFile('./templates/template.yml', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  fs.readJson(`${paths.appBuild}/asset-manifest.json`)
    .then(json_data => {
      var common = json_data['common.js'];
      var main = json_data['main.js'];
      var mainCss = json_data['main.css'];
      var commonCss = json_data['common.css'];
      common = common.split('elx_frontend/')[1];
      main = main.split('elx_frontend/')[1];
      mainCss = mainCss.split('elx_frontend/')[1];
      commonCss = commonCss ? commonCss.split('elx_frontend/')[1] : 'common';
      data = data.replace(/common_bundle_js/g, common);
      data = data.replace(/main_bundle_js/g, main);
      data = data.replace(/main_bundle_css/g, mainCss);
      data = data.replace(/common_bundle_css/g, commonCss);
      fs.writeFile('elx_frontend.libraries.yml', data, 'utf8', function (err) {
        if (err) return console.log(err);
      });
    })
    .catch(err => {
      console.error(err)
    })
});