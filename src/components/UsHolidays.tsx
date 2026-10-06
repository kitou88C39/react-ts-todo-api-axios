import React from "react";
import { apilink } from "../api_links";
import styled from "styled-components";

interface apiProps{
  name: string;
  date: string;
  countryCode: string;
}


const UsHolidays = () => {
  const [apiData, setApiData] = React.useState<apiProps>();

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
  }, []);
  return (
    <HolidaysWrapper>
      {apiData && apiData.length > 0 && (
        <h2>Public Holidays {apiData[0].countryCode}</h2>
      )}
    </HolidaysWrapper>
  );
};

export default UsHolidays;

const HolidaysWrapper = styled.div`

  `
