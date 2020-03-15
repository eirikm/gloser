#!/bin/sh


rm -rf storybook-static
cp -R ../storybook-static .

heroku container:push web --app=gloser-storybook
heroku container:release web --app=gloser-storybook

rm -rf storybook-static
