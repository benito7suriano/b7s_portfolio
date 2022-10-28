import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import ReactToolTip from 'react-tooltip'

import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

import './Skills.scss'

const Skills = () => {
  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(query).then((data) => {
      setExperiences(data)
    })

    client.fetch(skillsQuery).then((data) => {
      setSkills(data)
    })
  }, [])

  return (
    <>
      <h2 className='head-text'>Skills & Experiences</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'></motion.div>
      </div>
    </>
  )
}

export default Skills
