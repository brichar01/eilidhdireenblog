import * as React from "react"
import styled from '@emotion/styled'
import { Link, scroller } from "react-scroll"
import '../static/css/scrolllink.css'


const PageDiv = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3em;
  font-weight: bolder;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  border: solid 1px lightgrey;
`

const OutsidePadding = styled.div`
  padding-left: 3em;
  padding-right: 3em;
`

const StyledScrollLink = styled(Link)`
  :active {
    display: inline-block;
    position: relative;
  }
`



const ScrollLink = (props: {to: string}) => {
  const { to } = props;
  return (
    <OutsidePadding>
      <StyledScrollLink 
        className="hover-underline-animation" 
        activeClass="active" 
        to={to} 
        smooth={true} 
        duration={650}
        offset={-50}
        >{to}
      </StyledScrollLink>
    </OutsidePadding>
  )
}

const BlogHeader = () => {
  return (
    <PageDiv>
      <ScrollLink to="Home" />
      <ScrollLink to="Two Bodies÷Three Fools" />
      <ScrollLink to="Arcadia" />
      <ScrollLink to="Coming Soon"/>
      <ScrollLink to="Blog" />
      <ScrollLink to="FAQ" />
      <ScrollLink to="Contact me" />
    </PageDiv>
  )
}

export default BlogHeader