import { create } from "zustand"
import { persist } from "zustand/middleware"

type State = {
    access: string;
    refresh: string;
    isAuth: boolean;
};

type Actions = {
    setTokens: (access: string, refresh: string) => void;
    logout: () => void;
    updateAccessToken: (newAccessToken: string) => void;
};

export const useAuthStore = create(
    persist<State & Actions>(
        (set) => ({
            access: "",
            refresh: "",
            isAuth: false,
            setTokens: (access: string, refresh: string) =>
                set({
                    access,
                    refresh,
                    isAuth: !!access && !!refresh
                }),
            logout: () => set({access:"", refresh:"", isAuth: false}),
            updateAccessToken:(newAccessToken:string)=>
            set((state) => ({ access: newAccessToken, refresh: state.refresh,isAuth: !!newAccessToken})),
        }), {
        name: "auth"
    }
    )
)