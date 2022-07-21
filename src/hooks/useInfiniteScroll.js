import { useEffect, useState } from 'react'
import axios from "axios"
import useLocalStorage from './useLocalStorage'

export default function useInfiniteScroll(apiUrl, key, pageNumber){
  const [loading, setLoading] = useLocalStorage(`${key}-loading`, true)
  const [error, setError] = useLocalStorage(`${key}-error`,false)
  const [list, setList] = useState(() => {
    try {
      const item = window.localStorage.getItem(`${key}-list`);
      return item ? JSON.parse(item) : [];
    } catch (e) {
      return [];
    }
  })
  const [hasMore, setHasMore] = useLocalStorage(`${key}-hasMore`,true)

  useEffect(() => 
    window.localStorage.setItem(`${key}-list`, JSON.stringify(list)),
    [list, key]
  )

  useEffect(() => {
    if(!hasMore) return;
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: apiUrl,
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setList(prevList => {
        return [...prevList, ...res.data.results]
      })
      setHasMore(res.data.next ? true : false)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber])

  return { loading, error, list, hasMore }  
}

