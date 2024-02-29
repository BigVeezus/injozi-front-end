import React, { useEffect } from 'react'

import { Props, IRaceWinner } from './SeasonDetail.types'
import {
  Container,
  Header,
  HeaderText,
  StateContainer,
  StateText,
  Content,
  Row,
  Col,
  WinnerLabelText,
  WinnerNameText,
  RaceNameText,
  CountryNameText
} from './SeasonDetail.styles'
import { FiX } from 'react-icons/fi'
import formulalogo from '../assets/images/f1.png';


const SeasonDetail = ({ onGetRacesWinnersByYear, isLoading, season, races }: Props, ) => {
  useEffect(() => {
    onGetRacesWinnersByYear()
  }, [])

  const renderContent = () => {
    return races.length ? races.map((race: IRaceWinner, index: number) => {
      const { isWorldChampion, raceName, winnerFullName, country } = race
      return (
        <Row key={index} isWorldChampion={isWorldChampion}>

       
          <Col>
            <RaceNameText>{raceName}</RaceNameText>
            <CountryNameText>{country}</CountryNameText>
          </Col>

          <Col>
            <WinnerLabelText>Winner</WinnerLabelText>
            <WinnerNameText>{winnerFullName}</WinnerNameText>
          </Col>
        </Row>
      )
    }) : (
      <StateContainer>
        <StateText>No data...</StateText>
      </StateContainer>
    )
  }

  return (
    <Container>
      {/* <Header>
        <HeaderText>Season {season}</HeaderText>
      </Header> */}
       <Header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div style={{ fontSize: '50px', fontWeight: 'bold', color: '#000',fontFamily: 'Nasalization, sans-serif' }}><img style={{width:"96px"}} src={formulalogo} alt="formulaone logo" />&nbsp;{season} season</div>

        </div>
        <div style={{ borderBottom: '1px solid #ED2D26', marginBottom: '14px' }}></div>
        <div style={{ borderBottom: '1px solid #ED2D26', width:"70%", marginBottom:"28px" }}></div>
        </Header>
      {isLoading ? (
        <StateContainer>
          <StateText>Loading...</StateText>
        </StateContainer>
      ) : (
        <Content>
          {renderContent()}
        </Content>
      )}
    </Container>
  )
}

export default SeasonDetail
