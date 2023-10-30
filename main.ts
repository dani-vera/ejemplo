const num:number = 5;
const string:string = "qwevwef";
const bool: boolean = true;

const stringArr: string[] = ["hola"];
const numArr: number [] = [1,2,3];
const boolArr: boolean [] = [ true, false ]

function suma(a:number, b:number): void {

    console.log(a + b);
    
}

// class Persona {
//     public nombre: string;
//     private apellido: string;

//     constructor(nombre: string, apellido:string){
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }
// }

class Persona {


    constructor(private nombre: string, private apellido:string){}

    public setNombre (nombre:string): void {
        this.nombre = nombre;
    }

    private getNombre(): string{
        return this.nombre;
    }
}

let miPersona = new Persona("Roberto", "García");



