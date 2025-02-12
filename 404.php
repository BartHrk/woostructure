
<?php
get_header();
?>

<div class="error-404 not-found">
    <div class="container">
        <header class="page-header">
            <h1 class="page-title"><?php esc_html_e('Page Not Found', 'modern-store'); ?></h1>
        </header>

        <div class="page-content">
            <p><?php esc_html_e('The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.', 'modern-store'); ?></p>
            
            <?php get_search_form(); ?>
            
            <a href="<?php echo esc_url(home_url('/')); ?>" class="button">
                <?php esc_html_e('Return to Homepage', 'modern-store'); ?>
            </a>
        </div>
    </div>
</div>

<?php
get_footer();
