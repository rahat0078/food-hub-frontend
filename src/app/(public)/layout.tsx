import { Navbar } from "@/components/layout/navbar1";

export default function CommonLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="mx-auto container">
            <Navbar/>
            {children}
        </div>
    )
}
