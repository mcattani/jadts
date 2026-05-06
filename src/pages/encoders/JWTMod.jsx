import { useState } from "react";

export default function JWTMod() {

    const [activeTab, setActiveTab] = useState("Decodificar");
    const [token, setToken] = useState("");
    const [payload, setPayload] = useState("");
    const [secret, setSecret] = useState("");
    const [expiration, setExpiration] = useState("1h");
    const [output, setOutput] = useState(null);
    const [verifyResult, setVerifyResult] = useState(null);
    const [error, setError] = useState("");

    function handleDecode() {

    }

    function handleVerify() {

    }

    function handleGenerate() {

    }

    function handleSwap() {

    }

    function copyToClipboard() {

    }

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
                            onClick={() => setActiveTab(tab.id)}
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

                    <button className="btn btn-primary mb-3" onClick={handleDecode}>
                        Decodificar
                    </button>

                    {error && <div className="alert alert-danger">{error}</div>}

                    {output?.header && (
                        <div className="row">
                            <div className="col-md-4">
                                <h6>Header</h6>
                                <pre className="bg-light p-2">{output.header}</pre>
                            </div>
                            <div className="col-md-4">
                                <h6>Payload</h6>
                                <pre className="bg-light p-2">{output.payload}</pre>
                            </div>
                            <div className="col-md-4">
                                <h6>Firma</h6>
                                <pre className="bg-light p-2">{output.signature}</pre>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* GENERATE */}
            {activeTab === "generate" && (
                <div>
                    <textarea
                        className="form-control mb-2"
                        rows="4"
                        placeholder='Payload JSON (ej: {"user":"admin"})'
                        value={payload}
                        onChange={(e) => setPayload(e.target.value)}
                    />

                    <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Key secreta (ej: mysecret)"
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                    />

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Vencimiento (ej: 1h, 2d)"
                        value={expiration}
                        onChange={(e) => setExpiration(e.target.value)}
                    />

                    <button className="btn btn-success mb-3" onClick={handleGenerate}>
                        Generar JWT
                    </button>

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
                                    Swap → Verify
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

                    <button className="btn btn-warning mb-3" onClick={handleVerify}>
                        Verificar
                    </button>

                    {verifyResult && (
                        <div
                            className={`alert ${verifyResult.valid ? "alert-success" : "alert-danger"
                                }`}
                        >
                            {verifyResult.valid ? "JWT válido" : "JWT inválido"}
                        </div>
                    )}

                    {verifyResult?.payload && (
                        <pre className="bg-light p-2">
                            {JSON.stringify(verifyResult.payload, null, 2)}
                        </pre>
                    )}

                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
            )}
        </div>
    );
}