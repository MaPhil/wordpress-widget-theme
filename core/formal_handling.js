'use strict';


module.exports = {
  inputHeaderStyle: (style, header) => {
    let txt_header = `/**
  Theme Name: ${header.theme_name}
  Theme URI: ${header.theme_uri}
  Author: ${header.author}
  Description: ${header.description}
*/`;
    style = txt_header + style;
    return style;
  }
} 
