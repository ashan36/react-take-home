import React, {useState, useEffect} from 'react';
import Campaign from "./Campaign";
import requestCampaigns from "../request";


const CampaignDisplay = () => {
    const getCampaigns = async () => {
        const result = await requestCampaigns();
        return result;
    }

    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        if (campaigns.length < 1) {
            getCampaigns().then((data) => {setCampaigns(data.campaigns)});
        }
    }, [])


    if (campaigns.length > 1) {
        return (
            <div className="campaign-display-wrapper">{campaigns.map((campaign) => <Campaign campaignData={campaign}/>)}</div>
        );
    }
    else {
        return (
            <div>Nothing to display</div>
        )
    }
}

export default CampaignDisplay;