import React from 'react';

import { Machado } from '@/assets';

import styles from './index.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.container}>
      <div className={styles.aboutUsContent}>
        <h2>Sobre nós</h2>
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
      <div
        className={styles.aboutUsImage}
        style={{ backgroundImage: `url(${Machado.src})` }}
      />
    </section>
  );
};

export default AboutUs;
