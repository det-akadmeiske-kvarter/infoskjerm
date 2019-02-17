<?php

header ('Content-type: application/json');
echo file_get_contents("http://www.linticket.no/json/Kvarteret/index.php3");

?>