const express = require("express");
const req = require("express/lib/request");
const path = require("path");
const {
  models: { Student, Campus },
} = require("./seeder");
const app = express();
app.use(express.json());
app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/media", express.static(path.join(__dirname, "../media")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Route: All students
app.get("/api/students/all", async (req, res, next) => {
  try {
    res.send(await Student.findAll());
  } catch (error) {
    next(error);
  }
});

//Route: New student
app.post("/api/students", async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    res.send(newStudent);
  } catch (error) {
    next(error);
  }
});

//Route: Delete student
app.delete("/api/students/:id", async (req, res) => {
  try {
    const deleter = await Student.findByPk(req.params.id);
    deleter.destroy();
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
  }
});

//Route: Update student
app.put("/api/students/:id", async (req, res, next) => {
  try {
    const updateStudent = await Student.findByPk(req.params.id);
    await updateStudent.update(req.body);
    res.send(updateStudent);
  } catch (error) {
    next(error);
  }
});

//Route: New campus
app.post("/api/campuses", async (req, res, next) => {
  try {
    const { name, imageUrl, address, description } = req.body;
    const newCampus = await Campus.create({
      name,
      imageUrl,
      address,
      description,
    });
    res.send(newCampus);
  } catch (error) {
    next(error);
  }
});

//Route: Update campus
app.put("/api/campuses/:id", async (req, res, next) => {
  try {
    const updateCampus = await Campus.findByPk(req.params.id);
    await updateCampus.update(req.body);
    res.send(updateCampus);
  } catch (error) {
    next(error);
  }
});

//Route: All campuses
app.get("/api/campuses/all", async (req, res, next) => {
  try {
    res.send(await Campus.findAll());
  } catch (error) {
    next(error);
  }
});

//Route: Delete campus
app.delete("/api/campuses/:id", async (req, res) => {
  try {
    const deleter = await Campus.findByPk(req.params.id);
    deleter.destroy();
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
  }
});

module.exports = app;
