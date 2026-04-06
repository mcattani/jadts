import { useState } from "react";
import CryptoJS from "crypto-js";

export default function HMACMod() {

    const [message, setMessage] = useState("");
    const [key, setKey] = useState("");
    const [algorithm, setAlgorithm] = useState("SHA256");
    const [result, setResult] = useState("");

    const [verifyMessage, setVerifyMessage] = useState("");
    const [verifyKey, setVerifyKey] = useState("");
    const [expectedHmac, setExpectedHmac] = useState("");
    const [verifyResult, setVerifyResult] = useState(null);

    function generateHmac(algorithm, message, key) {
        switch (algorithm) {
            case "SHA256":
                return CryptoJS.HmacSHA256(message, key);
            case "SHA512":
                return CryptoJS.HmacSHA512(message, key);
            case "SHA384":
                return CryptoJS.HmacSHA384(message, key);
            case "SHA224":
                return CryptoJS.HmacSHA224(message, key);
            case "SHA3":
                return CryptoJS.HmacSHA3(message, key);
            default:
                return CryptoJS.HmacSHA256(message, key);
        }
    }

    function handleGenerate() {
        if (!message || !key) return;
        const hash = generateHmac(algorithm, message, key);
        setResult(hash.toString());
    }

    function handleVerify() {
        if (!verifyMessage || !verifyKey || !expectedHmac) return;


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

            {/* Verificación HMAC */}
            <div className="card shadow-sm mt-4">
                <div className="card-body">
                    <h5 className="card-title mb-3">
                        Verificar HMAC
                    </h5>

                    {/* Mensaje */}
                    <div className="mb-3">
                        <label className="form-label">Mensaje</label>
                        <textarea
                            className="form-control"
                            rows="2"
                            value={verifyMessage}
                            onChange={(e) => setVerifyMessage(e.target.value)}
                        />
                    </div>

                    {/* Key */}
                    <div className="mb-3">
                        <label className="form-label">Clave Secreta</label>
                        <input
                            type="text"
                            className="form-control"
                            value={verifyKey}
                            onChange={(e) => setVerifyKey(e.target.value)}
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
                            <option value="SHA256">HmacSHA256</option>
                            <option value="SHA512">HmacSHA512</option>
                            <option value="SHA384">HmacSHA384</option>
                            <option value="SHA224">HmacSHA224</option>
                            <option value="SHA3">HmacSHA3</option>
                        </select>
                    </div>

                    {/* HMAC esperado */}
                    <div className="mb-3">
                        <label className="form-label">HMAC esperado</label>
                        <input
                            type="text"
                            className="form-control"
                            value={expectedHmac}
                            onChange={(e) => setExpectedHmac(e.target.value)}
                        />
                    </div>

                    {/* Resultado */}
                    {verifyResult !== null && (
                        <div className={`alert ${verifyResult ? "alert-success" : "alert-danger"} py-2`}>
                            {verifyResult ? "HMAC válido" : "HMAC inválido"}
                        </div>
                    )}

                    {/* Botón */}
                    <button
                        className="btn btn-primary"
                        onClick={handleVerify}
                        disabled={!verifyMessage || !verifyKey || !expectedHmac}
                    >
                        Verificar
                    </button>
                </div>
            </div>
        </div>
    );
}