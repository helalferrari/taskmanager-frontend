import {PropsWithChildren} from "react";

export const FormButton = ({children}:PropsWithChildren) => (
    <button className="py-2 bg-[#141516] text-[#FFFFFF] rounded-lg cursor-pointer shadow-md hover:shadow-none">{children}</button>
    );
