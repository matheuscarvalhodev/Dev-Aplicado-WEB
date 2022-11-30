import { Card, Button, Col, Row, CardHeader, CardBody } from "reactstrap";
import styles from './Inicio.module.css';

export default function Home() {
    return (
        <div>
            <div className="container" style={{ marginTop: "100px" }}>
                <CardHeader>
                    <strong>
                        <h4 className="text-center"
                            style={{ fontSize: 60, fontFamily:'initial' }}>

                            SEJA BEM-VINDO(A)!
                        </h4>
                    </strong>

                </CardHeader>
                <CardBody className={styles.card}>
                    <Row >
                        <Col color="warning">
                            <Card>
                                <Button href='./semma/home' outline color="success">
                                    <div className="m-3">
                                        <h1>ENTRAR COMO</h1>
                                    </div>

                                    <div>
                                        <img src="SEMMA_LOGO.png" className={styles.imagem} />
                                    </div>
                                    <h4>SEMMA</h4>
                                </Button>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Button href='./home' outline color="warning">
                                    <div className="m-3">
                                        <h1>ENTRAR COMO</h1>
                                    </div>

                                    <div>
                                        <img src="DFCIVIL.png" className={styles.imagem} />
                                    </div>
                                    <h4>MEIO AMBIENTE</h4>
                                </Button>
                            </Card>

                        </Col>
                    </Row>
                </CardBody>
            </div>
        </div>
    )
}