import type { Browser }            from '@playwright/test'
import type { Page }               from '@playwright/test'

import type { TextTransformProps } from '../text-transform.interfaces.js'

import { describe }                from 'node:test'
import { after }                   from 'node:test'
import { beforeEach }              from 'node:test'
import { before }                  from 'node:test'
import { it }                      from 'node:test'

import { expect }                  from '@playwright/test'
import { chromium }                from '@playwright/test'
import { createServer }            from 'http-server'
import { createElement }           from 'react'
import { renderToString }          from 'react-dom/server'

import { TextTransform }           from '../text-transform.component.js'

describe('TextTransform', () => {
  let server: ReturnType<typeof createServer>
  let page: Page
  let browser: Browser

  before(async () => {
    server = createServer({ root: './ui-parts/text-transform/src/tests' })

    server.listen(3000, 'localhost')

    browser = await chromium.launch()
    page = await browser.newPage()
  })

  after(async () => {
    server.close()
    await browser.close()
  })

  beforeEach(async () => {
    await page.goto('http://localhost:3000/test.html')
    await page.addScriptTag({ url: 'https://unpkg.com/react@18/umd/react.development.js' })
    await page.addScriptTag({ url: 'https://unpkg.com/react-dom@18/umd/react-dom.development.js' })
  })

  const renderTextTransform = async (props: TextTransformProps): Promise<void> => {
    const element = createElement<TextTransformProps>(TextTransform, props)

    await page.evaluate((stringElement) => {
      const rootElement = document.querySelector('div')

      // @ts-expect-error correct element type
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      window.ReactDOM.render(stringElement, rootElement)
    }, renderToString(element))
  }

  it('uppercase', async () => {
    await renderTextTransform({ upperCase: true, children: 'uppercase' })

    expect(page.getByText('UPPERCASE')).toBeDefined()
  })

  it('lowercase', async () => {
    await renderTextTransform({ lowerCase: true, children: 'LOWERCASE' })

    expect(page.getByText('lowercase')).toBeDefined()
  })

  it('firstletter', async () => {
    await renderTextTransform({ firstLetter: true, children: 'word' })

    expect(page.getByText('w')).toBeDefined()
  })

  it('lastletter', async () => {
    await renderTextTransform({ lastLetter: true, children: 'word' })

    expect(page.getByText('d')).toBeDefined()
  })

  it('replace', async () => {
    await renderTextTransform({ replace: ['word', 'replaced'], children: 'word' })

    expect(page.getByText('replaced')).toBeDefined()
  })

  it('substr', async () => {
    await renderTextTransform({ substr: [0, 2], children: 'word' })

    expect(page.getByText('wo')).toBeDefined()
  })

  it('hideAfter', async () => {
    await renderTextTransform({ hideAfter: 10, children: 'long message' })

    expect(page.getByText('long messa...')).toBeDefined()
  })
})
