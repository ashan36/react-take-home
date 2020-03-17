import axios from "axios";

const requestCampaigns = async () => {
    try {
        const result = await axios.get("https://www.plugco.in/public/take_home_sample_feed");
        return result.data;
    }
    catch (err) {
        //log error for now
        //TODO redirect on api get error, or display error message
        console.log(err);
    }
}

export default requestCampaigns;