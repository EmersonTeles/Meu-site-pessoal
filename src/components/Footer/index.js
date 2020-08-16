import React from 'react';
import './styles.css';

export default function Footer(){
    return(
        <div className="Footer">
            <div className="Content">
                <div className="Copy">
                    <h3>&copy; 2020 by Emerson Teles. All rights reserved.</h3>
                </div>
                <div className="Social">
                    <a href="https://www.instagram.com/emersonlteles/">
                        <i class="fa fa-instagram" aria-hidden="true"> </i>
                    </a>
                    <a href="https://github.com/EmersonTeles/">
                        <i class="fa fa-github" aria-hidden="true"> </i>
                    </a>
                </div>
            </div>
            <h4>Built with React. </h4>
        </div>
    );
}