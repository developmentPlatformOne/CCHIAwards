import React from 'react';
import check from '../../dist/img/checked.svg'

const lang = localStorage.getItem('lang');
const SuccessMsg = () => {
  return (
      <div className="successMsgContainer">
        <div className="successMsg">
            <img src={check} alt="successMsg" />
            <span>{ lang === 'ar' ? 'تم الارسال بنجاح' : 'Sent Succesfully' }</span>
        </div>
      </div>
  );
};

export default SuccessMsg;