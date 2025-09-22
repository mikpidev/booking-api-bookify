import React, { useEffect, useState } from "react";
import { getAccomodations } from "../services/accomadations";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [accomodations, setAccomodations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAccomodations();
        setAccomodations(data);
      } catch (err) {
        console.error(err);
        alert("Error al cargar las acomodaciones");
      }
    };
    fetchData();
  }, []);

  const goToCreate = () => {
    navigate("/create-accomodation");
  };

  const filteredAccomodations = accomodations.filter((a) =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      {/* Búsqueda y botón de crear */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control w-50"
        />
        <button className="btn btn-success" onClick={goToCreate}>
          Crear Acomodación
        </button>
      </div>

      {/* Lista de acomodaciones */}
      <div className="row g-3">
        {filteredAccomodations.map((b) => (
          <div key={b.id} className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{b.name}</h5>
                <p className="card-text text-truncate">{b.description}</p>
                <p className="card-text"><small className="text-muted">{b.address}</small></p>
                <div className="mt-2 d-flex justify-content-between">
                  <a href={`/accomodations/update/${b.id}`} className="btn btn-primary btn-sm">
                    Editar
                  </a>
                  <a href={`/accomodation/${b.id}`} className="btn btn-outline-primary btn-sm">
                    Ver Detalles
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredAccomodations.length === 0 && (
          <p className="text-center mt-3">No se encontraron acomodaciones.</p>
        )}
      </div>
    </div>
  );
}
