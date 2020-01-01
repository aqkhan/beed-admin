import cookie from "react-cookies";

export const redirectToLogin = (history, dispatch) => {
    cookie.remove("token");
    cookie.save(
        'redirect', history.location.pathname ,{path: "/"}
    );
    dispatch({
        type: "LOGGED_IN",
        payload: false
    });
    history.push('/login');
};

