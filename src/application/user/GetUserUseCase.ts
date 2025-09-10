interface GetClientDTO {
  tipoDocumento: string;
  numeroDocumento: string;
}

export class GetClientUseCase {
  async execute(dto: GetClientDTO) {
    const { tipoDocumento, numeroDocumento } = dto;

    // Validaciones de negocio
    if (!tipoDocumento || !numeroDocumento) {
      throw new Error("VALIDATION_ERROR: tipoDocumento y numeroDocumento son obligatorios");
    }

    if (tipoDocumento !== "C" && tipoDocumento !== "P") {
      throw new Error("VALIDATION_ERROR: tipoDocumento inválido. Solo se acepta C o P");
    }

    // Datos quemados
    const fakeClient = {
      firstName: "Santiago",
      secondName: "Andrés",
      lastName: "Pérez",
      secondLastName: "Gómez",
      phone: "3001234567",
      address: "Calle 123 #45-67",
      city: "Bogotá",
    };

    // Lógica de negocio: solo documento válido
    if (numeroDocumento !== "12345678") {
      throw new Error("NOT_FOUND: Cliente no encontrado");
    }

    return fakeClient;
  }
}
