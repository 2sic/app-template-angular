var del = require('del');
var cpx = require('cpx')
var edition = process.argv.slice(2)[0];
var package = require('../package.json');

var editions = ['staging', 'live'];
if(!edition || editions.indexOf(edition) == -1)
    throw(`Edition '${edition}' we're publishing is not valid`);

// This will publish the /dist folder to the appropriate location
let appName = package.name;
let publishPath = `${package.config.publish_path}/${edition}`;

// Cleanup
console.log(`Cleaning up ${publishPath}...`)
del.sync(`${publishPath}/{dist/${appName}}`, { force: true })

// Publishing
console.log(`Publishing ${edition} to ${publishPath}`)
cpx.copySync("./dist/**/*.*", `${publishPath}/dist`); // publish dist folder (ng-app)
console.log(`dist of ${edition} published...`);
cpx.copySync(`../${edition}/api/**/*.*`, `${publishPath}/api`) // publish API folder
console.log(`Api of '${edition}' published...`);
cpx.copySync("../*.cshtml", `${publishPath}/..`);
console.log(`Razor files (cshtml) in root folder published...`);
// cpx.copySync("../!(ng)/**/*.cshtml}", `${publishPath}/..`);
cpx.copySync("../!(ng)/**/*.cshtml", `${publishPath}/..`);
console.log(`Razor files (cshtml) in subfolders published...`);
