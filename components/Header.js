import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const { pathname } = useRouter();

  const paths = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/thoughts', text: 'Thoughts' },
    { href: '/uses', text: 'Uses' },
  ];

  const shared = 'border-b-2 pb-1';
  const activeClass = `${shared} border-blue-900`;
  const inactiveClass = `${shared} border-transparent hover:border-blue-900`;

  return (
    <nav className="flex my-4 md:my-8">
      <div className="space-x-4">
        {paths.map(({ href, text }, key) => (
          <Link key={key} href={href}>
            <a className={pathname === href ? activeClass : inactiveClass}>
              {text}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
