import React, {useState, useEffect} from 'react';
const useLocalStorage = (key, firstVal) => {
    const initialValue = localStorage.getItem(key) || firstVal;
    const [item, setItem] = useState(initialValue);
    useEffect(() => {
            console.debug('useLocalStorage hook, useEffect, item=', item)
            if (item === null) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, item)
            }
        },[key, item]   
    )
    return [item, setItem]
    }
export default useLocalStorage;