import { Link } from "@remix-run/react";

function Header() {
  return (
    <header className="flex py-5 border-b border-gray-200">
      <div className="container mx-auto">
        <Link to="/" prefetch="intent" className="font-bold text-gray-950">
          Build UI Fast
        </Link>
      </div>
    </header>
  );
}

export { Header };
