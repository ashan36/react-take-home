import React from 'react';

const MediaButtons = ({trackingUrl, downloadUrl}) => {

    const handleCopyClick = (e) => {
        e.preventDefault();
        //TODO add tracking URL to clipboard
        //Browser support for clipboard events varies
    }

    const handleDownloadClick = (e) => {
        e.preventDefault();
        //make a get call to the API with headers to trigger a download
    }

    return (
        <div className="media-buttons-wrapper">
            <button className="media-button" onClick={(e) => handleCopyClick(e)}>Copy Link</button>
            <button className="media-button" onClick={(e) => handleDownloadClick(e)}>Download</button>
        </div>
    );
}

export default MediaButtons;