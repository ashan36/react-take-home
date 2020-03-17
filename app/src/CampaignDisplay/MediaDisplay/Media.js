import React from 'react';
import MediaButtons from "./MediaButtons";

const Media = ({media}) => {


    return (
        <div className="media-wrapper">
            <img className="media-preview"src={media.cover_photo_url}></img>
            {media.media_type === "video"? <div className="play-button">Play</div> : <div className="play-button-hidden"></div>}
            <MediaButtons trackingUrl={media.tracking_link} downloadUrl={media.download_url}/>
        </div>
    );
}

export default Media;