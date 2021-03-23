import { injectIntl }                       from 'react-intl'
import { compose, withHandlers, withState } from 'recompose'

export default compose(
  injectIntl,
  withState('toggled', 'toggle', false),
  withHandlers({
    onToggle: ({ disabled, toggled, toggle, onOpen }) => () => {
      if (!disabled) {
        if (!toggled && onOpen) {
          onOpen()
        }

        toggle(!toggled)
      }
    },
  }),
)
