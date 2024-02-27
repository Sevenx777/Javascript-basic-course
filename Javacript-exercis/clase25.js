// // Funciones Constructoras
// const personalizedMessage = () => "Goobye everybody !"
// function rocket (name, ownMessage){
//     this.name =name
//     this,launchMessage = () => ownMessage
//     // this.launchMessage = function (){
//     //     console.log("ownMessage")
//     }


// const falcao9Rocket = new rocket("falcao 9" , "1 , 2 ,3 sdadadsadas")
// const falconHeavyRocket = new rocket("falcon Heavy", "see you soon !")
// console.log(falcao9Rocket.name)
// console.log(falcao9Rocket.launchMessage())

const rocketWithArrowFunction = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage

})

const personalizedMessageForArrow = () => "succesful launch !"
const falcao9Rocket1 = rocketWithArrowFunction("falcol 9" , personalizedMessageForArrow)
console.group(falcao9Rocket1.name)
console.group(falcao9Rocket1.launchMessage())