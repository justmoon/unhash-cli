# Unhash CLI

This is a command line utility for the Unhash protocol.

## Installation

``` sh
git clone git@github.com:justmoon/unhash-cli.git 
```

## Usage

### Uploading a file

To upload a test file, for example our README.md file, use: 

``` sh
$ export UNHASH_HOSTS='["localhost:3000"]'
$ npm install
$ UNHASH_ILP_CREDENTIALS='{"server":"wss://s.altnet.rippletest.net:51233","secret":"ss6YmrV2dNNPLjzqgdjSvktJvz5Vs"}' ./bin/unhash.js upload README.md
```
