// create a function to execute the http request POST
export async function Post(url: string, data: { message: string }) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error('Failed POST request')
    }

    return await response.json()
  } catch (error) {
    console.error('Error in POST request:', error)
    throw error
  }
}
