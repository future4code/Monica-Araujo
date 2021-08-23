###Exerc�cio 1
a-) Esso comando ir� deletar a coluna "salary" da tabela

b-) Esse comando ir� fazer com que o gender sex tenha 6 caracteres

c-) Esse comando far� com que o gender gender ter� 255 caracteres

d-) 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

###Exerc�cio 2
a-) 
```
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";
```

b-) 
```
UPDATE Actor
SET name = "JULIANA P�ES"
WHERE name = "Juliana Paes";
```

c-) 
```
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";
```

d-)
```
UPDATE Actor 
set
name="Gabi Lopes"
WHERE id = "100";
```

N�o demostra nenhum erro, mas como eu passei um id que n�o existe ainda no banco, o resultado foi: "0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0

###Exerc�cio 3
a- ) 
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```

b-) 
```
DELETE FROM Actor WHERE gender = "male" and salary > 1000000
```

###Exerc�cio 4
a-) 
```
SELECT MAX(salary) FROM Actor
```

b-) 
```
SELECT MIN(salary) FROM Actor WHERE gender = "female"
```

c-) 
```
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```

d-) 
```
SELECT SUM(salary) FROM Actor
```

###Exerc�cio 5
a-) Retornou uma tabela dizendo que existem 4 atores com o genero "male" e 3 atrizes com o genero "female"

b-) 
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c-) 
```
SELECT * FROM Actor
ORDER BY salary;
```

d-) 
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e-)
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

###Exerc�cio 6
a- ) 
```
ALTER TABLE Filmes ADD playing_limit_date DATE
```

b-) 
```
ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT;
```

c-) 
```
UPDATE Filmes
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"
```

```
UPDATE Filmes
SET
	playing_limit_date = "2017-12-31"
WHERE id = "002"
```

d-)
```
DELETE FROM Movie WHERE id = "001"
```
Quando atualizo a sinopse do filme ela � conclu�da, n�o demonstra erro, por�m ela n�o acontece, pois o filme com id 001 foi deletado. 

###Exerc�cio 7
a- ) 
```
SELECT COUNT(*) FROM Filmes WHERE avaliacao > 7.5
```

b-) 
```
SELECT AVG(avaliacao) from Filmes
```

c-) 
```
SELECT COUNT(*) from Filmes WHERE playing_limit_date > curdate()
```

d-) 
```
SELECT COUNT(*) FROM Filmes WHERE release_date > CURDATE();
```

e-) 
```
SELECT MAX(avaliacao) FROM Filmes;
```

f-)
```
SELECT MIN(avaliacao) FROM Filmes;
```

###Exerc�cio 8
a-) 
```
SELECT * FROM Filmes ORDER BY name;
```

b-)
```
SELECT * FROM Filmes ORDER BY name LIMIT 5;
```

c-)
```
SELECT * FROM Filmes 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```

d-) 
```
SELECT * FROM Filmes 
ORDER BY avaliacao DESC 
LIMIT 3;
```





