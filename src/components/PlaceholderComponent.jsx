import React, { Fragment, useState, useEffect } from "react";
import WebClientPlaceholder from "../services/web-client-placeholder";

async function getUsersPlaceholder() {
  const { data } = await WebClientPlaceholder.placeholder.getUsers();
  return data;
}

const PlaceholderComponent = () => {
  const [data] = useState(async () => {
    return await getUsersPlaceholder();
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Fragment>
      <div>
        <h1>PlaceholderComponent</h1>
      </div>
      {/* <div>
        <ul>
          {data.map(x => (
            <li>{x.name}</li>
          ))}
        </ul>
      </div> */}
      <br />
    </Fragment>
  );
};

export default PlaceholderComponent;
