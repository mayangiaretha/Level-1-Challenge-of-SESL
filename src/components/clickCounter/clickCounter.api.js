import axios from "axios";

export const getLocationData = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );
    const { city, countryName } = response.data;
    const locationData = {
      city,
      country: countryName,
    };
    return locationData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postClick = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getClicks = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data.locations;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
