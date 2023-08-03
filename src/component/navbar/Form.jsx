import React from "react";
import styles from'./Form.module.css';

function Form(){
    
    return(
        <form className={styles.search}>
            <input type="text" placeholder="Type to search for user" />
            <button>🔍</button>
        </form>
    );
};

export default Form;