import { useState } from "react";
import { FaLink, FaExchangeAlt, FaCopy, FaTrash } from "react-icons/fa";
import SEO from "../../components/SEO";

export default function URLMod() {

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [mode, setMode] = useState("component");

    function encodeURL() {
        try {
            if (mode === "component") {
                setOutput(encodeURIComponent(input));
            } else {
                setOutput(encodeURI(input));
            }
        } catch (error) {
            setOutput(`Error al codificar.\n${error.message}`);
        }
    }

    function decodeURL() {
        try {
            if (mode === "component") {
                setOutput(decodeURIComponent(input));
            } else {
                setOutput(decodeURI(input));
            }
        } catch (error) {
            setOutput(`URL inválida.\n${error.message}`);
        }
    }

    function swapValues() {
        const temp = input;
        setInput(output);
        setOutput(temp);
    }

    function copiarSalida() {
        navigator.clipboard.writeText(output);
    }

    function clearFields() {
        setInput("");
        setOutput("");
    }

    return (
        <>
            <SEO
                title="URL Codificador / Decodificador"
                description="Codifica y decodifica URLs completas o componentes individuales utilizando percent-encoding."
                keywords="url, percent-encoding, decodificador, codificador"
            />

            <div className="container py-4">

                <h2 className="mb-3">
                    <FaLink className="me-2" />
                    URL Codificador / Decodificador
                </h2>

                <p className="text-body-secondary">
                    Codifica URLs completas o parámetros individuales utilizando percent-encoding.</p>

                <div className="mb-3">

                    <label className="form-label">
                        Modo
                    </label>

                    <select
                        className="form-select"
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                    >
                        <option value="component">
                            Componente (encodeURIComponent)
                        </option>

                        <option value="url">
                            URL completa (encodeURI)
                        </option>
                    </select>

                    <div className="form-text">
                        Use <strong>Componente</strong> para parámetros de consulta y
                        <strong> URL completa</strong> para conservar la estructura de una URL.
                    </div>

                </div>

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