import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

import './Work.scss'

const Work = () => {
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [animatecard, setAnimatecard] = useState({ y: 0, opacity: 1 })

  return <div>Work</div>
}

export default AppWrap(Work)
