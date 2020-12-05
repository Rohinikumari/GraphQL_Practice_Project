const displayMessage = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // if(message === `Wassup?`){
            //     return reject(`Something went wrong`)
            // }
            return resolve(message)
        }, 3000)
    })
}

const greeting = async () => {
    return `Hey`
}

greeting().then(result => console.log(`****** ${result}`))

const myFunc = async () => {
    try {
        let result = ''
        result = await displayMessage(`Hello`)
        console.log(result)
        result = await displayMessage(`There?`)
        console.log(result)
        result = await displayMessage(`Wassup?`)
        console.log(result)
        result = await greeting()
        console.log(result)
    }
    catch (error) {
        console.log(`Error : ${error}`)
    }
}

myFunc()