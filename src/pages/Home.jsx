import { BsConeStriped } from "react-icons/bs";

export default function Home() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-6">

          <div className="mb-4">
            <BsConeStriped size={64} className="text-warning" />
          </div>

          <h1 className="display-4 mb-3">DevTools</h1>

          <p className="lead text-muted">
            Pequeña colección de herramientas para desarrolladores
          </p>

          <div className="alert alert-warning mt-4">
            🚧 Sitio en construcción
          </div>

          <p className="text-secondary mt-3">
            Estamos trabajando en nuevas herramientas como generadores de texto,
            utilidades para desarrollo y otros recursos útiles.
          </p>

        </div>
      </div>
    </main>
  );
}