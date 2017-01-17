#!/usr/bin/env node

const upload = require('unhash-upload')
const unhash = require('unhash')

function handleError (err) {
  console.error(err.stack)
  process.exit(1)
}

const yargs = require('yargs')
  .usage('$0 <cmd> [args]')
  .command('upload <file>', 'upload a file', {
    file: {
    }
  }, function (argv) {
    upload.uploadFromFile(argv.file).then((result) => {
      for (let hostUpload of result.hosts) {
        console.log(`uploaded to ${hostUpload.uri}`)
      }
      process.exit(0)
    }, handleError)
  })
  .command('download <hash>', 'download the file with the given hash', {
    hash: {
    }
  },
    function (argv) {
      unhash(argv.hash).then((result) => {
        process.stdout.write(result)
      })
        .catch((err) => handleError)
    }, handleError)
  .strict()
  .help()

if (yargs.argv._.length === 0) {
  yargs.showHelp()
}
