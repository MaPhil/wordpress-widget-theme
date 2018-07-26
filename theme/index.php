<?php get_header(); ?>

<?php
dynamic_sidebar("head{$post->ID}");
dynamic_sidebar("body{$post->ID}");
dynamic_sidebar("foot{$post->ID}");
?>

<?php get_footer(); ?>