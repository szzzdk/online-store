import React from 'react';

import './Sidebar.css'

const Sidebarr = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/portfolio">портфолио</a></li>
        <li><a href="/page1">Страница 1</a></li>
        <li><a href="/page2">Страница 2</a></li>
        {/* Добавьте ссылки на остальные страницы */}
      </ul>
    </div>
  );
};

export default Sidebarr;