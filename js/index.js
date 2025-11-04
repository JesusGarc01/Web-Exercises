
class Usuario{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre}`);
    }

    set nombre(newNombre){
        if(typeof newNombre === "string" && newNombre.length > 0){
            this._nombre = newNombre;
        }else{
            console.error(`Nombre inválido`);
        }
    }

    get nombre(){
        return this._nombre;
    }
    
}

class Estudiante extends Usuario{
    constructor(nombre, email, curso){
        super(nombre, email);
        this.curso = curso;
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre}, estudio ${this.curso}`);
    }
}

const user1 = new Usuario(`Jesús García`,`jg.jesusgarc@gmail.com`);
const user2_est = new Estudiante(`Guillermo Cardoso`,`spartankrx@gmail.com`, `Computación`);

user1.saludar();
user2_est.saludar();