import React from 'react'

interface AccessibleLink {
  id: string
  href: string
  meta_title?: string
  label?: string
  labelledby?: string
  describedby?: string
}

interface AccessibleLinksProps {
  id: string
  meta_title?: string
  labelledby?: string
  describedby?: string
  children?: React.ReactNode
  data?: AccessibleLink[] // Make data optional
}

const AccessibleLinks: React.FC<AccessibleLinksProps> = ({
  id,
  meta_title,
  labelledby,
  describedby,
  children,
  data,
}) => {
  // Use optional chaining (?.) to safely access properties
  const link = data?.find((link) => link.id === id)

  if (!link) {
    return null // Or handle the case where the link with the given id is not found
  }

  const ariaLabelledBy = labelledby ? { 'aria-labelledby': labelledby } : {}
  const ariaDescribedBy = describedby ? { 'aria-describedby': describedby } : {}

  return (
    <a
      id={id}
      href={link.href}
      title={meta_title}
      aria-label={link.label}
      {...ariaLabelledBy}
      {...ariaDescribedBy}
    >
      {children}
    </a>
  )
}

export default AccessibleLinks
