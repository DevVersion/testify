var gulp = require("gulp");
var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");

var dist = "dist/";
var extensions = [".js", ".json", ".es6"];

gulp.task("build", function() {
  return browserify("src/testify.js", {
        debug: true
      })
      .transform("babelify", {
        presets: ["es2015"]
      })
      .bundle()
      .pipe(fs.createWriteStream("bundle.js"));
});