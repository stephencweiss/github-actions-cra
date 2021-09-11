const fs = require('fs');

function incrementVersion(incrementer){

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
        return console.log('All clear')
    })
}

module.exports = {incrementVersion}