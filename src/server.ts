import { ApplicationFactory } from "./app";
import router from "./routes";
import http from "http";

const PORT: number = parseInt(process.env.PORT || "3250", 10);

const app = new ApplicationFactory();
const [application, options] = app.createApplicationInstance({
  applicationRouter:router
});

const server = http.createServer(application);
server.listen(PORT, () => {
  console.log(`Listening by port http://localhost:${PORT}${options.applicationPrefixUrl}`);
});
