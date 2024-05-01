export const iniciarSesion = async () => {
    try {
        console.log('iniciarSesion')
        const response = await fetch('http://localhost:5000/auth', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        });
    
        if (!response.ok) {
          throw new Error('Failed to login');
        }
    
        const data = await response.json();
        console.log(data)
        const token = data.token;
    
        localStorage.setItem('token', token);
        console.log('Token JWT obtenido:', token);
      } catch (error) {
        console.error('Error al obtener el token JWT:', error);
      }
}