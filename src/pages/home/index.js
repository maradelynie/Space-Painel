import React, { useState } from "react";

import Navigation from "../../components/navegation";
import SearchBar from "../../components/searchBar";
import "./style.scss";

export default function Home() {
  const [title, setTitle] = useState("Planetas");
  const goToRebels = (title) => {
    setTitle(title);
  };
  return (
    <div className="home_container">
      <div className="home_title">
        <h2>{title}</h2>
      </div>
      <section className="content_container">
        <main className="content_data">
          <SearchBar />
        </main>
        <Navigation goToRebels={goToRebels} />
      </section>
    </div>
  );
}
