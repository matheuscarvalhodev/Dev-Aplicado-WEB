import styles from "./Inicio.module.css";
import SideNavBar from "componentes/SiderBar";
import posts from "json/posts.json";
import PostCard from "componentes/PostCard";
import Container from '@mui/material/Container';
import CarouselComponent from "componentes/Carousel/Carousel_Component";


export default function Home_initial() {
  return (
    <>
      <SideNavBar />
      <CarouselComponent/>
      <Container maxWidth="sm">
        
    </Container>
    </>
  );
}
