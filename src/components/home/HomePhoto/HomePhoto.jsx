import { HomePhotoWrapper, StyledImage } from "./HomePhoto.styled"

const HomePhoto = () => {
    return(
        <HomePhotoWrapper>
            <StyledImage src="/img/profile.jpg" allt="Home Photo"/>
        </HomePhotoWrapper>
    );
};

export default HomePhoto;