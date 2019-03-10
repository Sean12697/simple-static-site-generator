const fs = require('fs'),
      data = require('./data.js'),
      indexTheme =require('./Themes/index.js'),
      pageTheme = require('./Themes/page.js');

// Generating page paragraph list, could be used for example to generating headers/footers as well
let pages = Object.keys(data).reduce((pre, v) => pre += `\n<a href="${v}.html"><p>${data[v].heading}</p></a>`, "");
// Making the main index page listing the other pages on this dummy site
fs.writeFile(`./_site/index.html`, indexTheme("Home Page", pages), () => {});
// creating each page based on the data and using the small theme we have created
Object.keys(data).forEach((v, i) => {
    fs.writeFile(`./_site/${v}.html`, pageTheme(data[v].heading, data[v].body), () => {});
});