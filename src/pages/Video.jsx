import { AddTaskOutlined, ReplyOutlined, ThumbDownAltOutlined, ThumbUpOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Comments from '../components/Comments'
import Card from '../components/Card'

const Container = styled.div`
  display: flex;
  gap: 24px;
`
const Content = styled.div`
  flex: 5;
`
const Recommendation = styled.div`
  flex: 2;
`
const VideoWrapper = styled.div`
  
`

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 20px;
  color: ${({ theme }) => theme.text};
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0px;
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`

const ChannelName = styled.span`
  font-weight: 500;
`

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`

const Description = styled.p`
  font-size: 14px;
`

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  height: max-content;
  cursor: pointer;
`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            frameBorder="0"
            width="100%"
            height="720"
            src="https://youtube.com/embed/fzR82oXbjnY"
            title="Youtube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>20, 350, 400 view • Sep 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined /> 419
            </Button>
            <Button>
              <ThumbDownAltOutlined /> Dislike
            </Button>
            <Button>
              <ReplyOutlined /> Share
            </Button>
            <Button>
              <AddTaskOutlined /> Save
            </Button>
          </Buttons>
        </Details>

        <Hr />

        <Channel>
          <ChannelInfo>
            <Image src='https://i.pinimg.com/originals/6f/a1/99/6fa199672606263355aa12c81dfb9d74.jpg' />
            <ChannelDetail>
              <ChannelName>Osas Dev</ChannelName>
              <ChannelCounter>400k subscribers</ChannelCounter>
              <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio aperiam provident unde vitae numquam iure doloremque voluptas a laborum reprehenderit. Ab, ipsa? Numquam magni magnam temporibus nihil quae, excepturi atque!</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>

        <Hr />

        <Comments/>

      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  )
}

export default Video
