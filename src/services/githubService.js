export async function getStarredRepos(searchTerm) {
    try {
        const response = await fetch(`${process.env.API_URL}${searchTerm}`)
        const json = await response.json()
        return json.data
    } catch (error) {
        console.log(error.data.message)
        // return error
    }
}
