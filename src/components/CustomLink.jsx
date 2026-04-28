// src/components/CustomLink.jsx
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const CustomLink = ({ to, children, ...props }) => {
  const location = useLocation()

  // 現在のクエリパラメータ（?lang=en など）を遷移先にくっつける
  const targetUrl = `${to}${location.search}`

  return (
    <Link to={targetUrl} {...props}>
      {children}
    </Link>
  )
}

export default CustomLink
