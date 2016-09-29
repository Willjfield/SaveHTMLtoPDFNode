var page = require('webpage').create();
page.open('index.html', function() {
  page.render('pdfExport/index.pdf');
  phantom.exit();
});