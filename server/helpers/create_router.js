const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createRouter = function (collection) {
  const router = express.Router();

  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.post("/", (req, res) => {
    const newScore = {
      name: req.body.name,
      score: req.body.score,
      difficulty: req.body.difficulty
    };
    collection
      .insertOne(newScore)
      .then((result) => {
        res.json(result.ops[0]);
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  return router;
};

module.exports = createRouter;
