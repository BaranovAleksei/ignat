import React from "react";
import s from './Error404.module.sass';
import Tilt from 'react-tilt';

function Error404() {
    return (
        <div className={s.pageError}>
            {/*<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >*/}
            <Tilt className={s.tilt} options={{ max : 20 }} >
                <div className={s.tiltInner}>
                    <img src='https://luchchemical.net/images/404.png' alt='404'/>
                </div>
            </Tilt>
        </div>
    );
}

export default Error404;
