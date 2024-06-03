import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const News = ({ articles }) => {
  return (
    <div id="news-container" className="row">
      {articles.length ? articles.map((a, index) => (
        <div key={index} className="col-md-4 d-flex align-items-stretch">
          <div className="card mb-4" style={{ width: '100%' }}>
            <LazyLoadImage
              src={a.image}
              className="card-img-top"
              alt="Imagen del artículo"
              effect="blur"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{a.title}</h5>
              <p className="card-text">
                <img src={`https://www.google.com/s2/favicons?domain=${a.link}`} style={{ height: '16px', width: '16px', marginRight: '5px' }} alt="Favicon" />
                <small className="text-muted">{a.source}, ({a.formattedDate})</small>
              </p>
              <a href={a.link} className="btn btn-dark mt-auto" target="_blank" rel="noopener noreferrer">Leer más</a>
            </div>
          </div>
        </div>
      )) : (
        <div className="alert alert-warning">Estamos procesando las fuentes de información. Los artículos estarán disponibles en breve.</div>
      )}
    </div>
  );
};

export default News;
