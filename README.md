# gh-info

An example single page application, using the Github API. Less than feature complete, but easily extendable/modifiable.

## Libraries

This application uses the following libraries:

* [Routie](https://github.com/jgallen23/routie) - A simple Javascript hash router.
* [doT](https://github.com/olado/doT) - A small but advanced template system. Used for generating the views.

## Usage

This application uses the following url formats:

* [~](http://isaacrg.github.io/gh-info/#repo/isaacrg/repo-info/home)    `#repo/OWNER/REPO/home` 
* [~](http://isaacrg.github.io/gh-info/#repo/isaacrg/repo-info/commits) `#repo/OWNER/REPO/commits`

The example pages in the "old" folder demonstrate how this project could be done with being physically separate, but the result is too slow. The folder remains to showcase a similar technique to [gh-edit](http://github.com/isaacrg/gh-edit)

**Note:** Due to Github API rate limiting, you could use up your days  worth of the Github API rate limit. If you do encounter this problem [Generate a personal access token](https://github.com/settings/tokens), and then access `http://isaacrg.github.io/gh-info/?ACCESS-TOKEN-HERE#repo/isaacrg/repo-info/home`, and then modify the hash part of the url as appropriate. Using this access token method, you can also view information about private repositories you have access to. 

*Remember not to give your personal access token to anyone else, as this could grant them access to confidential or private repos and other data.*
