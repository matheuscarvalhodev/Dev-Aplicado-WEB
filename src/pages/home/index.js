import { Card, Button, Col, Row } from "reactstrap";
import styles from './Inicio.module.css';

export default function Home() {
    return (
        <div >

            <Row className={styles.card}>
                <Col className={styles.semma}>
                    <div className="m-3">
                        <h1>ESCOLHA A PLATAFORMA </h1>
                    </div>
                    <div>
                        <img src="SEMMA_LOGO.png" className={styles.imagem} />
                    </div>
                    <Button className={styles.buttonSemma}>
                        SEMMA
                    </Button>
                </Col>

                <Col className={styles.meioAmbiente}>
                    <div className="m-3">
                        <h1>QUE DESEJA FAZER LOGIN</h1>
                    </div>
                    <div>
                        <img src="DFCIVIL.png" className={styles.imagem} />
                    </div>
                    <div d-flex flex-column align-items-center>
                        <Button onClick='href'>
                            MEIO AMBIENTE
                        </Button>
                    </div>

                </Col>
            </Row>
        </div>
    )
}