import React from "react";
import s from './Error404.module.css';

function Error404() {
    return (
        <div className={s.pageError}>
            <div className={s.imgBackground}>
              <img src="https://static8.depositphotos.com/1023102/1066/i/950/depositphotos_10662658-stock-photo-3d-error-404-crossword.jpg" alt="error404"/>
            </div>
        </div>
    );
}

export default Error404;
