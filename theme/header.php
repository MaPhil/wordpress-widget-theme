<!doctype html>
<html>

<head>
  <meta carset="utf-8">
  <title></title>
  <?php
  
global $wp_query;
  $postid = $wp_query->post->ID;
   register_sidebar( array(
    'name' => "Head of the Page ({$postid})",
   'id'=> 'head' . $postid,
    'description' => "Head Area for the page",
    'before_widget' => '<div class="head-widget-container">',
    'after_widget' => '</div>',
  ));
   register_sidebar( array(
    'name' => "Body of the Page ({$postid})",
     'id'=> 'body' . $postid,
    'description' => "Body Area for the page",
    'before_widget' => '<div class="body-widget-container">',
    'after_widget' => '</div>',
  ));

   register_sidebar( array(
    'name' => "Foot of the Page ({$postid})",
     'id'=> 'foot' . $postid,
    'description' => "Foot Area for the page",
    'before_widget' => '<div class="foot-widget-container">',
    'after_widget' => '</div>',
  ));
   wp_reset_query();
  ?>
<?php wp_head(); ?>
  

</head>
 
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="<?php bloginfo('url')?>"><?php bloginfo('name')?></a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      
            <?php wp_nav_menu(array(
              'theme_location'  => 'primary',
              'depth'           => 2, // 1 = no dropdowns, 2 = with dropdowns.
              'container'       => 'div',
              'container_class' => 'collapse navbar-collapse',
              'container_id'    => 'bs-example-navbar-collapse-1',
              'menu_class'      => 'navbar-nav ml-auto'
            )); ?>
        
    </div>
  </nav>