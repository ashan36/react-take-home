import React from 'react';
import CampaignHeader from "./CampaignHeader";
import MediaDisplay from "./MediaDisplay";

const Campaign = ({campaignData}) => {

    return (
        <div className="campaign-wrapper">
        <CampaignHeader icon={campaignData.campaign_icon_url} name={campaignData.campaign_name} ppi={campaignData.pay_per_install}/>
        <MediaDisplay medias={campaignData.medias} />
        </div>
    )
}

export default Campaign;