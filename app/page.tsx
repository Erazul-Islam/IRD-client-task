/* eslint-disable prettier/prettier */

// eslint-disable-next-line import/order

"use client"
import Navigation from "../components/Navigation.jsx"
import Categories from "../components/categories/Categories.jsx"
import Settings from "../components/settings/Settings.jsx"

export default function Home() {




  return (
    <div>
      <div className="md:flex ">
        <Navigation />
        <Categories />
        <Settings />
      </div>
    </div>
  );
}
