import { Injectable, ParseIntPipe } from '@nestjs/common';
import { Posts } from '../graphql.schema';
import { Args } from '@nestjs/graphql';

@Injectable()
export class PostsService {
    private readonly posts
    : 
    Posts[] = [{
        id: 1,
        title: 'C.R.E.A.M',
        votes: 100,
        authorId: 1
        // author: {
        //     id: 2,
        //     firstName: 'Dennis',
        //     lastName: 'Cole',
        //     email: 'ghostface@wutang.com',
        // }
    }];

    getPostsByAuthorId(authorId: number): Promise<Posts[]> {
        let result = this.posts.filter((post) => post.authorId = authorId)
        return Promise.resolve(result); 
    }

    upvoteById(postId: number): Promise<Posts> {
        let result = this.posts.filter((post) => post.id = postId)
        let votes = result[0].votes;
        result[0].votes = result[0].votes + 1;
        return Promise.resolve(result[0]); 
    }



    // findAll( 
    //     // @Args('authorId', ParseIntPipe) 
    //     authorId: number 
    // ): Promise<Post[]> {
    //     let result = this.posts;
    //     result = result.filter(posts => posts.author.id === authorId);
    //     return Promise.resolve(result);
    //     }
        
        
//  // getSourceById( _sourceID: string ):
//     getSourceById():
//     Promise<Source> {
//         return Promise.resolve({sourceName: SourceName.NESSUS})
//     }
// }


// getIssues(issueStatus: IssueStatus, ogNames: OGName[], sortBy: string): Promise<Issue[]> {
//     const logger = new Logger('getIssues');
//     let result = this.issues;
//     if (issueStatus !== IssueStatus.ALL) {
//       result = result.filter(x => x.status === issueStatus);
//     }

//     if (ogNames.indexOf(OGName.ALL) === -1) {
//       result = result.filter(x => ogNames.indexOf(x.og) > -1);
//     }

//     return Promise.resolve(result);
//   }


}