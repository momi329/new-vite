export type Navigation = Route[];

export interface Route {
  route: string;
  label: string;
  query?: string;
}
