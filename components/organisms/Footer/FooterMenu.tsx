import { ReactNode } from 'react';

interface FooterMenuProps {
  children: ReactNode,
  title: string,
  contact?: boolean
}

export default function FooterMenu(props: Partial<FooterMenuProps>) {
  const { children, title, contact = false } = props;

  if (contact) {
    return (
      <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
        <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
        <ul className="list-unstyled">
          {children}
        </ul>
      </div>
    );
  }

  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
        {children}
      </ul>
    </div>
  );
}
