import * as React from "react"
import styled from '@emotion/styled'
import { SocialIcon } from 'react-social-icons';
import introimage from "../images/introimage.jpg"


const Section = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 5em;
  padding-bottom: 10em;
  width: 100%;
  align-content: center;
  alight-items: center;
  flex-wrap: wrap;
  margin: auto;
`

const Text = styled.div`
  min-width: 33%;
  max-width: 40%;
  padding-right: 4em;
  padding-left: 7em;
`

const Image = styled.img`
  min-width: 50em;
  max-width: 25%;
`

const InstaLink = styled(SocialIcon)`
  height: 10px;
`

const Title = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  alight-contens: center;
  flex-wrap: nowrap;
`

const HomePage = () => {
  return (
    <Section>
      <Text>
      <Title><h2>Eilidh Direen</h2><InstaLink label="Follow me on instagram!" url="https://www.instagram.com/eilidh.direen/" /></Title>
      <p>Born in Hobart, Tasmania, Eilidh has spent about half her life there, going away to 
      other cities and countries to live, but somehow always coming back to Hobart. She never went to school, 
      instead spending her childhood reading and writing stories, and playing elaborate let's-pretend games with 
      her siblings and friends.</p>

      <p>After turning eighteen in Houston, Texas, Eilidh returned to her homeland to study English at the University 
      of Tasmania. During this time she also worked in news production and developed a love of craft beer and 
      volleyball. </p>

      <p>Upon completing her studies, Eilidh couldn't be bothered chasing a career in academia or teaching, so she 
      spent the next few years in a variety of roles, including as a volunteer youth worker, shipwright, teacher 
      assistant, copyeditor, builder of industrial prawn-feeders, cued speech interpreter, and PA.</p>

      <p>During all this time, Eilidh wrote many, many novels, novellas, short stories, plays, screenplays, poems, 
      and other oddities, before publishing her debut novel, Two Bodies, Three Fools in 2022.</p>

      <p>In her surprisingly large amount of spare time, Eilidh enjoys reading, exploring, skateboarding, getting 
      into mischief with her friends, and listening to The Wiggles.</p>
      </Text>
      <Image 
        src={introimage}
        alt="Picture of me!"
      />
      
    </Section>
  )
}

export default HomePage;