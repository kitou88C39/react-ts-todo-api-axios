import React from "react";
import { apilink } from "../api_links";

const UsHolidays = () => {
  const [apiData, setApiData] = React.useState([]);


  // fetching the api data using async await
  React.useEffect(() => {
  const fetchDataApi = async () => {

    try {
      const response = await fetch(apilink);
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.log("Something Went Wrong Please Try Again", error);
    }
  };

    fetchDataApi()
  },[]);
  return (
    <div>



    </div>
  )
}

export default UsHolidays;
