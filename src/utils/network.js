import axios from "axios";
const getApiData = async (url) => {
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
export default getApiData;