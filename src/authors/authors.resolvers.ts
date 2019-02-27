import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { ParseIntPipe } from '@nestjs/common';
import { Author } from '../graphql.schema';
import { PostsService } from './posts.service';

@Resolver('Author')
export class AuthorResolver {
    constructor(
        private readonly authorsService: AuthorsService, 
        private readonly postsService: PostsService,
    ) {}

    //// Online Example does not work
    // @Query()
    // async author(@Args('id') id: number) {
    //     return await this.authorsService.findOneById(id);
    // }

    //// Online Example does not work
    // @Query('author')
    // async getAuthor(@Args('id') id: number) {
    //     return await this.authorsService.findOneById(id);
    // }

    // Following Cat Example does work
    @Query('author')
    async findOneById(
        @Args('id', ParseIntPipe)
        id: number,
    ): Promise<Author> {
        return await this.authorsService.findOneById(id);
    }

    // // Online Example does not work
    // @Mutation()
    // async createAuthor(@Args('authorId') authorId: number) {
    //     return await this.authorsService.createAuthor({ id: authorId });
    // }

    // @Mutation('createAuthor')
    // async create(@Args('createAuthorInput') args: CreateAuthorDto)

    @ResolveProperty('posts')
    async getPosts(
        @Parent() Author) {
        const { id } = Author.id;
        return await this.postsService.findAll({ authorId: id });
        // return await this.postsService.findAll();
    }

}