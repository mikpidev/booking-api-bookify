// AccomodationDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAccomodationById } from "../services/accomadations";
import { useNavigate } from "react-router-dom";
import { createBooking, getBookings } from "../services/bookings";


export default function AccomodationDetail() {
    const { id } = useParams();
    const [accomodation, setAccomodation] = useState("null");
    const [bookings, setBookings] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAccomodationById(id);
            setAccomodation(data);
        };
        fetchData();
    }, [id]);

    if (!accomodation) return <p>Cargando...</p>;



    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const allBookings = await getBookings();
                // Filtrar solo los bookings de esta acomodación
                const filtered = allBookings.filter(b => b.accomodation_id === parseInt(id));
                setBookings(filtered);
            } catch (err) {
                console.error(err);
            }
        };
        fetchBookings();
    }, [id]);

    const handleCancel = () => {
        navigate("/dashboard");
    }

    const goToCreate = () => {

        navigate("/booking");
    }

    return (
        <div className="container mt-4">
          {/* Información de la acomodación */}
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">{accomodation.name}</h2>
              <p className="card-text">{accomodation.description}</p>
              <p className="card-text"><small className="text-muted">{accomodation.address}</small></p>
            </div>
          </div>
      
          {/* Bookings */}
          <h3>Bookings</h3>
          <div className="row g-3 mb-4">
            {bookings.length > 0 ? (
              bookings.map((b) => (
                <div key={b.id} className="col-md-6">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <span>{b.booking}</span>
                      <a href={`/status_booking/${b.id}`} className="btn btn-primary btn-sm">
                        Editar
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No hay bookings para esta acomodación.</p>
            )}
          </div>
      
          {/* Acciones */}
          <div className="d-flex gap-2">
            <button className="btn btn-secondary" type="button" onClick={handleCancel}>
              Regresar a Dashboard
            </button>
            <button className="btn btn-success" onClick={goToCreate}>
              Crear Booking
            </button>
          </div>
        </div>
      );
      
}
