// save login  reponse > (user's name and token) to session storage
export const authenticate = (response, next) => {
    if (window !== 'undefined') {
        // console.log('authenticate', response)
        sessionStorage.setItem('token', JSON.stringify(response.data.token));
        sessionStorage.setItem('user', JSON.stringify(response.data.name));
    }
    next();
};