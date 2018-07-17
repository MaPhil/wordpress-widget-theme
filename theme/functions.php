<?php 

function widget_theme_script_enqueue(){
  
  $css_to_include = array(
    "theme"=>get_template_directory_uri() ."/css/theme_style.css",
    "bootstrap"=>get_template_directory_uri() ."/bootstrap.min.css",
  );
  $js_to_include = array(
    "theme"=>get_template_directory_uri() ."/js/theme_code.js",
    "jquery"=>get_template_directory_uri() ."/js/jquery-3.3.1.slim.min.js",
    "popper"=>get_template_directory_uri() ."/js/popper.min.js",
    "bootstrap"=>get_template_directory_uri() ."/js/bootstrap.min.js",
  );
  
  wp_enqueue_style('customstyle', $css_to_include['theme'],array(), '1.0.0','all');
  wp_enqueue_style('customstyle', $css_to_include['bootstra'],array(), '1.0.0','all');
  
  wp_enqueue_style('customjs',$js_to_include['jquery'],array(), '1.0.0',false);
  wp_enqueue_style('customjs',$js_to_include['popper'],array(), '1.0.0',false);
  wp_enqueue_style('customjs',$js_to_include['bootstrap'],array(), '1.0.0',false);
  wp_enqueue_style('customjs',$js_to_include['theme'],array(), '1.0.0',false);
}
add_action('wp_enqueue_scripts','widget_theme_script_enqueue');

function my_remove_post_type_support() {
    remove_post_type_support( 'page', 'editor' );
}

add_action( 'init', 'my_remove_post_type_support', 999 );

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
        'name' => __("Head of the Page ({$post->post_title})"),
         'id' => "head{$post->ID}",
        'description' => "Head Area for the page",
        'before_widget' => '<div class="head-widget-container">',
        'after_widget' => '</div>',
      ));
        }
      
        if (!isset($wp_registered_sidebars['body' . $post->ID])) {
       register_sidebar( array(
        'name' => __("Body of the Page ({$post->post_title})"),
         'id' => "body{$post->ID}",
        'description' => "Body Area for the page",
        'before_widget' => '<div class="body-widget-container">',
        'after_widget' => '</div>',
      ));
        }
      
        if (!isset($wp_registered_sidebars['foot' . $post->ID])) {

       register_sidebar( array(
        'name' => __("Foot of the Page ({$post->post_title})"),
         'id' => "foot{$post->ID}",
        'description' => "Foot Area for the page",
        'before_widget' => '<div class="foot-widget-container">',
        'after_widget' => '</div>',
      ));
        }

    }
    wp_reset_postdata();
}

add_action('widgets_init', 'widget_theme_actionSidebarAdminSetup');

/**$$pull-widgets$$*/
// Register and load the widget
function wpb_load_widget() {
  /**$$register$$*/
}
add_action( 'widgets_init', 'wpb_load_widget' );
 


