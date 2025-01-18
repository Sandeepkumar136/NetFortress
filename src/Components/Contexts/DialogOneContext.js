import { createContext, useContext, useState } from "react";

const SearchDialog = createContext();

export const SearchDialogProvider =({children})=>{
    const [isOpen, setIsOpen] = useState(false);
    const openDialog = ()=> setIsOpen(true);
    const closeDialog = ()=>setIsOpen(false);

    return(
        <SearchDialog.Provider value={{isOpen, openDialog, closeDialog}}>
            {children}
        </SearchDialog.Provider>
    );
};
export const useSearchDialog = () => useContext(SearchDialog);