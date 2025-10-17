const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 py-6 px-4">
      <div className="container mx-auto text-center text-slate-400">
        <p>&copy; {currentYear} RB-TECH. All Rights Reserved.</p>
        <p className="text-sm">Built with React, Vite, and Tailwind CSS by Joseph Marfo.</p>
      </div>
    </footer>
  );
};

export default Footer;