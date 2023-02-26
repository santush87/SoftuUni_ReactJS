const baseUrl = "http://localhost:3005/api/users";

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = response.json();

    return result.users;
};
