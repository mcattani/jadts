import { useState } from "react";

export default function PassGenerator() {

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(6);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    function generatePassword(){
        let chars = "";

        if(uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
        if(numbers) chars += "0123456789";
        if(symbols) chars += "!@#$%^&*()_+";

        if (!uppercase && !lowercase && !numbers && !symbols){
            return "Debe seleccionar al menos un tipo de caracter."
        }

        let result = "";
        // Crea un array de (length) tamaño con números aleatorios
        const randomValues = new Uint32Array(length);
        crypto.getRandomValues(randomValues);
        
        // Tomamos un elemento de casa array para construir el result
        for (let i = 0; i < length; i++){
            result += chars[randomValues[i] % chars.length];
        }
        return result;
    }
    
    function handleGenerate() {
        setPassword(generatePassword());
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
                            onChange={(e)=>setLength(Number(e.target.value))}
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

        </div>
    );
}