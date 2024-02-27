const owner = "andres"
const addres = "Av 123"
const newHouse = {
    dogName: "gogerman",
}
const necessaryValues = [owner ,addres]
const blindingWithBind = dogGreeeting.bind(newHouse , owner , addres)


function dogGreeeting (owner, addres){
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${addres}`)
}



dogGreeeting.call(newHouse, owner , addres)
dogGreeeting.apply(newHouse , necessaryValues)
blindingWithBind()







const caricatura = {
    nombre: 'vaca y pollito'
}

function recuerdo(personaje){
    console.log(`${this.nombre} era mi caricatura favorita. Me encanta ver las aventuras de ${personaje}`);
}

recuerdo.call(caricatura, 'vaca')
recuerdo.apply(caricatura, ['y']);
const recuerdoBind = recuerdo.bind(caricatura, 'pollito');
recuerdoBind();