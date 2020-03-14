#!/bin/sh

rm -rf build
cp -R ../build .

heroku container:push web --app=gloser
heroku container:release web --app=gloser

rm -rf build
