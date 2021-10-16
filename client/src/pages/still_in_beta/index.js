import React from 'react';
import styles from './index.css'
import stillInBeta from "../../images/Still_in_Beta.svg"
import {NavLink} from "react-router-dom";

export const StillInBetaPage = ({content}) => {
    return(
        <React.Fragment>
            <div className='Main'>
                <div className='StillInBeta'>
                    <div>

                    </div>
                    <NavLink to='/main'>
                        <div className='TextBlock BetaButton'>
                            Go to main page
                        </div>
                    </NavLink>
                    <img src={stillInBeta}/>
                </div>
            </div>
        </React.Fragment>
    )
}