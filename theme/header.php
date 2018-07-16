<!doctype html>
<html>

<head>
  <meta carset="utf-8">
  <title></title>
  <?php
  
   register_sidebar( array(
    'name' => "Head of the Page ({$post->ID})",
   'id'=> 'head' . $post->ID,
    'description' => "Head Area for the page",
    'before_widget' => '<div class="head-widget-container">',
    'after_widget' => '</div>',
  ));
   register_sidebar( array(
    'name' => "Body of the Page ({$post->ID})",
     'id'=> 'body' . $post->ID,
    'description' => "Body Area for the page",
    'before_widget' => '<div class="body-widget-container">',
    'after_widget' => '</div>',
  ));

   register_sidebar( array(
    'name' => "Foot of the Page ({$post->ID})",
     'id'=> 'foot' . $post->ID,
    'description' => "Foot Area for the page",
    'before_widget' => '<div class="foot-widget-container">',
    'after_widget' => '</div>',
  ));

  ?>
  <?php wp_head(); ?>
</head>

<body>
  <?php wp_nav_menu(array('theme_location'=>'primary')); ?>