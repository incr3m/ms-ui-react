// import bluebird from 'bluebird'
import Auth from './auth'
import _ from 'lodash'
const endpoint = 'http://localhost:1350/website/account'



export default class Opportunity{
    static getOppsByAccount(accountId,limit,loggedInUserAccountId,queryObj,skip){
        // fetch(endpoint+'/getaccountopportunities?accountId=5963213eb6cd8d5e85a604b0&limit=10&loggedInUserAccountId=5963213eb6cd8d5e85a604b0&queryObj=%7B%22categories%22:%5B%5D%7D&skip=0', {
        var searchParams = new URLSearchParams();
        searchParams.append("accountId",accountId);
        searchParams.append("limit",limit);
        searchParams.append("loggedInUserAccountId",loggedInUserAccountId);
        searchParams.append("queryObj",queryObj);
        searchParams.append("skip",skip);

        return fetch(endpoint+'/getaccountopportunities?'+searchParams.toString(), {
            method: "GET",
            headers: {
                'Cookie': Auth.getCookie()
            },
            credentials: 'include' 
            })
            .then((response) => response.json())
            .then(responseJSON => {

            return responseJSON.map(opp=>{
                let budget = _.sumBy(opp.Items, function(item) { return item.budget; });
                return {
                id: opp._id,
                title: opp.Title,
                description: 'test',
                postedDate: opp.DateStart,
                endDate: opp.DateEnd,
                location: opp.DeliveryArea,
                budget,
                quoteCount: opp.QuotationCount
                }
            })
        })
        
        // return bluebird.coroutine(function*(){
        //     yield Auth._userDetailsDefer.promise;
        //     return Auth.userDetails;
        // })();
    }
    

}