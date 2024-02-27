// capacidad que tienen las funciones al igual que otros objetos

// 1. pasar funciones como argumentos --> callback

function a (){}

function b (a){}
b(a)

// retornar funciones

function a (){
    function b (){}
    return b
}

// asignar funciones a variables --> exprecion de funcion
// const a = function(){}

// tener propiedades y metodos

function a () {}
const obj = {}
a.call(obj)

//anidar funciones --> Nested fuctions
    function a (){
        function b (){
            function c (){

            }
            c()     
        }
        b()
    }
    a()

// es posible  alamcenar funciones  en objetos?

const rocket = {
    name: "Falcao 9",
    launchMessage: function launchMessage (){
        console.log("⚽")
    }
}

rocket.launchMessage()