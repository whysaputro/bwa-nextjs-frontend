import Image from 'next/image';
import FooterMenu from './FooterMenu';
import Menu from './Menu';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="#" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br />
                {' '}
                untuk menjadi
                pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterMenu title="Company">
                  <Menu href="/#" title="About Us" />
                  <Menu href="/#" title="Press Release" />
                  <Menu href="/#" title="Terms of Use" />
                  <Menu href="/#" title="Privacy & Policy" />
                </FooterMenu>
                <FooterMenu title="Support">
                  <Menu href="/#" title="Refund Policy" />
                  <Menu href="/#" title="Unlock Rewards" />
                  <Menu href="/#" title="Live Chatting" />
                </FooterMenu>
                <FooterMenu contact>
                  <Menu href="mailto: hi@store.gg" title="hi@store.gg" />
                  <Menu href="mailto: team@store.gg" title="team@store.gg" />
                  <Menu
                    href="http://maps.google.com/?q=Pasific 12,
                                    Jakarta Selatan"
                    title="Pasific 12, Jakarta Selatan"
                  />
                  <Menu href="tel: 02111229090" title="021 - 1122 - 9090" />
                </FooterMenu>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
