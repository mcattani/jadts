import { useState } from "react";

export default function PassGenerator() {

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(6);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const [strengthLabel, setStrengthLabel] = useState("");
    const [strengthPercent, setStrengthPercent] = useState("");
    const [strengthColor, setStrengthColor] = useState("");
    const [strengthMessage, setStrengthMessage] = useState("");

    function generatePassword() {
        let chars = "";

        if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
        if (numbers) chars += "0123456789";
        if (symbols) chars += "!@#$%^&*()_+";

        if (!uppercase && !lowercase && !numbers && !symbols) {
            return "Debe seleccionar al menos un tipo de caracter."
        }

        let result = "";
        // Crea un array de (length) tamaño con números aleatorios
        const randomValues = new Uint32Array(length);
        crypto.getRandomValues(randomValues);

        // Tomamos un elemento de casa array para construir el result
        for (let i = 0; i < length; i++) {
            result += chars[randomValues[i] % chars.length];
        }
        return result;
    }

    function calculateStrength(password) {
        // Algoritmo simple de fuerza: longitud + tipo de caracteres
        // Máximo 7 puntos
        let score = 0;

        if (password.length >= 8) { score++ };
        if (password.length >= 12) { score++ };
        if (password.length >= 16) { score++ };

        if (uppercase) { score++ };
        if (lowercase) { score++ };
        if (numbers) { score++ };
        if (symbols) { score++ };

        // Calculamos porcentaje a partir del score
        const porcentaje = (score / 7) * 100;

        let label;
        let color;
        let mensaje;
        // Calculamos el Label, Color de la etiqueta y mensaje
        if (score <= 2) {
            label = "Débil";
            color = "bg-danger";
            mensaje = "El password es muy débil, fácil de adivinar."
        } else if (score <= 4) {
            label = "Medio";
            color = "bg-warning";
            mensaje = "Podría ser más complejo... (no muy fuerte)";
        } else if (score <= 6) {
            label = "Fuerte";
            color = "bg-info";
            mensaje = "Buen password!";
        } else {
            label = "Muy fuerte!";
            color = "bg-success";
            mensaje = "Excelente!"
        }

        // Actualizamos los state
        setStrengthLabel(label);
        setStrengthColor(color);
        setStrengthPercent(porcentaje);
        setStrengthMessage(mensaje);

    }

    function handleGenerate() {
        const newPassword = generatePassword();
        setPassword(newPassword);
        calculateStrength(newPassword);
    }

    function handleSymbols() { setSymbols(!symbols); }
    function handleNumbers() { setNumbers(!numbers); }
    function handleLowercase() { setLowercase(!lowercase); }
    function handleUppercase() { setUppercase(!uppercase); }

    function handleCopy() {
        if (!password) return;
        navigator.clipboard.writeText(password);
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Password Generator</h2>

            {/* OUTPUT */}
            <div className="card mb-4">
                <div className="card-body">
                    <label className="form-label">Password: </label>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            value={password}
                            readOnly
                        />
                        <button
                            className="btn btn-outline-secondary"
                            onClick={handleCopy}
                        >
                            Copy
                        </button>
                    </div>
                </div>
            </div>

            {/* GENERATOR OPTIONS */}
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title mb-3">Options</h5>

                    {/* LENGTH SLIDER */}
                    <div className="mb-3">
                        <label className="form-label">
                            Longitud: <strong>{length}</strong>
                        </label>
                        <input
                            type="range"
                            className="form-range"
                            min="6"
                            max="64"
                            value={Number(length)}
                            onChange={(e) => setLength(Number(e.target.value))}
                        />
                    </div>

                    {/* CHECKBOXES */}
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={uppercase}
                                    onChange={handleUppercase}
                                />
                                <label className="form-check-label">
                                    Mayúsculas
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={lowercase}
                                    onChange={handleLowercase}
                                />
                                <label className="form-check-label">
                                    Minúsculas
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={numbers}
                                    onChange={handleNumbers}
                                />
                                <label className="form-check-label">
                                    Números
                                </label>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={symbols}
                                    onChange={handleSymbols}
                                />
                                <label className="form-check-label">
                                    Símbolos
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button
                            className="btn btn-primary"
                            onClick={handleGenerate}
                        >
                            Generar Password
                        </button>
                    </div>
                </div>
            </div>

            {/* PASSWORD STRENGTH (SEPARADO DEL GENERADOR) */}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title mb-3">Seguridad de Contraseña</h5>

                    {/* Texto del nivel */}
                    <p className="mb-2">
                        Seguridad: <strong>{strengthLabel}</strong>
                    </p>

                    {/* Barra visual */}
                    <div className="progress mb-3">
                        <div
                            className={`progress-bar ${strengthColor}`}
                            role="progressbar"
                            style={{ width: `${strengthPercent}%` }}
                        >
                        </div>
                    </div>

                    {/* Mensaje opcional */}
                    <small className="text-muted">
                        {strengthMessage}
                    </small>
                </div>
            </div>

        </div>
    );
}