import React from "react";
import { NavLink } from "react-router-dom";
import noImage from "../../img/noImage.jpg";
import styles from "./Card.module.css";

export default function Card({ name, image, genres, id, createdInDb, rating }) {
  return (
    <div>
      <NavLink className={styles.none} to={`/videogames/${id}`}>
        <div>
          <img
            className={styles.img}
            src={image ? image : noImage}
            alt="img not found"
            width="200px"
            height="250vh"
          />
          <h2>{name}</h2>
          <div>Rating: {rating}</div>
          <h4>Genres:</h4>
          {!createdInDb ? (
            <div className={styles.genres}>
              {genres?.map((e, k) => {
                return (
                  <div className={styles.genres} key={`${k}g`}>
                    <p className={styles.text}>{e},</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.genres}>
              {genres?.map((e, k) => {
                return (
                  <div className={styles.genres} key={`${k}g1`}>
                    <p className={styles.text}> {e.name}, </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </NavLink>
    </div>
  );
}