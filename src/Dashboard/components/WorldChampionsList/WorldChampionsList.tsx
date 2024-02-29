import React from 'react';
import styled from 'styled-components';
import Button from '../../../UI/Button';
import { Props } from './WorldChampionsList.types';
import AlexanderAlbon from '../../../assets/images/drivers/Alexander-Albon.png';
import CharlesLeclerc from '../../../assets/images/drivers/Charles-Leclerc.png';
import LewisHamilton from '../../../assets/images/drivers/Lewis-Hamilton.png';
import MaxVerstappen from '../../../assets/images/drivers/Max-Verstappen.png';
// import driverImages from '../../../data/driverImages.json';
import yearBackground  from '../../../assets/images/f1.png';
const images = {
  'Alexander Albon': AlexanderAlbon,
  'Charles Leclerc': CharlesLeclerc,
  'Lewis Hamilton': LewisHamilton,
  'Max Verstappen': MaxVerstappen
  // ... add other images
};


const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border: 1px solid #ed2d26;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease, background 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 250px;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    background: linear-gradient(45deg, #ffffff, #f6f6f6);
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #fff;
  }
`;

const YearContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;


  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  padding: 10px;
`;

const YearImage = styled.img`
  width: 100px; /* Adjust the width as needed */
  margin-right: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const DriverImage = styled.img`
  max-height: 206px;
  max-width: 100%;
`;

const WorldChampionsList = ({ worldChampions, onOpenModal }: Props) => {
  const onShowSeasonDetail = (season: number, worldChampion: string) => {
    onOpenModal(season, worldChampion)
  }


  return (
    <CardContainer>
      {worldChampions.map((worldChampionInfo, index) => {
        const { driverId, season, championFullName, points} = worldChampionInfo;
        const normalizedChampionName = championFullName.replace(/\s/g, '-'); // Replace spaces with dashes
        console.log("norml", normalizedChampionName);
        return (
          <Card    onClick={() => onShowSeasonDetail(season, driverId)} key={index}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', wordBreak: 'break-word',fontFamily: 'Nasalization, sans-serif' }}>
                {championFullName}
              </span>
              <span style={{ fontSize: '0.875rem', color:"#ED2D26", fontWeight:"500",fontFamily: 'Nasalization, sans-serif' }}>{points}{" "}Points</span>
            </div>
            {/* <FlexContainer>
          
              <span style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>Season: {season}</span>

            </FlexContainer> */}
            <Button
              data-testid="season-detail-button"
            
              onClick={() => onShowSeasonDetail(season, driverId)}
              style={{ transform: 'scale(0.9)', transition: 'transform 0.3s ease',marginTop:"20px" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(0.9)')}
            >
           {season}
            </Button>
            <YearContainer>
      <YearImage src={yearBackground} alt="Year Background" /> 
   
            </YearContainer>
            <ImageContainer>
            {championFullName in images ? (
                <DriverImage src={images[championFullName]} alt="Driver Image" />
              ) : (
                <p style={{fontFamily: 'Nasalization, sans-serif'}}>No image available</p>
              )}

            </ImageContainer>
          </Card>
        );
      })}
    </CardContainer>
  );
};

export default WorldChampionsList;
