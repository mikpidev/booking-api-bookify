import api from "../api";

export const getBookings = async () => {
  const res = await api.get("/bookings");

  return res.data;
};

export const getBookingById = async (id) => {
  const bookings = await getBookings();
  
  return bookings.find((b) => b.id === parseInt(id));
};

export const statusBooking = async (id, payload) => {
  const res = await api.patch(`/status_booking/${id}`, payload);

  return res.data;
};

export const createBooking = async (payload) => {
  const res = await api.post("/booking", payload);

  return res.data;
};

export const getAccomodationCalendar = async (id_accomodation) => {
  const res = await api.get(`/bookings/calendar/${id_accomodation}`);

  return res.data;
};
