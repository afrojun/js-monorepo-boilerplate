import axios from 'axios'

export const fetchData = async (url: string, params: any) => {
  try {
    const { data } = await axios.get(url, {
      params,
    })

    return data
  } catch (e) {
    console.error(e)
  }
}
