import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

function Card({ title, image, shortDesc, desc, tools, repo, link }) {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg shadow-lg">
      <a
        href={link ? link : undefined}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={
            link
              ? "aspect-[4/3] transform object-contain transition duration-500 ease-in-out hover:brightness-75"
              : "dark:image-to-white aspect-[4/3] transform object-contain transition duration-500 ease-in-out hover:brightness-75"
          }
          src={image}
          alt="Link"
          title="Link to Live Project"
        />
      </a>

      <div className="px-6 py-4">
        <span className="text-gray-700 dark:text-white">{shortDesc}</span>
        <div className="mb-2 text-xl font-bold dark:text-white">{title}</div>

        <p className="text-base text-gray-700 dark:text-white">{desc}</p>
        <p className="py-2 text-sm text-gray-700 dark:text-white md:py-4">
          {tools}
        </p>
      </div>
      <div className="px-6 pb-2 pt-4">
        <a href={repo} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithubSquare}
            className="hover-text-grey text-3xl dark:text-white md:text-4xl"
          />
        </a>
      </div>
    </div>
  );
}

export default Card;
