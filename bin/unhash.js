#!/usr/bin/env node

const upload = require('unhash-upload')

const yargs = require('yargs')
  .usage('$0 <cmd> [args]')
  .command('upload [file]', 'upload a file', {
    file: {
    }
  }, function (argv) {
    upload.uploadFromFile(argv.file).then((result) => {
      for (let hostUpload of result.hosts) {
        console.log(`uploaded to ${hostUpload.uri}`)
      }
      process.exit(0)
    }, (err) => {
      console.error(err.stack)
      process.exit(1)
    })
  })
  .strict()
  .help()

if (yargs.argv._.length === 0) {
  yargs.showHelp()
}
