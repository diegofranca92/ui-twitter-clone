import React from 'react';

import Button from '../Button';

import 
{ 
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    BottomSide,
    Avatar,
    ProfileData,
    ExitIcon
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
        <Topside>
            <Logo />

            <MenuButton>
                <HomeIcon />
                <span>Página Inicial</span>
            </MenuButton>
            <MenuButton>
                <BellIcon />
                <span>Notificações</span>
            </MenuButton>
            <MenuButton>
                <EmailIcon />
                <span>Mensagens</span>
            </MenuButton>
            <MenuButton>
                <FavoriteIcon />
                <span>Favoritados</span>
            </MenuButton>
            <MenuButton className="active">
                <ProfileIcon />
                <span>Perfil</span>
            </MenuButton>
            <Button outlined>
                <span>Tweetar</span>
            </Button>
        </Topside>
        <BottomSide>
            <Avatar />

            <ProfileData>
                <strong>Diego França</strong>
                <span>@diego.franca92</span>
            </ProfileData>
            <ExitIcon />
        </BottomSide>
    </Container>
  );
}

export default MenuBar;