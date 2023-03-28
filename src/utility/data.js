import axios from './axios.js';
import { combinePath } from './general.js';

export async function fetchApplicantStats(session){
    const path = combinePath(`applicant_stats?session=${session}`);
    const { data } = await axios.get(path);
    return data.message;
}

export async function authentication(formdata){
    const path = combinePath(`auth`);
    // const result = await axios.post(path, { username, password })
    //     .then((response) => {
    //         return response.data;
    //     })
    //     .catch((error) => {
    //     console.log(`Error: ${error.message}`)
    //     });
    // return result;
    return await axios.post(path, formdata)
}

export async function fetchStudentDashboard(session){
    const path = combinePath(`student_dashboard?session=${session}`);
    try {
        const { data } = await axios.get(path);
        return data.message;
    } catch (error) {
        throw new Error(error);
    }
}

export async function fetchApplicantDashboard(session){
    const path = combinePath(`applicant_dashboard?session=${session}`);
    try {
        const { data } = await axios.get(path);
        return data.message;
    } catch (error) {
        throw new Error(error);
    }
}
