import { Link } from "react-router-dom";
import { ReactNode } from "react";

type ButtonMailtoProps = {
  mailto: string;
  label: string;
  icon?: ReactNode;
}

export const ButtonMailto = ({ mailto, label, icon }: ButtonMailtoProps) => {
    return (
        <Link className="mt-4 flex gap-2 items-center hover:text-gray-500 transition transform duration-300"
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {icon}
            {label}
        </Link>
    );
};
