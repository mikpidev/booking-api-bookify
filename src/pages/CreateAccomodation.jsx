import React, { useState } from "react";
import { createAccomodation } from "../services/accomadations";
import { useNavigate } from "react-router-dom";


export default function CreateAccomodation() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = { name, description, address };
            const res = await createAccomodation(payload);
            alert("Reserva creada: " + JSON.stringify(res));
        } catch (err) {
            console.error(err);
            alert("Error al crear la reserva");
        }
    };

    const handleCancel = () => {
        navigate("/dashboard");
    }


    return (
        <div className="container mt-4">
          <div className="card shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
            <div className="card-body">
              <h2 className="card-title mb-4 text-center">Crear Acomodación</h2>
      
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="form-control"
                  />
                </div>
      
                <div className="mb-3">
                  <label className="form-label">Descripción</label>
                  <input
                    type="text"
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="form-control"
                  />
                </div>
      
                <div className="mb-3">
                  <label className="form-label">Dirección</label>
                  <input
                    type="text"
                    placeholder="Dirección"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="form-control"
                  />
                </div>
      
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary">
                    Crear Acomodación
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
