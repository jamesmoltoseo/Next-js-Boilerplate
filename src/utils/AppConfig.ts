import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types'

const localePrefix: LocalePrefix = 'as-needed'

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Casa Dourada',
  locales: ['br'],
  defaultLocale: 'br',
  localePrefix,
}

export const BrandName = AppConfig.name
