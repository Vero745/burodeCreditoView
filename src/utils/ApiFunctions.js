module.exports.FetchApiPost = async (url, data) => {

    const obj = {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" }
    }
    try {
        const response = await fetch(url,obj)
        const datos = await response.json()
        return datos
    } catch (error) {
        return null
    }
}