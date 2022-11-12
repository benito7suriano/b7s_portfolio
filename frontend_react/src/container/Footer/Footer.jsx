import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isformSubmitted, setIsformSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { username, email, message } = formData

  return <div>Footer</div>
}

export default Footer
