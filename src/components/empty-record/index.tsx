import React from 'react';
import Empty from '@/static/images/empty.png';
interface IProps {
  title?: string;
  subTitle?: string;
}

const EmptyRecord: React.FC<IProps> = ({
  title = 'No records has been added yet.',
  subTitle,
}) => {
  return (
    <div className="empty-state">
      <div className="empty-state__content">
        <div className="empty-state__icon">
          <img src={Empty} alt="" />
        </div>
        <div className="empty-state__message">{title}</div>
        <div className="empty-state__help">{subTitle}</div>
      </div>
    </div>
  );
};

export default EmptyRecord;
