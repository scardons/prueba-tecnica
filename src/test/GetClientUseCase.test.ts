import { GetClientUseCase } from "../application/user/GetUserUseCase";

describe("GetClientUseCase", () => {
  let useCase: GetClientUseCase;

  beforeEach(() => {
    useCase = new GetClientUseCase();
  });

  it("✅ debería retornar cliente si tipoDocumento y numeroDocumento son válidos", async () => {
    const result = await useCase.execute({
      tipoDocumento: "C",
      numeroDocumento: "12345678",
    });

    expect(result).toHaveProperty("firstName", "Santiago");
    expect(result).toHaveProperty("city", "Bogotá");
  });

  it("❌ debería lanzar error si falta tipoDocumento", async () => {
    await expect(
      useCase.execute({ tipoDocumento: "", numeroDocumento: "12345678" })
    ).rejects.toThrow("VALIDATION_ERROR");
  });

  it("❌ debería lanzar error si tipoDocumento no es válido", async () => {
    await expect(
      useCase.execute({ tipoDocumento: "X", numeroDocumento: "12345678" })
    ).rejects.toThrow("VALIDATION_ERROR");
  });

  it("❌ debería lanzar error si cliente no existe", async () => {
    await expect(
      useCase.execute({ tipoDocumento: "C", numeroDocumento: "99999999" })
    ).rejects.toThrow("NOT_FOUND");
  });
});
