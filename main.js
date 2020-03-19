/* Começo da aula sobre classes */
class List {
  constructor() {
    this.data = [];
  }
  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();

    this.usuario = "Lohana";
  }

  mostraUsuario() {
    console.log(this.usuario);
  }

  /* constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    } */
}

const MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function() {
  /* MinhaLista.addTodo(); */
  MinhaLista.add("Novo todo");
};

MinhaLista.mostraUsuario();
/* Fim da aula sobre classes */

/* Começo da aula sobre Const e Let */
const usuario = { nome: "Lohana" };

usuario.nome = "Loh"; //Mutação

console.log(usuario);
/* Fim da aula sobre Const e Let */

/* Começo da aula sobre Operações em Array */
const arr = [1, 3, 4, 5, 8, 10];

/* const newArr = arr.map(function(item, index) {
  return item * 2;
}); função anônima*/

const newArr = arr.map(item => item * 2); //Arrow function
console.log(newArr);

const sum = arr.reduce(function(total, next) {
  return total + next;
});
console.log(sum);

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});
console.log(filter);

const find = arr.find(function(item) {
  return item === 2;
});
console.log(find);
/* Fim da aula sobre Operações em Array */

/* Começo da aula sobre Arrow Functions */
const teste = () => ({ nome: "Lohana" });

console.log(teste());
