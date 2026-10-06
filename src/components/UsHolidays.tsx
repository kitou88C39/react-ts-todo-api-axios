import React from "react";
import { apilink } from "../api_links";
import styled from "styled-components";
const UsHolidays = () => {
  const [apiData, setApiData] = React.useState([]);
  import styled from "styled-components";


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
    <HolidaysWrapper>



    </HolidaysWrapper>
  )
}

export default UsHolidays;

const HolidaysWrapper = styled.div`

  `
