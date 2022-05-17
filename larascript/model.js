const fs = require('fs')
const args = process.argv.slice(2)


const checkForArgs = (arguments) => {

    arguments.forEach((val, index) => {
        if(val === '-m'){
            // Run migration.js
            var fileContents = "console.log('i am a migration')\nconsole.log('testing some code')"
            console.log('Creating Migration\n')            
            fs.writeFile(`./database/create_${arguments[0]}_migration.js`, fileContents, function (err) {
                if (err) throw err;
                console.log('File is created successfully.');
            })
        }
        if(val === '-c'){
            // Run controller.js
            var fileContents = "console.log('i am a controller')\nconsole.log('testing some code')"
            console.log('Creating Controller\n')                                    
            fs.writeFile(`./app/Http/Controllers/${arguments[0]}Controller.js`, fileContents, function (err) {
                if (err) throw err;
                console.log('File is created successfully.');
            })
        }
    })
}

checkForArgs(args)

const createNewModel = (arguments) => {
    var model_name = arguments[0]
    var fileContents = "console.log('i am a model')\nconsole.log('testing some code')"
    
    fs.writeFile(`./app/Models/${model_name}.js`, fileContents, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    })
}


createNewModel(args)