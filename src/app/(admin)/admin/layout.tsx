import { AppSidebar } from './../../../components/layout/app-sidebar';
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset >
                    {children}
                </SidebarInset>
            </SidebarProvider>

        </div>
    )
}
