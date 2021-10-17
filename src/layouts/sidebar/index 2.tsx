import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProfile, getSocialLst } from '@/apis/profile';
import { setLoading } from '@/store/slices/appSlice';
import { IProfile, ISocial } from 'config/@types/app';

import { ensureArray } from '@/utils';

import Avatar from '@/static/images/avatar.jpg';
import useWindowSize from '@/hooks/useWindowSize';

const defaultShortName = 'Alden Nguyen';

const defaultSocials = [
  {
    label: 'Github',
    link: 'https://github.com/thaind97git',
    icon: 'fab fa-github-square',
  },
  {
    label: 'Stack Overflow',
    link: 'https://stackoverflow.com/users/11637854/aldenn',
    icon: 'fab fa-stack-overflow',
  },
  {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/aldenn97/',
    icon: 'fab fa-linkedin',
  },
];

const defaultProfile = {
  avatar: Avatar,
  address: '1 - 9 Street, Ly Phuc Man, District 7',
  email: 'thaind97.dev@gmail.com',
  phone: '0934496440',
};

const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState<IProfile>();
  const [socials, setSocials] = useState<ISocial[]>();

  const { width, isIpad } = useWindowSize();

  const fetchProfile = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await getProfile();
      setProfile(data);
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const fetchSocial = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await getSocialLst();
      setSocials(data);
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  useEffect(() => {
    Promise.all([fetchProfile(), fetchSocial()]).catch(error => {
      console.log({ error });
    });
  }, [fetchProfile, fetchSocial]);
  console.log({ isIpad, width });
  //is_stuck
  return (
    <div className={`sidebar box shadow pb-0 `}>
      <svg className="avatar avatar--180" viewBox="0 0 188 188">
        <g className="avatar__box">
          <image
            xlinkHref={profile?.avatar || defaultProfile.avatar}
            height="100%"
            width="100%"
          />
        </g>
      </svg>
      <div className="text-center">
        <h3 className="title title--h3 sidebar__user-name">
          {/* <span className="weight--500">Felecia</span> Brown */}
          <span className="weight--600">
            {profile?.shortName || defaultShortName}
          </span>
        </h3>
        <div className="badge badge--light">Software Developer</div>
        {/* Social */}
        {ensureArray(socials).length ? (
          <div className="social">
            {socials.map((social: ISocial) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={social.id}
                className="social__link"
                href={social.link}
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        ) : (
          <div className="social">
            {defaultSocials.map(social => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={social.label}
                className="social__link"
                href={social.link}
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="sidebar__info box-inner box-inner--rounded">
        <ul className="contacts-block">
          <li
            className="contacts-block__item"
            data-toggle="tooltip"
            data-placement="top"
            title="Birthday"
          >
            <div className="icon">
              <i className="far fa-calendar" />
            </div>
            <div>Sep 25, 1997</div>
          </li>
          <li
            className="contacts-block__item"
            data-toggle="tooltip"
            data-placement="top"
            title="Address"
          >
            <div className="icon">
              <i className="fas fa-map-marker-alt" />
            </div>

            <div>{profile?.address || defaultProfile.address}</div>
          </li>
          <li
            className="contacts-block__item"
            data-toggle="tooltip"
            data-placement="top"
            title="E-mail"
          >
            <div className="icon">
              <i className="far fa-envelope" />
            </div>
            <a href="mailto:example@mail.com">
              <div>{profile?.email || defaultProfile.email}</div>
            </a>
          </li>
          <li
            className="contacts-block__item"
            data-toggle="tooltip"
            data-placement="top"
            title="Phone"
          >
            <div className="icon">
              <i className="fas fa-mobile-alt" />
            </div>
            <div>{profile?.phone || defaultProfile.phone}</div>
          </li>
        </ul>
        <div>
          <a className="btn" href="#">
            <i className="font-icon icon-download" /> Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
