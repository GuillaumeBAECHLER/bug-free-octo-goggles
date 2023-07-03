const SWAPI_URL = 'https://swapi.dev/api'

const search = (resourceType: string) => async (searchString: string) => {
  const searchUrl = `${SWAPI_URL}/${resourceType}?search=${searchString}`
  return fetch(searchUrl).then((response) => response.json())
}

export default {
  search
}
