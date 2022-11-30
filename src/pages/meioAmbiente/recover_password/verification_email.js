import styles from './Inicio.module.css';
import React from "react";
import validator from "validator";


function Verification_email(){

  return (

    <div class={styles.maincontainer} >
      <div class={styles.container} >

        <form>
          <span className={styles.loginformtitle}> Redefinição de senha </span>
          <span className={styles.loginformthead}> Digite seu e-mail no campo
           abaixo e lhe enviaremos um código de ativação para 
          refefinição de senha </span>
         
          <input className={styles.input}
            type="email"
            nome= "email"
            id="email"
            placeholder="E-mail"
            required 
             title="Por favor, digite o e-mail." />

             <button className={styles.loginbtn} type="submit">Enviar</button>
             
            </form>
          </div>
      </div>
      );
}
export default Verification_email;