import { useState } from "react";
import { LoremIpsum } from "lorem-ipsum";

export default function Lorem_Ipsum() {

  const [sentences, setSentences] = useState(5);
  const [paragraphs, setParagraphs] = useState(2);
  const [htmlParagraphs, setHtmlParagraphs] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        min: sentences,
        max: sentences
      },
      wordsPerSentence: {
        min: 4,
        max: 16
      }
    });

    const rawText = lorem.generateParagraphs(paragraphs).split("\n");

    let text;

    if (htmlParagraphs) {
      text = rawText.map(p => `<p>${p}</p>`).join("\n");
    } else {
      text = rawText.join("\n\n");
    }

    setResult(text);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">

          {/* Formulario */}
          <div className="card shadow-sm">
            <div className="card-header">
              <h4 className="mb-0">Generador de Lorem Ipsum</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">
                      Cantidad de oraciones por párrafo
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      max="100"
                      value={sentences}
                      onChange={(e) => setSentences(Number(e.target.value))}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">
                      Cantidad de párrafos
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      max="20"
                      value={paragraphs}
                      onChange={(e) => setParagraphs(Number(e.target.value))}
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="htmlParagraphs"
                    checked={htmlParagraphs}
                    onChange={(e) => setHtmlParagraphs(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="htmlParagraphs">
                    HTML paragraphs
                  </label>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Generar
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Resultado */}
          <div className="card shadow-sm mt-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Resultado</h5>
              <button
                className="btn btn-outline-secondary btn-sm"
                type="button"
                onClick={copyToClipboard}
                disabled={!result}
              >
                Copiar
              </button>
            </div>
            <div className="card-body">
              <div
                className="border rounded p-3 bg-body-tertiary text-body font-monospace"
                style={{
                  minHeight: "150px",
                  maxHeight: "300px",
                  overflowY: "auto",
                  whiteSpace: "pre-line"
                }}
              >
                {result || "Aquí aparecerá el texto generado"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}