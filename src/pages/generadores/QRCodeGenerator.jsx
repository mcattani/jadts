import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {

    const [type, setType] = useState("url");
    const [text, setText] = useState("Texto aquí");
    const [url, setUrl] = useState("http://www.google.com");
    const [ssid, setSsid] = useState("");
    const [password, setPassword] = useState("");
    const [security, setSecurity] = useState("WPA");
    const [size, setSize] = useState(256);
    const [fgColor, setFgColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [level, setLevel] = useState("M");

    function buildQR() {
        switch (type) {
            case "text":
                return text;
            case "url":
                return url || "http://www.google.com";
            case "wifi":
                return `WIFI:T:${security};S:${ssid};P:${password};;`;
            default:
                return "";
        }
    }

    const qrValue = buildQR();

    function downloadQR() {
        // Fuente Google... estuve luchando con este download por largo rato

        // 1. Buscamos el elemento SVG del QR en el DOM usando su id
        const svg = document.getElementById("qrCodeD");
        // 2. Creamos un serializador que convierte nodos del DOM a texto (string)
        const serializer = new XMLSerializer();
        // 3. Convertimos el SVG (nodo) a un string XML válido -> obtenemos el código svg
        const source = serializer.serializeToString(svg);
        // 4. Creamos un "archivo" en memoria (Blob) con el SVG
        const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
        // 5. Generamos una URL temporal que apunta a ese archivo en memoria
        const url = URL.createObjectURL(blob);
        // 6. Creamos dinámicamente un link para forzar la descarga
        const link = document.createElement("a");
        // 7. Le asignamos la URL del archivo generado
        link.href = url;
        // 8. Definimos el nombre de archivo
        link.download = `qr-${type}.svg`;
        // 9. Insertamos el link en el DOM 
        document.body.appendChild(link);
        // 10. Simulamos un click
        link.click();
        // 11. Eliminamos el link del DOM
        document.body.removeChild(link);
        // 12. Liberamos la URL temporal
        URL.revokeObjectURL(url);
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">QR Generator</h2>
            <div className="row">
                {/* Controles */}
                <div className="col-md-6">

                    {/* Tipo */}
                    <div className="mb-3">
                        <label className="form-label">Tipo de QR</label>
                        <select
                            className="form-select"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="text">Texto</option>
                            <option value="url">URL</option>
                            <option value="wifi">WiFi</option>
                        </select>
                    </div>

                    {/* TEXTO */}
                    {type === "text" && (
                        <div className="mb-3">
                            <label className="form-label">Texto</label>
                            <input
                                type="text"
                                className="form-control"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                    )}

                    {/* URL */}
                    {type === "url" && (
                        <div className="mb-3">
                            <label className="form-label">URL</label>
                            <input
                                type="url"
                                className="form-control"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>
                    )}

                    {/* WIFI */}
                    {type === "wifi" && (
                        <>
                            <div className="mb-3">
                                <label className="form-label">SSID (Nombre de red)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={ssid}
                                    onChange={(e) => setSsid(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Seguridad</label>
                                <select
                                    className="form-select"
                                    value={security}
                                    onChange={(e) => setSecurity(e.target.value)}
                                >
                                    <option value="WPA">WPA/WPA2</option>
                                    <option value="WEP">WEP</option>
                                    <option value="nopass">Sin contraseña</option>
                                </select>
                            </div>
                        </>
                    )}

                    {/* Configuración común */}
                    <div className="mb-3">
                        <label className="form-label">Tamaño</label>
                        <input
                            type="number"
                            className="form-control"
                            value={size}
                            onChange={(e) => setSize(Number(e.target.value))}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Color QR</label>
                        <input
                            type="color"
                            className="form-control form-control-color"
                            value={fgColor}
                            onChange={(e) => setFgColor(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Color fondo</label>
                        <input
                            type="color"
                            className="form-control form-control-color"
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nivel de corrección</label>
                        <select
                            className="form-select"
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                        >
                            <option value="L">L (bajo)</option>
                            <option value="M">M (medio)</option>
                            <option value="Q">Q (alto)</option>
                            <option value="H">H (máximo)</option>
                        </select>
                    </div>
                </div>

                {/* QR */}
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div className="p-3 border mb-3">
                        <QRCode
                            id="qrCodeD"
                            value={qrValue || " "}
                            size={size}
                            bgColor={bgColor}
                            fgColor={fgColor}
                            level={level}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={downloadQR}>
                        Descargar QR
                    </button>
                </div>
            </div>
        </div>
    );
}


