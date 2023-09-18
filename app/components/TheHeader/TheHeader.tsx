import Link from "@/node_modules/next/link";
import React from "react";
import styles from './TheHeader.module.css'

const TheHeader = () => {

    return(
        <header className={styles.header}>
            <Link href='/' className={styles.item}>Home</Link>
            <Link href='/blog' className={styles.item}>Blog</Link>
            <Link href='/about' className={styles.item}>About</Link>
        </header>
    )
}

export default TheHeader