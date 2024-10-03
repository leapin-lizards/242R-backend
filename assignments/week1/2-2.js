const fs = require("fs");
const { extname, join } = require("path");
const util = require("util");
const readdir = util.promisify(fs.readdir);

const searchDir = async (path) => {
    try {
        const files = await readdir(path);
        return files;
    } catch (err) {
        console.error(err);
    }
};

const search = async (path) => {
    const files = await searchDir(path);
    if(!files) 
        return;
    for (const file of files) {
        const fullDir = join(path, file);
        try {
            fs.stat(fullDir, (err, stats) => {
                if (err)
                    throw err;
                if (stats.isDirectory()) {
                    search(fullDir)
                }
                else if (extname(file) == ".js") {
                    console.log(fullDir);
                }
            });
        }catch(err){
            console.error(err);
        }
    }
};

search("./test");