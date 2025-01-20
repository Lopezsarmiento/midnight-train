export async function Post(
  url: string,
  data: { userName: string; content: string; conversationId: string }
) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error(`Failed POST request: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error in POST request:', error)
    throw error
  }
}

export async function Get(url: string) {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Failed GET request: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error in GET request:', error)
    throw error
  }
}
