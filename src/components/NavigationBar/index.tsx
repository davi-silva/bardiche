import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { LogoBBranca } from '@/assets';

import styles from './index.module.scss';

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            className={styles.brand}
            src={LogoBBranca}
            width={70}
            height={70}
            alt="Logo"
          />
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link href="#services">Serviços</Link>
          </li>
          <li>
            <Link href="#about-us">Sobre nós</Link>
          </li>
          <li>
            <Link href="#contact">Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
