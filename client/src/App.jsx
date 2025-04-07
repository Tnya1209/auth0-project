import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function App() {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
    isLoading,
  } = useAuth0();

  const sendTokenToBackend = async () => {
    try {
      const token = await getAccessTokenSilently();
      await axios.post('https://auth0-project-hzp9.onrender.com/auth/callback', { token });
      alert('Token sent and email triggered!');
    } catch (err) {
      console.error(err);
      alert('Failed to send token');
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Login with Auth0</button>
      ) : (
        <>
          <h2>Welcome, {user.name}</h2>
          <p>{user.email}</p>
          <button onClick={sendTokenToBackend}>Send Token to Backend</button>
          <br />
          <br />
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default App;
