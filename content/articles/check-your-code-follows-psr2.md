---
categories: ["Quick", "Clean Code", "Tip"]
date: "2016-03-03T09:07:50Z"
description: "Prefer to write your code using something like sublime? Or ever been stuck without your IDE of choice, this tip will tell you how to run code standard checks on the commandline."
title: "Check your code follows PSR-2 and check it's got a good design on the command line"
---

Need to check your code follows PSR-2, but it's not supported in your
editor of choice? Here's a quick bit of code to check. It uses
[PHPCS](https://github.com/squizlabs/PHP_CodeSniffer).

```bash
$ composer require --dev "squizlabs/php_codesniffer=*"
$ vendor/bin/phpcs --standard=PSR2 your-code-path/
vendor/bin/phpcs --standard=PSR2 app/

FILE: ...ome/vagrant/Code/search/php-app/app/Logs/SymfonyOutputLogger.php
----------------------------------------------------------------------
FOUND 2 ERRORS AFFECTING 2 LINES
----------------------------------------------------------------------
   3 | ERROR | [x] There must be one blank line after the namespace
     |       |     declaration
 209 | ERROR | [x] Expected 1 newline at end of file; 0 found
----------------------------------------------------------------------
PHPCBF CAN FIX THE 2 MARKED SNIFF VIOLATIONS AUTOMATICALLY
----------------------------------------------------------------------


FILE: ...t/Code/search/php-app/app/Services/Importer/ClassTypeBuilder.php
----------------------------------------------------------------------
FOUND 2 ERRORS AFFECTING 2 LINES
----------------------------------------------------------------------
  3 | ERROR | [x] There must be one blank line after the namespace
    |       |     declaration
 55 | ERROR | [x] Expected 1 newline at end of file; 0 found
----------------------------------------------------------------------
PHPCBF CAN FIX THE 2 MARKED SNIFF VIOLATIONS AUTOMATICALLY
----------------------------------------------------------------------
...SNIPPED...

Time: 764ms; Memory: 10Mb


```

You only need to run the _composer require_ once.

As you can see you'll get a nice summary as to your compliance with
PSR-2, and what you need to fix.

What's more you can also use this code to fix most of the style
violations too!

```bash
$ vendor/bin/phpcbf --standard=PSR2 your-code-path/
Changing into directory /home/vagrant/Code/search/php-app/app/Console/Commands
Processing SearchBenchmarkMerchants.php [PHP => 1414 tokens in 192 lines]... DONE in 44ms (0 fixable violations)
Processing SearchBuildIndex.php [PHP => 481 tokens in 85 lines]... DONE in 13ms (0 fixable violations)
Processing SearchRefreshIndex.php [PHP => 491 tokens in 86 lines]... DONE in 13ms (0 fixable violations)
Processing SearchUpdateIndex.php [PHP => 912 tokens in 134 lines]... DONE in 29ms (0 fixable violations)
Changing into directory /home/vagrant/Code/search/php-app/app/Console
Processing Kernel.php [PHP => 394 tokens in 60 lines]... DONE in 11ms (0 fixable violations)
Changing into directory /home/vagrant/Code/search/php-app/app/Foundation/Bootstrap
Processing DetectEnvironment.php [PHP => 287 tokens in 46 lines]... DONE in 8ms (0 fixable violations)
Changing into directory /home/vagrant/Code/search/php-app/app/Services/Importer
Processing ClassTypeBuilder.php [PHP => 312 tokens in 55 lines]... DONE in 10ms (2 fixable violations)
        => Fixing file: 0/2 violations remaining [made 2 passes]... DONE in 21ms
Processing DocumentPopulator.php [PHP => 163 tokens in 35 lines]... DONE in 5ms (1 fixable violations)
        => Fixing file: 0/1 violations remaining [made 2 passes]... DONE in 13ms
Processing DocumentPopulatorImplementation.php [PHP => 861 tokens in 132 lines]... DONE in 32ms (2 fixable violations)
        => Fixing file: 0/2 violations remaining [made 2 passes]... DONE in 55ms
Processing Import.php [PHP => 126 tokens in 24 lines]... DONE in 4ms (2 fixable violations)
        => Fixing file: 0/2 violations remaining [made 2 passes]... DONE in 11ms
Processing AbstractMerchantStrategy.php [PHP => 351 tokens in 54 lines]... DONE in 10ms (0 fixable violations)
Processing MerchantBestMatchStrategy.php [PHP => 238 tokens in 43 lines]... DONE in 15ms (0 fixable violations)
Processing MerchantExactMatchStrategy.php [PHP => 238 tokens in 43 lines]... DONE in 8ms (0 fixable violations)
Processing MerchantFallbackStrategy.php [PHP => 213 tokens in 39 lines]... DONE in 6ms (0 fixable violations)
Processing MerchantStrategy.php [PHP => 138 tokens in 28 lines]... DONE in 4ms (0 fixable violations)
Patched 10 files
Time: 1.29 secs; Memory: 10Mb

```

If you want to run some fancy analytics on your code to see if your
design is looking okay, use [PHPMD](https://phpmd.org/).

```bash
$ composer require --dev "phpmd/phpmd=@stable"
$ vendor/bin/phpmd your-code/ text cleancode,codesize,design,naming,unusedcode
/home/vagrant/Code/search/php-app/app/Http/Controllers/SearchController.php:29	The class SearchController has a coupling between objects value of 13. Consider to reduce the number of dependencies under 13.
```

This will check against a whole bunch of rules from naming guidelines
to, [cyclomatic complexity](/blog/2015/3/10/cyclomatic-complexity),
to checking for unused code. Check the [PHPMD website](https://phpmd.org/) for more
details.

This will help you write lots of lovely clean code.
