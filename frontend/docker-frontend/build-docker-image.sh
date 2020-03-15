#!/bin/sh

rm -rf build
cp -R ../build .

docker build -t gloser .

rm -rf build
