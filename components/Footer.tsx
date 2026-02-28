export default function Footer() {
  return (
    <footer className="bg-ocean-950 text-white/60">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-serif text-xl text-white font-medium mb-1">
            Serene Holidays
          </p>
          <p className="text-xs tracking-widest uppercase text-sand-400">
            Seaside Holiday Lets
          </p>
        </div>

        <div className="text-center text-sm">
          <a
            href="mailto:info@serenesands.co.uk"
            className="hover:text-white transition-colors"
          >
            info@serenesands.co.uk
          </a>
        </div>

        <p className="text-xs">
          © {new Date().getFullYear()} Serene Holidays. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
