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
          <Image src={LogoBBranca} width={64} height={64} alt="Logo" />
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link href="/servicos">Serviços</Link>
          </li>
          <li>
            <Link href="/sobre-nos">Sobre nós</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
