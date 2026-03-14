import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { v5 as uuidv5 } from 'uuid';
import { validate } from 'uuid';
import { version as uuidVersion } from 'uuid';

export default function UUID_Generator() {

    const [version, setVersion] = useState("v4");
    const [amount, setAmount] = useState(1);
    const [output, setOutput] = useState("");
    const [namespace, setNamespace] = useState("DNS");
    const [name, setName] = useState("");
    const [customName, setCustomName] = useState("");
    const [UUIDtoValidate, setUUIDtoValidate] = useState("");
    const [result, setResult] = useState("");

    function handleGenerate() {
        if (version === "v4") {
            // Limpiamos estados anteriores si existen 
            let uuidv4Array = [];
            for (let i = 0; i < amount; i++) {
                uuidv4Array.push(uuidv4());
            }
            setOutput(uuidv4Array.join("\n"));
        } else if (version === "v5") {
            // Validar Name
            if (!name.trim()) {
                setOutput("Error: 'Name' se requiere para generar UUID v5.");
                return;
            }
            // Validar namespace custom
            if (namespace === "CUSTOM" && !customName.trim()) {
                setOutput("Error: 'Custom namespace UUID' se requiere para generar esta versión de UUID v5.");
                return;
            }

            switch (namespace) {
                case "DNS":
                    setOutput(uuidv5(name, uuidv5.DNS));
                    break;
                case "URL":
                    setOutput(uuidv5(name, uuidv5.URL));
                    break;
                case "CUSTOM":
                    // Validar que el UUID custom sea válido
                    if (!validate(customName)) {
                        setOutput("Error: Custom namespace debe ser un UUID válido.");
                        return;
                    }
                    setOutput(uuidv5(name, customName));
                    break;
            }
        }
    }

    function handleClear() {
        setOutput("");
        setName("");
        setCustomName("");
    }

    function handleCopy() {
        if (!output) return;
        navigator.clipboard.writeText(output);
    }

    function handleValidateUUID() {
        if (!UUIDtoValidate.trim()) {
            setResult("Debe ingresar un UUID para validar.");
            return;
        }

        if (validate(UUIDtoValidate)) {
            const v = uuidVersion(UUIDtoValidate.trim());
            setResult(`UUID v${v} válido.`);
        } else {
            setResult("UUID no válido.");
        }
    }

    return (
        <div className="container py-4">
            <h2 className="mb-4">UUID Generator</h2>
            <div className="row g-3">

                {/* Version */}
                <div className="col-md-3">
                    <label className="form-label">Versión</label>
                    <select className="form-select"
                        value={version}
                        onChange={(e) => setVersion(e.target.value)}>
                        <option value="v4">UUID v4 (Random)</option>
                        <option value="v5">UUID v5 (Namespace)</option>
                    </select>
                </div>

                {/* Amount */}
                <div className="col-md-3">
                    <label className="form-label">Cantidad</label>
                    <input
                        type="number"
                        className="form-control"
                        min="1"
                        max="100"
                        value={Number(amount)}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        disabled={version === "v5"}
                    />
                </div>

                {/* Namespace */}
                <div className="col-md-3">
                    <label className="form-label">Namespace</label>
                    <select className="form-select"
                        value={namespace}
                        onChange={(e) => setNamespace(e.target.value)}
                        disabled={version === "v4"}>
                        <option value="DNS">DNS</option>
                        <option value="URL">URL</option>
                        <option value="CUSTOM">Custom</option>
                    </select>
                </div>

                {/* Name */}
                <div className="col-md-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="example.com"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={version === "v4"}
                    />
                </div>

                {/* Custom Namespace */}
                <div className="col-md-6">
                    <label className="form-label">Custom Namespace UUID</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="namespace UUID"
                        value={customName}
                        onChange={(e) => setCustomName(e.target.value)}
                        disabled={version === "v4" || namespace !== "CUSTOM"}
                    />
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 d-flex gap-2">
                <button className="btn btn-primary" onClick={handleGenerate}>
                    Generar
                </button>
                <button className="btn btn-success" onClick={handleCopy}>
                    Copiar
                </button>
                <button className="btn btn-secondary" onClick={handleClear}>
                    Clear
                </button>
            </div>

            {/* Output */}
            <div className="mt-4">
                <label className="form-label">Salida</label>
                <textarea
                    className="form-control"
                    rows="8"
                    value={output}
                    readOnly
                />
            </div>
            <hr className="my-5" />

            {/* UUID Validation */}
            <h4 className="mb-3">Validación UUID</h4>
            <div className="row g-3 align-items-end">
                <div className="col-md-9">
                    <label className="form-label">UUID</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="UUID a validar"
                        value={UUIDtoValidate}
                        onChange={(e) => setUUIDtoValidate(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-warning w-100"
                        onClick={handleValidateUUID}>
                        Validate
                    </button>
                </div>
            </div>

            {/* Validation Result */}
            <div className="mt-3">
                <div className="alert alert-info mb-0">
                    {result || "Resultado"}
                </div>
            </div>
        </div>
    );
}