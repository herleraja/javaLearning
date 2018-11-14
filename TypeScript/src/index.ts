import { Person } from './classes';
import { GithubApiService } from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';
import * as _ from 'lodash';

/*
<--To import type defination and save as deve dependency-->
npm install @types/lodash --save-dev  
npm install @types/request --save-dev 


/*
import * as _ from 'lodash';
var anArray = [1, 2, 6, 3, 7, 4];
console.log(_.reverse(anArray));
*/

let aGithubApiService = new GithubApiService();

//console.log(process.argv);
//let userName = process.argv

if (process.argv.length < 3) {
    console.log("Please pass the username as an argument \n Example: npm start herleraja \n");

}
else {
    let userName = process.argv[2];  // because 3rd argument contain my commandline argument.
    aGithubApiService.getUserInfo(userName, (user: User) => {
        aGithubApiService.getRepos(userName, (repos: Repo[]) => {
            //let sortedRepos = _.sortBy(repos, [(repo:Repo)=> repo.size]);
            // let sortedRepos = _.sortBy(repos, ['size']);
            let sortedRepos = _.orderBy(repos, 'size', 'desc');
            let takeTopTwoRepos = _.take(repos, 2)
            user.repos = takeTopTwoRepos;
            console.log(user);
        });
    });

}



