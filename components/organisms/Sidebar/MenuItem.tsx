import cx from 'classnames';
import Image from 'next/image';

interface MenuItemProps {
  title: string,
  icon: 'ic-menu-overview' | 'ic-menu-transactions' | 'ic-menu-messages' | 'ic-menu-card' | 'ic-menu-rewards' | 'ic-menu-settings' | 'ic-menu-logout',
  active?: boolean
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active } = props;

  const classMenuItem = cx({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    <div className={classMenuItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">{title}</a>
      </p>
    </div>
  );
}
