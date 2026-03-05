"use client"
import {FC, useActionState, useState} from "react";

import {FormInput} from "@/components/FormInput";
import {FormButton} from "@/components/FormButton";
import {FormError} from "@/components/FormError";

type FormRegisterProps = {
    action: (_: string, formData: FormData) => Promise<string>;
}

export const FormRegister: FC<FormRegisterProps> = ({action})=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [message, formAction, isPending] = useActionState(action, "");

    return (
        <>
            {!isPending && <FormError message={message}/>}

            <form className="grid gap-y-6 pt-3" action={formAction}>
                <FormInput id="email" label="E-mail" value={email} setValue={setEmail} />
                <FormInput id="password" label="Password" value={password} setValue={setPassword} type={showPassword ? "text" : "password"} />
                <fieldset className="grid text-[#7b7c7b]">
                    {/*<label htmlFor="password" className="">*/}
                    {/*    Password*/}
                    {/*</label>*/}
                    {/*<div className="relative flex items-center">*/}
                    {/*    <input className="*/}
                    {/*    w-full*/}
                    {/*    pl-2 pr-10 py-1*/}
                    {/*    text-[#7b7c7b]*/}
                    {/*    border border-[#e8e9e9] focus:border-[#b1b2b2] hover:border-[#b1b2b2]*/}
                    {/*    outline-none*/}
                    {/*    shadow-md*/}
                    {/*    rounded-lg"*/}
                    {/*           name="password"*/}
                    {/*           id="password"*/}
                    {/*           value={password}*/}
                    {/*           onChange={(e) => setPassword(e.target.value)}*/}
                    {/*           type={showPassword ? "text" : "password"}*/}
                    {/*    />*/}
                    {/*    <button type="button" className="cursor-pointer absolute right-2"*/}
                    {/*            onClick={() => setShowPassword((show) => !show)}>(---)</button>*/}
                    {/*</div>*/}
                </fieldset>
                <FormButton>Cadastrar</FormButton>
            </form>
        </>
    );
}
