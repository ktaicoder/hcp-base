const shell = require('shelljs')
const fs = require('fs')

async function main() {
  console.log(path.resolve('.'))
  shell.mkdir('-p', './_tmp')
  shell.cp('-rf', 'dist', './_tmp/')

  const json = JSON.parse(fs.readFileSync('package.json'))
  delete json['devDependencies']
  delete json['scripts']
  fs.writeFileSync('_tmp/package.json', JSON.stringify(json, null, 2))
}

main()

