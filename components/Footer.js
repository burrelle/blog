import { GitHub, Twitter, Linkedin } from 'react-feather';
import VisuallyHidden from './VisuallyHidden';

export default function Footer() {
  const IconSize = 18;

  const footerLinks = [
    {
      name: 'Github',
      href: 'https://github.com/burrelle',
      icon: <GitHub className="stroke-current" size={IconSize} />,
    },
    {
      name: 'Twitter',
      href: 'https://mobile.twitter.com/ev_burrell',
      icon: <Twitter className="stroke-current" size={IconSize} />,
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/evan-burrell',
      icon: <Linkedin className="stroke-current" size={IconSize} />,
    },
  ];

  return (
    <footer className="flex justify-between my-4 md:my-8">
      <div className="flex space-x-4">
        {footerLinks.map(({ href, icon, name }, key) => (
          <a key={key} href={href} className="hover:text-blue-900">
            <VisuallyHidden>{name}</VisuallyHidden>
            {icon}
          </a>
        ))}
      </div>
      <a href="https://burrelle.github.io" className="underline">
        Resume
      </a>
    </footer>
  );
}
