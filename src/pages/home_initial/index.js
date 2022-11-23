import styles from "./Inicio.module.css";
import SideNavBar from "componentes/SiderBar";
import posts from "json/posts.json";
import PostCard from "componentes/PostCard";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export default function Home_initial() {
  return (
    <>
      <SideNavBar />
      <Container maxWidth="sm">
    </Container>
    </>
  );
}
