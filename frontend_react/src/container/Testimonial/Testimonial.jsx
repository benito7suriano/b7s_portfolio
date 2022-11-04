import React, { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Testimonial.scss'

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonials, setTestimonials] = useState([])
  const [brands, setBrands] = useState([])

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  return <div>Testimonial</div>
}

export default Testimonial
