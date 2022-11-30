import SideNavBar from "componentes/SiderBar";
import CarouselComponent from "componentes/Carousel/Carousel_Component";
import styles from './Inicio.module.css'
import {
  Card,
  CardBody,
  CardLink,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Container,
} from "reactstrap";

export default function Home_initial_Semma() {
  return (
    <>
      <SideNavBar />
      <div style={{ marginTop: "100px" }}>
      <Container>
        <div className={styles.principal}>
          <div className="col col-lg-3">
            <h3 className="mb-5 text-center text-decoration-underline">Ultimas Noticias</h3>
            <Card className="mb-5">
              
              <ListGroup flush>
                <ListGroupItem>Titulo da noticia</ListGroupItem>
                <ListGroupItem>Titulo da noticia</ListGroupItem>
                <ListGroupItem>Titulo da noticia</ListGroupItem>
              </ListGroup>
              <CardBody>
                <CardLink href="#">Ver todas as Noticias</CardLink>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle tag="h5">Perguntas Frequentes</CardTitle>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem><CardLink href="#">Como fazer uma denúncia anônima?</CardLink></ListGroupItem>
                <ListGroupItem><CardLink href="#">Quando a secretaria de meio ambiente deve ser acionada?</CardLink></ListGroupItem>
                <ListGroupItem><CardLink href="#">O que a defesa civil fiscaliza?</CardLink></ListGroupItem>
                <ListGroupItem><CardLink href="#">Qual a função da defesa civil?</CardLink></ListGroupItem>
                
              </ListGroup>
              <CardBody className="text-center">
                <CardLink href="#">Ver mais</CardLink>
              </CardBody>
            </Card>
          </div>
          <div>
            <h3 className="mb-2">Atuações</h3>
            <CarouselComponent />
          </div>
        </div>
      </Container>
      </div>
     
    </>
  );
}
