export class Repo {
  id: number;
  name: string;
  private: boolean;
  pullRequests: PR[];
}

export class PR {
  title: string;
  created_at: string;
  updated_at: string;
  status: string;
  labels: string[];
  assignees: User[];
  user: User;
}

export class User {
  login: string;
}
