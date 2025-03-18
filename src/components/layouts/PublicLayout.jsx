import MainNavigation from "../MainNavigation";

function PublicLayout({ children }) {
    return (
        <div>
            <MainNavigation />
            <main>
                { children }
            </main>
        </div>
    );
}

export default PublicLayout;