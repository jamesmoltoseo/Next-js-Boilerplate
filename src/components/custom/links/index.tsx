import React from 'react'

interface AccessibleLink {
  id: string
  href: string
  text: string
  image?: string
  label?: string
  labelledby?: string
  describedby?: string
}

interface AccessibleLinksProps {
  id: string
  labelledby?: string
  describedby?: string
  showLink?: boolean // Add showLink prop here
  children?: React.ReactNode
  data?: AccessibleLink[]
}

const AccessibleLinks: React.FC<AccessibleLinksProps> = ({
  id,
  labelledby,
  describedby,
  showLink, // Destructure showLink prop
  children,
  data,
}) => {
  const link = data?.find((link) => link.id === id)

  if (!link) {
    return null // Or handle the case where the link with the given id is not found
  }

  const ariaLabelledBy = labelledby ? { 'aria-labelledby': labelledby } : {}
  const ariaDescribedBy = describedby ? { 'aria-describedby': describedby } : {}

  // Log link details if the console prop is true
  if (showLink) {
    console.log(
      `\x1b[32mLink details - id: '${link.id}', href: '${link.href}', text: '${link.text}'\x1b[0m`
    )
  }

  return (
    <a
      key={id} // Dynamically set the key using the id
      id={id}
      href={link.href}
      // title={meta_title || link.text}
      aria-label={link.label || link.text}
      {...ariaLabelledBy}
      {...ariaDescribedBy}
    >
      {children}
    </a>
  )
}

export default AccessibleLinks
