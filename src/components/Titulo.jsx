import React from 'react';

function Titulo({ content, size = "2"}) {
  return React.createElement(`h${size}`, null, content);
}

export default Titulo;