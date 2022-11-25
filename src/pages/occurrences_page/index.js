import styles from './Inicio.module.css';

export default function Ocurrences_page() {
    return (
        <body>
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
                    <th>ID</th>
                    <th>USUÁRIO</th>
                    <th>DATA</th>
                    <th>LOCAL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

            </tbody>
        </table>

        <section class={styles.flexFooter}>
            <div class={styles.containerQuadro}>
            <img src="assets/imagens/quadrado-verde.svg" alt="verde"/>
            <p>Ocorrência: Visualizada e Atendida</p>
            </div>
            <div class={styles.containerQuadro}>
            <img src="assets/imagens/quadrado-amarelo.svg" alt="amarelo"/>
            <p>Ocorrência: Visualizada e Não Atendida</p>
            </div>
            <div class={styles.containerQuadro}>
            <img src="assets/imagens/quadrado-rosa.svg" alt="rosa"/>
            <p>Ocorrência: Não Vizualizada</p>
            </div>
            <div class={styles.containerQuadro}>
            <img src="assets/imagens/quadrado-vermelho.svg" alt="vermelho"/>
            <p>Não é uma Ocorrência</p>
            </div>
        </section>
        </body>
    )
}