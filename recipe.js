module.exports = {

    staticBase: [
        ["merge"],
        {
            //baseRemote"
            merge: ["https://github.com/JhonnyJason/root-template"]
        }
    ],

    output: [
        ["submodule"],
        ["create"],
        {
            //thingyModuleType"
            create: ["testlevel3"]
        }
    ],

    sources: [
        ["submodule"],
        ["create"],
        {
            //thingyModuleType"
            create: ["sources"]
        }
    ],

    testing: [
        ["directory"],
        ["create"],
        {
            create: ["testlevel3"]
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

    individualize() {
        return " - - - individualized Base!"
    }
}