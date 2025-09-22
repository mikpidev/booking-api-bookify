//importar api

import api from "../api"

//obtener accomodations

export const getAccomodations = async () => {

    const res = await api.get("/accomodations");

    return res.data

};

export const createAccomodation = async(payload) => {
    
    const res = await api.post("/accomodation", payload);

    return res.data;
};

export const getAccomodationById = async(id) => {

    const res = await api.get(`/accomodation/${id}`);

    return res.data
}

export const updateAccomodation = async(id, payload) => {

    const res = await api.put(`/accomodation/${id}`, payload);

    return res.data;
}

