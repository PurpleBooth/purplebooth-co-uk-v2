# The Purple Booth Webpage

This is the [purplebooth.co.uk](https://purplebooth.co.uk) website.

## Getting Started

It uses Hugo, install that using [this guide](https://gohugo.io/#action).

To see it running run this after installing hugo.

```
hugo -w server
```

I'll be running on [http://localhost:1313](http://localhost:1313)

For more things you can do run hugo and look at the help page.

```
$ hugo --help
hugo is the main command, used to build your Hugo site.

Hugo is a Fast and Flexible Static Site Generator
built with love by spf13 and friends in Go.

Complete documentation is available at http://gohugo.io/.

Usage:
  hugo [flags]
  hugo [command]

Available Commands:
  server      A high performance webserver
  version     Print the version number of Hugo
  config      Print the site configuration
  check       Check content in the source directory
  benchmark   Benchmark hugo by building a site a number of times.
  convert     Convert your content to different formats
  new         Create new content for your site
  list        Listing out various types of content
  undraft     Undraft changes the content's draft status from 'True' to 'False'
  import      Import your site from others.
  gen         A collection of several useful generators.

Flags:
  -b, --baseURL="": hostname (and path) to the root, e.g. http://spf13.com/
  -D, --buildDrafts[=false]: include content marked as draft
  -F, --buildFuture[=false]: include content with publishdate in the future
      --cacheDir="": filesystem path to cache directory. Defaults: $TMPDIR/hugo_cache/
      --canonifyURLs[=false]: if true, all relative URLs will be canonicalized using baseURL
      --config="": config file (default is path/config.yaml|json|toml)
  -d, --destination="": filesystem path to write files to
      --disableRSS[=false]: Do not build RSS files
      --disableSitemap[=false]: Do not build Sitemap file
      --editor="": edit new content with this editor, if provided
      --ignoreCache[=false]: Ignores the cache directory for reading but still writes to it
      --log[=false]: Enable Logging
      --logFile="": Log File path (if set, logging enabled automatically)
      --noTimes[=false]: Don't sync modification time of files
      --pluralizeListTitles[=true]: Pluralize titles in lists using inflect
      --preserveTaxonomyNames[=false]: Preserve taxonomy names as written ("Gérard Depardieu" vs "gerard-depardieu")
  -s, --source="": filesystem path to read files relative from
      --stepAnalysis[=false]: display memory and timing of different steps of the program
  -t, --theme="": theme to use (located in /themes/THEMENAME/)
      --uglyURLs[=false]: if true, use /filename.html instead of /filename/
  -v, --verbose[=false]: verbose output
      --verboseLog[=false]: verbose logging
  -w, --watch[=false]: watch filesystem for changes and recreate as needed

Use "hugo [command] --help" for more information about a command.
```
