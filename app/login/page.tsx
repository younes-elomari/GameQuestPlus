import { Metadata } from "next";
import LoginComponent from "../_components/main/LoginComponent";

const LoginPage = () => {
  return <LoginComponent />;
};

export const metadata: Metadata = {
  title: "GameQuest Plus - Login",
  description:
    "**Login Page** : Welcome back! Log in to access your account, explore new updates, and dive deeper into our game world!",
};

export default LoginPage;
