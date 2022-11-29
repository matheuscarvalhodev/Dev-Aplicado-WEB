import styles from './Inicio.module.css';
import React from "react";
import validator from "validator";



function Redefinition_password(){

 
  function Alerta_password() {

    let senha = document.getElementById("senha").value;
    let confirma = document.getElementById("confirma").value;
    
    if(senha.length != 0){
        if(senha == confirma){
           alert("Senhas conferem")
            
        }
        else{
            alert("Senhas não conferem")
          
        }
    } 
    
  }
  return (

    <div className={styles.maincontainer} >
      <div className={styles.container} >

        <form>
          <span className={styles.loginformtitle}> Redefinição de senha </span>
          <span className={styles.loginformthead}> Digite sua nova senha </span>

          <input className={styles.input}
            type="senha"
            nome="senha"
            id="senha"
            placeholder="Senha"
            required
            title="Por favor, digite nova senha" />
          <input className={styles.input}
            type="confirma"
            nome="confirma"
            id="confirma"
            required
            placeholder="Repita nova senha"
            title="Por favor, digite novamente a senha" />
          <button className={styles.loginbtn} onClick={Alerta_password} type="submit">Enviar</button>

        </form>
      </div>
    </div>

  )
}
export default Redefinition_password;