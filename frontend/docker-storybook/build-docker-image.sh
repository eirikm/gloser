#!/bin/sh


rm -rf storybook-static
cp -R ../storybook-static .

docker build -t gloser-storybook .

rm -rf storybook-static
