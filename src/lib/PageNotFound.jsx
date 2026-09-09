import { useLocation, Link } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-onyx text-ivory">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="font-display text-7xl font-light text-ivory/20">404</h1>
          <div className="h-px w-16 bg-gold/40 mx-auto" />
        </div>

        <div className="space-y-3">
          <h2 className="font-display text-2xl font-light">Page Not Found</h2>
          <p className="text-sm font-light text-ivory/50 leading-relaxed">
            The page{" "}
            <span className="text-ivory/80">"{pageName}"</span>{" "}
            could not be found.
          </p>
        </div>

        <div className="pt-6">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 text-[11px] tracking-luxe uppercase text-gold border border-gold hover:text-ivory transition-colors duration-500"
          >
            Return to the Maison
          </Link>
        </div>
      </div>
    </div>
  );
}
