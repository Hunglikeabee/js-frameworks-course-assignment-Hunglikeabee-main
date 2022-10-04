import { useState, useEffect } from 'react';

export default function useApiCall(url) {

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true)
                setIsError(false)
                const theData = await fetch(url)
                const result = await theData.json()
                setData(result);
            }
            catch(error) {
                setIsError(true)
            }
            finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [url])

    return {
        isLoading,
        isError,
        data,
    }

}