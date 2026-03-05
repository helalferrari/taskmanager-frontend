import Link from "next/link";

import {FormRegister} from "@/components/FormRegister";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";

export default function Cadastro() {
    const handleRegister = async (_: string, formData: FormData) => {
        "use server";

        const email = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();

        if(!email || !password){
            return "Preencha os campos";
        }

        if(password.length < 6) {
            return "A senha precisa ter pelomenos 6 caracteres";
        }

        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            return "Preencha com um e-mail válido."
        }

        try {
            const body = {
                email,
                password
            }

            const res = await fetch("http://localhost:8080/api/users/register", {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const {token, message, error} = await res.json();

            if(!token) {
                return message || error;
            } else {
                const cookieStore = await cookies();

                cookieStore.set('token', token, {
                    httpOnly: true,
                    secure: true,
                    path: "/",
                    maxAge: 60 * 60 * 24,
                });
            }
        } catch {
            console.error('handlerRegister failed');

            return "Erro no Cadastro";
        }
        redirect("/tasks");
    }
    return (
        <div className="grid gap-y-4 px-8 min-w-100 py-12 bg-[#fdfcfc] rounded-3xl shadow-xl">
            <h1 className="text-4xl text-center font-bold">Cadastro</h1>
            <div className="">
                <FormRegister action={handleRegister} />
            </div>
            <Link href="/login" className="text-center underline">Já tenho cadastro</Link>
        </div>
    );
}
