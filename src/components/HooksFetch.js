import React from "react";
import axios from "axios";
import styled from "styled-components";

const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

const Frames = styled.div`
  width: 250px;
  border: 1px solid black;
`;

export default function HooksFetch() {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    const result = await axios
      .get("https://randomuser.me/api/?results=100")
      .then(json =>
        json.data.results.map(result => ({
          name: `${capitalize(result.name.title)} ${capitalize(
            result.name.first
          )} ${capitalize(result.name.last)}`,
          age: `${result.dob.age}`,
          pictures: {
            thumbnail: result.picture.thumbnail,
            medium: result.picture.medium,
            large: result.picture.large
          },
          username: result.login.username,
          email: result.email,
          gender: capitalize(result.gender)
        }))
      )
      .then(newData => newData)
      .catch(error => alert(error));

    setData(result);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      {data.map(x => (
        <Frames>
          <img key={x.pictures.thumbnail} src={x.pictures.thumbnail} />
          <div>Name: {x.name}</div>
          <div>Gender: {x.gender}</div>
          <div>Email: {x.email}</div>
          <div>User: {x.username}</div>
          <div>{x.age}</div>
          <img key={x.pictures.medium} src={x.pictures.medium} />
          <img key={x.pictures.large} src={x.pictures.large} />
        </Frames>
      ))}
    </Container>
  );
}
