import Image from 'next/image';
import Link from 'next/link';

interface GameItemProps {
  title: string;
  category: string;
  imageName: string;
}

export default function GameItem(props: GameItemProps) {
  const { title, category, imageName } = props;

  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <a>
          <div className="blur-sharp">
            <Image src={`/img/${imageName}`} width={205} height={270} alt="thumbnail" className="thumbnail" />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image src="/icon/controller.svg" width={54} height={36} alt="controller" />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{category}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
