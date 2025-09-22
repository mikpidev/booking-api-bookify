import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAccomodationById, updateAccomodation } from "../services/accomadations";

export default function UpdateAccomodation() {

    const { id } = useParams(); // asigna el id del URL seleccionado
    const navigate = useNavigate();


    const [form, setForm] = useState({
        name: "",
        description: "",
        address: "",

    });


    //Cargar Datos actuales
    useEffect(() => {

        const fetchData = async () => {

            try {
                const data = await getAccomodationById(id);
                setForm({
                    name: data.name,
                    description: data.description,
                    address: data.address,
                });
            } catch (err) {
                console.error("Error al Cargar Acomodacion");
                alert("No se pudo cargar la acomodacion.");
            }

        };
        fetchData();

    }, [id]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateAccomodation(id, form);
            alert("Acomodacion Actualizada.");
            navigate("/dashboard");
        } catch (err) {
            console.error(err);
            alert("Error al Actualizar la acomodacion");
        }
    };

    const handleCancel = () => {
        navigate ("/dashboard");
    }

    return (
        <div className="container mt-4">
          <div className="card shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
            <div className="card-body">
              <h2 className="card-title mb-4 text-center">Actualizar Acomodación</h2>
      
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                    value={form.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
      
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Descripción</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Descripción"
                    value={form.description}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
      
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Dirección</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Dirección"
                    value={form.address}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
      
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary">
                    Guardar cambios
                  </button>
                  <button type="button" onClick={handleCancel} className="btn btn-secondary">
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
      

}