import getGifs from '../../src/helpers/getGifs';

describe('getGifts', () => {
  test('Should return an array of gifts', async() => {
    
    const gifts = await getGifs('One Punch')

    expect(gifts.length).toBeGreaterThan(0)

    expect(gifts[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    })
  })
})