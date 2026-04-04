import { useState, useEffect } from "react";

export default function HashGenMod() {

    const [text, setText] = useState("");
    const [md5, setMD5] = useState("");
    const [sha1, setSHA1] = useState("");
    const [sha256, setSHA256] = useState("");
    const [sha512, setSHA512] = useState("");


    function copyToClipboard(str) {

    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Hash Generator</h2>

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

            {/* OUTPUT */}

            {/* MD5 */}
            <div className="mb-3">
                <label className="form-label">MD5</label>
                <div className="d-flex gap-2">
                    <input
                        type="text"
                        className="form-control font-monospace"
                        value={md5}
                        readOnly
                    />
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => copyToClipboard(md5)}
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
                        value={sha1}
                        readOnly
                    />
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => copyToClipboard(sha1)}
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
                        value={sha256}
                        readOnly
                    />
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => copyToClipboard(sha256)}
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
                        value={sha512}
                        readOnly
                    />
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => copyToClipboard(sha512)}
                    >
                        Copiar
                    </button>
                </div>
            </div>
        </div>
    );
}