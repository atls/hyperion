import React from 'react'

const createDividedFieldsRenderer = ({
    FieldAddon,
    FieldAddonsContainer,
    DividerContainer,
    divider,
  }) =>
  // eslint-disable-next-line
  ({ children }) =>
    (
      <FieldAddonsContainer>
        {children.map((child, index) => (
          <>
            {index !== 0 && <DividerContainer>{divider}</DividerContainer>}
            <FieldAddon>{child}</FieldAddon>
          </>
        ))}
      </FieldAddonsContainer>
    )

export { createDividedFieldsRenderer }
