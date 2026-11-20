import { execFileSync } from 'node:child_process'
import { appendFileSync, readFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'

const root = fileURLToPath(new URL('../../', import.meta.url))
const yarn = '.yarn/releases/yarn.js'

const workspaces = execFileSync(process.execPath, [yarn, 'workspaces', 'list', '--json', '--no-private'], {
  cwd: root,
  encoding: 'utf8',
})
  .split('\n')
  .filter(Boolean)
  .map((line) => JSON.parse(line))

const packages = workspaces.flatMap(({ name, location }) => {
  const manifest = `${location}/package.json`
  const previous = JSON.parse(
    execFileSync('git', ['show', `HEAD:${manifest}`], { cwd: root, encoding: 'utf8' })
  )
  const { version } = JSON.parse(readFileSync(new URL(`../../${manifest}`, import.meta.url), 'utf8'))
  return previous.version === version ? [] : [{ name, version }]
})

if (packages.length > 0) {
  const include = packages.flatMap(({ name }) => ['--include', name])

  execFileSync(
    process.execPath,
    [yarn, 'workspaces', 'foreach', '--all', '--topological', '--no-private', ...include,
      'npm', 'publish', '--access', 'public', '--provenance'],
    { cwd: root, stdio: 'inherit' }
  )
}

appendFileSync(process.env.GITHUB_OUTPUT, `packages=${JSON.stringify(packages)}\n`)
