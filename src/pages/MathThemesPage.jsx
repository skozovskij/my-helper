import { useParams, Link } from "react-router-dom";
import { MathJax } from "better-react-mathjax";
import data from "../data/math.js";
import "../styles/MathThemesPage.css";

export default function MathThemesPage() {
  const { id } = useParams();
  const topic = data.find((t) => t.id === parseInt(id));

  if (!topic) {
    return (
      <div className="container text-center mt-4">
        <h2>Тему не знайдено 😢</h2>
        <Link to="/subjects/math">Назад до всіх тем</Link>
      </div>
    );
  }

  const renderTextPart = (part, key) => {
    if (typeof part === "string") return part;
    const Tag = part.bold ? "b" : part.italic ? "i" : "span";
    return (
      <Tag key={key} style={part.style || {}}>
        {part.value}
      </Tag>
    );
  };

  const renderTextBlock = (block, key) => (
    <p key={key} className={["mb-3", block.className].filter(Boolean).join(" ")}>
      {Array.isArray(block.text)
        ? block.text.map((part, idx) => renderTextPart(part, idx))
        : block.text}
    </p>
  );

  const renderListBlock = (block, key) => (
    <ul key={key} className={["mb-3", block.className].filter(Boolean).join(" ")}>
      {block.items.map((item, idx) =>
        typeof item === "string" ? (
          <li key={idx}>{item}</li>
        ) : (
          <li key={idx}>
            {Array.isArray(item.value)
              ? item.value.map((part, pIdx) => renderTextPart(part, pIdx))
              : renderTextPart(item, idx)}
            {item.subItems && (
              <ul>
                {item.subItems.map((sub, sIdx) =>
                  typeof sub === "string" ? (
                    <li key={sIdx}>{sub}</li>
                  ) : (
                    <li key={sIdx}>{renderTextPart(sub, sIdx)}</li>
                  )
                )}
              </ul>
            )}
          </li>
        )
      )}
    </ul>
  );

  const renderBlock = (block, i) => {
    switch (block.type) {
      case "text":
        return renderTextBlock(block, i);
      case "list":
        return renderListBlock(block, i);
      case "image":
        return (
          <img
            key={i}
            src={block.src}
            alt={block.alt || topic.title}
            className={["mb-3", block.className].filter(Boolean).join(" ")}
            style={{ maxWidth: "100%", display: "block", margin: "1rem auto" }}
          />
        );
      case "formula":
        return (
          <div key={i} className="mb-3">
            <MathJax inline>{"\\(" + block.formula + "\\)"}</MathJax>
            {block.explanation && (
              <span> – {block.explanation}</span>
            )}
          </div>
        );
      case "table":
        return (
          <table key={i} className="table table-bordered text-center mb-3">
            {block.headers && (
              <thead>
                <tr>
                  {block.headers.map((h, idx) => (
                    <th key={idx}>{h}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows.map((row, rIdx) => (
                <tr key={rIdx}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-5">{topic.title}</h1>

      {topic.subtopics?.map((sub, subIdx) => (
        <div key={subIdx} className="mb-4">
          {sub.title && <h2>{sub.title}</h2>}
          {sub.contentBlocks?.map(renderBlock)}
        </div>
      ))}

      <Link to="/subjects/math" className="goBack my-5">
        Назад до всіх тем
      </Link>
    </div>
  );
}
