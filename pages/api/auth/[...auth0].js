// import { handleAuth } from '@auth0/nextjs-auth0';

// export default handleAuth();



import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth(
    {
        login: handleLogin({
            authorizationParams: {
                prompt: 'login', // Agrega esta línea
              },
          returnTo: "/",
        }),
        signup: handleLogin({
          authorizationParams: {
            screen_hint: "signup",
          },
          returnTo: "/",
        }),
      }
);