import React from "react";
import styles from './SearchResults.module.css';

function SearchResults(props){

    return(
        <div className={styles.result} >
            
            {props.users.length === 0 ? 
               (<p>Search for users</p>)
               : (props.users.map(user =>
               <div className={styles.container} key={user.id} >
                <img src={user.avatar_url} alt="avatar" />
                <a href={user.html_url} target="_blank" rel="noreferrer">{user.login}</a>
               </div>)
                )}
        </div>
    );
};

export default SearchResults;