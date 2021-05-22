class SerVivo {
    
    caminar(nombre) {
        console.log('Ahora esta caminando: ' + nombre);
    }
}

class Persona extends SerVivo
{    
    constructor (nombre){
        super();
        this.nombre = nombre;
    }

    moverse(){
        super.caminar(this.nombre);
    }
}



const nombre = 'Fernando';
const persona = new Persona(nombre);
persona.moverse();