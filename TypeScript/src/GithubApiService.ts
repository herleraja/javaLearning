import * as request from 'request'
import { User } from './User'
import { Repo } from './Repo'

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};

export class GithubApiService {

    //getUserInfo(userName: string, callback: (user: User) => any) {
    getUserInfo(userName: string, callback: any) {

        request.get('https://api.github.com/users/' + userName, OPTIONS, (error, response, body) => {
            //console.log(error)
            //console.log(response)
            //console.log(body)
            //let aUser = new User(JSON.parse(body)); //If json:false in OPTIONS
            let aUser = new User(body);  //If json:true in OPTIONS
            //console.log(aUser);
            callback(aUser);


        })
    }

    //getRepos(userName: string, callback: (repos: Repo[]) => any) {
    getRepos(userName: string, callback: any) {

        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, (error, response, body) => {

            let reposArray = body.map(repo => new Repo(repo));
            callback(reposArray);

        })

    }
}