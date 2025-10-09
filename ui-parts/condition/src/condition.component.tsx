import type { ConditionProps } from './condition.interfaces.js'

import { AnimatePresence }     from 'framer-motion'
import { motion }              from 'framer-motion'

import { smoothProps }         from './condition.constants.js'

export const Condition = ({
  match,
  fallback = null,
  animated,
  children,
  ...props
}: ConditionProps): ConditionProps['children'] => {
  if (animated) {
    return (
      <AnimatePresence>
        {!!match && (
          <motion.div
            style={{ display: 'flex', width: '100%', height: '100%' }}
            {...(animated === 'smooth' ? smoothProps : {})}
            {...props}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  return match ? children : fallback
}
