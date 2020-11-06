// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const CommentsScraper = require("yt-comment-scraper");
const ytcomments = new CommentsScraper();

export default async (req, res) => {
  const videoId = req.query.video;

  try {
    const data = await ytcomments.scrape_all_youtube_comments(videoId);
    const doesNotHasReply = data.filter(
      comment => comment.hasReplies == false
    );

    res.statusCode = 200;
    return res.json(doesNotHasReply);
  } catch (error) {
    res.statusCode = 500;
    console.log(error)
    return res.json(error);
  }
};
