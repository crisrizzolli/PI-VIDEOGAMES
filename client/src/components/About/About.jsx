import React from "react";
import styles from "./About.module.css";
import gav from "../../img/Cris baja resol (2).jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>Cristina Rizzolli</div>
      <div className={styles.description}>
        <div>
          <img className={styles.picture} src={gav} alt="img not found"></img>
        </div>
        <p>
          Experta en el área Comercial con alto perfil humanístico, especializada en 
          Recursos Humanos y actualmente Desarrolladora Web Full Stack.
          Fortalezas: trabajo en equipo, perseverancia y flexibilidad al cambio.
        </p>
      </div>
      <Link to="/home">
          <button className={styles.btn}>Go back</button>
        </Link>
    </div>
  );
}

export default About;