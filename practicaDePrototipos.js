function Person(nombre, apellido, edad, profesion, hobbies){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.profesion = profesion;
    this.hobbies = hobbies;
}

Person.prototype.saludar = function(){
    return `Hola, soy ${this.nombre}, mi apellido es ${this.apellido}, tengo ${this.edad} años de edad, soy un ${this.profesion}, y me gusta ${this.hobbies} en mi tiempo libre`;
};


function Student(nombre, apellido, edad, promedio, cursos){
    Person.call(this,nombre,apellido,edad);
    this.promedio=promedio;
    this.cursos=cursos;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.presentarExamen = function(){
    console.log("Estoy haciendo un examen...");
};

Student.prototype.saludar = function() {
    return `${Person.prototype.saludar.call(this)} y soy un estudiante`;
};

let nombre = prompt("Digite el nombre:")
let apellido = prompt("Digite el apellido:")
let edad = prompt("Digite el edad:")
let promedio = prompt("Digite el promedio:")
let cursos = prompt("Digite el cursos:")



let estudiante = new Student(nombre, apellido, edad, promedio, cursos);

console.log(estudiante.saludar())