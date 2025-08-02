
import React from 'react';
import './Services.css'; // Certifique-se que o CSS está sendo importado aqui ou globalmente
import img1 from '../assets/Gabinete Pc.png';
import img2 from '../assets/Cadeira.png';
import img3 from '../assets/Churrasqueira.png';
import img4 from '../assets/Pistola de ar quente.png'; // Exemplo de outra imagem, se necessário

const services = [
  {
    id: 1,
    title: 'Pistola de Ar Quente',
    image: img4, // Substitua com o caminho correto da imagem
  },
  {
    id: 2,
    title: 'Cadeira Autoregulavel',
    image: img2, // Substitua com o caminho correto da imagem
  },
  {
    id: 3,
    title: 'Churrasqueira portatil',
    image: img3, // Substitua com o caminho correto da imagem
  },
   {
    id: 4,
    title: 'Gabinete Gamer',
    image: img1, // Substitua com o caminho correto da imagem
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <h2><span>Portifólio</span> | Exemplos</h2>
          <p>Aqui eta alguns exemplos do que posso oferecer para sua empresa.</p>
        </div>

        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <button>→</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

