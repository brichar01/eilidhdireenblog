import * as React from "react"
import styled from '@emotion/styled'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Section = styled.div`
  padding-top: 20em;
  padding-bottom: 20em;
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  text-align: center;
`

const CarouselItem = styled.div`
  height: 10em;
`

const Question = styled.div`
  font-weight: bold;
  padding-bottom: 2em;
`

const Answer = styled.div`
`
const Title = styled.div`
  width: 100%;
  font-size: 2em;
  font-weight: bold;
  align-text: center;
  padding-bottom: 2em;
`

const FAQ = () => {
  return (
    <Section>
      <Title>FAQ</Title>
      <Carousel>
        <CarouselItem>
          <Question>If your books were coffee orders, what would they be?</Question>
          <Answer>Two Bodies, Three Fools would be a soy dirty chai with a dash of whiskey. Arcadia would be a short
            black. 38 CRASH would be several piccolos shotgunned one after the other.</Answer>
        </CarouselItem>
        <CarouselItem>
          <Question>What's your favourite food?</Question>
          <Answer>Beer</Answer>
        </CarouselItem>
        <CarouselItem>
          <Question>Can I trade you a case of beer for a signed copy of your book?</Question>
          <Answer>Absolutely!</Answer>
        </CarouselItem>
        <CarouselItem>
          <Question>Can you sign my e-book?</Question>
          <Answer>Sure can, champ!</Answer>
        </CarouselItem>
        <CarouselItem>
          <Question>What do you do when you get writer's block?</Question>
          <Answer>I talk to my friend Laura for two hours.</Answer>
        </CarouselItem>
        <CarouselItem>
          <Question>What's the best piece of advice you've ever received?</Question>
          <Answer>Stay safe, stay single, stay hydrated.</Answer>
        </CarouselItem>
        <CarouselItem>
          <Question>What inspires you?</Question>
          <Answer>Drinking choccy milk with my friends.</Answer>
        </CarouselItem>
        <CarouselItem>
          <Question>How do you get all that writing done?</Question>
          <Answer>idk lol</Answer>
        </CarouselItem>
        <CarouselItem>
          <Question>Do you have any tips for aspiring writers?</Question>
          <Answer>Don't write a book! How am I supposed to get all the attention if OTHER people write books?!</Answer>
        </CarouselItem>
        <CarouselItem>
          <Question>Where do you get your ideas?</Question>
          <Answer>From ur mom hahaaa (jk ily)</Answer>
        </CarouselItem>
        <CarouselItem>
          <Question>What's your workout routine?</Question>
          <Answer>ONE HUNDRED PUSH-UPS. ONE HUNDRED SIT-UPS. ONE HUNDRED SQUATS. AND A TEN-KILOMETRE RUN EVERY SINGLE DAY!</Answer>
        </CarouselItem>
        <CarouselItem>
          <Question>Who's your favourite Wiggle?</Question>
          <Answer>Oh man, don't make me chooooose…</Answer>
        </CarouselItem>
        <CarouselItem>
          <Question>Why are your books so badly written?</Question>
          <Answer>Huh? Y-you can't say stuff like that!</Answer>
        </CarouselItem>
      </Carousel>
    </Section>
  )
}

export default FAQ;