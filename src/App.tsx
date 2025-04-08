import { useState } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "dark bg-gray-900 text-gray-100"
          : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full shadow-sm z-50 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span
                className={`text-xl font-bold ${
                  isDarkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Emmanuel
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                About
              </a>
              <a
                href="#projects"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Projects
              </a>
              <a
                href="#skills"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Skills
              </a>
              <a
                href="#contact"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Contact
              </a>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div
              className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <a
                href="#about"
                className={`block px-3 py-2 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                About
              </a>
              <a
                href="#projects"
                className={`block px-3 py-2 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Projects
              </a>
              <a
                href="#skills"
                className={`block px-3 py-2 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Skills
              </a>
              <a
                href="#contact"
                className={`block px-3 py-2 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className={`pt-32 pb-20 px-4 ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 to-gray-800"
            : "bg-gradient-to-br from-white to-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Emmanuel Amoa-Menyah
          </h1>
          <p
            className={`text-xl mb-8 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            IT Support | Frontend Developer | Graphic Designer
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/kemmydigital"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "hover:bg-gray-700 text-gray-300"
                  : "hover:bg-gray-200 text-gray-600"
              }`}
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuelamoamenyah/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "hover:bg-gray-700 text-gray-300"
                  : "hover:bg-gray-200 text-gray-600"
              }`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#contact"
              className={`p-2 rounded-full ${
                isDarkMode
                  ? "hover:bg-gray-700 text-gray-300"
                  : "hover:bg-gray-200 text-gray-600"
              }`}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 px-4 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-12 text-center ${
              isDarkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/Hoodie.jpg"
                alt="Professional portrait"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p
                className={`text-lg mb-6 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                I'm an IT Support Specialist with over 1.7 years of experience
                in hardware, software, and network support. I enjoy solving
                technical problems and helping users work better with
                technology.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div
                  className={`p-4 rounded-lg text-center ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-blue-500">1.7+</h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    Years Experience
                  </p>
                </div>
                <div
                  className={`p-4 rounded-lg text-center ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-purple-500">12+</h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    Projects Done
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span
                    className={isDarkMode ? "text-gray-300" : "text-gray-600"}
                  >
                    Technical Support – hardware, software, and network
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span
                    className={isDarkMode ? "text-gray-300" : "text-gray-600"}
                  >
                    Microsoft 365 – Teams, Outlook, SharePoint
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span
                    className={isDarkMode ? "text-gray-300" : "text-gray-600"}
                  >
                    Web Development – HTML, CSS, Javascript, WordPress
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <span
                    className={isDarkMode ? "text-gray-300" : "text-gray-600"}
                  >
                    Graphic Design – Photoshop, Illustrator, Figma, Canva
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 px-4 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-12 text-center ${
              isDarkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Web Development Projects */}
            <div
              className={`rounded-lg shadow-lg overflow-hidden ${
                isDarkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80"
                alt="Web Development"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isDarkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  Web Development
                </h3>
                <p
                  className={`mb-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Modern web applications built with React, TypeScript, and
                  other cutting-edge technologies.
                </p>
                <a
                  href="https://github.com/kemmydigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-600"
                >
                  View on GitHub <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Graphic Design Projects */}
            <div
              className={`rounded-lg shadow-lg overflow-hidden ${
                isDarkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
                alt="Graphic Design"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isDarkMode ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  Graphic Design
                </h3>
                <p
                  className={`mb-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Creative designs using Photoshop, Illustrator, and other
                  design tools.
                </p>
                <a
                  href="https://www.pinterest.com/kemmydigital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-500 hover:text-blue-600"
                >
                  View on Pinterest <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 px-4 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-12 text-center ${
              isDarkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "IT Support (Hardware/Software)",
              "Microsoft 365",
              "Web Development",
              "Python",
              "Graphic Design",
              "PowerApps & PowerAutomate",
            ].map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 px-4 ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-12 text-center ${
              isDarkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Contact Me
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`w-full px-4 py-2 rounded-lg border ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500"
                    : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                }`}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-2 rounded-lg border ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500"
                    : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                }`}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className={`w-full px-4 py-2 rounded-lg border ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500"
                    : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                }`}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-4 text-center ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        <p>
          &copy; {new Date().getFullYear()} Emmanuel Amoa-Menyah. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
