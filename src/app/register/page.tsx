import Link from "next/link";

import FormRegister from "@/components/FormRegister";


export default function Cadastro() {
    const handleRegister = async (formData: FormData) => {
        "use server";

        const email = formData.get('email')?.toString();
        const password = formData.get('password')?.toString();

        console.log(email, password);
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
