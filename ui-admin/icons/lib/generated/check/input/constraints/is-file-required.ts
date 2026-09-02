import type { InputPathKind } from '../read.js'

import { inputPathKinds }     from '../read.js'

export const isFileRequired = (kind: InputPathKind): boolean => kind !== inputPathKinds.file
