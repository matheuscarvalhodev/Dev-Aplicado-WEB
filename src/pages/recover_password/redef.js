import styles from './Inicio.module.css';
import React from "react";

function Recover_password() {
  return (

    <div class={styles.maincontainer} >
      <div class={styles.container} >
       
        <form>
        <span className={styles.loginformtitle}> Redefinição de senha </span>
            <span className={styles.loginformthead}> Digite sua nova senha </span>
          
            
            <input type="senha" id="senha"
             placeholder="Senha"
             required title="Por favor, digite nova senha" /> 
            <input type="repita senha" id="repita senha" 
            placeholder="Repita nova senha"
            required title="Por favor, digite novamente a senha" />

            <button className={styles.loginbtn} type="submit">Enviar</button>
        

        </form>
      </div>
    </div>
  );
}
 export default Recover_password;