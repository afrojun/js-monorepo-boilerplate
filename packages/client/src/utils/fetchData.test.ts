import axios from 'axios'
import { fetchData } from './fetchData'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('fetchData', () => {
  it('should return data', async () => {
    const url = 'https://localhost/test'
    const params = {
      monthlyInvestment: 1000,
      yearlyInterestRate: 4.5,
      years: 10,
    }

    mockedAxios.get.mockResolvedValue({
      data: {
        '2022': 2000,
      },
    })

    await fetchData(url, params)

    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    expect(mockedAxios.get).toHaveBeenCalledWith(url, { params: params })
  })

  it('logs an error if the call fails', async () => {
    const url = 'https://localhost/test'
    const params = {
      monthlyInvestment: 1000,
      yearlyInterestRate: 4.5,
      years: 10,
    }
    console.error = jest.fn()

    mockedAxios.get.mockRejectedValue('Network error: Something went wrong')

    await fetchData(url, params)

    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    expect(mockedAxios.get).toHaveBeenCalledWith(url, { params: params })
    expect(console.error).toHaveBeenCalledTimes(1)
    expect(console.error).toHaveBeenCalledWith('Network error: Something went wrong')
  })
})
