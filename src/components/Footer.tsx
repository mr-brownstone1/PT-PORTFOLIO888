import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-12 pt-8">
      <div className="page-container">
        <div className="kathin-card grid gap-10 p-8 md:grid-cols-3 md:p-10">
          <div>
            <p className="font-display text-lg font-bold text-kathin-text">
              Suphaphorn Khan-Ngoen
            </p>
            <p className="mt-1 text-sm text-kathin-muted">UX/UI Designer</p>
          </div>
          <div>
            <p className="text-xs font-medium text-kathin-muted">Pages</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/" className="text-sm text-kathin-text hover:opacity-70">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-kathin-text hover:opacity-70">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-kathin-text hover:opacity-70">
                  About
                </Link>
              </li>
              <li>
                <Link href="/stack" className="text-sm text-kathin-text hover:opacity-70">
                  Stack
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium text-kathin-muted">Info</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/#contact" className="text-sm text-kathin-text hover:opacity-70">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="mailto:spp.kng1998@gmail.com"
                  className="text-sm text-kathin-text hover:opacity-70"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-kathin-muted">
          © {new Date().getFullYear()} Suphaphorn · Portfolio
        </p>
      </div>
    </footer>
  );
}
