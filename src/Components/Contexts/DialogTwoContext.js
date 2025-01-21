import { createContext, useContext, useState } from "react";

const ProfileDialog = createContext();

export const ProfileDialogProvider= ({children})=>{
    const [isPopen, setIsPopen] = useState(false);
    const openPdialog = ()=> setIsPopen(true);
    const closePdialog = ()=>setIsPopen(false)

    return(
        <ProfileDialog.Provider value={{isPopen, openPdialog, closePdialog}}>
            {children}
        </ProfileDialog.Provider>
    );
};

export const useProfileDialog = ()=> useContext(ProfileDialog);