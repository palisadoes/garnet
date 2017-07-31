const path = require("path");
const fs = require("fs");
const YAML = require("yamljs");

const config = require("./configuration.js");

exports.root_directory = function() {
  return path.resolve(__dirname, "..");
};

exports.encode = function(value) {};

exports.decode = function(value) {};

exports.hashstring = function(string, sha, utf) {};

exports.validate_timestamp = function(timestamp) {};

exports.normalized_timestamp = function(timestamp) {
  let interval = config.interval();
  let value;

  if (timestamp === undefined) {
    var time = new Date().getTime() / 1000;
    var multiple = Math.floor(time / interval);
    value = multiple * interval;
  } else {
    value = Math.floor(timestamp / interval);
  }
  return value;
};

exports.dict2yaml = function(data_dict) {};

exports.move_files = function(source_dir, target_dir) {};

exports.delete_files = function(target_dir) {};

exports.cleanstring = function(data) {};

exports.read_yaml_file = function(file) {
  return YAML.load(file);
};

exports.run_script = function(cli_string, shell, die) {};

exports.search_file = function(filename) {};

exports.all_same = function(items) {};
