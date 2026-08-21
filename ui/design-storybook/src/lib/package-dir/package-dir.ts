import { createRequire }           from 'node:module'
import { dirname }                 from 'node:path'
import { join }                    from 'node:path'

import { packageManifestFileName } from './constants.js'

const require = createRequire(import.meta.url)

export const toPackageDir = (packageName: string): string =>
  dirname(require.resolve(join(packageName, packageManifestFileName)))
