import { useState } from 'react';
import bcrypt from 'bcryptjs';
import { FaArrowsRotate } from "react-icons/fa6";
import SEO from "../../components/SEO";

export default function BcryptMod() {

    const [password, setPassword] = useState("");
    const [rounds, setRounds] = useState(12);
    const [hash, setHash] = useState("");

    const [verifyPassword, setVerifyPassword] = useState("");
    const [verifyHash, setVerifyHash] = useState("");
    const [verifyResult, setVerifyResult] = useState(null);

    async function handleGenerate() {
        if (!password) return;
        try {
            const generate_hash = await bcrypt.hash(password, rounds);
            setHash(generate_hash);
        } catch (error) {
            console.log(error);
        }
    }

    function handleClearHash() {
        setPassword("");
        setHash("");
        setRounds(12);
    }

    function handleCopy() {
        if (!hash) return;
        navigator.clipboard.writeText(hash);
    }

    function handleSwap() {
        if (!hash || !password) return;
        setVerifyPassword(password);
        setVerifyHash(hash);
        setVerifyResult(null);
    }

    async function handleVerify() {
        if (!verifyPassword || !verifyHash) return;
        try {
            const result = await bcrypt.compare(verifyPassword, verifyHash);
            setVerifyResult(result);
        } catch (error) {
            console.log(error);
            setVerifyResult(false);
        }
    }

    function handleClearVerify() {
        setVerifyPassword("");
        setVerifyHash("");
        setVerifyResult(null);
    }

    return (
        <>
            <SEO
                title="Generador Bcrypt Hash"
                description="Genera y verifica hashes bcrypt de forma rápida y segura."
                keywords="bcrypt, hash, seguridad, password"
            />
            <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h4 className="card-title mb-3">
                        Generador Bcrypt Hash
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
                        <div className="form-text">
                            Valores altos aumentan la seguridad pero requieren más tiempo de procesamiento.
                        </div>

                        <select
                            className="form-select"
                            value={rounds}
                            onChange={(e) => setRounds(Number(e.target.value))}
                        >
                            {Array.from(
                                { length: 13 },
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
                            disabled={!password}
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
                    <div className="mb-2">
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

                    {hash && (
                        <div className="form-text mb-2">
                            Algoritmo: bcrypt · Versión: {hash.split("$")[1]}
                            {" - "}
                            Factor de costo: {hash.split("$")[2]}
                        </div>
                    )}

                    <div className="d-flex gap-2 mb-4">
                        <button
                            className="btn btn-outline-secondary"
                            onClick={handleCopy}
                            disabled={!hash}
                        >
                            Copiar
                        </button>

                        <button
                            className="btn btn-outline-primary"
                            onClick={handleSwap}
                            title="Enviar a Verificar"
                            disabled={!hash || !password}
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
                        disabled={!verifyPassword || !verifyHash}
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
        </>
    );
}