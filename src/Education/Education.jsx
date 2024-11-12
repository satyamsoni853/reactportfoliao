import React from 'react'
import './Education.css'
import schoolimg from './education.png'
import clgimg from './experience.png'
import { motion } from 'framer-motion'

function education() {
  return (
    <div className='education'>
        <p className='label heading '>Get To Know More</p>
        <p className='topic heading  ' >Education</p>
        <div className='education-desc'  >
            <motion.div 
            initial={{opacity:0,translateX:"-100%"}}
            whileInView={{opacity:1,translateX:0}}
            transition={{duration:1}}
            className='collage' >
                <img src={clgimg} alt="" />
                <p>Collage</p>
                <p>Kamla Nehru Institute Of Physical And Social Sciences,Sultnpur,Up</p>
                <p>Btech(cse) <br />  (2021-2025)</p>
                
            </motion.div>
            <motion.div 
            initial={{opacity:0,translateX:"10%"}}
            whileInView={{opacity:1,translateX:0}}
            transition={{duration:1}}
             className='school'  >
                <img src={schoolimg} alt="" />
                <p>School</p>
                <p>10th: <span>Maharishi Vidhya Mandir Sultanpur <br />  (CBSE borad)</span>  </p>               
                <p>12th: <span>Sangam Moder Intermediate School  <br />  (Up borad)</span>  </p>
            </motion.div>
        </div>
        
      
    </div>
  )
}

export default education
