import { AppConfig } from '@/utils/AppConfig'
import Footer from 'src/components/tailwind-ui/reusable/footer'
import { useLocaleData } from '@/components/utilities/LocaleData'
import AccessibleLink from '@/components/links/index'

const BaseTemplate = (props: {
  leftNav: React.ReactNode
  rightNav?: React.ReactNode
  siteNav?: React.ReactNode
  children: React.ReactNode
}) => {
  const { getLoginItems } = useLocaleData()

  const loginItems = getLoginItems()
  return (
    <div className="w-full antialiased h-full">
      <header>
        <div className="bg-yellow">
          <div className="container flex justify-between items-center">
            <div className="flex justify-between items-center gap-x-3 py-3">
              <AccessibleLink id={'Homepage'} data={loginItems}>
                <img
                  className="mx-auto"
                  src="/assets/images/logo/casa-dourada.webp"
                  alt={AppConfig.name}
                  loading="eager"
                  width={90}
                  height={34}
                />
              </AccessibleLink>
              <nav>
                <ul className="list-none flex flex-wrap text-xl">
                  {props.leftNav}
                </ul>
              </nav>
            </div>
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </div>

        <nav>
          <ul className="temp-css hidden lg:flex list-none justify-center gap-x-5 pt-2.5 items-center">
            {props.siteNav}
          </ul>
        </nav>
      </header>

      <main className="mx-auto lg:mt-2.5 w-full">
        <div className="w-full">{props.children}</div>
      </main>

      <footer className="bg-neutral-800" aria-labelledby="footer-heading">
        <Footer />
      </footer>
    </div>
  )
}

export { BaseTemplate }
