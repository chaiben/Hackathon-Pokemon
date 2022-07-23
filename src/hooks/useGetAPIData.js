import axios from "axios";
import { useEffect, useState } from "react";

const useGetAPIData = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      url: url
    }).then(res => {
      setResponse(res.data)
      setLoading(false)
    }).catch(e => {
      setLoading(false)
      setError(e.response.data.detail)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return {loading, error, response}
}

export default useGetAPIData;