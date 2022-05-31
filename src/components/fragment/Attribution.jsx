import React from 'react';
import '../assets/scss/Attribution.scss';
import {useSelector} from "react-redux";

const Attribution = () => {
    const {playing} = useSelector(state => state.musicReducer);
    return (
        <div className={"Attribution"}>
            <h3>Attribution</h3>
            <div className={"Attribution-div"}>
               
            </div>
            {
                playing &&
                <div className={"Attribution-div"}>
                    <div className="Attribution-text">
                        <div>
                            <p>
                                Song: {playing.attribution.song}
                            </p>
                            <p>
                                Music by: {playing.attribution.musicBy}
                            </p>
                            <p>
                                {
                                    playing.attribution.download !== null &&
                                    <span>
                                    Download:
                                    <a href={playing.attribution.download}>{playing.attribution.download}</a>
                                </span>
                                }
                            </p>
                            <p>
                                {
                                    playing.attribution.stream !== null &&
                                    <span>
                                    Download:
                                    <a href={playing.attribution.stream}>{playing.attribution.stream}</a>
                                </span>
                                }
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Attribution;