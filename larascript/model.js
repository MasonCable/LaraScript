const args = process.argv.slice(2)


const checkForArgs = (arguments) => {

    arguments.forEach((val, index) => {
        if(val === '-m'){
            // Run migration.js

            console.log('Creating Migration')
        }
        if(val === '-c'){
            // Run controller.js

            console.log('Creating Controller')
        }
    })
}

const createNewModel = (args) => {
    let model = args[0]

    
}