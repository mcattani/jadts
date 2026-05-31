import { useState } from "react";
import {
    FaIndent,
    FaCompressAlt,
    FaCheckCircle,
    FaTrash,
    FaCopy
} from "react-icons/fa";

export default function JSONFormatter() {

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [message, setMessage] = useState("");
    const [alertVariant, setAlertVariant] = useState("success");

    function handleFormat() {
        try {
            const obj = JSON.parse(input);
            setOutput(JSON.stringify(obj, null, 4));
            setMessage("JSON formateado correctamente.");
            setAlertVariant("success");
        } catch (error) {
            setOutput("");
            setMessage(`Error: JSON inválido -> ${error.message}`);
            setAlertVariant("danger");
        }
    };

    function handleMinify() {
        try {
            const obj = JSON.parse(input);
            setOutput(JSON.stringify(obj));
            setMessage("JSON comprimido correctamente.")
            setAlertVariant("success");
        } catch (error) {
            setOutput("");
            setMessage(`Error: JSON inválido -> ${error.message}`);
            setAlertVariant("danger");
        }
    };

    function handleValidate() {
        try {
            JSON.parse(input);
            setMessage("JSON válido.");
            setAlertVariant("success");
        } catch (error) {
            setMessage(`Error: JSON inválido -> ${error.message}`);
            setAlertVariant("danger");
        }
    };

    function handleClear() {
        setInput("");
        setOutput("");
        setMessage("");
    };

    //const handleCopy = () => navigator.clipboard.writeText(output);
    function handleCopy(){
        navigator.clipboard.writeText(output);
        setMessage("Copiado al portapapeles.");
        setAlertVariant("success");
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">JSON Formatter & Validator</h2>

            <div className="mb-3">
                <label className="form-label">JSON Input</label>

                <textarea
                    className="form-control"
                    rows="12"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Pega aquí tu JSON..."
                />
            </div>

            <div className="d-flex flex-wrap gap-2 mb-3">
                <button
                    className="btn btn-primary"
                    onClick={handleFormat}
                    disabled={!input.trim()}
                >
                    <FaIndent className="me-2" />
                    Format
                </button>

                <button
                    className="btn btn-secondary"
                    onClick={handleMinify}
                    disabled={!input.trim()}
                >
                    <FaCompressAlt className="me-2" />
                    Minify
                </button>

                <button
                    className="btn btn-success"
                    onClick={handleValidate}
                    disabled={!input.trim()}
                >
                    <FaCheckCircle className="me-2" />
                    Validate
                </button>

                <button
                    className="btn btn-outline-light"
                    onClick={handleClear}
                    disabled={!input.trim() && !output}
                >
                    <FaTrash className="me-2" />
                    Clear
                </button>
            </div>

            {message && (
                <div className={`alert alert-${alertVariant}`}>
                    {message}
                </div>
            )}

            <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <label className="form-label mb-0">
                        Output
                    </label>

                    <button
                        className="btn btn-info btn-sm"
                        onClick={handleCopy}
                        disabled={!output}
                    >
                        <FaCopy className="me-2" />
                        Copy
                    </button>
                </div>

                <textarea
                    className="form-control"
                    rows="12"
                    value={output}
                    readOnly
                />
            </div>
        </div>
    );
}
