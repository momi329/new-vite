import type { Navigation } from "../interfaces";
import Navbar from "./Navbar";

interface Props {
  title?: string;
  navigation: Navigation;
  children?: React.ReactNode;
}

function HomeLayout(props: Props) {
  const { navigation, title, children } = props;
  return (
    <>
      <header>
        {title && <h1 className="text-3xl text-center mb-4">{title}</h1>}
        <Navbar navigation={navigation} />
      </header>
      <main className="grow">
        <div className="h-80">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/df/Uncle_Sam_%28pointing_finger%29.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        {children}
      </main>
      <footer className="text-center">Hotel Footer</footer>
    </>
  );
}

HomeLayout.defaultProps = { title: "", children: undefined };

export default HomeLayout;
