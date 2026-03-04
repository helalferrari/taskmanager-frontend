"use client"
import {useState} from "react";

export default function FormRegister({action}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
            <form className="grid gap-y-6" action={action}>
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
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                </fieldset>
                <fieldset className="grid text-[#7b7c7b]">
                    <label htmlFor="password" className="">
                        Password
                    </label>
                    <div className="relative flex items-center">
                        <input className="
                        w-full
                        pl-2 pr-10 py-1
                        text-[#7b7c7b]
                        border border-[#e8e9e9] focus:border-[#b1b2b2] hover:border-[#b1b2b2]
                        outline-none
                        shadow-md
                        rounded-lg"
                               name="password"
                               id="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               type={showPassword ? "text" : "password"}
                        />
                        <button type="button" className="cursor-pointer absolute right-2"
                                onClick={() => setShowPassword((show) => !show)}>(---)</button>
                    </div>
                </fieldset>

                <button
                    className="py-2 bg-[#141516] text-[#FFFFFF] rounded-lg cursor-pointer shadow-md hover:shadow-none">Cadastrar</button>
            </form>
    );
}
