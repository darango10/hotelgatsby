import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const TextoInicio=styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  
  @media(min-width: 768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;
    margin-bottom: 20px;
  }
  
  p{
    line-height: 2;
    margin-top: 2rem;
    text-align: justify;
  }
  
`



const ContenidoInicio = () => {

  const informacion = useStaticQuery(graphql`
      query {
          allDatoCmsPagina(filter:{slug:{eq:"inicio"}}){
              nodes{
                  titulo
                  contenido
                  imagen{
                      fluid{
                          ...GatsbyDatoCmsFluid
                      }
                  }
              }
          }
      }
  `)

  const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0]
  return (
    <Fragment>
      <h2 css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
      `}>{titulo}</h2>
      <TextoInicio>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} alt=""/>
      </TextoInicio>


    </Fragment>
  )
}

export default ContenidoInicio