import { Router } from "express";
import SessionController from "@controllers/session.controller";
import RangeController from "@controllers/range.controller";
import QTHController from "@controllers/qth.controller";

const router = Router();
const sessionController = new SessionController(),
  rangeController = new RangeController(),
  qthController = new QTHController();

router.get("/session", sessionController.get);
router.post("/session", sessionController.add);
router.delete("/session/:id", sessionController.delete);

router.get("/range", rangeController.get);
router.post("/range", rangeController.add);
router.delete("/range/:id", rangeController.delete);

router.get("/qth", qthController.get);
router.post("/qth", qthController.add);
router.delete("/qth/:id", qthController.delete);

export default router;
