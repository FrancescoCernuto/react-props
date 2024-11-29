import Filter from "./Filter";
import Card from "./Card";

import { posts } from "../data/posts";

const tagsList = [];
posts.map((post, i) => {
    post.tags.map((tag) => {
        if (!tagsList.includes(tag)) tagsList.push(tag);
    });
});
console.log(tagsList);
