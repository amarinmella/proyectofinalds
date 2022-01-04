class Cursos {
    constructor(curso, cantidadPersonas, nivel) {
        this.curso = curso;
        this.cantidadPersonas = cantidadPersonas;
        this.nivel = nivel;
    }
}

let cursos = '';
let numcursos = 0;

alert(numcursos = Number(prompt('Cuantos cursos desea contratar')));

for (let index = 0; index < numcursos; index++) {
    let cursos = new Cursos(
        prompt('Ingrese el curso (Classroom, Meet, Forms)'),
        prompt('Numero de personas a capacitar'),
        prompt('Nivel de los participantes (Basico, Intermedio, Avanzado)')
    );
    
    cursos += "Cursos " + (index + 1) + ": " + cursos.curso + " - " + cursos.cantidadPersonas + " - " + cursos.nivel + "\n";
}

alert(cursos);


