import { CartItem } from 'myTypes'

async function adjustSanityStock(cartItems: CartItem[]) {
  const sanityApi = `https://${process.env.SANITY_API_TOKEN}.api.sanity.io/v2023-05-15/data/mutate/production`
  // const sanityApi =
  //   process.env.NODE_ENV === 'development'
  //     ? `https://${process.env.GATSBY_SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/dev`
  //     : `https://${process.env.GATSBY_SANITY_PROJECT_ID}.api.sanity.io/v1/data/mutate/production`;

  const adjustQuantityMutations = cartItems.map((cartItem) => ({
    patch: {
      id: cartItem._id,
      dec: {
        stock: cartItem.quantity,
      },
    },
  }))

  const result = await fetch(sanityApi, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
    body: JSON.stringify({ mutations: adjustQuantityMutations }),
  })
    .then((res) => res.json())
    .then((result) => result)
    .catch((error) => {
      console.error('ERROR ADJUSTING PRODUCT STOCK', error)
      // send error to neighborly that stock could not be adjusted
    })
  return result
}
export { adjustSanityStock }
