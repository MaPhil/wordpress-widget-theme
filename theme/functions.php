<?php 

function widget_theme_script_enqueue(){
  wp_enqueue_style('customstyle',get_template_directory_uri() . '/css/theme_style.css',array(), '1.0.0','all');
  wp_enqueue_style('customjs',get_template_directory_uri() . '/js/theme_code.js',array(), '1.0.0',false);
}
add_action('wp_enqueue_scripts','widget_theme_script_enqueue');

function widget_theme_theme_setup(){
  add_theme_support('menus');
  register_nav_menu('primary','Header Navigation');
  register_nav_menu('secondary','Footer Navigation');
}
add_action('init','widget_theme_theme_setup');


function widget_theme_actionSidebarAdminSetup() {
    global $post;
    global $wp_registered_sidebars;

    // find all pages that use template with dynamic widget zone
    $query = new WP_Query(array(
        'post_type' => 'page',
        'nopaging' => true,
        'orderby' => 'title',
        'order' => 'ASC',
    ));
    while ($query->have_posts()) {
        $query->the_post();
        //echo "<script>console.log({$post->ID})</script>";
      
        // register any that aren't already registered
        if (!isset($wp_registered_sidebars['head' . $post->ID])) {
       register_sidebar( array(
        'name' => "Head of the Page ({$post->ID})",
        'description' => "Head Area for the page",
        'before_widget' => '<div class="head-widget-container">',
        'after_widget' => '</div>',
      ));
        }
      
        if (!isset($wp_registered_sidebars['body' . $post->ID])) {
       register_sidebar( array(
        'name' => "Body of the Page ({$post->ID})",
        'description' => "Body Area for the page",
        'before_widget' => '<div class="body-widget-container">',
        'after_widget' => '</div>',
      ));
        }
      
        if (!isset($wp_registered_sidebars['foot' . $post->ID])) {

       register_sidebar( array(
        'name' => "Foot of the Page ({$post->ID})",
        'description' => "Foot Area for the page",
        'before_widget' => '<div class="foot-widget-container">',
        'after_widget' => '</div>',
      ));
        }

    }
    wp_reset_postdata();
}

add_action('widgets_init', 'widget_theme_actionSidebarAdminSetup');
