// Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:

// - [x]  Crie uma **função** que irá calcular a média das notas de cada aluno;
// - [x]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

// <aside>
// 💡 Dica: para quebrar uma linha no `alert()` basta usar um **\n** na mensagem. 😛

// </aside>

// Obs: você quem manda no tamanho da lista! No exemplo a lista é composta por 4 estudantes. 😊
// Fique à vontade caso queira adicionar novos dados e fazer novas validações. Se desafie! 🚀
const students = [
  {
    name: "Raphael",
    firstGrade: 10,
    secondGrade: 10,
  },
  {
    name: "Luan",
    firstGrade: 10,
    secondGrade: 9,
  },
  {
    name: "Lucas",
    firstGrade: 5,
    secondGrade: 6,
  },
  {
    name: "Carlos",
    firstGrade: 6,
    secondGrade: 3,
  },
];

function GradeAverage() {
  for (student of students) {
    let average = (student.firstGrade + student.secondGrade) / 2;
    let isAproved =
      average >= 7
        ? `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`
        : `Não foi dessa vez, ${student.name}! Tente novamente!`;
    alert(
      `A média do(a) aluno(a) ${student.name} é: ${average}\n ${isAproved}`
    );
  }
}

GradeAverage();
