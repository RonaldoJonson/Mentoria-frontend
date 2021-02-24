import SimpleRestAPI from './API';

export const GetFeed = (callback) => {
    const api = new SimpleRestAPI(); 

    api.GetData('/video', (response) => {
        console.log(response);
        if(response.status < 300){
            callback(response.data);
        }
    })
}

export const GetSideVideos = (callback) => {
    const api = new SimpleRestAPI(); 

    api.GetData('/video', (response) => {
        console.log(response);
        if(response.status < 300){
            callback(response.data);
        }
    })
}

export const GetVideoById = (id, callback) => {
    const api = new SimpleRestAPI(); 

    api.GetData('/video/' + id, (response) => {
        console.log(response);
        if(response.status < 300){
            callback(response.data);
        }
    })
}

export const UploadVideo = (title, description, url, callback) => {
    const api = new SimpleRestAPI(); 

    const body = {
        title: title,
        description: description,
        url: url
    }

    api.PostData('/video', body, response => {
        console.log(response);

        if(response.status < 300){
            callback(response.data);
        }
    })
}
