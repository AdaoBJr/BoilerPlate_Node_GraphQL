import { v4 as uuidV4 } from 'uuid';

class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) this.id = uuidV4();
  }
}

export { User };
