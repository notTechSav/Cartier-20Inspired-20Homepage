const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-100 md:py-16 md:px-8 max-md:py-12 max-md:px-6">
      <div className="max-w-luxury mx-auto flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left md:gap-8 max-md:gap-6">
        <p className="text-sm font-light tracking-wide text-gray-600">
          © 2025 Katherine Taylor
        </p>
        <nav className="flex flex-col items-center gap-3 md:flex-row md:gap-8 max-md:gap-3">
          <a
            href="#"
            className="text-sm font-light tracking-wide text-gray-600 transition-colors hover:text-gray-900"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-sm font-light tracking-wide text-gray-600 transition-colors hover:text-gray-900"
          >
            Press
          </a>
          <a
            href="#"
            className="text-sm font-light tracking-wide text-gray-600 transition-colors hover:text-gray-900"
          >
            Careers
          </a>
          <a
            href="#"
            className="text-sm font-light tracking-wide text-gray-600 transition-colors hover:text-gray-900"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm font-light tracking-wide text-gray-600 transition-colors hover:text-gray-900"
          >
            Terms
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
