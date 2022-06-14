import { Request, Response } from "express";
import { BAD_REQUEST, CREATED_QTH, GET_QTH, INTERNAL_SERVER_ERROR, DELETE_QTH } from "@constants/responses.constant";
import QTHService from "@services/qth.service";

export default class QTHController {
  async add(req: Request, res: Response) {
    try {
      const { qth } = req.body;
      if (!qth) return res.status(400).json({ message: BAD_REQUEST });

      const data = await QTHService.add(qth);
      return res.status(201).json({
        message: CREATED_QTH,
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
      const data = await QTHService.get();
      return res.status(200).json({
        message: GET_QTH,
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
      await QTHService.delete(Number(id));
      return res.status(200).json({
        message: DELETE_QTH,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: INTERNAL_SERVER_ERROR,
      });
    }
  }
}
