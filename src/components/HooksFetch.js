import React from "react";

export default function HooksFetch() {
  const [data, setData] = React.useState({ hits: [] });

  const fetchData = async () => {
    const result = await fetch("https://api.randomuser.me/")
      .then(response => response.json())
      .then(myJson => myJson.results[0]);
    setData(result);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return <ul />;
}
