import { uptime } from './process.js';
export { uptime } from './process.js';

var exports = {},
    _dewExec = false;
function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports.endianness = function () {
    return "LE";
  };

  exports.hostname = function () {
    if (typeof location !== "undefined") {
      return location.hostname;
    } else return "";
  };

  exports.loadavg = function () {
    return [];
  };

  exports.uptime = function () {
    return 0;
  };

  exports.freemem = function () {
    return Number.MAX_VALUE;
  };

  exports.totalmem = function () {
    return Number.MAX_VALUE;
  };

  exports.cpus = function () {
    return [];
  };

  exports.type = function () {
    return "Browser";
  };

  exports.release = function () {
    if (typeof navigator !== "undefined") {
      return navigator.appVersion;
    }

    return "";
  };

  exports.networkInterfaces = exports.getNetworkInterfaces = function () {
    return {};
  };

  exports.arch = function () {
    return "javascript";
  };

  exports.platform = function () {
    return "browser";
  };

  exports.tmpdir = exports.tmpDir = function () {
    return "/tmp";
  };

  exports.EOL = "\n";

  exports.homedir = function () {
    return "/";
  };

  return exports;
}

var os = dew();

var _endianness = new Uint8Array(new Uint16Array([1]).buffer)[0] === 1 ? 'LE' : 'BE';
os.endianness = function() { return _endianness; };
os.homedir = function() { return '/home'; };
os.version = function() { return ''; };
os.arch = function() { return 'x64'; };
os.totalmem = function() {
  return navigator.deviceMemory !== undefined ? navigator.deviceMemory * (1 << 30) : 2 * (1 << 30);
};
os.cpus = function () {
  return Array(navigator.hardwareConcurrency || 0).fill({ model: '', times: {} });
};
os.uptime = uptime;
os.constants = {};
var version = os.version;
var constants = os.constants;
var EOL = os.EOL;
var arch = os.arch;
var cpus = os.cpus;
var endianness = os.endianness;
var freemem = os.freemem;
var getNetworkInterfaces = os.getNetworkInterfaces;
var homedir = os.homedir;
var hostname = os.hostname;
var loadavg = os.loadavg;
var networkInterfaces = os.networkInterfaces;
var platform = os.platform;
var release = os.release;
var tmpDir = os.tmpDir;
var tmpdir = os.tmpdir;
var totalmem = os.totalmem;
var type = os.type;

export { EOL, arch, constants, cpus, os as default, endianness, freemem, getNetworkInterfaces, homedir, hostname, loadavg, networkInterfaces, platform, release, tmpDir, tmpdir, totalmem, type, version };
