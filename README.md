# HW_Scraper
In this assignment I created a web app that lets users leave comments on the latest news scraped from BuzzFeedNews using Mongoose and Cheerio.

## Live Link (Heroku)
- http://herokuapp.com/

## Technologies Used
- express
- express-handlebars
- mongoose
- body-parser
- cheerio
- request

## Code Explaination
- Whenever a user visits the site, the app will scrape stories from BuzzFeedNews.
- I used Cheerio to grab the site content and Mongoose to save it to my MongoDB database.
- All users can leave comments on the stories collected. They can also delete whatever comments they want removed. All stored comments are also visible to every user.

## Screenshot
<img width="1161" alt="screen shot 2017-06-08 at 3 43 44 pm" src="https://user-images.githubusercontent.com/22460545/26954121-19a70722-4c63-11e7-81a9-1b4ca3473a55.png">
