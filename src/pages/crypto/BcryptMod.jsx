import { useState } from 'react';
import bcrypt from 'bcryptjs';
import { FaArrowsRotate } from "react-icons/fa6";

export default function BcryptMod() {

    const [password, setPassword] = useState("");
    const [rounds, setRounds] = useState(12);
    const [hash, setHash] = useState("");

    const [verifyPassword, setVerifyPassword] = useState("");
    const [verifyHash, setVerifyHash] = useState("");
    const [verifyResult, setVerifyResult] = useState(null);


    async function handleGenerate() {

    }

    function handleCopy() {

    }

    function handleClearHash() {

    }

    function handleSwap() {

    }

    async function handleVerify() {

    }


    function handleClearVerify() {

    }

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h4 className="card-title mb-3">
                        Bcrypt Hash Generator
                    </h4>

                    {/* Password */}
                    <div className="mb-3">
                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Rounds */}
                    <div className="mb-3">
                        <label className="form-label">
                            Factor de costo/trabajo
                        </label>

                        <select
                            className="form-select"
                            value={rounds}
                            onChange={(e) => setRounds(Number(e.target.value))}
                        >
                            {Array.from(
                                { length: 28 },
                                (_, i) => i + 4
                            ).map((round) => (
                                <option
                                    key={round}
                                    value={round}
                                >
                                    {round}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="d-flex gap-2 mb-3">
                        <button
                            className="btn btn-primary"
                            onClick={handleGenerate}
                        >
                            Generar Hash
                        </button>

                        <button
                            className="btn btn-secondary"
                            onClick={handleClearHash}
                            disabled={!password || !hash}
                        >
                            Limpiar
                        </button>
                    </div>

                    {/* Output */}
                    <div className="mb-3">
                        <label className="form-label">
                            Salida Hash
                        </label>

                        <textarea
                            className="form-control"
                            rows="3"
                            value={hash}
                            readOnly
                        />
                    </div>

                    <div className="d-flex gap-2 mb-4">
                        <button
                            className="btn btn-outline-secondary"
                            onClick={handleCopy}
                        >
                            Copiar
                        </button>

                        <button
                            className="btn btn-outline-primary"
                            onClick={handleSwap}
                            title="Send to Verify"
                            disabled={!hash}
                        >
                            <FaArrowsRotate />
                        </button>
                    </div>
                    <hr />

                    <h4 className="card-title mb-3">
                        Verificar Password
                    </h4>

                    <div className="mb-3">
                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            value={verifyPassword}
                            onChange={(e) =>
                                setVerifyPassword(e.target.value)
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Bcrypt Hash
                        </label>

                        <textarea
                            className="form-control"
                            rows="3"
                            value={verifyHash}
                            onChange={(e) =>
                                setVerifyHash(e.target.value)
                            }
                        />
                    </div>

                    <button
                        className="btn btn-success me-2"
                        onClick={handleVerify}
                        disabled={!verifyPassword}
                    >
                        Verificar
                    </button>

                    <button
                        className="btn btn-secondary"
                        onClick={handleClearVerify}
                        disabled={!verifyPassword || !verifyHash}
                    >
                        Limpiar
                    </button>

                    {verifyResult === true && (
                        <div className="alert alert-success mt-3">
                            Password coincide con el hash.
                        </div>
                    )}

                    {verifyResult === false && (
                        <div className="alert alert-danger mt-3">
                            El password no coincide con el hash.
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}