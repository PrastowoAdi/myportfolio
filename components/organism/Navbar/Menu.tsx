import cx from "classnames";
import Link from "next/link";

interface MenuProps {
    title: string;
    href: string;
    active?: boolean;
}
export default function Menu(props: Partial<MenuProps>) {
  const { title, href = "/", active } = props;
  const classTitle = cx({
    "nav-link": true,
    active,
  });
  return (
    <li className="nav-item">
      <Link href={href}>
        <a className={classTitle}>{title}</a>
      </Link>
    </li>
  );
}
