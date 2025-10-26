import { useParams, Link } from "react-router-dom";
import { MathJax } from "better-react-mathjax";
import data from "../data/chemistry";
import QuizComponent from "../components/QuizComponent";
import "../styles/ChemistryThemesPage.css";

export default function ChemistryThemesPage() {
  const { id } = useParams();
  const topic = data.find((t) => t.id === parseInt(id));

  if (!topic) {
    return (
      <div className="container text-center mt-4">
        <h2>Тему не знайдено 😢</h2>
        <Link to="/subjects/chemistry">Назад до всіх тем</Link>
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

  const renderTextBlock = (block, key) => {
    const blockClassName = ["mb-3", block.className].filter(Boolean).join(" ");

    return (
      <p key={key} className={blockClassName} style={block.style}>
        {Array.isArray(block.text)
          ? block.text.map((part, idx) => renderTextPart(part, idx))
          : block.text}
      </p>
    );
  };

  const renderListBlock = (block, key) => {
    const blockClassName = ["mb-3", block.className].filter(Boolean).join(" ");

    const renderListItem = (item, idx) => {
      if (typeof item === "string") return <li key={idx}>{item}</li>;

      const valueContent = Array.isArray(item.value)
        ? item.value.map((part, pIdx) => renderTextPart(part, pIdx))
        : renderTextPart(item, idx);

      return (
        <li key={idx}>
          {valueContent}
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
      );
    };

    return (
      <ul key={key} className={blockClassName} style={block.style}>
        {block.items.map(renderListItem)}
      </ul>
    );
  };

  const renderBlock = (block, i) => {
    switch (block.type) {
      case "text":
        return renderTextBlock(block, i);
      case "list":
        return renderListBlock(block, i);
      case "image": {
        const { src, alt, style, ...rest } = block;
        const mergedStyle = {
          maxWidth: "100%",
          display: "block",
          margin: "1rem auto",
          ...style,
        };
        return (
          <img
            key={i}
            src={src}
            alt={alt || topic.title}
            className={["mb-3", block.className].filter(Boolean).join(" ")}
            style={mergedStyle}
            {...rest}
          />
        );
      }
      case "formula": {
        return (
          <p
            key={i}
            className={["mb-3", block.className].filter(Boolean).join(" ")}
            style={block.style}
            {...block.rest}
          >
            <b>{block.formula}</b> – {block.explanation}
          </p>
        );
      }
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

      {topic.subtopics?.map((sub, subIdx) => (
        <div key={subIdx} className="mb-4">
          <h2>{sub.title}</h2>
          {sub.contentBlocks?.map(renderBlock)}
        </div>
      ))}

      <Link to="/subjects/chemistry" className="goBack my-5">
        Назад до всіх тем
      </Link>
    </div>
  );
}

