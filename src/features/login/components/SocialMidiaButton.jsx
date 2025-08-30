import SVGFunction from "../func/svgFunc";
import PropTypes from "prop-types";

function SocialMidiaButton({ condicao, color, text }) {
  return (
    <>
     <a
            className="flex w-[100%] mb-2 items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            style={{ backgroundColor: `${color}` }}
            href="#!"
            role="button"
            data-twe-ripple-init
            data-twe-ripple-color="light">
            
            <span
              className="me-2 fill-white [&>svg]:mx-auto [&>svg]:h-3.5 [&>svg]:w-3.5">
              <SVGFunction verdadeiro={condicao} />
            </span>
            <p>{text}</p>
          </a>
    </>
  );
}

SocialMidiaButton.propTypes = {
  condicao: PropTypes.bool,
  color: PropTypes.string,
  text: PropTypes.string,
};
SocialMidiaButton.defaultProps = {
  condicao: true,
};

export default SocialMidiaButton;