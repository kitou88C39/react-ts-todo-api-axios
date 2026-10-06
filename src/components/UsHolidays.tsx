import React from "react";
import { apilink } from "../api_links";

const UsHolidays = () => {
  const [apiData, setApiData] = React.useState();

  React.useEffect(() => {
    fetchDataApi()
  }, []);

  // fetching the api data using async await
  const fetchDataApi = async () => {

    try {
      const response = await fetch(apilink);
      const data = await response.json();
      setApiData(data)
      console.log(data);
    } catch (error) {
      console.log("Something Went Wrong Please Try Again", error);
    }
  };

  return (
    <div>



    </div>
  )
}

export default UsHolidays
