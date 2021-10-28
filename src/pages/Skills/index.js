import React from 'react'
import './style.css'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import CardContainer from '../../components/CardContainer'
import SkillsCard from '../../components/SkillsCard'
import { clientSide, serverSide } from '../../utils/skillsData'

function SkillsPage(props) {
  return (
    <div id="skills-img">
      <Navbar />
      <Header padding={70} title="Technical Skills" />
      <CardContainer>
        <div
          className="uk-child-width-1-2@m uk-grid-match"
          uk-grid="true"
          id="skills-section"
        >
          <SkillsCard
            skills={clientSide}
            title="Client Side"
            icon="desktop"
            name="client"
          />
          <SkillsCard
            skills={serverSide}
            title="Server Side"
            icon="server"
            name="server"
          />
        </div>
      </CardContainer>
    </div>
  )
}
export default SkillsPage
