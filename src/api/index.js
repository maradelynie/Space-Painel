import axios from "axios";
import sha1 from "sha1";

const base = process.env.REACT_APP_API_URL;
const api = axios.create({
  baseURL: base,
});

export async function getPlanetsApi() {
  const auth = localStorage.getItem("token");

  const config = {
    headers: {
      auth: auth,
    },
  };

  const response = await api.get("spacePainel/planets/", config);
  return response.data.records;
}
export async function getRebelsApi() {
  const auth = localStorage.getItem("token");

  const config = {
    headers: {
      auth: auth,
    },
  };
  const response = await api.get("spacePainel/rebels/", config);
  return response.data.records;
}
export async function postPlanetApi(data) {
  const auth = localStorage.getItem("token");

  const config = {
    headers: {
      auth: auth,
    },
  };
  const response = await api.post("spacePainel/planets/", data, config);

  return response.data;
}
export async function postAuthApi(email, password) {
  const auth = localStorage.getItem("token");

  const config = {
    headers: {
      auth: auth,
    },
  };
  const data = {
    email: email,
    password: sha1(password),
  };

  const response = await api.post("spacePainel/users/", data, config);

  return response.data;
}

export async function validateToken() {
  const auth = localStorage.getItem("token");
  if (auth) {
    const config = {
      headers: {
        auth: auth,
      },
    };

    const response = await api.get("spacePainel/users/validate", config);
    return response.data;
  }
  return false;
}
