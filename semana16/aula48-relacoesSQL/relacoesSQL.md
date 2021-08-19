###Exerc�cio 1
a-) Chave estrangeira � um campo em uma tabela que faz refer�ncia a um campo que � chave prim�ria em outra tabela

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

c-) Deu um erro, n�o pode adicionar a linha na tabela porque a foreing key falhou, isso aconteceu porque a foreing key se relaciona diretamente com o id da outra tabela, no caso a de Filmes, se o id n�o existe, realmente acontecer� esse erro.

d-) 
```
ALTER TABLE Filmes DROP COLUMN rating;
```

e-) N�o foi poss�vel deletar porque tem uma foreing key referenciando a primary key

```
DELETE FROM Filmes WHERE id="004"
```

###Exerc�cio 2
a-) Essa tabela relaciona atores com filmes e filmes com atores atrav�s das foreing keys. Faz com que diversos atores possam participar de diversos filmes

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
N�o � poss�vel, pois a foreing key n�o consegue se relacionar com a primary key inexistente 

d-) N�o foi poss�vel deletar porque existe uma outra tabela que depende dessa informa��o

###Exerc�cio 3
a-) Essa query junta em uma tabela as informa��es do filme a sua avalia��o correspondente. 

b-) 
```
SELECT name, Filmes.id, avaliacao FROM Filmes
INNER JOIN Rating ON Filmes.id = Rating.movie_id
```

