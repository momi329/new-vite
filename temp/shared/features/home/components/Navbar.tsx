import type { Navigation } from "../interfaces";
import NavCard from "./NavCard";

interface Props {
  navigation: Navigation;
}

function Navbar({ navigation }: Props) {
  return (
    <div className="mb-8 text-center">
      <nav className="inline-flex align-center justify-center gap-6 px-8 py-4 border bg-white rounded-md">
        {navigation.map((route) => (
          <NavCard key={route.route} {...route} />
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
