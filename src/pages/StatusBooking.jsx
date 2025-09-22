import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBookingById ,statusBooking } from "../services/bookings";

export default function StatusBooking() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        status: "",
    });

    //Cargar Datos Actuales

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getBookingById(id);
            if (!data) {
              alert("No se encontró el booking");
              return;
            }
            setForm({
              user: data.user,
              accomodation: data.accomodation,
              check_in_date: data.check_in_date,
              check_out_date: data.check_out_date,
              total_amount: data.total_amount,
              status: data.status,
            });
          } catch (err) {
            console.error("Error al cargar booking", err);
            alert("Error al cargar booking");
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
            await statusBooking(id, form);
            alert("Estado del Booking Actualizado");
            navigate("/dashboard");

        } catch (err) {

            console.error(err);
            alert("Error al actualizar Estado del booking");
        }
    };

    const handleCancel = () => {
        navigate("/dashboard");
    }

    return (
        <div className="container mt-4">
          <div className="card shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
            <div className="card-body">
              <h2 className="card-title mb-4 text-center">Actualizar Booking</h2>
      
              <form onSubmit={handleSubmit}>
                {/* Campos de solo lectura */}
                <div className="mb-3">
                  <label className="form-label">Usuario</label>
                  <input
                    type="text"
                    value={form.user ?? ""}
                    readOnly
                    className="form-control bg-light"
                  />
                </div>
      
                <div className="mb-3">
                  <label className="form-label">Acomodación</label>
                  <input
                    type="text"
                    value={form.accomodation ?? ""}
                    readOnly
                    className="form-control bg-light"
                  />
                </div>
      
                <div className="mb-3">
                  <label className="form-label">Check-in</label>
                  <input
                    type="text"
                    value={form.check_in_date ?? ""}
                    readOnly
                    className="form-control bg-light"
                  />
                </div>
      
                <div className="mb-3">
                  <label className="form-label">Check-out</label>
                  <input
                    type="text"
                    value={form.check_out_date ?? ""}
                    readOnly
                    className="form-control bg-light"
                  />
                </div>
      
                <div className="mb-3">
                  <label className="form-label">Total</label>
                  <input
                    type="text"
                    value={form.total_amount ?? ""}
                    readOnly
                    className="form-control bg-light"
                  />
                </div>
      
                {/* Campo editable */}
                <div className="mb-3">
                  <label className="form-label">Estado</label>
                  <input
                    type="text"
                    name="status"
                    placeholder="Estado"
                    value={form.status ?? ""}
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

