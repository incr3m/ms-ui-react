// import bluebird from 'bluebird'
const endpoint = 'http://localhost:1350/website/auth'



export default class Auth{
    static userDetails = undefined;
    static init(cookie){
        if(!cookie && !Auth._cookie)
            throw Error('Cookie parameter is required');

        Auth._cookie = cookie || Auth._cookie;

        return fetch(endpoint+'/getloggedinuserdetails', {
          method: "GET",
          headers: {
            'Cookie': Auth.getCookie()
          },
          credentials: 'include' 
        })
        .then((response) => response.json())
        .then(responseJSON => {
            // console.log('auth')//TRACE
            // console.log(responseJSON)//TRACE
            // self.onUserDetailsFetched(responseJSON);
            Auth.userDetails = responseJSON;
            return Auth.userDetails;
        })
        // .catch(error => { console.log('request failed '+error); });
    }
    static getCookie(){
        if(!Auth._cookie)
            throw Error('Authentication not found');
        return Auth._cookie;
    }
    static getLoggedInUser(){
        return Auth.userDetails;
    }
}