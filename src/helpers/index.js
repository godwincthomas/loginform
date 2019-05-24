

import users from '../data/user.json';


export function configureBackend() {
     var user=users;
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
   
            setTimeout(() => {

           
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                   
                    let params = JSON.parse(opts.body);

                   
                   
                    if(user.username == params.username && user.password == params.password)
                    {
       
                  
                        let responseJson = {                            
                            username: user.username,
                            firstName: user.firstName
                           
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } 
                    else {
                        // else return error
                        reject('Username or password is incorrect');
                    }

                    return;
                }

             
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}