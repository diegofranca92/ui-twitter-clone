import React from 'react';
import StyckBox from 'react-sticky-box'

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter"/>
            <SearchIcon />
        </SearchWrapper>
        <StyckBox>
          <Body>
            <List 
            title="Talvez você curta"
            elements={[
              <FollowSuggestion 
              name="name"
              nickname="nickname"
              />,
              <FollowSuggestion 
              name="name"
              nickname="nickname"
              />,
              <FollowSuggestion 
              name="name"
              nickname="nickname"
              />
            ]}
            />
            <List 
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
            />
            <List 
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
            />
            <List 
            title="O que está acontecendo"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
            />
          </Body>
        </StyckBox>
    </Container>
  );
}

export default Sidebar;