import React from 'react';

export function A_Frame_basic (props) {
    return <iframe src={"https://www.youtube.com/embed/" + props.src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowFullScreen></iframe>
}
