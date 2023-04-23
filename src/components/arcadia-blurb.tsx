import * as React from "react"
import styled from '@emotion/styled'


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

const Arcadia = () => {
  return (
    <Section>
      <Image 
        src="../../static/arcadia-cover.jpg" 
        alt="Arcadia cover"
      />
      <Text>
        <h2>Arcadia</h2>
        <p>George LeVillain sat with his brothers and sisters in the darkest corner of the basement, waiting.</p>

        <p>If you'd like to know what befell them there, you will have to read this book.</p>

        <p>Read a sample <a href='./404.html'>here</a></p>
        <p>Coming soon to all the usual haunts.</p>
      </Text>
    </Section>
  )
}

export default Arcadia;