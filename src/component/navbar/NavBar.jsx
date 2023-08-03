import React from "react";
import styles from './NavBar.module.css';
import Form from "./Form";

function NavBar(props){

    return(
        <div className={styles.navbar}>
            <h3>GitHub User Search</h3>
            <Form onSearch={props.onSearch} />
        </div>
    );
};

export default NavBar;