import Link from "next/link";
import {register} from "node:module";

export default function Register() {
    return (
        <div className="grid gap-y-4 px-8 min-w-100 py-12 bg-[#fdfcfc] rounded-3xl shadow-xl">
            <h1 className="text-4xl text-center font-bold">Cadastro</h1>
            <div className="">
                <form className="grid gap-y-6">
                    <fieldset className="grid text-[#7b7c7b]">
                        <label htmlFor="email" className="">
                            E-mail
                        </label>
                        <input className="
                        px-2 py-1
                        text-[#7b7c7b]
                        border border-[#e8e9e9] focus:border-[#b1b2b2] hover:border-[#b1b2b2]
                        outline-none
                        shadow-md
                        rounded-lg"
                               name="email"
                               id="email"
                        />
                    </fieldset>
                    <fieldset className="grid text-[#7b7c7b]">
                        <label htmlFor="password" className="">
                            Password
                        </label>
                        <input className="
                        px-2 py-1
                        text-[#7b7c7b]
                        border border-[#e8e9e9] focus:border-[#b1b2b2] hover:border-[#b1b2b2]
                        outline-none
                        shadow-md
                        rounded-lg"
                               name="password"
                               id="password"
                        />
                    </fieldset>

                    <button className="py-2 bg-[#141516] text-[#FFFFFF] rounded-lg cursor-pointer shadow-md hover:shadow-none">Cadastrar</button>
                </form>
            </div>
            <Link href="/login" className="text-center underline">Já tenho cadastro</Link>
        </div>
    );
}
