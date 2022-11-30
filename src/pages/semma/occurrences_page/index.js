import styles from './Inicio.module.css';
import SideNavBar from "componentes/SiderBar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Ocurrences_Semma() {

    const [ocorrencia, setOcorrencia] = useState(null);
    const api = axios.create({
        baseURL: "http://localhost:3000",
      });
    useEffect(() => {
        api.get(`/ocorrencias`)
           .then((response) => {
             console.log(response);
             setOcorrencia(response.data)
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro : " + err);
          });
      }, [api]);

      if (!ocorrencia) return null;

    return (
        <div>
            <SideNavBar />
            <body className={styles.principal}>
            <h1>OCORRÊNCIAS</h1>
                
            <section className={styles.flex}>
                <div>
                <p>TOTAL DE OCORRÊNCIAS: </p>
                </div>
                <div>
                 <p>PENDENTES: </p>
                </div>
                <div>
                <p>
                    <label for="iest">FILTRO: </label>
                    <select name="filtro" id="iest">
                    <option value="1">Visualizar Lidas</option>
                    <option value="2">Visualizar Não Lidas</option>
                    <option value="3">Visualizar Não Ocorrências</option>
                    <option value="4">Visualizar Atendidas</option>
                    <option value="5">Visualizar Não Atendidas</option>
                    </select>
                </p>
                </div>
            </section>

            <table class={styles.contentTable}>
                 <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>USUÁRIO</th>
                        <th scope='col'>DATA</th>
                        <th scope='col'>LOCAL</th>
                    </tr>
                </thead>
                <tbody>
                {ocorrencia.map(ocorrencias => ( 
                        <tr>
                        <th scope='row'key={ocorrencias.id}>{ocorrencias.id}</th>
                        <td>{ocorrencias.nome_autor_crime}</td>
                        <td>{ocorrencias.data_ocorrido}</td>
                        <td>{ocorrencias.local_ocorrido}</td>
                        <td><Button component={Link} to={`/ocurrences/${ocorrencias.id}`} style={{
                    borderRadius: 50,
                    backgroundColor: "#f1a014",
                    fontSize: "18px"
                }}>&#10132;</Button></td>
                    </tr>
                ))}
                </tbody>
            </table>

            <section class={styles.flexFooter}>
                <div class={styles.containerQuadro}>
                <img src="assets/imagens/quadrado-verde.svg" alt="verde" className={styles.img}/>
                <p>Ocorrência: Visualizada e Atendida</p>
                </div>
                <div class={styles.containerQuadro}>
                <img src="assets/imagens/quadrado-amarelo.svg" alt="amarelo" className={styles.img}/>
                <p>Ocorrência: Visualizada e Não Atendida</p>
                </div>
                <div class={styles.containerQuadro}>
                <img src="assets/imagens/quadrado-rosa.svg" alt="rosa" className={styles.img}/>
                <p>Ocorrência: Não Vizualizada</p>
                </div>
                <div class={styles.containerQuadro}>
                <img src="assets/imagens/quadrado-vermelho.svg" alt="vermelho" className={styles.img}/>
                <p>Não é uma Ocorrência</p>
                </div>
            </section>
            </body>
        </div>
    )
}