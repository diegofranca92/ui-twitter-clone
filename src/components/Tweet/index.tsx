import React from 'react';
import { 
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    ComentIcon,
    RetweetIcon,
    LikeIcon
  } from './styles';

const Tweet: React.FC = () => {
    return (
     <Container>
         <Retweeted>
             <RocketseatIcon />
             Você Retweetou
         </Retweeted>

         <Body>
             <Avatar />
             <Content>
                 <Header>
                     <strong>Diego França</strong>
                     <span>@diegofranca92</span>
                     <Dot />
                     <time>03 de fev</time>
                 </Header>

                 <Description> Foguete não tem ré  🚀</Description>
                 <ImageContent />
                 <Icons>
                     <Status>
                         <ComentIcon />
                         18
                     </Status>
                     <Status>
                         <RetweetIcon />
                         18
                     </Status>
                     <Status>
                         <LikeIcon />
                         999
                     </Status>
                 </Icons>
             </Content>
         </Body>
     </Container>
    );
}

export default Tweet;