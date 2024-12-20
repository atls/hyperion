import { getColorReplacement } from '../get-color-replacement'

describe('generators', () => {
  describe('icons', () => {
    describe('get-color-replacement.util', () => {
      it('should generate replacement without theme paths', () => {
        const replacement = getColorReplacement({ color: '#000000' })

        expect(replacement).toEqual(
          expect.objectContaining({
            '#000000': '{(props.color && vars.colors[props.color]) || props.color || "#000000"}',
          })
        )
      })

      it('should generate replacement with one theme paths', () => {
        const replacement = getColorReplacement({ themePaths: ['icons'], color: '#000000' })

        expect(replacement).toEqual(
          expect.objectContaining({
            '#000000':
              '{(props.color && vars.colors.icons[props.color]) || props.color || "#000000"}',
          })
        )
      })

      it('should generate replacement with several theme paths', () => {
        const replacement = getColorReplacement({
          themePaths: ['icons', 'primary', 'some'],
          color: '#000000',
        })

        expect(replacement).toEqual(
          expect.objectContaining({
            '#000000':
              '{(props.color && vars.colors.icons.primary.some[props.color]) || props.color || "#000000"}',
          })
        )
      })
    })
  })
})
