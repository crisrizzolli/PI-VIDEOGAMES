const express = require("express");
const { getAllVideogames } = require("./function");
const { Videogame, Genre, Platform } = require("../db");
const router = express.Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  const videogamesTotal = await getAllVideogames();
  if (name) {
    let videogameName = videogamesTotal.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    videogameName.length
      ? res.status(200).send(videogameName)
      : res.status(404).send("Videogame not found");
  } else {
    res.status(200).send(videogamesTotal);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const videogamesTotal = await getAllVideogames();
  if (id) {
    let videogamesId = videogamesTotal.filter((e) => e.id.toString() === id);
    videogamesId.length
      ? res.status(200).send(videogamesId)
      : res.status(404).send("Id not found");
  } else {
    res.status(200).send(videogamesTotal);
  }
});

router.post("/", async (req, res) => {
  let {
    id,
    name,
    description,
    released,
    rating,
    platform,
    img,
    genre,
    createdInDb,
  } = req.body;

  let videogameCreated = await Videogame.create({
    id,
    name,
    description,
    released,
    rating,
    platform,
    img,
    genre,
    createdInDb,
  });
  let genreDb = await Genre.findAll({
    where: { name: genre },
  });
  let platformDb = await Platform.findAll({
    where: { name: platform },
  });
  videogameCreated.addGenre(genreDb), videogameCreated.addPlatform(platformDb);
  res.send("Videogame create successfully");
});
module.exports = router;
