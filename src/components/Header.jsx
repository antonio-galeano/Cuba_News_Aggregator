import React from 'react';

const Header = ({ setSource, onSearch }) => {
  return (
    <>
      <header className="bg-light py-3 w-100">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#" onClick={() => setSource('all')}>
            <img src="/logo.png" alt="Logo" style={{ height: '50px' }} />
          </a>
          <form className="d-flex" onSubmit={onSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
              name="search"
            />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </header>
      <button className="navbar-toggler mx-auto my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="hero-text w-100">
        <h1>Cuba News Aggregator</h1>
        <p>Tu fuente principal de noticias sobre Cuba</p>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setSource('all')}>Todos los Artículos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setSource('diariodecuba')}>Diario de Cuba</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setSource('cibercuba')}>CiberCuba</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setSource('adncuba')}>ADN Cuba</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setSource('ymedio')}>14yMedio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setSource('eltoque')}>El Toque</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setSource('elestornudo')}>El Estornudo</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
