export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=lFgHp2REgwWMUeEymRIf9NxBcuXI51h6&q=${category}&limit=10`
  const response = await fetch(url)
  const { data } = await response.json()

  const gifts = data.map(gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url
  }))

  console.log(gifts)

  return gifts
}
