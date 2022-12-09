import { forwardRef, PropsWithChildren } from 'react'

import { CombineComponentProps, CombineElementRef } from '../../types'
import { CommonFlexProps } from '.'

export type ColumnFlexProps<C extends React.ElementType = 'div'> =
  CombineComponentProps<
    C,
    {
      flexDirection?: 'column' | 'column-reverse'
      $shrink?: boolean
    } & CommonFlexProps
  >

type ColumnFlexComponent = <C extends React.ElementType = 'div'>(
  props: ColumnFlexProps<C>
) => React.ReactElement | null

export const DEFAULT_ELEMENT = 'div' as const

const ColumnFlex: ColumnFlexComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      flexDirection = 'column',
      alignItems = 'flex-end',
      justifyContent = 'center',
      children,
      gap,
      $shrink,
      inline = false,
      as,
      ...rest
    }: PropsWithChildren<ColumnFlexProps<C>>,
    ref: CombineElementRef<C>
  ) => {
    const Component = as ?? DEFAULT_ELEMENT

    return (
      <Component
        ref={ref}
        css={{
          display: inline ? 'inline-flex' : 'flex',
          flexShrink: $shrink ? 1 : 0,
          flexDirection,
          alignItems,
          justifyContent,
          gap,
        }}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)

export default ColumnFlex
