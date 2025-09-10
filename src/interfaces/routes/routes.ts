import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

/**
 * @swagger
 * /api/client:
 *   post:
 *     summary: Consulta información básica de un cliente
 *     description: Retorna información quemada de un cliente según tipo y número de documento.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tipoDocumento
 *               - numeroDocumento
 *             properties:
 *               tipoDocumento:
 *                 type: string
 *                 enum: [C, P]
 *                 example: C
 *               numeroDocumento:
 *                 type: string
 *                 example: "12345678"
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstName:
 *                   type: string
 *                   example: Santiago
 *                 secondName:
 *                   type: string
 *                   example: Andrés
 *                 lastName:
 *                   type: string
 *                   example: Pérez
 *                 secondLastName:
 *                   type: string
 *                   example: Gómez
 *                 phone:
 *                   type: string
 *                   example: "3001234567"
 *                 address:
 *                   type: string
 *                   example: "Calle 123 #45-67"
 *                 city:
 *                   type: string
 *                   example: Bogotá
 *       400:
 *         description: Error en los datos de entrada
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.post("/client", UserController.getClient);

export default router;
