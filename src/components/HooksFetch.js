import React from "react";
import axios from "axios";

const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join("").toLowerCase() : rest.join(""));

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
          }
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
    <ul>
      {data.map(x => (
        <div>
          <div>{x.name}</div>
          <div>{x.age}</div>
          <img key={x.pictures.thumbnail} src={x.pictures.thumbnail} />
          <img key={x.pictures.medium} src={x.pictures.medium} />
          <img key={x.pictures.large} src={x.pictures.large} />
        </div>
      ))}
    </ul>
  );
}
