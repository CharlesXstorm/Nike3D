const app = require("./app");

const PORT = process.env.PORT;

app.listen(PORT || 3030, () => {
  console.log(`Server started at port ${PORT}`);
});
