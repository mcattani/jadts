import { useState, useEffect } from "react";

export default function Base64Mod() {

    const [mode, setMode] = useState("encode");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (!input) {
            setOutput("");
            setError("");
            return;
        }
        try {
            // Encode
            if (mode === "encode") {
                setOutput(encodeB64(input));
                setError("");
                return;
            }
            // Decode
            if (!validateBase64(input)) {
                setOutput("");
                setError("Error: No es una string válida.");
                return;
            }

            setOutput(decodeB64(input));
            setError("");

        } catch {
            setOutput("");
            setError("Error: No es una string válida.");
        }

    }, [input, mode]);

    // No funciona -> genera un bsae64 no estándar
    // encodeURIComponent -> convierte el str a 'ascii safe' que se pueda convertir
    //const encodeB64 = (str) => btoa(encodeURIComponent(str));
    //const decodeB64 = (str) => decodeURIComponent(atob(str));

    // Sugerencia en stackOverflow
    // Flujo correcto: String → bytes (UTF-8) → Base64 / Base64 → bytes → String
    function encodeB64(str) {
        // Convertir string a bytes (UTF-8)
        const bytes = new TextEncoder().encode(str);
        // Convertir bytes a Base64
        let binary = "";
        bytes.forEach((b) => (binary += String.fromCharCode(b)));
        return btoa(binary);
    }

    function decodeB64(str) {
        // Convertir Base64 a bytes
        const binary = atob(str);
        // Convertir string a bytes
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        // Convertir bytes a string
        return new TextDecoder().decode(bytes);
    }

    const handleCopy = () => navigator.clipboard.writeText(output);

    function validateBase64(str) {
        // Regex obtenigo de StackOverflow (valida forma)
        // https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
        const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
        if (!base64regex.test(str)) return false;

        // atob (valida contenido)
        try {
            atob(str);
            return true;
        } catch {
            return false;
        }
    }

    function handleModeChange(newMode) {
        // Si el valor previo es igual no hacer nada
        if (newMode === mode) return;

        // Si no lo son, invertimos el input/output
        if (output) {
            setInput(output);
            setOutput("");
        }
        setError("");
        setMode(newMode);
    }

    return (
        <div className="container mt-4">
            <h2>Base64 Encoder / Decoder</h2>
            <p className="text-muted">Encoding ≠ Encryption, pero vive en esta sección ¯\_(ツ)_/¯</p>
            {/* TABS */}
            <ul className="nav nav-tabs mb-3 mt-4">
                <li className="nav-item">
                    <button
                        className={`nav-link ${mode === "encode" ? "active" : ""}`}
                        onClick={() => handleModeChange("encode")}
                    >
                        Encode
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${mode === "decode" ? "active" : ""}`}
                        onClick={() => handleModeChange("decode")}
                    >
                        Decode
                    </button>
                </li>
            </ul>

            {/* INPUT */}
            <div className="mb-3">
                <label className="form-label">
                    {mode === "encode" ? "Input" : "Input Base64"}
                </label>
                <textarea
                    className="form-control"
                    rows="4"
                    placeholder={
                        mode === "encode"
                            ? "String..."
                            : "Base64 string..."
                    }
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>

            {/* ERROR */}
            {error && (
                <div className="alert alert-danger">
                    {error}
                </div>
            )}

            {/* OUTPUT */}
            <div className="mb-3">
                <label className="form-label">Output</label>
                <textarea
                    className="form-control"
                    rows="4"
                    value={output}
                    readOnly
                />
            </div>

            {/* ACTIONS */}
            <div className="d-flex align-items-center gap-2">
                <button
                    className="btn btn-secondary"
                    onClick={handleCopy}
                    disabled={!output}
                >
                    Copiar
                </button>
            </div>
        </div>
    );
}