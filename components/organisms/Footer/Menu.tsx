import Link from 'next/link';

interface MenuProps {
  href: string
  title: string
}

export default function Menu(props: MenuProps) {
  const { href, title } = props;

  return (
    <li className="mb-6">
      <Link href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
      </Link>
    </li>
  );
}
