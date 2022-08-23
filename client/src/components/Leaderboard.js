import React from 'react'
import LeaderboardItem from './LeaderboardItem.js'
import styled from 'styled-components'

const Leaderboard = ({scores}) => {

    
    const leaderboardItem = scores.map((score, index) => {
        return <LeaderboardItem name={score.name} score={score.score} difficulty={score.difficulty} key={index} />
    })

  return (
    <Ol>
    {leaderboardItem}
    </Ol>
  )
}

const Ol = styled('ol')`
background-color: green;`

export default Leaderboard