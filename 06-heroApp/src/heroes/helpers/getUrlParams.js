import queryString from 'query-string'

export const getUrlParams = ({ query }) => {
  const params = queryString.parse(query)
  return params
}
