import * as React from "react"
import styled from '@emotion/styled'

const Section = styled.div`
  padding-top: 20em;
  padding-bottom: 20em;
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  text-align: center;
`

const Text = styled.div`
  width: 100%;
`

const ComingSoonTitle = styled.h2`
  font-size: 5em;
  width: 100%;
`

const ComingSoon = () => {
  return (
    <Section>
      <Text>
        Coming Soon: <ComingSoonTitle>JUST HUMANS</ComingSoonTitle>
        <h3>A Short Film Written and Directed by Eilidh Direen</h3>
        <p>When Andy (Tully Direen) graduates year 12, he is excited to go to university, make new friends, and try new things - just like 
          he's seen in all the Hollywood movies.</p>
        <p>Then...he goes to the one and only university in his home state (you know the one), and, well, yeah, it goes about as well 
          as you could expect.</p>
      </Text>
    </Section>
  )
}

export default ComingSoon;