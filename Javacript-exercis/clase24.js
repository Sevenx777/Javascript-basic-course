// Arrow functions
 const greeting = function (name){
    return `Hi ${name} `
} 

const newGreeting =  (name) => {
    return `Hi ${name} `
}

// Arrow function - imiplicit return

const newGreetingImplicit = name => `Hi ${name}`
const newGreetingImplicitWithTwoParameters = (name , lastname) => `Hi i'm${name} ${lastname}`


//lexical Blinding

const finctionalCharacter = {
    name: "Aunt May",
    messageWithTraditionalFunction: function(message){
        console.log(`${this.name} says: ${message}`)
    },

    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction("With great power comes great responsability")
finctionalCharacter.messageWithArrowFunction("Beware of  Green Leprechaun")


