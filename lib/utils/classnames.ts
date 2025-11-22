/**
 * Class Name Utilities
 * Helper functions for conditional CSS class composition
 */

/**
 * Conditionally joins class names together
 * Filters out falsy values
 *
 * @example
 * cn('btn', isActive && 'btn-active', 'btn-primary')
 * // => 'btn btn-active btn-primary' (if isActive is true)
 * // => 'btn btn-primary' (if isActive is false)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Conditionally applies classes based on a map of conditions
 *
 * @example
 * cx({
 *   'btn': true,
 *   'btn-active': isActive,
 *   'btn-disabled': isDisabled,
 * })
 */
export function cx(classMap: Record<string, boolean | undefined>): string {
  return Object.entries(classMap)
    .filter(([, condition]) => condition)
    .map(([className]) => className)
    .join(' ');
}

/**
 * Type-safe variant-based class name builder
 *
 * @example
 * const buttonVariants = variants({
 *   base: 'px-4 py-2 rounded',
 *   variants: {
 *     variant: {
 *       primary: 'bg-blue-600 text-white',
 *       secondary: 'bg-gray-200 text-gray-900',
 *     },
 *     size: {
 *       sm: 'text-sm',
 *       lg: 'text-lg',
 *     },
 *   },
 *   defaultVariants: {
 *     variant: 'primary',
 *     size: 'sm',
 *   },
 * });
 *
 * buttonVariants({ variant: 'secondary', size: 'lg' })
 * // => 'px-4 py-2 rounded bg-gray-200 text-gray-900 text-lg'
 */
export function variants<V extends Record<string, Record<string, string>>>(config: {
  base?: string;
  variants?: V;
  defaultVariants?: {
    [K in keyof V]?: keyof V[K];
  };
}) {
  return function (props?: {
    [K in keyof V]?: keyof V[K];
  }) {
    const classes = [config.base];

    if (config.variants && props) {
      for (const variant in config.variants) {
        const variantKey = props[variant] || config.defaultVariants?.[variant];
        if (variantKey) {
          classes.push(config.variants[variant][variantKey as string]);
        }
      }
    } else if (config.variants && config.defaultVariants) {
      for (const variant in config.defaultVariants) {
        const variantKey = config.defaultVariants[variant];
        if (variantKey) {
          classes.push(config.variants[variant][variantKey as string]);
        }
      }
    }

    return classes.filter(Boolean).join(' ');
  };
}
