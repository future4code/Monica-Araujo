### Exercício 1

a-) O comando VARCHAR serve para determinarmos o número máximo de caracteres dessa string e o DATE serve para representar uma data

b-) SHOW DATABASE Informou o meu database e SHOW TABLE mostrou a tabela em branco

c-) Mostou a tabelinha \o/

###Exercício 2 

a-)
```
INSERT INTO Actor (id, name, salary, birth_date, gender) 
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

b-) "Entrada duplicada "002" para chave "PRIMÁRIA". Isso ocorreu porque o id é único, por isso é considerado chave primária e não pode ser repetido

c-) 
"A contagem da coluna não corresponde à contagem do valor na linha 1"
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d-) 
"O campo nome não tem um valor"
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Letícia Chijo",
  400000,
  "1949-04-18", 
  "male"
);
```

e-) 
"Valor da data incorreto"
```
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f-)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "008", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "009", 
  "Grazi Massafera",
  719333.33,
  "1989-05-04", 
  "female"
);
```

###Exercício 3

a-) 
```
SELECT * FROM Actor
```

b-) 
```
SELECT salary from Actor WHERE name="Tony Ramos"
```

c-) 
```
SELECT gender from Actor WHERE gender="invalid"
```
Retornou uma tabela em branco porque não há nenhum genero inválido 

d-) 
```
SELECT id, name, salary from Actor WHERE salary <=500000
```

e-)
Coluna desconhecida "nome" na "lista de campos"
Deveria ser name ao invés de nome

```
SELECT id, name from Actor WHERE id = "002"
```
