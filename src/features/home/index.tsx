import React from 'react';
import MainLayout from '@/components/main-layout';

const Home: React.FC = () => {
  return (
    <MainLayout>
      {/* About */}
      <div className="pb-0 pb-sm-2">
        <h1 className="title title--h1 first-title title__separate">
          About Me
        </h1>
        <p>
          {
            "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs."
          }
        </p>
        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </div>
      {/* What */}
      <div className="box-inner pb-0">
        <h2 className="title title--h3">{"What I'm Doing"}</h2>
        <div className="row">
          {/* Case Item */}
          <div className="col-12 col-lg-6">
            <div className="case-item box box__second">
              <img
                className="case-item__icon"
                src="/static/icons/icon-design.svg"
                alt=""
              />
              <div>
                <h3 className="title title--h5">Web Design</h3>
                <p className="case-item__caption">
                  The most modern and high-quality design made at a professional
                  level.
                </p>
              </div>
            </div>
          </div>
          {/* Case Item */}
          <div className="col-12 col-lg-6">
            <div className="case-item box box__second">
              <img
                className="case-item__icon"
                src="/static/icons/icon-dev.svg"
                alt=""
              />
              <div>
                <h3 className="title title--h5">Web Development</h3>
                <p className="case-item__caption">
                  High-quality development of sites at the professional level.
                </p>
              </div>
            </div>
          </div>
          {/* Case Item */}
          <div className="col-12 col-lg-6">
            <div className="case-item box box__second">
              <img
                className="case-item__icon"
                src="/static/icons/icon-app.svg"
                alt=""
              />
              <div>
                <h3 className="title title--h5">Mobile Apps</h3>
                <p className="case-item__caption">
                  Professional development of applications for iOS and Android.
                </p>
              </div>
            </div>
          </div>
          {/* Case Item */}
          <div className="col-12 col-lg-6">
            <div className="case-item box box__second">
              <img
                className="case-item__icon"
                src="/static/icons/icon-photo.svg"
                alt=""
              />
              <div>
                <h3 className="title title--h5">Photography</h3>
                <p className="case-item__caption">
                  I make high-quality photos of any category at a professional
                  level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="box-inner box-inner--white">
        <h2 className="title title--h3">Testimonials</h2>
        <div className="swiper-container js-carousel-review">
          <div className="swiper-wrapper">
            {/* Item review */}
            <div className="swiper-slide review-item">
              <svg className="avatar avatar--80" viewBox="0 0 84 84">
                <g className="avatar__hexagon">
                  <image
                    xlinkHref="/static/img/avatar-2.jpg"
                    height="100%"
                    width="100%"
                  />
                </g>
              </svg>
              <h4 className="title title--h5">Daniel Lewis</h4>
              <p className="review-item__caption">
                Felecia was hired to create a corporate identity. We were very
                pleased with the work done.
              </p>
            </div>
            {/* Item review */}
            <div className="swiper-slide review-item">
              <svg className="avatar avatar--80" viewBox="0 0 84 84">
                <g className="avatar__hexagon">
                  <image
                    xlinkHref="/static/img/avatar-3.jpg"
                    height="100%"
                    width="100%"
                  />
                </g>
              </svg>
              <h4 className="title title--h5">Jessica Miller</h4>
              <p className="review-item__caption">
                thanks to the skill of Felecia, we have a design that we can be
                proud of.
              </p>
            </div>
            {/* Item review */}
            <div className="swiper-slide review-item">
              <svg className="avatar avatar--80" viewBox="0 0 84 84">
                <g className="avatar__hexagon">
                  <image
                    xlinkHref="/static/img/avatar-4.jpg"
                    height="100%"
                    width="100%"
                  />
                </g>
              </svg>
              <h4 className="title title--h5">Tanya Ruiz</h4>
              <p className="review-item__caption">
                Felecia was hired to create a corporate identity. We were very
                pleased with the work done.
              </p>
            </div>
            {/* Item review */}
            <div className="swiper-slide review-item">
              <svg className="avatar avatar--80" viewBox="0 0 84 84">
                <g className="avatar__hexagon">
                  <image
                    xlinkHref="/static/img/avatar-5.jpg"
                    height="100%"
                    width="100%"
                  />
                </g>
              </svg>
              <h4 className="title title--h5">Thomas Castro</h4>
              <p className="review-item__caption">
                thanks to the skill of Felecia, we have a design that we can be
                proud of.
              </p>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
      {/* Clients */}
      <div className="box-inner box-inner--rounded">
        <h2 className="title title--h3">Clients</h2>
        <div className="swiper-container js-carousel-clients">
          <div className="swiper-wrapper">
            {/* Item client */}
            <div className="swiper-slide">
              <a href="#">
                <img src="/static/img/logo-partner.svg" alt="Logo" />
              </a>
            </div>
            {/* Item client */}
            <div className="swiper-slide">
              <a href="#">
                <img src="/static/img/logo-partner.svg" alt="Logo" />
              </a>
            </div>
            {/* Item client */}
            <div className="swiper-slide">
              <a href="#">
                <img src="/static/img/logo-partner.svg" alt="Logo" />
              </a>
            </div>
            {/* Item client */}
            <div className="swiper-slide">
              <a href="#">
                <img src="/static/img/logo-partner.svg" alt="Logo" />
              </a>
            </div>
            {/* Item client */}
            <div className="swiper-slide">
              <a href="#">
                <img src="/static/img/logo-partner.svg" alt="Logo" />
              </a>
            </div>
            {/* Item client */}
            <div className="swiper-slide">
              <a href="#">
                <img src="/static/img/logo-partner.svg" alt="Logo" />
              </a>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
