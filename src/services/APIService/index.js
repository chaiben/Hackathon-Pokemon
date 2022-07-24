import axios from "axios";

class APIService  {
  constructor(){
    this.allPoke = false;
    this.allTypes = false;
  }

  async APICall(url){
    return axios({
      method: 'GET',
      url: url
    }).catch(e => {
      console.error(e.response.data.detail)
    })
  }
}

export default APIService