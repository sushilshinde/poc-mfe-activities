export async function getStarredRepos(searchTerm) {
    try {
        const response = await fetch(`${process.env.API_URL}${searchTerm}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("user-token")}`,
            },
        });
        if (response.status === 401) {
            return { status: 401, message: "You are not authorized!!!" };
        }
        const json = await response.json();
        return json.data;
    } catch (error) {
        console.log(error.data.message);
        return error
    }
}
