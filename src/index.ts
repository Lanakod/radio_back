import { config as DotenvConfig } from "dotenv";
import path from "path";

DotenvConfig({
  path: path.resolve(`.env.${process.env.NODE_ENV}`),
});

import Bootstrap from "./bootstrap";
import express from "express";

const app = express();

Bootstrap(app);
