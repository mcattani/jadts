import { useState } from "react";
import CryptoJS from "crypto-js";
import { FaArrowsRotate } from "react-icons/fa6";

export default function AESMod() {

    const [input, setInput] = useState("");
    const [key, setKey] = useState("");
    const [output, setOutput] = useState("");

    function handleSwap() {
        if (!output||
            output === "Clave incorrecta o mensaje no válido" ||
            output === "Error al desencriptar")
            return;
        setInput(output);
        setOutput("");       
    }

    function handleEncrypt() {
        const encrypted = CryptoJS.AES.encrypt(input, key.trim()).toString();
        setOutput(encrypted);
    }

    function handleDecrypt() {
        try {
            const decrypted = CryptoJS.AES.decrypt(input, key.trim()).toString(CryptoJS.enc.Utf8);
            setOutput(decrypted || "Clave incorrecta o mensaje no válido");
        } catch {
            setOutput("Error al desencriptar");
        }
    }

    function handleClear() {
        setInput("");
        setKey("");
        setOutput("");
    }

    const handleCopy = () => { navigator.clipboard.writeText(output); }

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h4 className="card-title mb-3">AES Encrypt / Decrypt</h4>

                    {/* Input texto */}
                    <div className="mb-3">
                        <label className="form-label">Input</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Ingrese su mensaje..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>

                    {/* Clave */}
                    <div className="mb-3">
                        <label className="form-label">Secret Key</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Ingrese la clave secreta..."
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                        />
                    </div>

                    {/* Botones */}
                    <div className="d-flex gap-2 mb-3">
                        <button
                            className="btn btn-primary"
                            onClick={handleEncrypt}
                            disabled={!input || !key}
                        >
                            Encriptar
                        </button>

                        <button
                            className="btn btn-warning"
                            onClick={handleDecrypt}
                            disabled={!input || !key}
                        >
                            Desencriptar
                        </button>

                        <button
                            className="btn btn-info d-flex align-items-center justify-content-center"
                            onClick={handleSwap}
                            disabled={!output}
                            title="Pasar Output a Input"
                        >
                            <FaArrowsRotate />
                        </button>

                        <button
                            className="btn btn-secondary"
                            onClick={handleClear}
                        >
                            Limpiar
                        </button>
                    </div>

                    {/* Output */}
                    <div className="mb-3">
                        <label className="form-label">Output</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            value={output || "-"}
                            readOnly
                        />
                    </div>

                    {/* Copy */}
                    <button
                        className="btn btn-outline-success"
                        onClick={handleCopy}
                        disabled={!output}
                    >
                        Copiar
                    </button>
                </div>
            </div>
        </div>
    );

}
