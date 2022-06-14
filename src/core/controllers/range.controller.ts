import { Request, Response } from "express";
import {
  BAD_REQUEST,
  CREATED_RANGE,
  GET_RANGE,
  INTERNAL_SERVER_ERROR,
  DELETE_RANGE,
} from "@constants/responses.constant";
import RangeService from "@services/range.service";

export default class RangeController {
  async add(req: Request, res: Response) {
    try {
      const { range } = req.body;
      if (!range) return res.status(400).json({ message: BAD_REQUEST });

      const data = await RangeService.add(range);
      return res.status(201).json({
        message: CREATED_RANGE,
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
      const data = await RangeService.get();
      return res.status(200).json({
        message: GET_RANGE,
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
      await RangeService.delete(Number(id));
      return res.status(200).json({
        message: DELETE_RANGE,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: INTERNAL_SERVER_ERROR,
      });
    }
  }
}
