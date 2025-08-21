import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ThemesButton({ id, title }) {
  return (
    <Link to={`/chemistry/${id}`} className="btn btn-primary m-2">
      {title}
    </Link>
  );
}

ThemesButton.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
