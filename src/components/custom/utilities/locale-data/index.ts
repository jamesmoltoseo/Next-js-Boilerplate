import { useTranslations } from 'next-intl'

export const useLocaleData = () => {
  const t = useTranslations()
  interface NavItem {
    id: string
    href: string
    text: string
    image: string
  }

  interface LoginItem {
    id: string
    href: string
    text: string
  }

  const getSiteNavItems = (): NavItem[] => {
    const siteNavItems = [
      { id: 'Sportsbook' },
      { id: 'LiveCasino' },
      { id: 'CrashGames' },
      { id: 'SlotGames' },
      { id: 'SportsExchange' },
    ] as const

    const siteNav = siteNavItems.map(({ id }) => ({
      id,
      href: t(`${id}.href`),
      text: t(`${id}.site_nav_text`),
      image: t(`${id}.site_nav_icon`),
    }))

    return siteNav
  }

  const getLoginItems = (): LoginItem[] => {
    const loginItems = [
      { id: 'Homepage' },
      { id: 'Login' },
      { id: 'Register' },
    ] as const

    const memberPages = loginItems.map(({ id }) => ({
      id,
      href: t(`${id}.href`),
      text: t(`${id}.site_nav_text`),
    }))

    return memberPages
  }

  return {
    getSiteNavItems,
    getLoginItems,
  }
}
