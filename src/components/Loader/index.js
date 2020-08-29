import React from 'react';
import './styles.scss';
import logoLoad from '../../assets/Logo load.png';

export default function Loader() {
  return (
    <div className="showbox">
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
        </svg>
        <img className="logo_loader" src={logoLoad} alt="logo" />
      </div>
    </div>
  );
}
