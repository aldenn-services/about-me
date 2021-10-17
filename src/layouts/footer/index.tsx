import React from 'react';
import { useSelector } from 'react-redux';
import { selectDisplayLayout } from '@/store/slices/layoutSlice';

const Footer: React.FC = () => {
  const { footer } = useSelector(selectDisplayLayout);
  if (!footer) {
    return null;
  }
  return <footer className="footer">© 2021 aldenn</footer>;
};

export default Footer;
