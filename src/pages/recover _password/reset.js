import styles from './Inicio.module.css';
import { useState } from 'react';
import posts from 'json/posts.json';
import PostCard from "componentes/PostCard";
import React from "react";

function Recover_password ( ) {
   
    return (
        <div class={styles.maincontainer}>
        <div class={styles.container}>
        <div>
        <form>
        <center><h1>Alteração de senha</h1>
        </center>
        
        <div class={styles.input}>
        <input type="Nova senha" 
               name="Nova senha" 
               id="senha" 
               required title="" />
        <label for="username">Nova senha</label>

        </div>
        <div class={styles.input}>
        <input type="Repita a senha" 
               name="Repita a senha" 
               id="rsenha" 
               required title="" />
       <label for="username">Repita a senha</label>
        </div>

        
        <input type="submit" value="Confirma" class={styles.loginbtn} />
        <a href="#">Limpar</a>
        </form>
        </div>
        </div>
        </div>
        
    );
  } 
 export default Recover_password;