var sum = require('../lib/test2');
function tc2(a,b)
{
	var val = sum(a,b);
	console.log("value::::" +val);
	return val;
}
exports.tc2 = tc2;


