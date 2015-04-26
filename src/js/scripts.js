/**
 * Init events
 */
Drupal.behaviors.drupal_instagram_feed = {
    attach: function () {
        var feed = new Instafeed({
            get: 'user',
            userId: parseInt(Drupal.settings.drupal_instagram_feed.user_id),
            accessToken: Drupal.settings.drupal_instagram_feed.access_token,
            resolution: Drupal.settings.drupal_instagram_feed.image_size,
            limit: Drupal.settings.drupal_instagram_feed.num_images,
            template: Drupal.settings.drupal_instagram_feed.template
        });

        feed.run();
    }
};