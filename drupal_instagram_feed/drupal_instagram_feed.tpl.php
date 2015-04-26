<?php

if ($setup_complete): ?>

    <div id="instafeed"></div>

<?php else:

    print t('<p>Please enter your Instagram <em>user_id</em> and <em>access_token</em> in the <a href="' . $settings_path . '">module settings</a>.</p>');

endif;