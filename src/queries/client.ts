import { QueryClient } from 'react-query'
// import { defaultApiErrorType } from '@queries/Error/queryErrorHandler'
// import { IAMErrorResponse } from '@api/dto/iam.response.dto'
// import { AxiosError } from 'axios'

// post / delete / put
// const mutationCache = new MutationCache({
//   onError: (error) => {
//     defaultApiErrorType(error as AxiosError<IAMErrorResponse<any>>)
//   },
// })
// get
// const queryCache = new QueryCache({
//   onError: (error) => {
//     defaultApiErrorType(error as AxiosError<IAMErrorResponse<any>>)
//   },
// })
const defaultOptions = {
  queries: {
    staleTime: 1000 * 5,
  },
}

export const queryClient = new QueryClient({
  defaultOptions,
})
