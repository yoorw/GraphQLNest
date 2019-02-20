import { Module } from "@nestjs/common";
import { AuthorsService } from "./authors.service";
import { AuthorResolver } from "./authors.resolvers";

@Module({
    // imports: [PostsModule],
    providers: [AuthorsService, AuthorResolver],
})
export class AuthorsModule {}