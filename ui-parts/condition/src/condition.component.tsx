import { AnimatePresence } from 'framer-motion'
import { FC }              from 'react'
import { motion }          from 'framer-motion'
import React               from 'react'

import { ConditionProps }  from './condition.interface.js'

export const Condition: FC<ConditionProps> = ({
  smooth = false,
  match,
  smoothDuration = 0.3,
  smoothPattern = 'in-and-out',
  children,
}) => {
  if (!match) return null

  if (smooth) {
    if (smoothPattern === 'in-and-out') {
      return (
        <AnimatePresence>
          <motion.div
            style={{ display: 'flex', width: '100%', height: '100%' }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: smoothDuration }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )
    }

    if (smoothPattern === 'out') {
      return (
        <AnimatePresence>
          <motion.div
            style={{ display: 'flex', width: '100%', height: '100%' }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: smoothDuration }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )
    }

    if (smoothPattern === 'in') {
      return (
        <AnimatePresence>
          <motion.div
            style={{ display: 'flex', width: '100%', height: '100%' }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: smoothDuration }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )
    }
  }

  return children
}
