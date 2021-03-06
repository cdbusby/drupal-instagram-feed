/**
 * Init events
 */
Drupal.behaviors.drupal_instagram_feed = {
    attach: function () {
        var feed = new Instafeed({
            get: 'user',
            userId: Drupal.settings.drupal_instagram_feed.user_id,
            clientId: Drupal.settings.drupal_instagram_feed.client_id,
            accessToken: Drupal.settings.drupal_instagram_feed.access_token,
            resolution: Drupal.settings.drupal_instagram_feed.image_size,
            limit: Drupal.settings.drupal_instagram_feed.num_images,
            template: Drupal.settings.drupal_instagram_feed.template
        });

        if (document.getElementById("instafeed")) {
            feed.run();
        }
    }
};