import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import axios from "axios"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Home = () => {

  const [videos, setVideos] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("/videos/random")
        setVideos(res.data)
      } catch (error) {
        setError(error)
      }
    }
    fetchVideos()
  }, [])

  return (
    <div>
      <Container>
        {videos.map((video) => (
          <Card />
        ))}
      </Container>
    </div>
  )
}

export default Home
