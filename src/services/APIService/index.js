import axios from "axios";

class APIService  {
  constructor(){
    this.allPoke = false;
    this.allTypes = false;
  }

  async APICall(url){
    const response = await axios({
      method: 'GET',
      url: url
    }).catch(e => {
      console.error(e.response.data.detail)
    })
    return response
  }
}

export default APIService