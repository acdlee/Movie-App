import MainNavigation from "../MainNavigation";

import styles from './PublicLayout.module.css';

function PublicLayout({ children }) {
    return (
        <div>
            <MainNavigation />
            <hr className={styles.hr} />
            <main className={styles.main}>
                { children }
            </main>
        </div>
    );
}

export default PublicLayout;