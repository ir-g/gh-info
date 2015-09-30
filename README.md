# repo-info

An example single page application, using the Github API. Less than feature complete, but easily extendable/modifiable.

This application uses the following libraries:

* [Routie](https://github.com/jgallen23/routie) - A simple Javascript hash router.
* [doT](https://github.com/olado/doT) - A small but advanced template system. Used for generating the views.

This application uses the following url formats:

* [~](http://isaacrg.github.io/gh-info/#repo/isaacrg/repo-info/home)    `#repo/OWNER/REPO/home` 
* [~](http://isaacrg.github.io/gh-info/#repo/isaacrg/repo-info/commits) `#repo/OWNER/REPO/commits`

The example pages in the "old" folder demonstrate how this project could be done with being physically separate, but the result is too slow. The folder remains to showcase a similar technique to [gh-edit](http://github.com/isaacrg/gh-edit)
