export class ApiRoutes {
  public static basePath = import.meta.env.VITE_API_PATH;

  public static postsPath = `${this.basePath}/news`;
}