import styles from './Inicio.module.css';
import { useState } from 'react';
import posts from 'json/posts.json';
import PostCard from "componentes/PostCard";
import React from "react";
import reactMarkdown from 'react-markdown';

function Recover_password() {
  return (

    <div class={styles.maincontainer} >
      <div class={styles.container} >
       
        <form>
        <span className={styles.loginformtitle}> Redefinição de senha </span>
            <span className={styles.loginformthead}> Por favor, insira no campo
             abaixo o código de ativação que você recebeu por e-mail  </span>
             <input class={styles.input}
             type="codigo" id="codigo" 
             placeholder="Código"
             required title="Por favor, digite o código" />
          

            <button className={styles.loginbtn} type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
 export default Recover_password;