import { useState } from "react";
import CryptoJS from "crypto-js";
import { FaArrowsRotate } from "react-icons/fa6";
import SEO from "../../components/SEO";

const algorithms = {
    AES: CryptoJS.AES,
    TripleDES: CryptoJS.TripleDES,
    DES: CryptoJS.DES,
    Rabbit: CryptoJS.Rabbit,
    RC4: CryptoJS.RC4,
    RC4Drop: CryptoJS.RC4Drop
};

export default function MCipherMod() {

    const [input, setInput] = useState("");
    const [key, setKey] = useState("");
    const [output, setOutput] = useState("");
    const [algorithm, setAlgorithm] = useState("AES");

    function handleSwap() {
        if (!output ||
            output === "Clave incorrecta o mensaje no válido" ||
            output === "Error al desencriptar")
            return;
        setInput(output);
        setOutput("");
    }

    function handleEncrypt() {
        if (!algorithm) return;
        const encrypted = algorithms[algorithm]
        .encrypt(input, key.trim())
        .toString();

        setOutput(encrypted);
    };

    function handleDecrypt() {
        if (!input || !key) return;
        try{
            const decrypted = algorithms[algorithm]
            .decrypt(input, key.trim())
            .toString(CryptoJS.enc.Utf8);
            setOutput(decrypted || "Clave incorrecta o mensaje no válido");
        } catch {
            setOutput("Error al desencriptar");
        }
    };

    function handleClear() {
        setInput("");
        setKey("");
        setOutput("");
    }

    const handleCopy = () => { navigator.clipboard.writeText(output); }

    return (
        <>
            <SEO
                title="Cifrado Simétrico"
                description="Herramienta online para encriptar y desencriptar mensajes utilizando distintos algoritmos de cifrado."
                keywords="aes, des, tripledes, rc4, rabbit, crypto, cifrado, seguridad"
            />

            <div className="container mt-4">
                <div className="card shadow-sm">
                    <div className="card-body">

                        <h4 className="card-title mb-3">
                            {algorithm} Encriptador / Desencriptador
                        </h4>

                        {/* Entrada */}
                        <div className="mb-3">
                            <label className="form-label">Entrada</label>
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
                            <label className="form-label">Clave secreta</label>
                            <input
                                type="password"
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
                                <option value="AES">AES (Recomendado)</option>
                                <option value="TripleDES">TripleDES</option>
                                <option value="DES">DES</option>
                                <option value="Rabbit">Rabbit</option>
                                <option value="RC4">RC4</option>
                                <option value="RC4Drop">RC4Drop</option>
                            </select>
                        </div>

                        {(algorithm === "DES" ||
                            algorithm === "RC4" ||
                            algorithm === "RC4Drop") && (
                                <div className="alert alert-warning py-2">
                                    <strong>Advertencia:</strong> este algoritmo se
                                    considera obsoleto y sólo debería utilizarse por
                                    motivos de compatibilidad.
                                </div>
                            )}

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

                        {/* Salida */}
                        <div className="mb-3">
                            <label className="form-label">Salida</label>

                            <textarea
                                className="form-control"
                                rows="3"
                                value={output || "-"}
                                readOnly
                            />
                        </div>

                        {/* Copiar */}
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
        </>
    );
}
