const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  function addShiftLesson2 (obj, key, value) {
      obj[key] = value;
  }

//   exercicio1

  addShiftLesson2(lesson2, 'turno', 'noite');

  console.log(lesson2);

//   exercicio2

const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));

// exercicio 3

const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

// exercicio 4

const listValues = (obj) =>  Object.values(obj);
console.log(listValues(lesson1));

// exercicio 5

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons)
