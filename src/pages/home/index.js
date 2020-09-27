import React, { useState, useEffect } from "react";

import Navigation from "../../components/navegation";
import SearchBar from "../../components/searchBar";
import DataList from "../../components/dataList";
import "./style.scss";

import planets from "../../mock/mockPlanets.json";
import rebels from "../../mock/mockRebels.json";

export default function Home() {
  const [title, setTitle] = useState("Planetas");
  const [loadedData, setLoadedData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [search, setSearch] = useState("");

  const goToRebels = (title) => {
    setTitle(title);
  };

  useEffect(() => {
    getData();
  }, [title]);

  const getData = async () => {
    if (title === "Planetas") {
      await setLoadedData(planets);
      await setShowData(planets);
    } else if (title === "Rebeldes") {
      await setLoadedData(rebels);
      await setShowData(rebels);
    }
  };

  useEffect(() => {
    if (search !== "") {
      setShowData(
        loadedData.filter((item) => item.nome.toLowerCase().includes(search))
      );
    } else {
      if (loadedData.length > 1) {
        setShowData(loadedData);
      }
    }
  }, [search]);

  return (
    <div className="home_container">
      <div className="home_title">
        <h2>{title}</h2>
      </div>
      <section className="content_container">
        <main className="content_main">
          <SearchBar page={title} setSearch={setSearch} search={search} />
          <DataList content={showData} page={title} />
        </main>
        <Navigation goToRebels={goToRebels} />
      </section>
    </div>
  );
}
