import * as React from "react"
import styled from '@emotion/styled'
import introimage from "../images/TBTF.jpg"


const Section = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3em;
  width: 100%;
  align-content: center;
  alight-items: center;
  flex-wrap: wrap;
`

const Text = styled.div`
  min-width: 40%;
  max-width: 45%;
  margin-bottom: auto;
`

const Image = styled.img`
  min-width: 30em;
  max-width: 25%;
  padding-right: 5em;
  padding-left: 8em;
`

const TwoBodiesThreeFools = () => {
  return (
    <Section>
      <Image 
        src={introimage}
        alt="Two Bodies÷Three Fools"
      />
      <Text>
      <h2>Two Bodies÷Three Fools</h2>
      <p>Marianne is a two-hundred-year-old poltergeist who roams the earth, filled with rage and vengeance. But that all changes when she meets Xander, a hapless university student, 
        and falls in love with him. Unable to communicate directly, Marianne steals the body of Xander's best friend and fellow student, Evelyn, and uses it to woo him.</p>

      <p>Unfortunately, Evelyn is still conscious while her body is being controlled, and is quick to fight back…until her own feelings start to surface, and suddenly there\'s a 
         love triangle with three fools in two bodies.</p>
      <p></p>
      <p>Also, Marianne is on the run from the ghost mafia.</p>

      <p>Two Bodies, Three Fools is a comedy about ghosts, friendship, English essays, and the line between selfless and selfish love.</p>

      <p>Read more <a href='./404.html'>here</a></p>
      <p>Purchase on:</p>
      <p><a href='https://www.amazon.com/Two-Bodies-Three-Fools-romantic/dp/1922812927'>Amazon (Internationally)</a></p>
      <p><a href='https://www.booktopia.com.au/two-bodies-three-fools-eilidh-direen/book/9781922812926.html'>Booktopia (Aus)</a></p>
      <p><a href='https://themoshshop.com.au/products/two-bodies-three-fools-by-eilidh-direen'>Mosh Shop (Aus)</a></p>
      </Text>
    </Section>
  )
}

export default TwoBodiesThreeFools;