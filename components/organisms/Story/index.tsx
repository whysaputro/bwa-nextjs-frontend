import Link from 'next/link';
import StoryImage from './StoryImage';

export default function Story() {
  return (
    <section className="story pt-50 pb-50">
      <div className="container-xxl container-fluid">
        <div className="row align-items-center px-lg-5 mx-auto gap-lg-0 gap-4">
          <StoryImage />
          <div className="col-lg-5 col-12 ps-lg-60">
            <div className="">
              <h2 className="text-4xl fw-bold color-palette-1 mb-30">
                Win the battle.
                <br />
                {' '}
                Be the Champion.
              </h2>
              <p className="text-lg color-palette-1 mb-30">
                Kami menyediakan jutaan cara untuk
                <br
                  className="d-sm-block d-none"
                />
                membantu players menjadi
                <br className="d-sm-block d-none" />
                {' '}
                pemenang sejati
              </p>
              <div className="d-md-block d-flex flex-column w-100">
                <Link href="/#">
                  <a className="btn btn-read text-lg rounded-pill" role="button">Read Story</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
