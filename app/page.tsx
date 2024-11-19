/* eslint-disable prettier/prettier */

// eslint-disable-next-line import/order
import Dua from "@/components/dua/Dua";
import Navigation from "../components/Navigation.jsx"
import Categories from "../components/categories/Categories.jsx"
import Settings from "../components/settings/Settings.jsx"

export default function Home() {
  return (
    <div>
      <div className="md:flex justify-between">
        <Navigation />
        <Categories />
        <Dua />
        <Settings />
      </div>
    </div>
  );
}
