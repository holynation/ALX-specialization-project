import axios from './axios.js';
import { combinePath } from './general.js';

export async function fetchApplicantDashboard(session){
    const path = combinePath(`applicant_dashboard?session=${session}`);
    try {
        const { data } = await axios.get(path);
        return data.message;
    } catch (error) {
        throw new Error(error);
    }
}

export function uploadFormFiles(formData){
    //check to see if the files are present
    let path = combinePath('endpoint goes here');
    //check if the editID and the editIndex is set
    let options = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    axios.post(path, formData, options)
    .then(function(response){
        if (response.data.status) {
            return response.data.message;
        }else{
            throw new Error('Something went wrong')
        }
    }).catch(function(error){
        throw new Error(error)
    });
}
