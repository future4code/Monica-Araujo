import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fcpq2-1.fna.fbcdn.net/v/t1.6435-9/122946110_2058861474244842_8243577113155888876_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=FNhhZWeA7U4AX_fcT9Y&_nc_ht=scontent.fcpq2-1.fna&oh=8d44ceacfdee9f1cd176d356cdf18e58&oe=60DC5839" 
          nome="Mônica Araujo" 
          descricao="Oi, eu sou a Mônica. Sou estudante de engenharia de computação e estudante da Labenu no curso Web Full Stack. Adoro tecnologia e quero fazer a diferença na sua empresa através dos meus códigos!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Informações de Contato</h2>
        <CardPequeno
          imagem="https://image.flaticon.com/icons/png/512/3178/3178158.png"
          descricao="Email: monicaaraujo974@gmail.com"
        />
        <CardPequeno
          imagem="https://image.flaticon.com/icons/png/512/1239/1239525.png"
          descricao="Endereço: Rua Alice, 999, País das Maravilhas."
        />

      </div>

      <div className="page-section-container">
        <h2>Informações acadêmicas e profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante de Engenharia de Computação - Uniararas 3º semestre e estudante da Labenu" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Desenvolvenso sistemas de segurança." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
