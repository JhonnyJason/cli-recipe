const exec = require("child_process").exec
const pathModule = require("path")

function run(cmd, cwd) {
    return new Promise(function(resolve, reject) {
        var callback = function(error, stdout, stderr) {
            if (error) {
                reject(error);
            }
            if (stderr) {
                reject(new Error(stderr));
            }
            return resolve(stdout);
        }
        
        return exec(cmd, {cwd}, callback)
    })
}

module.exports = {

    staticBase: [
        ["merge"],
        {
            //baseRemote"
            merge: ["https://github.com/JhonnyJason/root-template"]
        }
    ],

    toolset: [
        ["submodule"],
        ["use"],
        {
            //baseRemote"
            use: ["https://github.com/JhonnyJason/toolset"]
        }
    ],

    output: [
        ["submodule"],
        ["merge"],
        {
            //baseRemote"
            merge: ["https://gitlab.com/lenny09918050/lenny-unlicense"]
        }
    ],

    sources: [
        ["submodule"],
        ["merge", "create"],
        {
            //thingyModuleType"
            create: ["cli-sources"],
            //baseRemote"
            merge: ["https://github.com/JhonnyJason/thingycreate-as-thingy-sources", "*"]
        }
    ],

    testing: [
        ["directory"],
        ["merge"],
        {
            merge: ["https://gitlab.com/lenny09918050/lenny-unlicense"]
        }
    ],

    async individualize(thingyPath) {
        var cwd = pathModule.resolve(thingyPath, "toolset")
        await run("prepareThingyForCli.pl", cwd)
    }
}