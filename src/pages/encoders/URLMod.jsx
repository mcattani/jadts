import { useState } from "react";
import { FaLink, FaExchangeAlt, FaCopy, FaTrash } from "react-icons/fa";
import SEO from "../../components/SEO";


export default function URLMod() {

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    function encodeURL() {
    
    }

    function decodeURL() {

    }

    function swapValues() {
    
    }

    function copiarSalida() {
    
    }

    function clearFields() {
    
    }

    return (
        <>
            <SEO
                title="URL Codificador / Decodificador"
                description="Codifica y decodifica URLs utilizando percent-encoding."
                keywords="url, percent-encoding, decodificador, codificador"
            />

            <div className="container py-4">

                <h2 className="mb-3">
                    <FaLink className="me-2" />
                    URL Codificador / Decodificador
                </h2>

                <p className="text-body-secondary">
                    Codifica y decodifica URLs utilizando percent-encoding.
                </p>

                <div className="row g-3">
                    <div className="col-lg-6">

                        <label className="form-label">
                            Entrada
                        </label>

                        <textarea
                            className="form-control"
                            rows="12"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ingrese el texto..."
                        />

                    </div>
                    <div className="col-lg-6">

                        <label className="form-label">
                            Salida
                        </label>

                        <textarea
                            className="form-control"
                            rows="12"
                            value={output}
                            readOnly
                            placeholder="El resultado aparecerá aquí..."
                        />
                    </div>
                </div>

                <div className="d-flex flex-wrap gap-2 mt-4">

                    <button
                        className="btn btn-primary"
                        disabled={!input}
                        onClick={encodeURL}
                    >
                        Codificar
                    </button>

                    <button
                        className="btn btn-success"
                        disabled={!input}
                        onClick={decodeURL}
                    >
                        Decodificar
                    </button>

                    <button
                        className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                        disabled={!input && !output}
                        onClick={swapValues}
                        title="Intercambiar"
                    >
                        <FaExchangeAlt />
                    </button>

                    <button
                        className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                        disabled={!output}
                        onClick={copiarSalida}
                        title="Copiar resultado"
                    >
                        <FaCopy />
                    </button>

                    <button
                        className="btn btn-outline-danger d-flex align-items-center justify-content-center"
                        onClick={clearFields}
                        disabled={!input && !output}
                        title="Limpiar"
                    >
                        <FaTrash />
                    </button>

                </div>
            </div>
        </>
    );
};