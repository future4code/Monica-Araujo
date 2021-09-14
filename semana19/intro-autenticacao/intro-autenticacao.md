1-) 
a-) Acredito que usar strings para representar ids é algo bom. é melhor do que usar numéros para gerar uma aleatoriedade e também quando temos uma  base de dados muito grande, como por exemplo o Youtube, a melhor opção é optar por string ao gerar um id. 

2-)
a-) O código está fazendo a conexão com o banco de dados e inserindo as informações id, email e password na tabela.

b-) CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    	email VARCHAR(255) UNIQUE NOT NULL,
    	password VARCHAR(255) NOT NULL
);

3-)
a-) é uma maneira de exportar e, nesse caso, esta exportando tudo da lib e nomeando com jwt, pois esta lib nao tem export default.

