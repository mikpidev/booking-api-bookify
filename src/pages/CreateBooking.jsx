import React, { useState } from "react";
import { createBooking } from "../services/bookings";
import { useNavigate } from "react-router-dom";

export default function CreateBooking() {

    const [booking, setBooking] = useState("");
    const [check_in_date, setCheck_in_date] = useState("");
    const [check_out_date, setCheck_out_date] = useState("");
    const [total_amount, setTotal_amount] = useState("");
    const [accomodation_id, setAccomodation_id] = useState("");
    const [user_id, setUser_id] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = { booking, check_in_date, check_out_date, total_amount, accomodation_id, user_id };
            const res = await createBooking(payload);
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
              <h2 className="card-title mb-4 text-center">Crear Booking</h2>
      
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Booking</label>
                  <input
                    type="text"
                    placeholder="Booking"
                    value={booking}
                    onChange={(e) => setBooking(e.target.value)}
                    required
                    className="form-control"
                  />
                </div>
      
                <div className="mb-3">
                  <label className="form-label">Check-In</label>
                  <input
                    type="date"
                    value={check_in_date}
                    onChange={(e) => setCheck_in_date(e.target.value)}
                    required
                    className="form-control"
                  />
                </div>
      
                <div className="mb-3">
                  <label className="form-label">Check-Out</label>
                  <input
                    type="date"
                    value={check_out_date}
                    onChange={(e) => setCheck_out_date(e.target.value)}
                    required
                    className="form-control"
                  />
                </div>
      
                <div className="mb-3">
                  <label className="form-label">Total</label>
                  <input
                    type="number"
                    value={total_amount}
                    onChange={(e) => setTotal_amount(e.target.value)}
                    required
                    className="form-control"
                  />
                </div>
      
                <div className="mb-3">
                  <label className="form-label">Acomodación</label>
                  <input
                    type="text"
                    value={accomodation_id}
                    onChange={(e) => setAccomodation_id(e.target.value)}
                    required
                    className="form-control"
                  />
                </div>
      
                <div className="mb-3">
                  <label className="form-label">Usuario</label>
                  <input
                    type="text"
                    value={user_id}
                    onChange={(e) => setUser_id(e.target.value)}
                    required
                    className="form-control"
                  />
                </div>
      
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary">
                    Crear Reserva
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
