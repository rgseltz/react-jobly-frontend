import React, {useState} from "react";
const useFormData = (initialState) => {
    const [formData, setFormData] = useState(initialState) 
    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData(data => ({...data, [name] : value}));
        console.log(formData);
    }

    const resetFormData = () => {
        setFormData(initialState)
    };
    return [formData, handleChange, resetFormData];    
}
export default useFormData;