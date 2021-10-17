import React, { Fragment } from 'react';

import { ensureArray } from '@/utils';
import { ResumeType, SubResume } from '../@types';

interface IProps {
  section: SubResume;
}

interface ISubSections {
  sections: SubResume[];
}

const Content: React.FC<IProps> = ({ section }) => {
  if (!section) {
    return null;
  }
  const { title, subTitle, dateRange, html } = section;
  const render = [
    title && <h2 className="right-item__title">{title}</h2>,
    subTitle && <span className="right-item__sub-title">{subTitle}</span>,
    dateRange && (
      <span className="right-item__sub-title date">{dateRange}</span>
    ),
    html && (
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    ),
  ].filter(Boolean);
  return (
    <>
      {render.map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </>
  );
};

const Skill: React.FC<IProps> = ({ section }) => {
  return (
    <ul className="right-item__skills">
      {ensureArray(section.skills).map(skill => (
        <li className="skill" key={skill}>
          {skill}
        </li>
      ))}
    </ul>
  );
};

const getContentByType = ({ section }: { section: SubResume }) => {
  if (!section) {
    return null;
  }

  if (section.type === ResumeType.skill) {
    return <Skill section={section} />;
  }

  return <Content section={section} />;
};

const RightContent: React.FC<ISubSections> = ({ sections }) => {
  if (!sections?.length) {
    return null;
  }
  return (
    <>
      <hr />
      {ensureArray(sections)
        .sort((x, y) => x.position - y.position)
        .map(section => (
          <div className="right-item" key={section.id}>
            {getContentByType({ section })}
          </div>
        ))}
    </>
  );
};

export default RightContent;
