import { IUserRepository } from "../domain/user/IUserRepository";
import { User } from "../domain/user/User";

export class InMemoryUserRepository implements IUserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(u => u.props.id === id) || null;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }
}
