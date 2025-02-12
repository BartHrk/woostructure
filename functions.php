
<?php
if (!defined('ABSPATH')) {
    exit;
}

// Theme Setup
function modern_store_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('woocommerce');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'modern-store'),
        'footer' => esc_html__('Footer Menu', 'modern-store'),
    ));
}
add_action('after_setup_theme', 'modern_store_setup');

// Enqueue scripts and styles
function modern_store_scripts() {
    wp_enqueue_style('modern-store-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_script('modern-store-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'modern_store_scripts');

// Register widget areas
function modern_store_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Sidebar', 'modern-store'),
        'id'            => 'sidebar-1',
        'description'   => esc_html__('Add widgets here.', 'modern-store'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'modern_store_widgets_init');
