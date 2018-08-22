# Welcome to the Widget World!

The wordpress widget theme is a theme builder for wordpress as the name hints, it gives the user the possibility to create awesome themes using the build in widget functionality as a brick system. 

# Getting started
The builder relies on nodejs to _"compile"_ the widgets you wrote to one single theme, this means you need to install nodejs first (I use the version 8 lts). 
And of curse you need wordpress up and running ([here](https://codex.wordpress.org/Installing_WordPress_Locally_on_Your_Mac_With_MAMP) is a good explanation on how to install wordpress locally on a mac). 
>My suggestion for you is to create the theme locally and uploaded after you were done. This makes debugging a little bit easier.

You need to clone this repository and install all dependencies by using **npm i** inside the cloned folder.

## Setting up the config file
After you have installed everything you need to set environment path in the **config.js** file. Your file could look something linke this: 

    module.exports = {
      dev_uri: '/Users/<username>/Documents/LocalWebServer/wordpress/wp-content/themes',
      dist_uri: __dirname + '/dist',
      folder_name: 'theme'
    }

Before you start to write your widgets you will need to create a **widgets** folder to put all the widgets.
## Write your widgets

You can either write your widget by hand or you can use the boilerplate system that reduces the word to only html, js and css. You can find this system [here](https://github.com/MaPhil/wordpress-widget-boilerplate).

## Edit your theme

To really get a good looking and reusable theme you will need to change the php files. This system will only provide you with a very basic design but you can change quit a bit by only using the **style.css** or the **theme.js** file

