import { Express, json as expressJson, urlencoded } from "express";
import http from "http";
import router from "@routes";
import { sequelize } from "@db";
import cors from "cors";

const Bootstrap = (app: Express) => {
  const PORT = process.env.PORT || 4000;
  const httpServer = http.createServer(app);

  app.use(expressJson());
  app.use(
    urlencoded({
      extended: true,
    })
  );
  app.use(cors());

  app.use(router);

  httpServer.listen(PORT, () => console.log(`Started server on port: ${PORT}`));

  sequelize
    .sync()
    .then(() => console.log("Connected to the database"))
    .catch((e) => console.log(`Error while connecting to the database:\n${e}`));
};

export default Bootstrap;
