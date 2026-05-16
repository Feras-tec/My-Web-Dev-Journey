const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-6 bg-base-300 text-base-content border-t border-base-300">
      <aside className="flex flex-col sm:flex-row items-center gap-2 font-medium">
        <p>© {currentYear} - All rights reserved by</p>
        <span className="font-bold tracking-tight text-primary">FERAS.TEC</span>
      </aside>
    </footer>
  );
};

export default Footer;
