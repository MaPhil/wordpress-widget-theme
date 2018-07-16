<?php get_header(); ?>


<?php

echo $post->ID;
dynamic_sidebar("Head of the Page ({$post->ID})");
dynamic_sidebar("Body of the Page ({$post->ID})");
dynamic_sidebar("Foot of the Page ({$post->ID})");
?>




<?php get_footer(); ?>