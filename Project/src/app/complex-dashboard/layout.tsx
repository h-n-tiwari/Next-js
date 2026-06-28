// import UserAnalytics from "path/to/UserAnalytics";
// import RevenueMetrics from "path/to/RevenueMetrics";
// import Notifications from "path/to/Notifications";

// export default function ComplexDashboardLayout ({
//     children,
// }: {
//     children: React.ReactNode;
// }) {
//     return (
//         <>
//             <div> {children} </div> {/* Content from page.tsx */}
//             <UserAnalytics /> {/* Content from user analytics */}
//             <RevenueMetrics /> {/* Content from revenue metrics */}
//             <Notifications /> {/* Content from notifications */}
//         </>
//     );
// }

// ------------------------------------------------------------------------------------------------

export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login,
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
}) {
    const isLoggedIn = false;               // if true then complex-dashboard will appear

    return isLoggedIn ? (
        <div>
            <div>{children}</div>

            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>

                <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
            </div>
        </div>
    ) : (
        login
    );
}