import { useTranslations } from 'next-intl'

export const useLocaleData = () => {
  const t = useTranslations()

  const getSiteNavItems = () => {
    // This list of pages should come from br.json
    const siteNavItems = [
      { name: 'Sportsbook' },
      { name: 'LiveCasino' },
      { name: 'CrashGames' },
      { name: 'SlotGames' },
      { name: 'SportsExchange' },
    ] as const

    // This does get the href, text and icon values from br.json
    const siteNav = siteNavItems.map(({ name }) => ({
      href: t(`${name}.href`),
      text: t(`${name}.site_nav_text`),
      image: t(`${name}.site_nav_icon`),
    }))

    console.log(siteNav)

    return siteNav
  }

  // Login items should come from br.json
  const getLoginItems = () => {
    const loginItems = [{ name: 'Login' }, { name: 'Register' }] as const

    const memberPages = loginItems.map(({ name }) => ({
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
