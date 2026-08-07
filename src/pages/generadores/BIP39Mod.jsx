import { useState } from "react";
import { FaCopy, FaTrash } from "react-icons/fa";
import { generateMnemonic } from "@scure/bip39";
import SEO from "../../components/SEO";

export default function BIP39Mod() {

    const [language, setLanguage] = useState("spanish");
    const [words, setWords] = useState(12);
    const [mnemonic, setMnemonic] = useState("");

    function generateSeed() {

    }

    function copyMnemonic() {

    }

    function clearFields() {
    }


    return (
        <>
            <SEO
                title="Generador BIP-39"
                description="Genera frases mnemónicas (Seed Phrase) compatibles con BIP-39."
                keywords="bip39, mnemónica, seed phrase, frase mnemónica, generador"
            />

            <div className="container py-4">
                <h2 className="mb-1">
                    Generador BIP-39
                </h2>
                <p className="text-body-secondary mb-4">
                    Genera frases mnemónicas (Seed Phrase) compatibles con BIP-39.
                </p>

                <div className="card">
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-md-6">

                                <label className="form-label">
                                    Idioma
                                </label>

                                <select
                                    className="form-select"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                >
                                    <option value="english">
                                        Inglés
                                    </option>
                                    <option value="spanish">
                                        Español
                                    </option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    Cantidad de palabras
                                </label>

                                <select
                                    className="form-select"
                                    value={words}
                                    onChange={(e) => setWords(Number(e.target.value))}
                                >
                                    <option value={12}>12</option>
                                    <option value={15}>15</option>
                                    <option value={18}>18</option>
                                    <option value={21}>21</option>
                                    <option value={24}>24</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="form-label">
                                Frase mnemónica
                            </label>

                            <textarea
                                className="form-control font-monospace"
                                rows={4}
                                value={mnemonic}
                                readOnly
                            />
                        </div>

                        <div className="d-flex gap-2 mt-4 flex-wrap">

                            <button
                                className="btn btn-primary"
                                onClick={generateSeed}
                            >
                                <i className="bi bi-stars me-2"></i>
                                Generar
                            </button>

                            <button
                                className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                                onClick={copyMnemonic}
                            >
                                <FaCopy className="me-2" />
                                Copiar
                            </button>

                            <button
                                className="btn btn-outline-danger d-flex align-items-center justify-content-center"
                                onClick={clearFields}
                            >
                                <FaTrash className="me-2" />
                                Limpiar
                            </button>

                        </div>
                        <div className="alert alert-warning mt-4 mb-0">
                            <strong>Importante!</strong> Guarda esta frase en un lugar seguro y nunca la compartas. Con ella es posible recuperar una billetera compatible con BIP-39.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}