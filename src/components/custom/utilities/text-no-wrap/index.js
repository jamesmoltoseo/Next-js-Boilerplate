import React from 'react'
import { AppConfig } from '@/utils/AppConfig'

const TextNoWrap = ({ text }) => {
  return (
    <span className="whitespace-nowrap">
      {text === 'brand' ? `${AppConfig.name}` : ''}
      {text && text.trim() !== 'brand' && text}
    </span>
  )
}

export default TextNoWrap
