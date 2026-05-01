// Componentes
import ToolCard from "../components/ToolCard";
import { tools } from "../tools";

// Iconos
import { BsConeStriped } from "react-icons/bs";

export default function Home({ searchTerm }) {

  const query = searchTerm.toLowerCase().trim();

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(query)
  );

  return (
    <main className="container py-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-6">
          <div className="mb-4">
            <BsConeStriped size={64} className="text-warning" />
          </div>
          <h1 className="display-4 mb-3">DevTools</h1>
          <p className="lead text-muted">
            Pequeña colección de herramientas multipropósito
          </p>
          <div className="alert alert-warning mt-4">
            🚧 Sitio en construcción
          </div>

          {/*Tarjetas*/}
          <div className="container mt-4">
            <h1 className="mb-4">Dev Tools</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {filteredTools.length > 0 ? (
                filteredTools.map((tool, index) => (
                  <ToolCard key={index} tool={tool} />
                ))
              ) : (
                <p className="text-muted fs-5 mb-0">No se encontraron resultados.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}