###Exercício 1
a-) Chave estrangeira é um campo em uma tabela que faz referência a um campo que é chave primária em outra tabela

b-) 
```
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
"001",
"Adorei o filme",
9.9,
"004"
);
```

c-) Deu um erro, não pode adicionar a linha na tabela porque a foreing key falhou, isso aconteceu porque a foreing key se relaciona diretamente com o id da outra tabela, no caso a de Filmes, se o id não existe, realmente acontecerá esse erro.

d-) 
```
ALTER TABLE Filmes DROP COLUMN rating;
```

e-) Não foi possível deletar porque tem uma foreing key referenciando a primary key

```
DELETE FROM Filmes WHERE id="004"
```

###Exercício 2
a-) Essa tabela relaciona atores com filmes e filmes com atores através das foreing keys. Faz com que diversos atores possam participar de diversos filmes

b-)
```
INSERT INTO MovieCast 
 VALUES(
 "002",
 "002"
 );
```

```
INSERT INTO MovieCast 
 VALUES(
 "003",
 "008"
 );
```

```
INSERT INTO MovieCast 
 VALUES(
 "004",
 "009"
 );
```

```
INSERT INTO MovieCast 
 VALUES(
 "002",
 "005"
 );
```

```
INSERT INTO MovieCast 
VALUES(
"002",
"001"
);
```

```
INSERT INTO MovieCast 
VALUES(
"003",
"003"
);
```

c-) 
Não é possível, pois a foreing key não consegue se relacionar com a primary key inexistente 

d-) Não foi possível deletar porque existe uma outra tabela que depende dessa informação

###Exercício 3
a-) Essa query junta em uma tabela as informações do filme a sua avaliação correspondente. 

b-) 
```
SELECT name, Filmes.id, avaliacao FROM Filmes
INNER JOIN Rating ON Filmes.id = Rating.movie_id
```

