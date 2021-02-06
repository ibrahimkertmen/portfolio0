import React from 'react';

const Baslik = () => {
    return (
        <div>
            <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  ANASAYFA
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  HAKKIMIZDA
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  PROJELER
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  REFERANSLAR
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  İLETİŞİM
                </a>
              </li>
            </ul>
          </nav>
        </div>
    );
};

export default Baslik;