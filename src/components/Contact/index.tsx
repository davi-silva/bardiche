'use client';

import React, { FormEvent, useState } from 'react';

import { Fundo2, LogoPreta } from '@/assets';
import { Input } from '@/components';

import styles from './index.module.scss';
import Image from 'next/image';
import { ZodContact } from './zod';

const Contact = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<any[]>([]);

  const handleName = (value: string) => {
    setName(value);
  };

  const handleSurname = (value: string) => {
    setSurname(value);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handleMessage = (value: string) => {
    setMessage(value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const validated = ZodContact.safeParse({ name, surname, email, message });

    if (validated.error) {
      setErrors(validated.error.errors);
      return;
    }

    if (validated.success) {
      console.log({ name, surname, email, message });
    }
  };

  return (
    <section
      id="contact"
      className={styles.container}
      style={{
        backgroundImage: `url(${Fundo2.src})`,
      }}
    >
      <h2 className={styles.heading}>Contato</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inlineInputs}>
          <Input label="NOME" type="text" value={name} onChange={handleName} />
          <Input
            label="SOBRENOME"
            type="text"
            value={surname}
            onChange={handleSurname}
          />
        </div>
        <Input
          label="E-MAIL"
          type="email"
          value={email}
          onChange={handleEmail}
        />
        <Input
          label="MENSAGEM"
          type="textarea"
          value={message}
          onChange={handleMessage}
        />
        {errors.length > 0 && (
          <span className={styles.error}>Formulario invalido</span>
        )}
        <button className={styles.submitButton}>Enviar</button>
      </form>
      <Image
        className={styles.logoBlack}
        src={LogoPreta.src}
        alt="logo black"
        width={200}
        height={140}
      />
    </section>
  );
};

export default Contact;
