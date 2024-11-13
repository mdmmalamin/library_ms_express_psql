import { Server } from "http";
import app from "./app";

const port = 3000;

async function main() {
  try {
    const server: Server = app.listen(port, () => {
      console.log("Library Management System Is Listening On ", port);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
