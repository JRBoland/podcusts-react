import { Link } from "react-router-dom";

export const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link className="mt-4"
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};
