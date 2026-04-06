import { useState } from "react";
import CryptoJS from "crypto-js";

export default function HMACMod() {

    const [message, setMessage] = useState("");
    const [key, setKey] = useState("");
    const [algorithm, setAlgorithm] = useState("SHA256");
    const [result, setResult] = useState("");

    function handleGenerate() {
        if (!message || !key) return;

        let hash = "";
        switch (algorithm) {
            case "SHA256":
                hash = CryptoJS.HmacSHA256(message, key);
                break;
            case "SHA512":
                hash = CryptoJS.HmacSHA512(message, key);
                break;
            case "SHA384":
                hash = CryptoJS.HmacSHA384(message, key);
                break;
            case "SHA224":
                hash = CryptoJS.HmacSHA224(message, key);
                break;
            case "SHA3":
                hash = CryptoJS.HmacSHA3(message, key);
                break;
            default:
                hash = CryptoJS.HmacSHA256(message, key);
                break;
        }

        setResult(hash.toString());    
    }

    const handleCopy = () => { navigator.clipboard.writeText(result); }

    const handleClear = () => {
        setMessage("");
        setKey("");
        setResult("");
    }

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h4 className="card-title mb-3">
                        Generador HMAC
                    </h4>

                    {/* Mensaje */}
                    <div className="mb-3">
                        <label className="form-label">Mensaje</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Ingrese su mensaje..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    {/* Key */}
                    <div className="mb-3">
                        <label className="form-label">Clave Secreta</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese la clave secreta..."
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                        />
                    </div>

                    {/* Algoritmo */}
                    <div className="mb-3">
                        <label className="form-label">Algoritmo</label>
                        <select
                            className="form-select"
                            value={algorithm}
                            onChange={(e) => setAlgorithm(e.target.value)}
                        >
                            <option value="SHA256">HmacSHA256 (recomendado)</option>
                            <option value="SHA512">HmacSHA512</option>
                            <option value="SHA384">HmacSHA384</option>
                            <option value="SHA224">HmacSHA224</option>
                            <option value="SHA3">HmacSHA3</option>
                        </select>
                    </div>

                    {/* Resultado */}
                    <div className="mb-3">
                        <label className="form-label">HMAC</label>
                        <input
                            type="text"
                            className="form-control"
                            value={result || "-"}
                            readOnly
                        />
                    </div>

                    {/* Info */}
                    <div className="alert alert-secondary py-2">
                        Usa una clave secreta para asegurar la integridad y autenticidad del mensaje.
                    </div>

                    {/* Botones */}
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-primary"
                            onClick={handleGenerate}
                            disabled={!message || !key}
                        >
                            Generar
                        </button>

                        <button
                            className="btn btn-outline-secondary"
                            onClick={handleCopy}
                            disabled={!result}
                        >
                            Copiar
                        </button>
                        <button
                            className="btn btn-outline-secondary"
                            onClick={handleClear}
                            
                        >
                            Limpiar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}