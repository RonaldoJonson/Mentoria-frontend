import SimpleRestAPI from './API';

export const Login = (email, password, callback) => {
    const api = new SimpleRestAPI(); 

    const body = {
        "email": email,
        "password": password
    }
    
    api.PostData('/login', body, (response) => {
        console.log(response);
        if(response.status < 300){
            callback();
            localStorage.setItem("token", response.data.token);
        }
    })
}


export const Register = (name, email, password, callback) => {
    const api = new SimpleRestAPI(); 

    const body = {
        "name": name,
        "email": email,
        "password": password
    }

    api.PostData('/signup', body, (response) => {
        console.log(response);
        if(response.status < 300){
            callback();
        }
    })
}