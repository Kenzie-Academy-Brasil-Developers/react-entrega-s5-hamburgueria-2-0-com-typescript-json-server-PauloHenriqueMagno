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
import { useLoginContext } from "../../providers/login";
import Aside from "../../components/Aside";

interface ILogin{
    email: string,
    password: string
}

export const Login = () => {   
    const history = useHistory()

    const { Login }: any = useLoginContext()

    const redirect = (string: string) => {
        history.push(string);
    };

    const onSubmit = (data: ILogin)=> {
        Login(data);
        redirect("/");
    }

    const schema = yup.object().shape({
        email: yup.string().required("E-mail é obrigatório").email("Insira um e-mail valido"),
        password: yup.string().required("Senha é obrigatório")
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILogin>({ resolver: yupResolver(schema) });
    
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
                    color={errors.email? "warning": "success"}
                />
                <ButtonStyled type="submit">
                    Logar
                </ButtonStyled>

                <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>

                <ButtonRedirectStyled onClick={() => redirect("/register")}>
                    Cadastrar
                </ButtonRedirectStyled>
            </LoginForm>
            <Aside />
        </LoginMain>
    );
};