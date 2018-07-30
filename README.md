### TREZOR.io

Language export
====================

Using internationalization with Cactus
--------------------------------------

To enable internationalization for your project:

  1. ✅  Add a `locale` key to (one of your) configuration file(s)
  2. ✅  Mark strings for translation in your site (using `{% trans %}`)
  3. Run `django-admin.py makemessages --all --keep-pot` for all language (otherwise `-l en`) or (unsupported) `cactus messages:make` in the project root
  4. Edit the .po file that was created with translations.



## Building
1. Install cactus `pip3 install cactus`
2. Install pyScss `pip3 install pyScss`
3. Install cactus' external dependencies `brew install closure-compiler` & `brew install yuicompressor`
4. Build `cactus build`
5. Serve locally `cactus serve`
