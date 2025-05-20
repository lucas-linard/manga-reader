import axios from "axios"
import { AuthMock } from "../mocks/auth"

export const api = axios.create({
  baseURL: 'https://auth.mangadex.org',
})

api.defaults.headers.common['Authorization'] = `Bearer ${AuthMock.access_token}`