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

![Twitter homepaget](https://lh3.googleusercontent.com/M4crdSr9etduf6S-T2Dm-lRuJmY1wzVzT9PxTnPGsotnw_GweKBzrohmGfZbhtN0v9lVOjMGQ1U7V8N-_bfu2L-qRBqJ2ujKxyWsZHTH6EYxM2sYipghIIno84T3xTFAjhk2keuJqenlIj3ij73_CGJKWnRvcdY-WUlo5ck7SkjQCUSyBiBFaRsERTzA6_nSkbXWLOOc2k3HRYwHOQ5vf5lWilkb8Wi46esExotvKSb7noEXdxC7N3-75hbgwB6bZZUPvXTaFd2B2pIs3zqM8XtoOfYcqqHuro3ich1wY5BKpQLIwtq2VjdimgkUW5J_vgm8JufeI2M9x7JZvqw6voxH5IVZ_COnfaBuhXQCoMah_TjoaNvtKvgl6aEZ_ax0GkIaAHXJVBLR4MzsOigE1I_BSX9lsWz8UcMkgDMK1ddelYcEkzgVaNvrOHvOGPSx58-J_MffvvYJnALQyUntP3vF9WD6OdMkkk5C06WdvRx6bOFfG4rW1iayZmXa254_DovolVUkVV_4JClA4OxX0nFEVlVScxeWwpjIoKtqFMlGY0bx0zfrkXhzriMXCCqWfxNa_lOIQRvAd1MDRVz3V-Is-s4TKmBOX7KobvWc-Lb5CdAEt6xh4UYlVs_fycKRCcFoqatQelQ__aEONpFeTmeHTXMvz3d244OVs9SQHycqqXqeiSfTvH3VBsPIK23TWACmfJlcQ7OFhD5whth7_5o=w1688-h949-no?authuser=0)

1)Slidebar: Left handside
2)Feed: Middle
3)Widgets: Right handside

In the Feed, it is where show all tweets and user can type a message. This place is the main component we work with.

_______________________________________
With Slidebar, we can use Material UI icon via installing by `yarn add @material-ui/core`
- We create an Icon for app
- The following are other icon of options 
