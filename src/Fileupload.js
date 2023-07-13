import React, { useState } from "react";
import axios from "axios";

export const FileUpload = () => {
    const [fileSelected, setFileSelected] = useState();
    const [file, setFile] = useState();

    const saveFileSelected = (e) => {
        //in case you wan to print the file selected
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    };

    const importFile = async (e) => {
        const formData = new FormData();
        formData.append("file", fileSelected);
        console.log(file)
        try {
            const res = await axios.post("https://localhost:7264/FileUpload", formData);
        } catch (ex) {
            console.log(ex);
        }
    };

    return (
        <>
            <input type="file" onChange={saveFileSelected} />
            <input type="button" value="upload" onClick={importFile} />
        </>
    );
};