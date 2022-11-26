import styles from './Inicio.module.css';
import { useState } from 'react';
import posts from 'json/posts.json';
import PostCard from "componentes/PostCard";
import React from "react";

function Recover_password ( ) {
 return (
    <div class = {styles.maincontainer} > 
    <div class = {styles.container} > 
    <div> 
    <form> 
    <center>
    <span className={styles.loginformtitle}> Redefinir senha </span>
    <span className={styles.loginformthead}> Informe o e-mail para o qual deseja redefinir a senha </span>
    </center>
    <div class = {styles.input} >
     <input  type = "text" 
             name = "email" 
             id = "email" 
             required title = "Por favor, digite email" /> 

     <label for = "email" > Email </label>
    
    </div> 
    <input type = "submit" 
           value = "Redefinir senha" 
           class = {styles.loginbtn} /> 
           <a href = "#" > Voltar ao login </a>
    </form>
    </div> 
    </div> 
    </div> 
 )           
    
}   
 export default Recover_password;