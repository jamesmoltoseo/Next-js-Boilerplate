import { useTranslations } from 'next-intl'
import { Refresh } from '@mui/icons-material'
import { BaseTemplate } from '@/templates/BaseTemplate'
import Button from '@/components/buttons'

//** FIX: This list of pages should come from br.json.
const siteNavItems = [
  {
    name: 'Sportsbook',
  },
  { name: 'LiveCasino' },
  { name: 'CrashGames' },
  { name: 'SlotGames' },
  {
    name: 'SportsExchange',
  },
] as const

//** FIX: This list of pages should come from br.json.
const loginItems = [
  {
    name: 'Login',
  },
  { name: 'Register' },
] as const

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations()

  const siteNav = siteNavItems.map(({ name }) => ({
    href: t(`${name}.href`),
    text: t(`${name}.site_nav_text`),
    image: t(`${name}.site_nav_icon`),
  }))

  const memberPages = loginItems.map(({ name }) => ({
    href: t(`${name}.href`),
    text: t(`${name}.site_nav_text`),
  }))

  // Function to generate main nav items
  const generateMainNavItems = () => (
    <>
      {siteNav.map((item, index) => (
        <li key={index}>
          <Button
            size="xs"
            variant="outline"
            bgColor="transparent"
            hoverColor="green-500"
            textColor="neutral-200"
            hoverTextColor="green-500"
            leftImage={item.image}
            leftImageAlt={item.text}
            responsive={false}
            href={item.href}
          >
            {item.text}
          </Button>
        </li>
      ))}
    </>
  )

  // Function to generate member nav items
  const generateMemberNavItems = () => (
    <>
      {memberPages.map((item, index) => (
        <li key={index} className="-ml-2">
          <Button
            size="lg"
            variant="default"
            bgColor={index === 0 ? 'green-500' : 'blue-500'}
            hoverColor={index === 0 ? 'green-300' : 'blue-300'}
            textColor="white"
            hoverTextColor="white"
            href={item.href}
          >
            {item.text}
          </Button>
        </li>
      ))}
    </>
  )

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <a
              href="/"
              className="border-none rounded-full bg-green block w-8 h-8 relative block"
              aria-label="refresh"
            >
              <Refresh className="absolute top-1 left-1 w-6 h-6 rotate-45" />
            </a>
          </li>
        </>
      }
      rightNav={generateMemberNavItems()}
      siteNav={generateMainNavItems()}
    >
      <div className="text-xl">{props.children}</div>

      {/* Hidden nav */}
      <nav className="hidden">
        <ul>
          {generateMainNavItems()}
          {generateMemberNavItems()}
        </ul>
      </nav>
    </BaseTemplate>
  )
}
