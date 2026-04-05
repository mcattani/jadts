import { Link, useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: "70vh" }}>
            <FaExclamationTriangle className="text-warning mb-4" size={80} />
            <h1 className="display-1 fw-bold">404</h1>
            <h2 className="mb-3">Página no encontrada</h2>
            <p className="text-muted mb-4">
                La ruta <code>{window.location.pathname}</code> no existe.
            </p>
            <div className="d-flex gap-3">
                <Link to="/" className="btn btn-primary">
                    Ir al inicio
                </Link>
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => navigate(-1)}
                >
                    Volver atrás
                </button>
            </div>
        </div>
    );
}