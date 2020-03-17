import React from 'react';

const CampaignHeader = ({icon, name, ppi}) => {
    return (
        <div className="campaign-header-wrapper">   
            <div className="campaign-icon-wrapper">
                <img src={icon} alt="campaign icon"/>
            </div>
            <div className="campaign-name-wrapper">
                <h3 className="campaign-name">{name}</h3>
                <p className="ppi-text">{`${ppi} per install`}</p>
            </div>
        </div>
    );
}

export default CampaignHeader;