import { useState } from "react";
import SEO from "../../components/SEO";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { validateMnemonic } from "@scure/bip39";
import { wordlist as english } from '@scure/bip39/wordlists/english.js';
import { wordlist as spanish } from '@scure/bip39/wordlists/spanish.js';

export default function BIP39ValMod() {

    const [language, setLanguage] = useState("spanish");
    const [mnemonic, setMnemonic] = useState("");
    const [isValid, setIsValid] = useState(null);
    const [wordCount, setWordCount] = useState(0);

    function parseMnemonic(text) {
        // Si no hay texto, establecer el contador de palabras a 0
        if (!text.trim()) {
            setWordCount(0);
            return;
        }

        // Contar palabras separadas por espacios, ignorando espacios adicionales
        const words = text.trim().split(/\s+/);
        setWordCount(words.length);

        return words;
    }

    function normalizeMnemonic(words) {
        // words va a ser un array proveniente de parseMnemonic, 
        // por lo que se puede unir con espacios y luego normalizar
        const normalized = words.join(' ').toLowerCase();
        return normalized;
    }

    function validateSeed() {
        // Obtener el wordlist según el idioma seleccionado
        const selectedWordlist = language === "spanish" ? spanish : english;

        // Contar palabras y normalizar la frase mnemónica
        const wordsArray = parseMnemonic(mnemonic);
        const normalizedMnemonic = normalizeMnemonic(wordsArray);

        // Validar la frase mnemónica usando el wordlist correspondiente
        const valid = validateMnemonic(normalizedMnemonic, selectedWordlist);
        setIsValid(valid);
    }

    function clearFields() {
        setMnemonic("");
        setIsValid(null);
        setWordCount(0);
    }

    return (
        <>
            <SEO
                title="Validador BIP-39"
                description="Valida frases mnemónicas compatibles con BIP-39."
                keywords="bip39, mnemónica, seed phrase, frase mnemónica, validador"
            />

            <div className="container py-4">
                <h2 className="mb-1">
                    Validador BIP-39
                </h2>

                <p className="text-body-secondary mb-4">
                    Valida frases mnemónicas compatibles con BIP-39.
                </p>

                <div className="card">
                    <div className="card-body">

                        <div className="mb-3">
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

                        <div className="mt-4">
                            <label className="form-label">
                                Frase mnemónica
                            </label>

                            <textarea
                                className="form-control font-monospace"
                                rows={4}
                                value={mnemonic}
                                onChange={(e) => {
                                    setMnemonic(e.target.value);
                                    parseMnemonic(e.target.value);
                                }}
                                placeholder="Introduce tu frase mnemónica..."
                            />
                        </div>

                        <div className="mt-2">
                            <small className="text-body-secondary">
                                {wordCount} palabras
                            </small>
                        </div>

                        <div className="d-flex gap-2 mt-4 flex-wrap">

                            <button
                                className="btn btn-primary d-flex align-items-center justify-content-center"
                                onClick={validateSeed}
                                disabled={!mnemonic}
                            >
                                <FaCheckCircle className="me-2" />
                                Validar
                            </button>

                            <button
                                className="btn btn-outline-danger d-flex align-items-center justify-content-center"
                                disabled={!mnemonic}
                                onClick={clearFields}
                            >
                                <FaTrash className="me-2" />
                                Limpiar
                            </button>

                        </div>

                        {isValid !== null && (
                            <div
                                className={`alert ${isValid
                                    ? "alert-success"
                                    : "alert-danger"
                                    } mt-4 mb-0`}
                            >
                                {isValid
                                    ? "✓ Frase mnemónica BIP-39 válida."
                                    : "✕ Frase mnemónica BIP-39 inválida."
                                }
                            </div>
                        )}

                        <div className="alert alert-warning mt-4 mb-0">
                            <strong>Importante!</strong> Nunca introduzcas una frase de recuperación real ni la compartas con nadie. Utiliza esta herramienta únicamente con frases de prueba o desechables.
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

