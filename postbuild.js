const path = require('path')
const fs = require('fs')

console.log('Removing useless files')

fs.rm(path.join('build', 'app.js'), () => {})
fs.rm(path.join('build', 'utils.js'), () => {})
fs.rmdir(path.join('build', '_snowpack'), { recursive: true, force: true }, ()=>{})
fs.readdir('build', (_err, files)=>{
    for (var i = 0; i < files.length; i++) {
        if (files[i].endsWith('LICENSE.txt')) fs.rmSync(path.join('build', files[i]))
    }
})