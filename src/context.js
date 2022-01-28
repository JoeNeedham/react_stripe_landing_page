import React, {useState, useContet, useContext} from "react";
import sublinks from './data';
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setisSidebarOpen ] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [page, setPage] = useState({page: "", links: []});
    const [location, setLocation] = useState({});
    const openSidebar = () => {
        setisSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSubMenuOpen(false);
    }
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubMenuOpen(true);
    }
    const closeSubMenu = () => {
        setIsSubMenuOpen(false);
    }
    return (
        <AppContext.Provider
        value={{
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            isSubMenuOpen,
            openSubmenu,
            closeSubMenu,
            page,
            location
        }}
        >
        {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};