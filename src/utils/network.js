import axios from "axios";
export const getApiData = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status !== 200) {
      console.error(`Response status is ${response.status}`)
    }
    return response.data;
  }
  catch(e) {
    console.log(e)
  }
}

export const fetchArrayOfUrls = async (urls) => await Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json())
  }))




