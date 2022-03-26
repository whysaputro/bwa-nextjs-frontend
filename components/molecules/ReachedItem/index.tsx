import ctx from 'classnames';

interface ReachedItemProps {
  dataTitle: string;
  desc: string;
  marginLeft?: boolean;
  marginRight?: boolean;
}

export default function ReachedItem(props: Partial<ReachedItemProps>) {
  const {
    dataTitle, desc, marginLeft = false, marginRight = false,
  } = props;

  const classReachedItem = ctx({
    'me-lg-35': marginRight,
    'ms-lg-35': marginLeft,
  });

  return (
    <div className={classReachedItem}>
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{dataTitle}</p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">{desc}</p>
    </div>
  );
}
