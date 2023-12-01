import type { PropsWithChildren } from "react";

export default function DashboardLayout ({children} : PropsWithChildren<unknown>){
    return(
        <div>
            <h1>DashBoard Layout</h1>
            <header>header</header>
            {children}
            <footer>footer</footer>
        </div>
    )
}