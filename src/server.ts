import { app } from "./app";

const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => {
  console.log(`The server is running on port : ${PORT}`);
});
