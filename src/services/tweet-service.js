import { TweetRepository} from '../repository/index.js'

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
    }

    async create(data) {
        console.log(data);
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g)
                        .map((tag) => tag.substring(1).toLowerCase()); // this regex extracts hashtags
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        return tweet;
    }

    async get(tweetId) {
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }
}

module.exports=TweetService;

/*
    this is my #first #tweet . I am really #excited
*/