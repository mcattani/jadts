import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

export default function HashGenMod() {

    const [text, setText] = useState("");
    const [md5, setMD5] = useState("");
    const [sha1, setSHA1] = useState("");
    const [sha256, setSHA256] = useState("");
    const [sha512, setSHA512] = useState("");
    const [sha224, setSHA224] = useState("");
    const [sha384, setSHA384] = useState("");
    const [sha3, setSHA3] = useState("");

    useEffect(() => {
        // Chequeamos que el campo texto no esté vacío
        if (text.trim() === "") {
            setMD5("");
            setSHA1("");
            setSHA256("");
            setSHA512("");
            setSHA224("");
            setSHA384("");
            setSHA3("");
            return;
        }

        // Generamos los hashes
        setMD5(CryptoJS.MD5(text).toString());
        setSHA1(CryptoJS.SHA1(text).toString());
        setSHA256(CryptoJS.SHA256(text).toString());
        setSHA512(CryptoJS.SHA512(text).toString());
        setSHA224(CryptoJS.SHA224(text).toString());
        setSHA384(CryptoJS.SHA384(text).toString());
        setSHA3(CryptoJS.SHA3(text).toString());
    }, [text]);

    const copyToClipboard = (str) => { navigator.clipboard.writeText(str); };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Hash Generator</h2>
            <p className="text-muted">Hashing ≠ Encryption, pero vive en esta sección ¯\_(ツ)_/¯</p>

            {/* INPUT */}
            <div className="mb-4">
                <label htmlFor="text-input" className="form-label">Texto</label>
                <textarea
                    id="text-input"
                    className="form-control"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Ingrese el texto aquí"
                    rows={4}
                />
            </div>

            {/* MD5 */}
            <div className="mb-3">
                <label className="form-label">MD5</label>
                <div className="d-flex gap-2">
                    <input
                        type="text"
                        className="form-control font-monospace"
                        value={md5 || "-"}
                        readOnly
                    />
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => copyToClipboard(md5)}
                        disabled={!md5}
                    >
                        Copiar
                    </button>
                </div>
            </div>

            {/* SHA1 */}
            <div className="mb-3">
                <label className="form-label">SHA1</label>
                <div className="d-flex gap-2">
                    <input
                        type="text"
                        className="form-control font-monospace"
                        value={sha1 || "-"}
                        readOnly
                    />
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => copyToClipboard(sha1)}
                        disabled={!sha1}
                    >
                        Copiar
                    </button>
                </div>
            </div>

            {/* SHA224 */}
            <div className="mb-3">
                <label className="form-label">SHA224</label>
                <div className="d-flex gap-2">
                    <input
                        type="text"
                        className="form-control font-monospace"
                        value={sha224 || "-"}
                        readOnly
                    />
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => copyToClipboard(sha224)}
                        disabled={!sha224}
                    >
                        Copiar
                    </button>
                </div>
            </div>

            {/* SHA256 */}
            <div className="mb-3">
                <label className="form-label">SHA256</label>
                <div className="d-flex gap-2">
                    <input
                        type="text"
                        className="form-control font-monospace"
                        value={sha256 || "-"}
                        readOnly
                    />
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => copyToClipboard(sha256)}
                        disabled={!sha256}
                    >
                        Copiar
                    </button>
                </div>
            </div>

            {/* SHA384 */}
            <div className="mb-3">
                <label className="form-label">SHA384</label>
                <div className="d-flex gap-2">
                    <input
                        type="text"
                        className="form-control font-monospace"
                        value={sha384 || "-"}
                        readOnly
                    />
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => copyToClipboard(sha384)}
                        disabled={!sha384}
                    >
                        Copiar
                    </button>
                </div>
            </div>

            {/* SHA512 */}
            <div className="mb-3">
                <label className="form-label">SHA512</label>
                <div className="d-flex gap-2">
                    <input
                        type="text"
                        className="form-control font-monospace"
                        value={sha512 || "-"}
                        readOnly
                    />
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => copyToClipboard(sha512)}
                        disabled={!sha512}
                    >
                        Copiar
                    </button>
                </div>
            </div>

            {/* SHA3 */}
            <div className="mb-3">
                <label className="form-label">SHA3</label>
                <div className="d-flex gap-2">
                    <input
                        type="text"
                        className="form-control font-monospace"
                        value={sha3 || "-"}
                        readOnly
                    />
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => copyToClipboard(sha3)}
                        disabled={!sha3}
                    >
                        Copiar
                    </button>
                </div>
            </div>
        </div>
    );
}