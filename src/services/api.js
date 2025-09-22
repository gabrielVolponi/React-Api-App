const baseUrl = "https://jsonplaceholder.typicode.com";

export async function getUsers() {
  try {
    const response = await fetch(`${baseUrl}/users`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log("Erro: ", error.message);
    return [];
  }
}

export async function getPosts(userId) {
  try {
    const response = await fetch(`${baseUrl}/posts?userId=${Number(userId)}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log("Erro: ", error.message);
    return [];
  }
}

export async function getComments(postId) {
  try {
    const response = await fetch(
      `${baseUrl}/comments?postId=${Number(postId)}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log("Erro: ", error.message);
    return [];
  }
}
