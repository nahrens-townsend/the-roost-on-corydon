import type { ComponentPropsWithoutRef, ElementType } from 'react'
import styles from './Button.module.scss'

type Variant = 'primary' | 'accent' | 'outline' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

type ButtonProps<T extends ElementType = 'button'> = {
  as?:      T
  variant?: Variant
  size?:    Size
} & Omit<ComponentPropsWithoutRef<T>, 'as'>

export default function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size    = 'md',
  className,
  children,
  ...rest
}: ButtonProps<T>) {
  const Tag = as ?? 'button'

  const classes = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  // Prevent accidental form submission when used as a plain button
  const extraProps = Tag === 'button' && !('type' in rest) ? { type: 'button' as const } : {}

  return (
    <Tag className={classes} {...extraProps} {...rest}>
      {children}
    </Tag>
  )
}
