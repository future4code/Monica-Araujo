1-) 
a-) Acredito que usar strings para representar ids � algo bom. � melhor do que usar num�ros para gerar uma aleatoriedade e tamb�m quando temos uma  base de dados muito grande, como por exemplo o Youtube, a melhor op��o � optar por string ao gerar um id. 

2-)
a-) O c�digo est� fazendo a conex�o com o banco de dados e inserindo as informa��es id, email e password na tabela.

b-) CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    	email VARCHAR(255) UNIQUE NOT NULL,
    	password VARCHAR(255) NOT NULL
);

3-)
a-) � uma maneira de exportar e, nesse caso, esta exportando tudo da lib e nomeando com jwt, pois esta lib nao tem export default.

