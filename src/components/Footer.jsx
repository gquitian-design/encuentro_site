const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-50/50 dark:bg-zinc-950/40 border-t border-emerald-100/50 dark:border-zinc-900 py-6 mt-12 font-sans antialiased">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs font-medium text-emerald-800/60 dark:text-zinc-500 tracking-wide">
          &copy; {currentYear} Encuentro Quitian. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;