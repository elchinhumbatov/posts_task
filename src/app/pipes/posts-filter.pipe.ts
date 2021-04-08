import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postsFilter'
})
export class PostsFilterPipe implements PipeTransform {

  transform(posts, search, title, body): [] {
    if (!posts || !search) {
      return posts;
    }
    if ((title && body) || (!title && !body)) {
      return posts = posts.filter(item => {
        return item.title.concat(item.body).toLowerCase().includes(search.toLowerCase());
      });
    }
    else if (title && !body) {
      return posts = posts.filter(item => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
    }
    else if (body && !title) {
      return posts = posts.filter(item => {
        return item.body.toLowerCase().includes(search.toLowerCase());
      });
    }
  }

}
