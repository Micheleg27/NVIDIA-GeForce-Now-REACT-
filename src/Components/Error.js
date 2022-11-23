import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './BasicComponents/Button';


export function Error() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <div className="error-container">
                <div className='error-logo-container'>
                    <img
                        className="error-logo-Nvidia"
                        src="https://login.nvgs.nvidia.com/NVIDIA-Logo.dark.33f4916f178880192ae7.svg"
                        alt="nvidia-logo"
                    />
                </div>
                <div className="background-error">
                    <img src="https://miro.medium.com/max/720/1*hFwwQAW45673VGKrMPE2qQ.png" />
                    <button
                        className="error-button"
                        // buttonSize="BTN--large"
                        // buttonStyle="btn--primary--green"
                        onClick={() => navigate('/')}>
                        Torna alla Home
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}
