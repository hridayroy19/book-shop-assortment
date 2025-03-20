// projcet.interfac.ts
export interface TProjcet {
  project_name: string;
  title: string;
  about: string;
  imgOne: string;
  technology: string;
  github_link_client: string;
  github_link_server: string;
  live_link: string;
  createdAt?: Date;
  updatedAt?: Date;
}
