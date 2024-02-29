import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { theme, palette } from '../UI/core'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  padding: 20px;
`

export const Header = styled.section`
  width: 95%;
  padding: 20px;


`

export const HeaderText = styled.span`
  font-family: Roboto;
  font-size: ${theme.fontSize.xl};
  color: ${palette.black};
`

export const StateContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: auto;

  @media (min-width: 768px) {
    height: 400px;
    flex: auto;
  }
`

export const StateText = styled.span`
  font-size: ${theme.fontSize.lg};
  font-family: Nasalization, sans-serif;
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
`

interface IRow {
  isWorldChampion: boolean
}

export const Row = styled.div(({ isWorldChampion }: IRow) => {
  const worldChampionStyle = css`
    background-color: ${palette.secondary};
    color: ${palette.black};
  `
  return css`
    display: flex;
    padding: ${theme.space};
    box-sizing: border-box;
    margin-bottom: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid ${rgba(palette.black, 0.2)};

    ${isWorldChampion && worldChampionStyle}
  `
})

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 calc(${theme.space}/2);
`

export const WinnerLabelText = styled.span`
  font-family:Nasalization, sans-serif;
  font-size: ${theme.fontSize.sm};
  color: #ED2D26;
`

export const WinnerNameText = styled.span`
  font-family: Nasalization, sans-serif;
  font-size: ${theme.fontSize.lg};
  font-weight: bold;
`

export const RaceNameText = styled.span`
  font-family: Nasalization, sans-serif;
  font-size: ${theme.fontSize.default};
  font-weight: bold;
`

export const CountryNameText = styled.span`
  font-family: Nasalization, sans-serif;
  font-size: ${theme.fontSize.sm};
`
