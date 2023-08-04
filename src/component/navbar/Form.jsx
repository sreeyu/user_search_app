import React, { useState } from "react";
import styles from'./Form.module.css';

function Form(props){

    const [username, setUsername] = useState('');

    const getUsername = (event) => {
        setUsername(event.target.value);
    }

    const getUsers = (event) => {

        event.preventDefault();

        fetch(`https://api.github.com/search/users?q=${username}`)
        .then((response) => {
            if(!response.ok){
                throw new Error("Something went wrong :/");
            }
            return response.json();
        })
        .then((data) => {
            props.onSearch(data.items, username);
        })
        .catch((error) => {
            console.log(error);
        });
        setUsername('');
    };
    
    return(
        <form className={styles.search} onSubmit={getUsers}>
            <input value={username} type="text" 
            placeholder="Type to search for user"
            onChange={getUsername} 
            />
            <button>🔍</button>
        </form>
    );
};

export default Form;