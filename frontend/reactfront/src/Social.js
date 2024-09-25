import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <GoogleLogin
        onSuccess={(response) => {
          // Envoyer le token à votre backend Django
        }}
        onError={(error) => {
          console.error('Login Failed:', error);
        }}
      />
    </GoogleOAuthProvider>
  );
}
