import React, { useEffect } from "react";
import { getPlanetsApi, getRebelsApi, validateToken } from "../../api";
import Navigation from "../../components/navegation";
import SearchBar from "../../components/searchBar";
import DataList from "../../components/dataList";
import AddPlanet from "../../components/addPlanet";
import { useHistory } from "react-router-dom";

import "./style.scss";

import { setRecords, showAlert } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Home() {
  const history = useHistory();

  const dispatch = useDispatch();
  const { page, addPlanet } = useSelector((state) => state);

  useEffect(() => {
    const getData = async () => {
      if (page.title === "Planetas") {
        const data = await getPlanetsApi();
        dispatch(setRecords(data));
      } else if (page.title === "Rebeldes") {
        const data = await getRebelsApi();
        dispatch(setRecords(data));
      }
    };
    getData();
  }, [page, dispatch]);

  useEffect(() => {
    const validate = async () => {
      const valid = await validateToken();
      if (!valid.res) {
        history.push("/");
        dispatch(showAlert());
      }
    };
    validate();
    const timeValidation = setInterval(() => {
      validate();
    }, 10000);

    return () => {
      clearInterval(timeValidation);
      localStorage.removeItem("token");
    };
  }, []);

  const showAddModal = () => {
    if (addPlanet) {
      return <AddPlanet />;
    }
  };

  return (
    <>
      {showAddModal()}
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
    </>
  );
}
