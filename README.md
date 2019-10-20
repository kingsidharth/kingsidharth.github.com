# KingSidharth.com

Source code of my personal website. Built with [Jekyll](http://jekyllrb.com).

## License

Source files are available for **personal use only**. Feel feel to fork & play around.

The content, images, and other media are copyrighted (by me or the respective brand/company).

## Built with

* [Jekyll](http://jekyllrb.com)
* [Zurb Foundation](https://foundation.zurb.com/sites/docs/)


## Installation

Use `brew` if on mac

1. Install rvm, Ruby
2. Install Jekyll & Bundler `gem install bundler jekyll`
3. `cd` into the root directory of the project and run `bundle install`
4. Get `npm` and run `npm install` to get `foundation-sites` and other libraries


## Usage

1. Run `bundle exec jekyll serve` to start serving on `localhost:4000` (port adjustable)
2. Run `sass --watch app/scss:app/assets/css` to compile SCSS, run with `--compile` argument for final run
