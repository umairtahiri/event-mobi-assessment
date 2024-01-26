export type GistFile = {
  filename: string;
  type: string;
  language: string;
  raw_url: string;
  size: number;
};

export type GistFiles = Record<string, GistFile>;

export type User = {
  avatar_url: string;
  name: string;
  login: string;
};

export type Fork = {
  created_at: string;
  id: string;
  url: string;
  user: User;
};

export type Gist = {
  url: string;
  forks: Fork[];
  forks_url: string;
  id: string;
  files: GistFiles;
  created_at: string;
  description: string;
};

export type CustomGist = {
  id: string;
  description: string;
  first_file_name: string;
  file_count: number;
  languages: string;
};

export type Pagination = {
  count: number;
  per_page: number;
  page: number;
};
