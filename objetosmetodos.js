/***
 * Três objetos
 * 
 * Bernardo
 * Nadyeska
 * Giovani
 * 
 * Três metodos
 * 
 * Que horas são? (Giovani)
 * Que dia é hoje? (Nadyeska)
 * Qual a temperatura? (Bernardo)
 * 
 * Criar um arquivo pra cada objeto, por exemplo bernardo.js, nadyeska.js e giovani.js
 */

class giovani{
    constructor(horario){
        this.horarioAtual = horario;
    }

    queHorasSao(){
        return this.horarioAtual;
    }
}

class nadyeeska{
    constructor(hoje){
        this.hojeAtual = hoje;
    }

    queDiaEHoje(){
        return this.hojeAtual;
    }
}

class bernardo{
    constructor(temperatura){
        this.temperaturaAtual = temperatura;
    }

    qualATemperatura(){
        return this.temperaturaAtual;
    }
}