import { usersArraySchema } from '../schemas/users.schema.js';

export class UsersClient {
  constructor(request) {
    this.request = request;
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
  }

  async getUsers() {
    const response = await this.request.get(`${this.baseUrl}/users`);

    if (response.status() !== 200) {
      throw new Error(`Erro API: ${response.status()}`);
    }

    const json = await response.json();

    // validação Joi - se o json do response for === schemas
    const { error } = usersArraySchema.validate(json);
    if (error) {
      throw new Error('Schema inválido: ' + error.message);
    }

    return json;
  }
}