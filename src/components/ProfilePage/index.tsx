import React from 'react';
import Feed from "../Feed";

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  Followage,
  LocationIcon,
  CakeIcon,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
   <Container>
    <Banner>
       <Avatar/>
    </Banner>
       <ProfileData>
         <EditButton outlined>Editar Perfil</EditButton>
         <h1>Diego França</h1>
         <h2>@diegofranca92</h2>

         <p>
           Developer at <a href="http://workana.com/">@Workana</a>
         </p>
         <ul>
           <li>
             <LocationIcon />
             Salvador, Bahia
            </li>
           <li>
            <CakeIcon />
             Nascido em 16 de Dezembro de 1992
            </li>
         </ul>

         <Followage>
           <span>
            seguindo <strong>41</strong>
           </span>
           <span>
             <strong>14</strong> seguidores
           </span>
         </Followage>
       </ProfileData>
       <Feed />
   </Container>
  );
}

export default ProfilePage;