import type { ReactNode }             from 'react'

import type { ComponentsMatrixProps } from './interfaces.js'

import { defaultMatrixTitle }         from './constants.js'
import { matrixStyles }               from './styles.css.js'

export const ComponentsMatrix = ({
  components,
  title = defaultMatrixTitle,
}: ComponentsMatrixProps): ReactNode => (
  <div className={matrixStyles.root}>
    <h2 className={matrixStyles.title}>{title}</h2>
    {components.map(({ component: MatrixComponent, name, variants }) => (
      <section key={name} className={matrixStyles.section}>
        <h3 className={matrixStyles.sectionTitle}>{name}</h3>
        <div className={matrixStyles.grid}>
          {variants.map(({ children, label, props = {} }) => (
            <div key={label} className={matrixStyles.cell}>
              <span className={matrixStyles.label}>{label}</span>
              <MatrixComponent {...props}>{children}</MatrixComponent>
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
)
