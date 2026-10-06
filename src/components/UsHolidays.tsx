import React from "react";
import { apilink } from "../api_links";

const UsHolidays = () => {

  const [apiData, setApiData] = React.useState();

  // fetching the api data using async await
    const fetchDataApi = async () => {

    try {
      const response = await fetch(apilink);
      const data = await response.json();
    }
  }

  return (
    <div>



    </div>
  )
}

export default UsHolidays
