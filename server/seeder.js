const Sequelize = require("sequelize");
const { STRING, TEXT, DECIMAL } = Sequelize;
const { sampleStudents } = require("./studentData");
const { sampleCampuses } = require("./campusData");
let db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/campus"
);

const Student = db.define("student", {
  fName: {
    type: STRING,
    allowNull: false,
    validate: {
      len: 1,
    },
  },
  lName: {
    type: STRING,
    allowNull: false,
    validate: {
      len: 1,
    },
  },
  email: {
    type: STRING,
  },
  imageUrl: {
    type: STRING,
  },
  gpa: {
    type: DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

const Campus = db.define("campus", {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      len: 1,
    },
  },
  imageUrl: {
    type: STRING,
  },
  address: {
    type: STRING,
    allowNull: false,
    validate: {
      len: 1,
    },
  },
  description: {
    type: TEXT,
  },
});

Student.belongsTo(Campus);
Campus.hasMany(Student);

const seedFunc = async () => {
  await db.sync({ force: true });
  //single student with no campusId
  await Student.create({
    fName: "John",
    lName: "Bobby",
    email: "JBobby@nobobby.com",
    imageUrl: "/test/image.jpg",
    gpa: 3,
    campusId: null,
  });
  sampleCampuses.forEach(async (e) => {
    await Campus.create({
      name: e.name,
      imageUrl: e.imageUrl,
      address: e.address,
      description: e.description,
    });
  });
  sampleStudents.forEach(async (e) => {
    try {
      await Student.create({
        fName: e.fName,
        lName: e.lName,
        email: e.email,
        imageUrl: e.imageUrl,
        gpa: e.gpa,
        campusId: e.campusId,
      });
    } catch (error) {
      console.log(error);
    }
  });
};

module.exports = {
  seedFunc,
  models: {
    Student,
    Campus,
  },
};
