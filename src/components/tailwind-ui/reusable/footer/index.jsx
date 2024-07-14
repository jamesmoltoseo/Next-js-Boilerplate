// From Tailwind UI Component: 4_column_with_company_mission_on_dark
import { AppConfig } from '@/utils/AppConfig'
import { SvgIcon } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { useLocaleData } from '@/components/utilities/LocaleData'

import AccessibleLink from '@/components/links/index'
import TextNoWrap from '@/components/text-no-wrap'

const iconComponents = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  youtube: YouTubeIcon,
}
export default function Footer() {
  const { getLoginItems } = useLocaleData()

  const loginItems = getLoginItems()

  return (
    <section>
      <div className="container">
        <h2 id="footer-heading" className="sr-only">
          Footer navigation
        </h2>
        <div className="pb-8 pt-16 sm:pt-2435;4 lg:pt-32">
          <div className="w-full lg:flex lg:justify-between gap-x-24">
            <div className="space-y-6">
              <AccessibleLink id={'Homepage'} data={loginItems}>
                <img
                  //* FIX: use webp format */
                  src="/assets/images/logo/casa-dourada-dark.png"
                  alt={AppConfig.name}
                  loading="eager"
                  width={180}
                />
              </AccessibleLink>
              {/* ))} */}
              <p className="text-sm text-gray-300 max-w-[226px]">
                &copy; Established in 2024, <TextNoWrap text="brand" /> is the
                most trusted betting exchange and leading online casino.
              </p>
              <div>
                <ul className="flex flex-row gap-x-7 mb-10 lg:mb-0">
                  {['facebook', 'instagram', 'twitter', 'youtube'].map(
                    (icon) => {
                      const IconComponent = iconComponents[icon]
                      return (
                        <li key={icon}>
                          <a
                            href="#"
                            rel="nofollow"
                            className="text-gray-500 hover:text-gray-400"
                          >
                            <SvgIcon
                              component={IconComponent}
                              className="h-full"
                              sx={icon === 'youtube' ? { fontSize: 30 } : {}}
                            />
                            <span className="sr-only">{icon}</span>
                          </a>
                        </li>
                      )
                    }
                  )}
                </ul>
              </div>
            </div>
            {/* <div className="grid grid-cols-2 md:grid-cols-4 w-full">
              {footerNavCols.map((col) => (
                <div key={col.title} className="mb-10 lg:mb-0">
                  <h3 className="leading-none">{col.title}</h3>
                  <ul role="list" className="mt-3 lg:mt-6 lg:space-y-4">
                    {col.items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div> */}
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs text-gray-400">
              &copy; Direitos Autorais {new Date().getFullYear()}{' '}
              {AppConfig.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
