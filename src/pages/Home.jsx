/* eslint-disable no-unused-vars */
import pro from "../assets/pro.png";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <>
      <div className="wave-background dark:wave-background-2"></div>
      <div className="mx-auto flex h-screen w-full flex-col items-center gap-4 md:w-3/4">
        <div className="flex flex-col gap-3">
          <img
            src={pro}
            alt="profile"
            className="mx-auto h-48 w-48 rounded-full md:h-64 md:w-64"
          />
          <h1 className="animate-pan select-none bg-gradient-to-r from-blue-600 via-sky-400 to-sky-300 bg-clip-text text-center text-4xl font-extrabold leading-normal text-transparent md:text-6xl md:leading-snug">
            Willy Resendiz
          </h1>
          <div className="flex flex-row items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/willy-resendiz/"
              target="_blank"
              rel="noreferrer"
              alt="Linkedin Profile"
              title="Linkedin Profile"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="hover-text-grey text-3xl dark:text-white md:text-4xl"
              />
            </a>
            <a
              href="ResendizTorresWilly_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              alt="Resume"
              title="Resume"
            >
              <FontAwesomeIcon
                icon={faFilePdf}
                className="hover-text-grey text-3xl dark:text-white md:text-4xl"
              />
            </a>
            <a
              href="https://github.com/wresendiz1"
              target="_blank"
              rel="noreferrer"
              alt="Github Profile"
              title="Github Profile"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="hover-text-grey text-3xl dark:text-white md:text-4xl"
              />
            </a>
            <a
              href="mailto:wresendiz@utexas.edu"
              target="_blank"
              rel="noreferrer"
              alt="Student Email"
              title="Student Email"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="hover-text-grey text-3xl dark:text-white md:text-4xl"
              />
            </a>
          </div>
        </div>
        <div>
          <p className="rounded-lg p-4 text-center font-serif text-base shadow-lg dark:text-white md:text-lg">
            Hi there! I am a rising senior at the University of Texas at Austin,
            majoring in Management Information Systems with a certificate in
            Computer Science. I enjoy building web applications and learning new
            technologies. In addition to my studies, I have been involved in
            various college extracurricular activities such as being the
            secretary for Association of Industry Analytics and being a mentor
            for first-year students. I also have work experience interning at a
            consulting firm where I helped with a pro-bono client project aimed
            at connecting professionals with k-12 students. This summer, I will
            be returning to the firm for their cybersecurity and privacy team.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
