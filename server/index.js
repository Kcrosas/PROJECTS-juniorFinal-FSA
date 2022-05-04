const app = require("./app");
const { seedFunc } = require("./seeder");
let port = process.env.PORT || 3000;

const start = async () => {
  try {
    await seedFunc();
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
