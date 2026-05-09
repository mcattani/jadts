import { useState } from "react";
import { decodeJwt, SignJWT, jwtVerify } from "jose";
import { FaExchangeAlt } from 'react-icons/fa';

export default function JWTMod() {

    const [activeTab, setActiveTab] = useState("decode");
    const [token, setToken] = useState("");
    const [payload, setPayload] = useState("");
    const [secret, setSecret] = useState("");
    const [expiration, setExpiration] = useState("1h");
    const [output, setOutput] = useState(null);
    const [verifyResult, setVerifyResult] = useState(null);
    const [error, setError] = useState("");
    const [isValidJson, setIsValidJson] = useState(true);

    function validateJson(jsonString) {
        try {
            JSON.parse(jsonString);
            return true;
        } catch {
            return false;
        }
    }

    function handleDecode() {
        setError("");

        try {
            // Validación básica del token
            if (!token) throw new Error("JWT vacío");

            // Un JWT típico tiene 3 partes: header.payload.signature
            const parts = token.split(".");
            if (parts.length !== 3) throw new Error("JWT mal formado");

            // Obtenemos el header decodificando la primera parte (base64url)
            const header = JSON.parse(atob(parts[0]));

            // Obtenemos el payload
            const payload = decodeJwt(token);

            // Firma
            const signature = parts[2];

            setOutput({
                // Formateamos el header y payload para mostrarlo formateado
                header: JSON.stringify(header, null, 2),
                payload: JSON.stringify(payload, null, 2),
                signature,
            });

        } catch (err) {
            setError("Token inválido o mal formado.");
            setOutput(null);
        }
    }

    // Sign es asíncrono
    async function handleGenerate() {
        setError("");

        try {
            // Validación básica
            if (!payload) throw new Error("Payload vacío");
            if (!secret) throw new Error("Key secreta vacía");

            // Parseamos el payload para asegurarnos que es JSON válido
            const payloadObj = JSON.parse(payload);

            // Convertimos la clave secreta a bytes (La secret NO puede ser string)
            const secretBytes = new TextEncoder().encode(secret);

            // Creamos el JWT
            const jwt = await new SignJWT(payloadObj)
                .setProtectedHeader({ alg: "HS256", typ: "JWT" })
                .setExpirationTime(expiration || "1h") // Si no se especifica, 1 hora por defecto
                .sign(secretBytes);

            setOutput(jwt);
        } catch (err) {
            setError("Error al generar el JWT: " + err.message);
            setOutput(null);
        }
    }

    async function handleVerify() {
        setError("");

        try {
            // Validación básica
            if (!token) throw new Error("JWT vacío");
            if (!secret) throw new Error("Key secreta vacía");

            // Convertimos la clave secreta a bytes
            const secretBytes = new TextEncoder().encode(secret);

            // Verificamos el JWT
            const { payload } = await jwtVerify(token, secretBytes);

            // Si no lanza error, el JWT es válido
            setVerifyResult({ valid: true, payload });

        } catch (err) {
            setVerifyResult({ valid: false });
            setError("Error al verificar el JWT: " + err.message);
        }
    }

    function handleSwap() {
        setActiveTab("verify");
        setToken(output);
    }

    // Limpia todos los campos y resultados
    function handleClear() {
        setToken("");
        setSecret("");
        setOutput(null);
        setVerifyResult(null);
        setError("");
        setPayload("");
        setIsValidJson(true);
    }

    const copyToClipboard = () => { navigator.clipboard.writeText(output); }

    // Definimos las tabs para no repetir código
    const tabs = [
        { id: "decode", label: "Decodificar" },
        { id: "generate", label: "Generar" },
        { id: "verify", label: "Verificar" },
    ];

    return (
        <div className="container mt-4">
            <h3 className="mb-3">JWT Tool</h3>

            {/* Tabs */}
            <ul className="nav nav-tabs mb-3">
                {tabs.map((tab) => (
                    <li className="nav-item" key={tab.id}>
                        <button
                            className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                            onClick={() => {
                                setActiveTab(tab.id)
                                setError("")
                            }}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>

            {/* DECODE */}
            {activeTab === "decode" && (
                <div>
                    <textarea
                        className="form-control mb-3"
                        rows="3"
                        placeholder="Pegar JWT acá..."
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                    />

                    <div className="d-flex gap-2 mb-3">
                        <button className="btn btn-primary mb-3" onClick={handleDecode}>
                            Decodificar
                        </button>

                        <button
                            className="btn btn-secondary mb-3 "
                            onClick={handleClear}
                            disabled={!token}
                        >
                            Limpiar
                        </button>
                    </div>

                    {error && <div className="alert alert-danger">{error}</div>}

                    {output?.header && (
                        <div className="row">
                            <div className="col-md-4">
                                <h6>Header</h6>
                                <pre className="bg-dark text-light p-2 rounded border border-secondary">{output.header}</pre>
                            </div>
                            <div className="col-md-4">
                                <h6>Payload</h6>
                                <pre className="bg-dark text-light p-2 rounded border border-secondary">{output.payload}</pre>
                            </div>
                            <div className="col-md-4">
                                <h6>Firma</h6>
                                <pre className="bg-dark text-light p-2 rounded border border-secondary">{output.signature}</pre>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* GENERATE */}
            {activeTab === "generate" && (
                <div>
                    <textarea
                        className={`form-control mb-2 ${!isValidJson && payload ? 'is-invalid' : ''}`}
                        rows="4"
                        placeholder='Payload JSON (ej: {"user":"admin"})'
                        value={payload}
                        onChange={(e) => {
                            setPayload(e.target.value);
                            setIsValidJson(validateJson(e.target.value));
                        }}
                    />
                    {!isValidJson && payload && <div className="invalid-feedback">JSON inválido</div>}

                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Key secreta (ej: mysecret)"
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                    />

                    <select
                        className="form-select mb-3"
                        value={expiration}
                        onChange={(e) => setExpiration(e.target.value)}
                    >
                        <option value="15m">15 minutos</option>
                        <option value="30m">30 minutos</option>
                        <option value="1h">1 hora</option>
                        <option value="12h">12 horas</option>
                        <option value="1d">1 día</option>
                        <option value="7d">7 días</option>
                        <option value="30d">30 días</option>
                    </select>

                    <div className="d-flex gap-2 mb-3">
                        <button className="btn btn-success mb-3" onClick={handleGenerate} disabled={!payload || !secret || !isValidJson}>
                            Generar JWT
                        </button>

                        <button
                            className="btn btn-secondary mb-3 "
                            onClick={handleClear}
                            disabled={!payload && !secret}
                        >
                            Limpiar
                        </button>
                    </div>
                    
                    {error && <div className="alert alert-danger">{error}</div>}

                    {typeof output === "string" && (
                        <div>
                            <h6>Generated Token</h6>
                            <textarea
                                className="form-control mb-2"
                                rows="3"
                                value={output}
                                readOnly
                            />

                            <div className="d-flex gap-2">
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={copyToClipboard}
                                >
                                    Copiar
                                </button>

                                <button
                                    className="btn btn-info"
                                    onClick={handleSwap}
                                    title="Enviar a Verificar"
                                >
                                    <FaExchangeAlt /> Swap to Verify
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* VERIFY */}
            {activeTab === "verify" && (
                <div>
                    <textarea
                        className="form-control mb-2"
                        rows="3"
                        placeholder="JWT token"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                    />

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Key secreta (ej: mysecret)"
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                    />

                    <div className="d-flex gap-2 mb-3">
                        <button className="btn btn-warning mb-3" onClick={handleVerify}>
                            Verificar
                        </button>

                        <button
                            className="btn btn-secondary mb-3 "
                            onClick={handleClear}
                            disabled={!token || !secret}
                        >
                            Limpiar
                        </button>
                    </div>

                    {verifyResult && (
                        <div
                            className={`alert ${verifyResult.valid ? "alert-success" : "alert-danger"
                                }`}
                        >
                            {verifyResult.valid ? "JWT válido" : "JWT inválido"}
                        </div>
                    )}

                    {verifyResult?.payload && (
                        <pre className="bg-dark text-light p-2 rounded border border-secondary">
                            {JSON.stringify(verifyResult.payload, null, 2)}
                        </pre>
                    )}

                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
            )}
        </div>
    );
}