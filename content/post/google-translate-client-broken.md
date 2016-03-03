+++
categories = ["Quick", "Clean Code", "Tip"]
date = "2016-03-03T20:45:44Z"
description = "How to get translations out of the broken PHP Google API Client"
title = "Google Translate PHP Client Broken"

+++

Trying to use the 
[PHP Google API Client](https://github.com/google/google-api-php-client)
for Google Translate but can't get any translations out, always getting
an empty array when you call getTranslations()?

Try this:

<pre class="code">
<code class="php">

$client = new Google_Client();

$client->setDeveloperKey('xxxx-your-dev-key-xxxx');


$translate = new Google_Service_Translate($client);
$translations = $translate->translations->listTranslations('Hello world!', 'fr');


var_dump($translations->data);
var_dump($translations->data['translations'][0]["translatedText"]);
// Will give you
// 
// array(1) {
//   ["translations"]=>
//   array(1) {
//     [0]=>
//     array(2) {
//       ["translatedText"]=>
//       string(17) "Bonjour le monde!"
//       ["detectedSourceLanguage"]=>
//       string(2) "en"
//     }
//   }
// }
// string(17) "Bonjour le monde!"

</code>
</pre>

Unfortunately this client is generated, so it's not as simple as 
submitting a PR to fix it, but this still works to get hold of those 
awesome translations.