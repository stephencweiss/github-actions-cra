const fs = require('fs');
const { spawnSync } = require('child_process');

const gitAdd = () => spawnSync('git', ['add', 'package.json'])
const gitCommit = (message) => spawnSync('git', ['commit', `-m '${message}'`])

function incrementVersion(incrementer, bump = false){

    // read the package.json
    const rawPackage = fs.readFileSync('./package.json')

    // parse the version
    const parsedPackage = JSON.parse(rawPackage)
    const currentVersion = parsedPackage?.version

    // update the version
    const nextVersion = incrementer(currentVersion)
    parsedPackage.version = nextVersion

    // save the package.json
    fs.writeFile('./package.json', Buffer.from(JSON.stringify(parsedPackage)), {encoding: 'utf8' }, (err) => {
        if (err) {
            return console.log('Error!', err)
        }
        if(bump || true){
            gitAdd();
            gitCommit(nextVersion)
        }
        fs.writeFile('./temp-version.txt', Buffer.from(nextVersion), {encoding: 'utf-8'}, (err) => {
            if(err){
                return console.log(`Temp file error: ${err}`)
            }
            return console.log('Successfully wrote to temp file');
        })
        return console.log('All clear')
    })

}

module.exports = {incrementVersion}