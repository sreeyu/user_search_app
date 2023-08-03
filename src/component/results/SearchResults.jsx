import React from "react";
import styles from './SearchResults.module.css';

function SearchResults(props){

    return(
        <div className={styles.result} >
            <h3>Results</h3>
            {props.users.map(user =>
               <div className={styles.container} key={user.id} >
                <img src={user.avatar} alt="avatar" />
                <a href={user.url}>{user.name}</a>
               </div>
                )}
        </div>
    );
};

export default SearchResults;