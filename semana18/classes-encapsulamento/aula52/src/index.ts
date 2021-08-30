/*
1-)
a-) O construtor é um método especial para criar e inicializar um objeto 
criado a partir de uma classe. Para chama-lo podemos usar o this.nomeDaVariavel

b-) A mensagem foi imprimida 1 vez

c-) Variáveis privadas só podem ser acessadas de dentro da
própria classe (usando a keyword this)
*/

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCpf() {
        return this.cpf
    }

    public getName() {
        return this.name
    }

    public getAge() {
        return this.age
    }
  
}
const user1 = new UserAccount("4753874830", "Monica Araujo", 20)


//2-)
class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }

    public getDate() {
        return this.date
    }

    public getValue() {
        return this.value
    }

    public getDescription() {
        return this.description
    }
}

//3-) 

