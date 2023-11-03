import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@auth0/nextjs-auth0/client";
import { changeUser } from "@/store/slice";

// {
//   email: "alejandro.daniel.viasus@gmail.com";
//   email_verified: true;
//   family_name: "Viasus";
//   given_name: "Alejandro";
//   locale: "es";
//   name: "Alejandro Viasus";
//   nickname: "alejandro.daniel.viasus";
//   picture: "https://lh3.googleusercontent.com/a/ACg8ocLegeezlQitgn3TwBxvjkcaj2Ue19Z8QrQSgKSXjqi-Ag=s96-c";
//   sid: "52b6iyFFvV3RXc2AGNpSRu3tFXkGYobA";
//   sub: "google-oauth2|102044553791208789220";
//   updated_at: "2023-11-03T03:52:41.721Z";
// }

function NavigationMenu() {
  const { user, error, isLoading } = useUser();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.valueState);

  useEffect(() => {
    if (user) {
      //   console.log("__cambio de user",globalState,user.email);
      dispatch(changeUser(user.email));
    }
  }, [user]);

  return (
    <section>
      <div>
        {globalState.user.email === "" ? (
          <a href="/api/auth/login">Login</a>
        ) : (
          <a href="/api/auth/logout">Logout</a>
        )}
      </div>
    </section>
  );
}

export default NavigationMenu;
