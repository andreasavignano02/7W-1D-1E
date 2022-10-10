class input{
    constructor(name, surname, date){
        this.name = name 
        this.surname = surname
        this.date = date
    }
}

function comparsa(clickEvent){
    let name = document.getElementById('nome').value
    let surname = document.getElementById('cognome').value
    let date = document.getElementById('data').value
    let risultato = name + " " + surname + " " + date 
    document.getElementById('container').innerHTML = risultato
    document.getElementById('bottone').addEventListener('click', comparsa())
}
