function setup(config)
{
var fs = require('fs');
eval(fs.readFileSync(config,encoding="ascii"));
eval(fs.readFileSync(topo_files.path,encoding="ascii"));
console.log("Topo file path: " +topo_files.path);
console.log("ip addr for the device " + settings.ip);
};
exports.setup = setup;

