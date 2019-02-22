import { Injectable } from '@nestjs/common';
import { Post } from '../graphql.schema';

@Injectable()
export class PostsService {
    private readonly posts: 
    Post[] = [{
        id: 1,
        title: 'C.R.E.A.M',
        votes: 100
    }];

    findAll(): Post[] {
        return this.posts;
    }   
}