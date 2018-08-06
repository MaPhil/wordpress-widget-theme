<?php get_header(); ?>

<?php
global $wp_query;
$postid = $wp_query->post->ID;
dynamic_sidebar("head{$postid}");
dynamic_sidebar("body{$postid}");
dynamic_sidebar("foot{$postid}");
wp_reset_query();
?>

<?php get_footer(); ?>