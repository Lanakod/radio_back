import { Request, Response } from "express";
import {
  BAD_REQUEST,
  CREATED_SESSION,
  GET_SESSION,
  INTERNAL_SERVER_ERROR,
  DELETE_SESSION,
} from "@constants/responses.constant";
import SessionService from "@services/session.service";

export default class SessionController {
  async add(req: Request, res: Response) {
    try {
      const { myRange, myQTH, callSign, name, QTH, signal } = req.body;
      if (!myQTH || !myRange || !callSign || !name || !QTH || !signal)
        return res.status(400).json({ message: BAD_REQUEST });

      const data = await SessionService.add(myRange, myQTH, callSign, name, QTH, signal);
      return res.status(201).json({
        message: CREATED_SESSION,
        data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: INTERNAL_SERVER_ERROR,
      });
    }
  }

  async get(req: Request, res: Response) {
    try {
      const data = await SessionService.get();
      return res.status(200).json({
        message: GET_SESSION,
        data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: INTERNAL_SERVER_ERROR,
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ message: BAD_REQUEST });
      await SessionService.delete(Number(id));
      return res.status(200).json({
        message: DELETE_SESSION,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: INTERNAL_SERVER_ERROR,
      });
    }
  }
}
