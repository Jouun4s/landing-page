
import React from 'react';
import './Services.css'; // Certifique-se que o CSS está sendo importado aqui ou globalmente

const services = [
  {
    id: 1,
    title: 'UX/UI Design',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnoticias.unisanta.br%2Fblog-unisanta%2Fdia-do-designer-grafico-saiba-a-importancia&psig=AOvVaw3cfoC-TnoKXwWVedIKaeuJ&ust=1754016277592000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKiY9vqJ5o4DFQAAAAAdAAAAABAE',
  },
  {
    id: 2,
    title: 'Web Development',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnoticias.unisanta.br%2Fblog-unisanta%2Fdia-do-designer-grafico-saiba-a-importancia&psig=AOvVaw3cfoC-TnoKXwWVedIKaeuJ&ust=1754016277592000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKiY9vqJ5o4DFQAAAAAdAAAAABAE',
  },
  {
    id: 3,
    title: 'Brand Identity',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnoticias.unisanta.br%2Fblog-unisanta%2Fdia-do-designer-grafico-saiba-a-importancia&psig=AOvVaw3cfoC-TnoKXwWVedIKaeuJ&ust=1754016277592000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKiY9vqJ5o4DFQAAAAAdAAAAABAE',
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
