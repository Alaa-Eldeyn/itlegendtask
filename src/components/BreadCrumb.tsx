import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);

  return (
    <nav className="text-gray-600 text-md lg:text-lg my-4">
      <ul className="flex items-center gap-2">
        <li>
          <Link href="/" className="text-zinc-600 hover:text-zinc-900 soft">
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;

          return (
            <li key={href} className="flex items-center capitalize">
              <span className="mx-2 text-zinc-500">
                <ChevronRight />
              </span>
              {isLast ? (
                <span className="hover:text-zinc-900  font-semibold soft">
                  {decodeURIComponent(path)}
                </span>
              ) : (
                <Link href={href} className="hover:text-zinc-900 soft">
                  {decodeURIComponent(path)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
