import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";

import {
    SignupMain,
    SignupForm,
    ButtonStyled
} from "./styled";

import { TextField } from "@material-ui/core";
import Aside from "../../components/Aside";
import { useHistory } from "react-router";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useEffect } from "react"

interface UserDataSignup{
    name: string,
    email: string,
    password: string,
    passwordConfirm: string
};

const Signup = () => {
    const history = useHistory();

    const redirect = (string: string) => history.push(string)

    const onSubmit = (data: UserDataSignup)=> {
        const { name, email, password } = data;

        api
            .post("/signup", {
                name,
                email,
                password,
                cart: []
            })
            .then((response) => {
                toast.success("Conta cadastrada");
                redirect("/login");
            })
            .catch((err) => {
                toast.error("E-mail já utilizado");
            });
    };

    const schema = yup.object().shape({
        name: yup.string().required("Insira seu nome"),
        email: yup.string().required("E-mail é obrigatório").email("Insira um e-mail valido"),
        password: yup.string().required("Senha é obrigatório").min(8, "Mínimo de 8 caracters"),
        passwordConfirm: yup.string().required("Confirme sua senha").oneOf([yup.ref("password")], "Senhas divergentes")
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserDataSignup>({ resolver: yupResolver(schema) });

    useEffect(()=>{
        if(!!localStorage.getItem("@BurguerKenzie:token")){
            redirect("/")
        }
    },[])

    return (
        <SignupMain>
            <Aside />
            <SignupForm onSubmit={handleSubmit(onSubmit)}>
                <header>
                    <h3>Cadastro</h3>
                    <p onClick={()=> redirect("/login")}>Retornar para o login</p>
                </header>
                <TextField
                    label="Nome"
                    {...register("name")}
                    helperText={errors.name?.message}
                    color={errors.name? "warning": "success"}
                    fullWidth
                />
                <TextField
                    label="E-mail"
                    {...register("email")}
                    helperText={errors.email?.message}
                    color={errors.email? "warning": "success"}
                    fullWidth
                />
                <TextField
                    label="Senha"
                    {...register("password")}
                    helperText={errors.password?.message}
                    color={errors.password? "warning": "success"}
                    fullWidth
                    type="password"
                />
                <TextField
                    label="Confirme senha"
                    {...register("passwordConfirm")}
                    helperText={errors.passwordConfirm?.message}
                    color={errors.passwordConfirm? "warning": "success"}
                    fullWidth
                    type="password"
                />
                <ButtonStyled type="submit">
                    Cadastrar
                </ButtonStyled>
            </SignupForm>
        </SignupMain>
    )
}

export default Signup;