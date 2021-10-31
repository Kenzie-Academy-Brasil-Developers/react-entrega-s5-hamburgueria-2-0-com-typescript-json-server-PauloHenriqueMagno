import {
    createContext,
    useContext,
    useState
} from "react";
import { IProvider } from "../../type/provider";
import { UserDataAccess } from "../../type/user";
import { toast } from "react-toastify";
import api from "../../services/api";

const LoginContext = createContext({});

export const LoginProvider = ({ children }: IProvider) => {

    const [token, setToken] = useState(() => localStorage.getItem("@BurguerKenzie:token") || "");

    const Login = (userData: UserDataAccess) => {
        api
            .post("/login", userData)
            .then(response => {
                setToken(response.data.accessToken);
                localStorage.setItem("@BurguerKenzie:token", response.data.accessToken);
                toast.success("Bem vindo, " + response.data.user.name);
            })
            .catch(err => {toast.error("E-mail ou senha incorreto"); console.log(err)});
    };

    const Logout = () => {
        toast.success("Você saiu da sua conta")
        setToken("");
        localStorage.clear();
    };

    return (
        <LoginContext.Provider value={{ token, Login, Logout }}>
            {children}
        </LoginContext.Provider>
    );
};

export const useLoginContext = () => useContext(LoginContext);