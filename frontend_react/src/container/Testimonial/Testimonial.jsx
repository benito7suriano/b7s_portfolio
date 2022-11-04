import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]'
    const brandsQuery = '*[_type == "brands"]'

    client.fetch(testimonialsQuery).then((data) => {
      setTestimonials(data)
    })

    client.fetch(brandsQuery).then((data) => {
      setBrands(data)
    })
  }, [])

  return <div>Testimonial</div>
}

export default Testimonial
