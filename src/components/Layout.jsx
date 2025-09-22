import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Bookify</h2>
        <nav className="space-y-3">
          <Link to="/dashboard" className="block text-gray-700 hover:text-blue-600">
            Dashboard
          </Link>
          <Link to="/create-accomodation" className="block text-gray-700 hover:text-blue-600">
            Crear Acomodación
          </Link>
          <Link to="/booking" className="block text-gray-700 hover:text-blue-600">
            Crear Booking
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Panel de Administración</h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Cerrar sesión
          </button>
        </header>

        {/* Contenido dinámico */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
