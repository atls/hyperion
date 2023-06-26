import React                 from 'react'
import { AnimatePresence }   from 'framer-motion'
import { PropsWithChildren } from 'react'
import { motion }            from 'framer-motion'

import { ConditionProps }    from './condition.interface'

export const Condition = ({
  match,
  smooth = false,
  smoothDuration = 0.3,
  smoothPattern = 'in-and-out',
  children,
}: PropsWithChildren<ConditionProps>) => {
  if (smooth) {
    if (smoothPattern === 'in-and-out') {
      return (
        <AnimatePresence>
          {match && (
            <motion.div
              style={{ display: 'flex', width: '100%', height: '100%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: smoothDuration }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      )
    }

    if (smoothPattern === 'in') {
      return (
        match && (
          <motion.div
            style={{ display: 'flex', width: '100%', height: '100%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: smoothDuration }}
          >
            {children}
          </motion.div>
        )
      )
    }

    if (smoothPattern === 'out') {
      return (
        <AnimatePresence>
          {match && (
            <motion.div
              style={{ display: 'flex', width: '100%', height: '100%' }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: smoothDuration }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      )
    }
  }

  if (match) return children

  return null
}
