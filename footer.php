
<?php
/**
 * The template for displaying the footer
 */
?>

<footer class="site-footer">
    <div class="container">
        <div class="footer-widgets">
            <?php dynamic_sidebar('footer-1'); ?>
        </div>

        <nav class="footer-navigation">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'footer',
                'menu_id' => 'footer-menu',
            ));
            ?>
        </nav>

        <div class="site-info">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
