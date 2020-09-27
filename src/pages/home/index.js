import React, { useEffect } from "react";

import Navigation from "../../components/navegation";
import SearchBar from "../../components/searchBar";
import DataList from "../../components/dataList";
import "./style.scss";

import { setRecords } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import planets from "../../mock/mockPlanets.json";
import rebels from "../../mock/mockRebels.json";

export default function Home() {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = async () => {
    if (page.title === "Planetas") {
      dispatch(setRecords(planets));
    } else if (page.title === "Rebeldes") {
      dispatch(setRecords(rebels));
    }
  };

  return (
    <div className="home_container">
      <div className="home_title">
        <h2>{page.title}</h2>
      </div>
      <section className="content_container">
        <main className="content_main">
          <SearchBar />
          <DataList />
        </main>
        <Navigation />
      </section>
    </div>
  );
}
