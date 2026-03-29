import { useState } from "react";

export default function Base64Mod() {

    const [mode, setMode] = useState("encode");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    
    function handleCopy(){

    }

    return (
        <div className="container mt-4">
            <h2>Base64 Encoder / Decoder</h2>
            
            {/* TABS */}
            <ul className="nav nav-tabs mb-3 mt-4">
                <li className="nav-item">
                    <button
                        className={`nav-link ${mode === "encode" ? "active" : ""}`}
                        onClick={() => setMode("encode")}
                    >
                        Encode
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${mode === "decode" ? "active" : ""}`}
                        onClick={() => setMode("decode")}
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
                {copied && (
                    <span className="text-success">Copiado!</span>
                )}
            </div>
        </div>
    );
}