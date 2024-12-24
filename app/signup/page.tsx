import { Metadata } from "next";
import RegisterComponent from "../_components/main/RegisterComponent";

const RegisterPage = () => {
  return <RegisterComponent />;
};

export const metadata: Metadata = {
  title: "GameQuest Plus - Signup",
  description:
    "**Signup Page** : Join our community for exclusive access to the latest games, updates, and more. Your next adventure starts here!",
};

export default RegisterPage;
