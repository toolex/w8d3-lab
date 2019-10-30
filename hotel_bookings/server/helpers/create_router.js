const express = require("express");
const ObjectID = require("mongodb").ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get("/", (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
  });

  router.get("/:id", (req, res) => {
    const id = req.params.id;
    collection
    .findOne({ _id: ObjectID(id) })
    .then((doc) => res.json(doc))
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    collection
    .deleteOne({ _id: ObjectID(id) })
    .then((docs) => res.json(docs))
  });

  router.post("/", (req, res) => {
    const newData = req.body;
    collection
    .insertOne(newData)
    .then((result) => {
      res.json(result.ops[0])
    })
  });

  router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  collection
  .updateOne(
    {_id: ObjectID(id)},
    {$set: updateData},
    {returnOriginal: false}
  )
  .then((result) => {
    res.json(result.value)
  })
});
  return router;
}

module.exports = createRouter;
