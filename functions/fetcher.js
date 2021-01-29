

async function fetcher(query, { variables } = {}, token = null) {

  const headers = token? {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token} : {'Content-Type': 'application/json'}

  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export default fetcher
