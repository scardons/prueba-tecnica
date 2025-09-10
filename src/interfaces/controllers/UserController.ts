import { Request, Response } from "express";
import { GetClientUseCase } from "../../application/user/GetUserUseCase";

const getClientUseCase = new GetClientUseCase();

export class UserController {
  static async getClient(req: Request, res: Response) {
    try {
      const client = await getClientUseCase.execute(req.body);
      return res.status(200).json(client);
    } catch (err: any) {
      // Mapear errores de negocio a códigos HTTP
      if (err.message.startsWith("VALIDATION_ERROR")) {
        return res.status(400).json({ error: err.message });
      }
      if (err.message.startsWith("NOT_FOUND")) {
        return res.status(404).json({ error: err.message });
      }
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }
}
