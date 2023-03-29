import axios from 'axios';
import {showNotification,combinePath} from './general.js';

function hasFile(formData){
    for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
            const element = formData[key];
            if (typeof element =='object') {
                return true;
            }
        }
    }
    return false;
}

export function insertForm(scope,entity,formData,id,form=false){
    //check to see if the files are present
    scope.$root.loading=true;
    let path = combinePath(scope,'web/'+entity);
    //check if the editID and the editIndex is set
    if(id){
        path+=('/'+id);
    }
    let withFile = hasFile(formData);
    let options ={};
    if (withFile) {
        options = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    };
    let data = new FormData();
    for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
            const element = formData[key];
            data.append(key,element);
        }
    }
    axios.post(path,data,options)
    .then(function(response){
        scope.$root.loading = false;
        if (response.data.status) {
            showNotification(scope,true,response.data.message);
            scope.$emit('submission-success',entity,response.data,form);
        }else{
            showNotification(scope,false,response.data.message);
        }
    }).catch(function(error){
        scope.loading = false;
        showNotification(scope,false,error.message);
    });
}
