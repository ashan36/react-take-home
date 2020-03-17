import React from 'react';
import Media from "./Media";
import MediaButtons from './MediaButtons';

const MediaDisplay = ({medias}) => {

    return (
        <div className="media-display-wrapper">
        {medias.map((media, index) => <Media media={media} key={index} />
        )}
        </div>
    );
}

export default MediaDisplay;