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
      { id: 'Sportsbook', name: 'Sportsbook' },
      { id: 'LiveCasino', name: 'LiveCasino' },
      { id: 'CrashGames', name: 'CrashGames' },
      { id: 'SlotGames', name: 'SlotGames' },
      { id: 'SportsExchange', name: 'SportsExchange' },
    ] as const

    const siteNav = siteNavItems.map(({ id, name }) => ({
      id, // Ensure id is included
      href: t(`${name}.href`),
      text: t(`${name}.site_nav_text`),
      image: t(`${name}.site_nav_icon`),
    }))

    console.log(siteNav)

    return siteNav
  }

  const getLoginItems = (): LoginItem[] => {
    const loginItems = [
      { id: 'Homepage', name: 'Homepage' },
      { id: 'Login', name: 'Login' },
      { id: 'Register', name: 'Register' },
    ] as const

    const memberPages = loginItems.map(({ id, name }) => ({
      id,
      href: t(`${name}.href`),
      text: t(`${name}.site_nav_text`),
    }))

    console.log(memberPages)

    return memberPages
  }

  return {
    getSiteNavItems,
    getLoginItems,
  }
}
