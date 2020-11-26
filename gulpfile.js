const gulp = require("gulp");
const fs = require("fs");

var argv = require("yargs").argv;

gulp.task("syncIconFolder", (done) => {
  const iconDir = argv.dir;
  if (!iconDir) {
    console.log("\n⛔ ERR: icon directory must be specified! ⛔\n");
  } else {
    const files = fs.readdirSync(iconDir);
    let iconList = '';
    files.forEach(function (file) {
      iconList +=
        "<li><strong>" + file + '</strong><span><img src="' + iconDir + "/" + file + '"/></span></li>';
    });
    fs.writeFileSync(
      "index.html",
      "<html><head><title>Icon list for " + iconDir + "</title><link rel='stylesheet' href='main.css'></head><body><h3>Icon list for " + iconDir + " </h3><ul>" +
        iconList +
        "</ul></body></html>"
    );
    console.log("\nindex.html successfully generated 👍\n");
  }
  done();
});

gulp.task("default", gulp.series("syncIconFolder"));
