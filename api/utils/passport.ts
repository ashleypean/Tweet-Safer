import passport from 'passport';
import TwitterStrategy from 'passport-twitter';

const twitterStrategy = new TwitterStrategy.Strategy(
  {
    consumerKey: process.env.TWITTER_API_KEY,
    consumerSecret: process.env.TWITTER_API_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
  },
  (token, tokenSecret, profile, done) => {
    console.log(token, tokenSecret, profile);
    // User.findOrCreate({ twitterId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
);

passport.use(twitterStrategy);