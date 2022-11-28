import styles from './Inicio.module.css';
import React from "react";
import validator from "validator";


function Recover_password(){

    let senha = document.getElementById("senha").value;
    let confirma = document.getElementById("confirma").value;
    console.log(" Senha:", senha,'\n',"Repita senha:",confirma);
    let message = document.getElementById("message");

    if(senha.length != 0){
        if(senha == confirma){
            message.textContent = "Passwords match";
            message.style.backgroundColor = "#1dcd59";
        }
        else{
            message.textContent = "Password don't match";
            message.style.backgroundColor = "#ff4d4d";
        }
    }
    else{
        alert("Password can't be empty!");
        message.textContent = "";
    }
  return (

    <div class={styles.maincontainer} >
      <div class={styles.container} >

        <form>
          <span className={styles.loginformtitle}> Redefinição de senha </span>
          <span className={styles.loginformthead}> Digite sua nova senha </span>
         
          <input className={styles.input}
            type="senha"
            nome= "senha"
            id="senha"
            placeholder="Senha"
            required onchenge='confere senha()'
             title="Por favor, digite nova senha" />
            <input className={styles.inputa}
              type="comfirma"
              nome= "confirma"
              id="confirma"
              required onchenge='confere senha()'
              placeholder="Repita nova senha"
             title="Por favor, digite novamente a senha" />
             <button className={styles.loginbtn} type="submit">Enviar</button>
             
            </form>
          </div>
      </div>
      );
}
export default Recover_password;