import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/store/slices/appSlice';
import { getResumeLst } from '@/apis/resume';
import { getProfile } from '@/apis/profile';
import { IProfile } from 'config/@types/app';

import MainLayout from '@/components/main-layout';
import RightContent from './right-content';
import { ensureArray } from '@/utils';
import { Resume } from './@types';
import EmptyRecord from '@/components/empty-record';

const Resume: React.FC = () => {
  const dispatch = useDispatch();
  const [resumes, setResumes] = useState([]);
  const [profile, setProfile] = useState<IProfile>();

  const fetchResumeLst = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await getResumeLst();
      setResumes(data);
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const fetchProfile = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const { data } = await getProfile();
      setProfile(data);
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  useEffect(() => {
    Promise.all([fetchResumeLst(), fetchProfile()]).catch(console.log);
  }, [fetchResumeLst, fetchProfile]);

  if (!resumes?.length) {
    return (
      <MainLayout>
        <EmptyRecord />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="resume">
        <div className="resume__header">
          <div className="resume__header--left">
            {[profile?.lastName, profile?.middleName, profile?.firstName]
              .filter(Boolean)
              .join(' ')}
          </div>
          <div className="resume__header--right">
            <span>{profile?.email}</span>
            <br />
            <span>{profile?.phone}</span>
            <br />
            <span>{profile?.address}</span>
          </div>
        </div>
        {ensureArray(resumes).map((resume: Resume) => {
          return (
            <section key={resume.id} className="resume__section">
              <div className="resume__section--left">{resume.title}</div>
              <div className="resume__section--right">
                <RightContent sections={resume.sections} />
              </div>
            </section>
          );
        })}
      </div>
    </MainLayout>
  );
};

export default Resume;
