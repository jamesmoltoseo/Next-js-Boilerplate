import { BaseTemplate } from '@/templates/BaseTemplate'
import { useLocaleData } from '@/components/custom/utilities/locale-data'
import { Refresh } from '@mui/icons-material'
import Button from '@/components/custom/buttons'

export default function Layout(props: { children: React.ReactNode }) {
  const { getSiteNavItems, getLoginItems } = useLocaleData()
  const siteNavItems = getSiteNavItems()
  const loginItems = getLoginItems()

  // Function to generate main nav items
  const generateMainNavItems = () => (
    <>
      {siteNavItems.map((item, index) => (
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

  // Function to generate Login nav items
  const generateLoginNavItems = () => (
    <>
      {loginItems.slice(1).map((item, index) => (
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
      rightNav={generateLoginNavItems()}
      siteNav={generateMainNavItems()}
    >
      <div className="text-xl">{props.children}</div>

      {/* Hidden nav */}
      <nav className="hidden">
        <ul>
          {generateMainNavItems()}
          {generateLoginNavItems()}
        </ul>
      </nav>
    </BaseTemplate>
  )
}
