import styles from './Layout.module.scss'

export interface Children {
  children:React.ReactNode[] | React.ReactNode | string 
}

const Layout = ({children}:Children) => {
  return (
    <body className={styles.layout}>
      {children}
    </body>
  );
}

export default Layout;