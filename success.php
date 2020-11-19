<?php
require '../../landing/vendor/autoload.php';
new \kma\core\components\KmaApp(include '../../landing/config/main.php');
echo \kma\core\Instance::$app->getSuccess()->printTemplate();