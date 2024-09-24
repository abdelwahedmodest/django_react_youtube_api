const Refrech = async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    const response = await fetch('http://localhost:8000/api/token/refresh/', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refresh: refreshToken }),
    });
    const data = await response.json();
    if (response.ok) {
    // Store the new access token
    localStorage.setItem('access_token', data.access);
    } else {
    console.log('Error refreshing token');
    }
    };
    export  default  Refrech;