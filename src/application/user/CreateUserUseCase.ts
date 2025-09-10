//backend/src/application/user/CreateUserUseCase.ts
import { IUserRepository } from "../../domain/user/IUserRepository";
import { User } from "../../domain/user/User";
import { randomUUID } from "crypto";

interface CreateUserDTO {
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  phone: string;
  address: string;
  city: string;
}

export class CreateUserUseCase {
  constructor(private userRepo: IUserRepository) {}

  async execute(dto: CreateUserDTO): Promise<User> {
    const user = new User({
      id: randomUUID(),
      ...dto,
    });

    await this.userRepo.save(user);
    return user;
  }
}
