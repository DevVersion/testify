var gulp = require("gulp");
var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");

var isProduction = false;
var dist = "dist";

gulp.task("scripts", function() {
  return browserify("src/app.js", {
        debug: !isProduction
      })
      .transform("babelify", {
        presets: ["es2015"]
      })
      .bundle()
      .pipe(fs.createWriteStream(dist + "/js/app.js"));
});

gulp.task("build", ["scripts"]);