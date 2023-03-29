import axios from './axios.js';
import { combinePath } from './general.js';

export async function getFileUpload(id){
    const path = combinePath(`file/${id}`);
    try {
        const { data } = await axios.get(path);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

export async function uploadFormFiles(formData){
    //check to see if the files are present
    let path = combinePath('upload');
    //check if the editID and the editIndex is set
    let options = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }

    try{
        const { data } = await axios.post(path, formData, options)
        return data.data;
    } catch (error){
        throw new Error(Error);
    }
}
