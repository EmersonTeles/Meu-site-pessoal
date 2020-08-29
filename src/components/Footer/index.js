import React from 'react';
import './styles.css';

export default function Footer() {
  const instagram = 'https://www.instagram.com/emersonlteles/';
  const github = 'https://github.com/EmersonTeles/';
  const linkedin = 'https://www.linkedin.com/in/emerson-teles-75a002197';
  return (
    <div className="Footer">
      <div className="Content">
        <div className="Social">
          <a href={instagram}>
            <i className="fa fa-instagram" aria-hidden="true"> </i>
          </a>
          <a href={github}>
            <i className="fa fa-github" aria-hidden="true"> </i>
          </a>
          <a href={linkedin}>
            <i className="fa fa-linkedin" aria-hidden="true"> </i>
          </a>
        </div>
        <div className="Copy">
          <h3>&copy; 2020 by Emerson Teles. All rights reserved.</h3>
        </div>
        <h4>Built with React.</h4>
      </div>
    </div>
  );
}
