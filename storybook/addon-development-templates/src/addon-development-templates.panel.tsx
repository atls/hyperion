import React                 from 'react'
import { SyntaxHighlighter } from '@storybook/components'
import { ScrollArea }        from '@storybook/components'
import { useParameter }      from '@storybook/api'
import { useArgs }           from '@storybook/api'

import { PARAM_KEY }         from './addon-development-templates.contants'

interface DevelopmentTemplate {
  [key: string]: (args: any) => string
}

const AddonDevelopmentTemplatesPanel = () => {
  const { templates = {} }: { templates?: DevelopmentTemplate } = useParameter(PARAM_KEY, {})
  const [args] = useArgs()

  const sources = Object.keys(templates).map((key) => {
    const template = templates[key]
    const source = `// ${key}\n${template(args)}`

    return (
      <div style={{ paddingBottom: 16 }}>
        <SyntaxHighlighter key={key} copyable padded>
          {source}
        </SyntaxHighlighter>
      </div>
    )
  })

  return <ScrollArea vertical>{sources}</ScrollArea>
}

export { AddonDevelopmentTemplatesPanel }
