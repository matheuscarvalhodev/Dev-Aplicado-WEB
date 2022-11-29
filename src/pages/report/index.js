import styles from './Inicio.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Selection } from './selections.js';
import { TableRelatorio } from "./table.js";
import { Button, CardHeader, CardBody, CardFooter } from 'reactstrap';
import SideNavBar from "componentes/SiderBar";
import { Card, Col, Row } from 'react-bootstrap';
import { useState } from "react";
import { ZonaSelect, tableOrigin, filterOrigin, typeSelect, bairroSelect, PeriodoSelect } from "./data";


export default function Report() {

    const date = new Date();

    const [table, setTable] = useState(tableOrigin);
    const [select, setSelect] = useState();
    const [filters, setFilters] = useState(filterOrigin);
    const [opZona, setOpZona] = useState(ZonaSelect);

    return (
        <div>
            <header>
                <SideNavBar></SideNavBar>
            </header>

            <main className='container' style={{ marginTop: "100px" }}>

                <div className="top-relatorio">
                    <h2 className='text-center mb-5'>RELATORIO</h2>
                </div>

                <Card>
                    <CardHeader>

                        <Row>
                            <Col lg='4'>
                                <div >
                                    <p>Data: {date.toLocaleDateString()}</p>
                                    <p>Hora: {date.toLocaleTimeString().substr(0, 5)}</p>
                                </div>
                            </Col>

                            <Col lg='4'>
                                <div >
                                    <Selection
                                        class={styles.sect}
                                        label="Tipo de Ocorrência: "
                                        name="tipoOcorrencia"
                                        select={typeSelect}
                                        setSelect={setSelect}
                                        table={select}
                                        setFilters={setFilters}
                                    />
                                    <Selection
                                        class={styles.sect}
                                        label="Periodo: "
                                        name="periodo"
                                        select={PeriodoSelect}
                                        setSelect={setSelect}
                                        table={select}
                                        setFilters={setFilters}
                                    />

                                </div>
                            </Col>

                            <Col lg='4'>

                                <Selection
                                    class={styles.sect}
                                    label="Bairro: "
                                    name="bairro"
                                    select={bairroSelect}
                                    setSelect={setSelect}
                                    table={select}
                                    setFilters={setFilters}
                                />
                                <Selection
                                    class={styles.sect}
                                    label="Zona: "
                                    name="zona"
                                    select={opZona}
                                    setSelect={setSelect}
                                    table={select}
                                    setFilters={setFilters}
                                />
                            </Col>
                        </Row>

                    </CardHeader>

                    <CardBody>
                        <div className='table-relatorio'>

                            <TableRelatorio table={table} filters={filters} />

                        </div>

                    </CardBody>

                    <CardFooter>
                        <div className='d-flex justify-content-around'>
                            <Row>
                                <Col lg='4'>
                                    <Button color="link">
                                        Emitir Relatório Completo
                                    </Button>
                                </Col>
                                <Col lg='5'>
                                    <Button color="link" onClick={() => {
                                        setFilters(filterOrigin)
                                        setOpZona(ZonaSelect);
                                    }} >Vizualizar Relatório Completo</Button>
                                </Col>
                            </Row>
                        </div>

                    </CardFooter>

                </Card>

            </main >


        </div >
    )
}