import type { Route } from "../interfaces";

function NavCard({ route, label, query }: Route) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="block p-3 shadow-md hover:shadow-lg transition text-center"
      href={`${route}${query ? `?${query}` : ""}`}
    >
      <h2>{label}</h2>
    </a>
  );
}

export default NavCard;
