import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

import {
    LoginForm,
    ButtonStyled,
    ButtonRedirectStyled,
    LoginMain
} from "./styled"

import { TextField } from "@material-ui/core";
import Aside from "../../components/Aside";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useCartContext } from "../../providers/cart";

interface ILogin{
    email: string,
    password: string
}

export const Login = () => {   
    const history = useHistory()

    const { setCart, setToken } = useCartContext()

    const redirect = (string: string) => {
        history.push(string);
    };

    const onSubmit = (data: ILogin)=> {
        localStorage.removeItem("@BurguerKenzie:token");
        localStorage.removeItem("@BurguerKenzie:id");

        api
            .post("/login", data)
            .then(response => {
                setToken(response.data.accessToken);
                setCart(response.data.user.cart);
                localStorage.setItem("@BurguerKenzie:token", response.data.accessToken);
                localStorage.setItem("@BurguerKenzie:id", response.data.user.id);
                toast.success("Bem vindo, " + response.data.user.name);
                redirect("/");
            })
            .catch(err => {
                toast.error("E-mail ou senha incorreto");
            });
    };

    const schema = yup.object().shape({
        email: yup.string().required("E-mail é obrigatório").email("Insira um e-mail valido"),
        password: yup.string().required("Senha é obrigatório")
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILogin>({ resolver: yupResolver(schema) });
    
    useEffect(()=>{
        if(!!localStorage.getItem("@BurguerKenzie:token")){
            redirect("/")
        }
    },[])

    return (        
        <LoginMain>
            <LoginForm
                onSubmit={handleSubmit(onSubmit)}
            >
                <header>
                    <h3>Login</h3>
                </header>
                <TextField
                    label="E-mail"
                    type="email"
                    fullWidth
                    {...register("email")}
                    helperText={errors.email?.message}
                    color={errors.email? "warning": "success"}
                    />
                <TextField
                    label="Senha"
                    type="password"
                    fullWidth
                    {...register("password")}
                    helperText={errors.password?.message}
                    color={errors.password? "warning": "success"}
                />
                <ButtonStyled type="submit">
                    Logar
                </ButtonStyled>

                <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>

                <ButtonRedirectStyled onClick={() => redirect("/signup")}>
                    Cadastrar
                </ButtonRedirectStyled>
            </LoginForm>
            <Aside />
        </LoginMain>
    );
};