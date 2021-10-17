import React from 'react';
import MainLayout from '@/components/main-layout';

const About: React.FC = () => {
  return (
    <MainLayout>
      {/* About */}
      <div className="pb-0 pb-sm-2">
        <h1 className="title title--h1 first-title title__separate">
          About Me
        </h1>
        {`I'm software Developer from HCM, Vietnam started with Javascript as a Front-End. I have a good understanding of Reactjs and Redux data flow. I also have middle knowledge of the Nodejs platform and the No-SQL database (MongoDB).`}
        <p>
          {`My job involves doing what I love, Developing new websites/applications, customer relationship management (CRM) applications and developing fantastic content management systems (CMS). Currently, I'm woking full-time an outsource company and freelancer for some partners that worked with me for a long time.`}
        </p>
        <p>
          I spend a lot of time learning new techniques and actively help other
          people learn web development through a variety of help groups. I think
          this is a main key help me improve my-seft every day.
        </p>
      </div>
      {/* What */}
      <div className="box-inner pb-0">
        <h2 className="title title--h3">{"What I'm Doing"}</h2>
        <div className="what-wrap">
          <div className="what-item">
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
          <div className="what-item">
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
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
