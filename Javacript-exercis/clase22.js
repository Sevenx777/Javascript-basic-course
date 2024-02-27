//enlace implicito .implicit blinding

const house = {
    dogName: "firulais",
    dogGreeeting: function(){
        console.log(`Hi, I'm ${this.dogName}`)
    }
}
house.dogGreeeting("gogerma")

function dogGreeeting (){
    console.log(`Hi, I'm ${this.dogName}`)
}

const newHouse = {
    dogName: "gogerman",
}

dogGreeeting.call(newHouse)

function newDogGreeeting (owner, addres){
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${addres}`)
}

const owner = "andres"
const addres = "Av 123"
newDogGreeeting.call(newHouse, owner, addres)
