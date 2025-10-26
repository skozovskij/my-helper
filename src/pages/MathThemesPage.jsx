import { useParams, Link } from "react-router-dom";
import { MathJax } from "better-react-mathjax";
import data from "../data/math.js";
import QuizComponent from "../components/QuizComponent"; // 1. ДОДАНО
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

  // Ця функція вже підтримує MathJax, залишаємо її
  const renderTextPart = (part, key) => {
    if (typeof part === "string") return part;

    if (part.type === "math") {
      return <MathJax key={key} inline>{`$${part.value}$`}</MathJax>;
    }

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

  // Ця функція вже підтримує <ol> та MathJax, залишаємо її
  const renderListBlock = (block, key) => {
    const ListTag = block.ordered ? "ol" : "ul";
    return (
      <ListTag
        key={key}
        className={["mb-3", block.className].filter(Boolean).join(" ")}
        start={block.start || undefined}
      >
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
      </ListTag>
    );
  };

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
      case "formula": // Ця логіка правильна для MathJax
        return (
          <div key={i} className="mb-3 text-center">
            <MathJax>{"$$" + block.formula + "$$"}</MathJax>
            {block.explanation && (
              <span className="d-block text-muted"> – {block.explanation}</span>
            )}
          </div>
        );
      case "table": // Ця логіка правильна для MathJax
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
                    <td key={cIdx} style={typeof cell === 'object' && cell.style ? cell.style : {}}>
                      {(typeof cell === 'object' && cell !== null && Array.isArray(cell.value))
                        ? cell.value.map((part, pIdx) => renderTextPart(part, pIdx))
                        : renderTextPart(cell, cIdx) 
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
      
      // 2. ДОДАНО 'case "quiz"' з твого файлу хімії
      case "quiz": {
        return <QuizComponent key={i} questions={block.questions} />;
      }
        
      default:
        return null;
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-5">{topic.title}</h1>

      {/* Цей цикл тепер автоматично знайде і відрендерить тест,
          якщо він буде останньою "підтемою" */}
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