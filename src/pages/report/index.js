import styles from './Inicio.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Selection } from './selections.js';
import { TableRelatorio } from "./table.js";
import { Button, CardHeader, CardBody, CardFooter } from 'reactstrap';
import SideNavBar from 'componentes/SideBar';
import { Card, Col, Row } from 'react-bootstrap';
import { useState } from "react";



const tableOrigin = {
    titles: [
        "Ocorrência",
        "Local",
        "Período",
        "Atendidas",
        "Não Atendidas",
        "Total",
        "Zona",
    ],
    oc: {
        oc1: ["Incêndio", "Bairro Santa Luzia", "MARÇO", 10, 0, 10, "Urbana"],
        oc2: [
            "Incêndio",
            "Bairro Jesus Misericordioso",
            "MARÇO",
            15,
            1,
            16,
            "Urbana",
        ],
        oc3: [
            "Deslizamento de Terra",
            "Bairro Jesus Misericordioso",
            "ABRIL",
            3,
            1,
            4,
            "Urbana",
        ],
        oc4: [
            "Acidente Químico",
            " Bairro Novo Horizonte",
            "MARÇO",
            2,
            0,
            2,
            "Urbana",
        ],
        oc5: ["Alagamento", "Bairro Santa Luzia", "FEVEREIRO", 5, 0, 5, "Urbana"],
        oc6: ["Outros", "Bairro Cidade Nova", "JANEIRO", 20, 2, 22, "Rural"],
    },
};

export default function Report() {

    const date = new Date();
    const ZonaSelect = ["Urbana", "Rural"];

    const [table, setTable] = useState(tableOrigin);
    const [select, setSelect] = useState();
    const [filters, setFilters] = useState({
        zona: "",
        bairro: "",
        periodo: "",
        tipoOcorrencia: "",
    });

    const PeriodoSelect = [
        "JANEIRO",
        "FEVEREIRO",
        "MARÇO",
        "ABRIL",
        "MAIO",
        "JUNHO",
        "JULHO",
        "AGOSTO",
        "SETEMBRO",
        "OUTROBRO",
        "NOVEMBRO",
        "DEZEMBRO",
    ];

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
                                        select={[]}
                                        //select={ZonaSelect}
                                        setFilters={setFilters}
                                    />
                                    <Selection
                                        class={styles.sect}
                                        label="Bairro: "
                                        name="bairro"
                                        select={[]}
                                        setFilters={setFilters}
                                    />

                                </div>
                            </Col>

                            <Col lg='4'>

                                <Selection
                                    class={styles.sect}
                                    label="Periodo: "
                                    name="periodo"
                                    select={PeriodoSelect}
                                    setSelect={setSelect}
                                    table={select}
                                    setFilters={setFilters}
                                />
                                <Selection
                                    class={styles.sect}
                                    label="Zona: "
                                    name="zona"
                                    select={ZonaSelect}
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
                                    <Button color="link">
                                        Vizualizar Relatório Completo
                                    </Button>
                                </Col>
                            </Row>
                        </div>

                    </CardFooter>

                </Card>

            </main >


        </div >
    )
}