# twitter-word-counter
Implement Twitter's word counter UI (see attached image).

![Twitter's work counter](https://gist.githubusercontent.com/huygn/ceda027d1f679ba2a99a2630815e5ff7/raw/d860a2917372c8f155e9a2c20161d9076e4b8340/image.jpg)

After clone the repository, you must run:

### `yarn install` 

In the project directory, you can run:

### `yarn start`

_______________________________________
## Requirements

1. Create a Web application that serves above Tweeter interface. It will support the following functionality:

    1. Allow the user to input and send messages.
    1. Display the user's messages.
    1. Word counter should change in react to word counts.
    1. If a user's input is less than or equal to `50` characters, post it as-is.
    1. If a user's input is near `50` characters (.eg `40` characters), make the counter turns **yellow** and display remaining allowed characters
    1. If a user's input is greater than `50` characters, make the counter turns **red** and display over-typed word count
      - (Bonus) display over-typed words with a semi-red overlay, as shown in the last picture

2. The business logic (a.k.a. the word counter) should be unit tested. We have to know it works, right?
3. The submission should be a git repository. In the project directory, `git log` should show your commits.
4. Bonus points for any additional polish and sophistication you add to the experience.

## Expectations - What are we looking for?

- We want to see how you create a new project and what technologies you decide to you use. A good project will be cleanly structured, will only contain the dependencies it needs (if any), and will be well-documented and well-tested. What matters is not the technologies you use, but the reasons for your decisions. Bonus points will be given for demonstrating knowledge of modern Javascript techniques and best practices.
- The most critical part of this assignment is the word calculating functionality; so this should be in plain Javascript without the use of libraries. The rest of the application may make use of utility libraries and frameworks.
_______________________________________

At the Twitter homepage, there are 3 main parts

![Twitter homepage](https://i.imgur.com/mH8qYUS.png)

1)Slidebar: Left handside
2)Feed: Middle
3)Widgets: Right handside

In the Feed, it is where show all tweets and user can type a message. This place is the main component we work with.

_______________________________________
With Slidebar, we can use Material UI icon via installing by `yarn add @material-ui/core` then `yarn add @material-ui/icons`
- We create an Icon for app
- The following are other icon of options 
- In SlidebarOption, we use function compoent to send text, Icon to Slidebar via props. As we see, the structure of every component is the same, the differences are about the contents and Icons

I gived data of the content into each SlidebarOption, as the following picture:

 ![SlidebarOption](https://i.imgur.com/bWr86me.png)

 About Tweet button, I will do it later

 ![Tweet button](https://i.imgur.com/liJfTC0.png)

 I props Icons into SlidebarOption:
  ![Icons](https://i.imgur.com/bWr86me.png)

  ![SlidebarOption CSS](https://i.imgur.com/YFWWOa7.png)

  In .slidebarOption, I used "display: flex" to display content and icon in one row. "align-item: center" is for the icon is in center of the content. "cursor: pointer" is for when the cursor mouse moves to the content or icon, it changes to the cursor.

  I also make the hover and change CSS of MuiSvgIcon-root and h2 tag. All color I put in App.css, and call colors via variables.

  With Tweet Button, I use the <Button> from Material UI. 
  
_______________________________________
Now we move on the next component, Feed

![NewsFeed](https://i.imgur.com/M6Y4SCR.png)

As we see, there are 3 main components: header, message box and post.

- In App.js, after import Slidebar and Feed component, the Feed is below after the slidebar component. So, in App.js I change the attribute for .app to "display: flex". Then Feed and Slidebar is displayed in 2 columns. 
- In Slidebar.css I created this:
`
.slidebar {
    border-right: 1px solid var(--twitter-background);
}
`
to make a line separated 2 components, Slidebar and Feed.


In App.css I change CSS code with:
`.app {
    display: flex;
    height: 100vh;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 10px;
}`

to margin Slidebar and Feed. I also create a class `slidebar__twitterIcon` in Slidebar.css for the Twitter Icon:
`.slidebar__twitterIcon {
    color: var(--twitter-color);
    font-size: 30px im !important;
    padding-left: 20px;
    padding-bottom: 20px;
}`

We add Widgets component to App.js
As you see, we can scroll down in News Feed of Twitter, so we make this attribute to our app.


In Feed component, we create a component (TweetBox) for containing messages. I divide into avatar part, input for typing word and other buttons including tweet button.

In TweetBox:
I continue create component for Post, including avatar, username, a check of verification, content, image,...

_______________________________________
For Widget, firstly, we install `https://yarn.pm/react-twitter-embed`

There is a library for Twitter, I create a structure for Widget component:

![Widget Component](https://i.imgur.com/FSAe9sp.png)

CSS:
![CSS Widget](https://i.imgur.com/oXbXfHV.png)

There is the result:
![Homepage with Widget](https://i.imgur.com/ojOyupo.png)

_______________________________________
For postting new tweet, I need a database to hold the data. I choose Firebase `https://firebase.google.com/`

Create project and create app

![Firebase](https://i.imgur.com/nXvzxXF.png)

- After creating new project, new app, you must install Firebase via `yarn add firebase-tools`
- Go to project setting:

![Project Setting](https://i.imgur.com/EbX6hOw.png)

- Create firebase.js and copy paste all config into the file.

![Config Firebase](https://i.imgur.com/nt8GRIe.png)

- Go to the terminal, `yarn add firebase`
- Go back to firebase website, create database:
![Create database](https://i.imgur.com/oS8uLXN.png)

![Create database](https://i.imgur.com/zuoukeT.png)



- Create a collection follow the data:
![Collection](blob:https://imgur.com/37e516da-cd28-467d-b7d4-67211eedc371)

- After creating successfully:
![Collection](https://i.imgur.com/yNdfYuG.png)

_______________________________________
Now I start to make the word counter