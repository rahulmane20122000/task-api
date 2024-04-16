import helmet from "helmet";
import cors from "cors";
import { json, urlencoded } from "express";
import { routes } from "./routes.data.js";
import { ResponseHandler } from "../../common/utils/handlers.js";


const {
  env: { UI_ROUTE },
} = process;

export const registerRoutes = (app) => {
  const corsOptions = {
    origin: [UI_ROUTE],
  };
  app.use(helmet());
  app.use(cors(corsOptions));
  app.use(json());
  app.use(urlencoded({ extended: false, limit: "2mb" }));
  for (let route of routes) {
    app.use(route.path, route.router);
  }
  
  app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
  });
};