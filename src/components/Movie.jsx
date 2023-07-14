import {
  Container,
  StyledTile,
  StyledTitle,
  StyledDescription,
} from "./Movie.elements";
const Movie = (props) => {
  const { title, year, description, imgUrl, released } = props;
  return (
    <>
      <Container>
        <StyledTile src={imgUrl} alt={title} />
        <StyledTitle>
          {title}
          <p>{released}</p>
        </StyledTitle>
        {/* <StyledDescription>{description}</StyledDescription> //TODO show description on hover?*/}
      </Container>
    </>
  );
};

export default Movie;
