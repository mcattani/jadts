import { useState } from "react";
import SEO from "../../components/SEO";
import {
    FaCompressAlt,
    FaCopy,
    FaIndent,
    FaTrash
} from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { format } from "sql-formatter";

export default function SQLFormatter() {

    const [language, setLanguage] = useState("sql");
    const [keywordCase, setKeywordCase] = useState("preserve");
    const [indentation, setIndentation] = useState("2");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const formatterOptions = {
        language,
        keywordCase,
        tabWidth: indentation === "tab" ? 4 : Number(indentation),
        useTabs: indentation === "tab",
    };

    function formatSQL() {
        try {
            setOutput(format(input, formatterOptions));
        } catch (error) {
            console.error(error);
            setOutput(`Error al formatear la consulta.
                \n• Verifica que la sintaxis sea correcta.
                \n• Confirma que el dialecto seleccionado sea el adecuado.`);
        }
    }

    function minifySQL() {
        try {
            setOutput(format(input, formatterOptions)
                .replace(/\n+/g, " ")
                .replace(/\s+/g, " ")
                .trim());
        } catch (error) {
            console.error(error);
            setOutput(`Error al minimizar la consulta.
                \n• Verifica que la sintaxis sea correcta.
                \n• Confirma que el dialecto seleccionado sea el adecuado.`);
        };
    }

    function swapSQL() {
        setInput(output);
        setOutput(input);
    }

    function clearAll() {
        setInput("");
        setOutput("");
    }

    function copyOutput() { navigator.clipboard.writeText(output); }

    return (
        <>
            <SEO
                title="Herramientas SQL"
                description="Formatea, minifica y mejora la legibilidad de consultas SQL online."
                keywords="sql formatter, sql beautifier, sql minifier, sql pretty print"
            />

            <div className="container py-4">
                <h1 className="mb-3">
                    Herramientas SQL
                </h1>
                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="row g-3">

                            {/* Dialect */}
                            <div className="col-md-4">
                                <label className="form-label">
                                    Dialecto SQL
                                </label>
                                <select
                                    className="form-select"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                >
                                    <option value="sql">Standard SQL</option>
                                    <option value="mysql">MySQL</option>
                                    <option value="postgresql">PostgreSQL</option>
                                    <option value="sqlite">SQLite</option>
                                    <option value="transactsql">SQL Server</option>
                                    <option value="plsql">Oracle (PL/SQL)</option>
                                </select>
                            </div>

                            {/* Keyword Case */}
                            <div className="col-md-4">
                                <label className="form-label">
                                    Capitalización
                                </label>
                                <select
                                    className="form-select"
                                    value={keywordCase}
                                    onChange={(e) => setKeywordCase(e.target.value)}
                                >
                                    <option value="preserve">Original</option>
                                    <option value="upper">Mayúscula</option>
                                    <option value="lower">Minúscula</option>
                                </select>
                            </div>

                            {/* Indentation */}
                            <div className="col-md-4">
                                <label className="form-label">
                                    Indentación
                                </label>
                                <select
                                    className="form-select"
                                    value={indentation}
                                    onChange={(e) => setIndentation(e.target.value)}
                                >
                                    <option value="2">2 Espacios</option>
                                    <option value="4">4 Espacios</option>
                                    <option value="tab">Tabulación</option>
                                </select>
                            </div>
                        </div>

                        <div className="row mt-4">
                            {/* Input */}
                            <div className="col-lg-6">
                                <label className="form-label">
                                    Entrada SQL
                                </label>
                                <textarea
                                    className="form-control font-monospace"
                                    rows="16"
                                    placeholder="Pega una o más consultas SQL..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                            </div>

                            {/* Output */}
                            <div className="col-lg-6">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <label className="form-label mb-0">
                                        Salida SQL
                                    </label>
                                    <button
                                        className="btn btn-sm mt-1 btn-outline-secondary d-flex align-items-center justify-content-center"
                                        onClick={copyOutput}
                                        disabled={!output}
                                    >
                                        <FaCopy className="me-2" />
                                        Copiar
                                    </button>
                                </div>
                                <textarea
                                    className="form-control font-monospace"
                                    rows="16"
                                    readOnly
                                    value={output}
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-wrap gap-2 mt-4">
                            <button
                                className="btn btn-primary d-flex align-items-center justify-content-center"
                                onClick={formatSQL}
                                disabled={!input}
                            >
                                <FaIndent className="me-2" />
                                Formatear
                            </button>
                            <button
                                className="btn btn-secondary d-flex align-items-center justify-content-center"
                                onClick={minifySQL}
                                disabled={!input}
                            >
                                <FaCompressAlt className="me-2" />
                                Minificar
                            </button>
                            <button
                                className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                                onClick={swapSQL}
                                disabled={!input && !output}
                            >
                                <FaArrowsRotate />
                            </button>
                            <button
                                className="btn btn-outline-danger d-flex align-items-center justify-content-center"
                                onClick={clearAll}
                                disabled={!input && !output}
                            >
                                <FaTrash className="me-1" />
                                Limpiar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}