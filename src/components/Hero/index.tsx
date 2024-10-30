import React from 'react';
import Image from 'next/image';

import { Fundo1, LogoBranca } from '@/assets';

import styles from './index.module.scss';

const Hero = () => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${Fundo1.src})`,
      }}
    >
      <Image
        className={styles.logo}
        src={LogoBranca.src}
        width={1000}
        height={700}
        alt="White logo"
      />
    </section>
  );
};

export default Hero;
