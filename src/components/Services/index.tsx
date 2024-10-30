import React from 'react';

import { Servicos } from '@/assets';

import styles from './index.module.scss';

const Services = () => {
  return (
    <section className={styles.container} id="services">
      <div
        className={styles.servicosImage}
        style={{ backgroundImage: `url(${Servicos.src})` }}
      />
      <div className={styles.servicosContent}>
        <h2>Serviços</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo fuga
          nesciunt ut reiciendis aspernatur aliquid voluptate voluptatibus.
          Error alias ea, libero quidem aspernatur recusandae maxime ab tempore
          architecto at odio! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quo fuga nesciunt ut reiciendis aspernatur aliquid
          voluptate voluptatibus. Error alias ea, libero quidem aspernatur
          recusandae maxime ab tempore architecto at odio!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum
          aut eius voluptate impedit dolor natus ipsa, porro praesentium quod
          incidunt, maxime suscipit sunt accusantium tenetur explicabo molestias
          cupiditate vel?
        </p>
      </div>
    </section>
  );
};

export default Services;
