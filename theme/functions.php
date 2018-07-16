<?php 

function widget_theme_script_enqueue(){
  wp_enqueue_style('customstyle',get_template_directory_uri() . '/css/theme_style.css',array(), '1.0.0','all');
  wp_enqueue_style('customjs',get_template_directory_uri() . '/js/theme_code.js',array(), '1.0.0',false);
}
add_action('wp_enqueue_scripts','widget_theme_script_enqueue');