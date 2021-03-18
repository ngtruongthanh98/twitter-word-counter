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
With Slidebar, we can use Material UI icon via installing by `yarn add @material-ui/core` then `yarn add @material-ui/icons`
- We create an Icon for app
- The following are other icon of options 
- In SlidebarOption, we use function compoent to send text, Icon to Slidebar via props. As we see, the structure of every component is the same, the differences are about the contents and Icons

I gived data of the content into each SlidebarOption, as the following picture:

 ![SlidebarOption](https://lh3.googleusercontent.com/czvOFBRCIezFvzZnk7lw1CGPYky13h__ajdaJcB1VVqxfk8lssxDpWDDYuq4wINtYPASgy4_crOqwQNz7iftHftf19F1ih-h5uXo1NYvzpTJ4ns-gEY3RFt8K8lwJ2nxF7u7DoS52OTPveU1aBDo4grSt7WvgZPng3WpuoX0DEYd2kl08MpqVK5Cj7Dw9G2b_6rhyD01apf-Qpk3c1vDge7HJcwM2M2E85WBzLD5ABaN3jCl8YscBCp144DE085re5F2mvuk6hk9B3fhTkTvpOcmFwpEm3Y8FG8QNGZhtu34NS0kIYqDHk-_LCtTExAFa0itSGs7UtYpWYAopTZ8qrv_Lqut69nizyWmK7lWpoptfq99ppmGEBd60jfWm_hvZi8B1HwhxBT6lXZ_R_aF6dbT0i4BnCm4I_hUM5CvVjUY6ba-1u9ZcDW-lokEphU_qyCh1BXl48vc88ml4wytPSoid-CHVpCtZPE6dEZLxZax3TWqNNUaKlb3QMNhT5-kt4Tqj6Sy8Goyn9Ob8qVJQqX1parXI3JWXVjARqPob92UOpAq5HgPL0klEDiEDkS4AWBtxd7CRUTs_HP6axz5SVjNjX_Slf5sflTlpMO8gtxTcgTVh_htyZf4qK1oB5T24A-Gg8S1ofkx4aAwFwp-_zvIL03w3WKlxYZyl33Rro8npAkjuABMpUX7FbkpZlauJ5RXwYMhbCdjwc04fJm__2U=w1688-h949-no?authuser=0)

 About Tweet button, I will do it later

 ![Tweet button](https://lh3.googleusercontent.com/y8w8lWFfUVdnV3aU6XlLnHvadmkODgl5rdSpS_pk1qPnrSN9GV3bNsEcl4EtRUY_14-IVCCktyuJ8Afj-cGhjQl5hMoMXa-RivghP3DUH910S2ZSIYPKjpb1o_K-sDUIf430R82IkF3LXou1ZpIPJ7KPJoJChNLutkmEZR8EXk3XLXMKODbEB60vFsenv_HK2PkWH8FjeY9w17d5BeHibM_Z3PrVLPsrSMW0gRE7e4vH5FbH45WCFTbBU-fodAUwd3Jn_1r4SwtHgBbgfUN7orfiJE_Ul-4mcTmuF7_iUJc-tRxfAlGeYf89r2w8Tx62R4I3pQxOFSVAN0VeIzBUqcmJze4EvWemvw0bl9z-j4FD4iPts_JFFiYh1DsCuA2LiHva-pW2_BnRm8QpISFqdSYmkMpP8jf-yScgRMZWvNHIUU3_5EjZWiqEzapzYY3dDuslcCzLAsDuYJRF5ptbMWlA9H6XBPiAH335H87sbwqNGznJiRpfNQvtSACTLukDVRaYBxbc4F1tz2NLULDd7mZ0DK1ZVPURcj26YqqcW0cZCF1I3sJZV1loPFYhn64e6pt5_2AGvc8fc2JSKIn8H39iMZGZlIqPbvNSdkLT4LwgVEMl1kRPGAhT3YCpfpoRt1tmsn9ywBuFA3PF9_jIz81hsljhyAAYf5Vi9oDL5TRjWMdQglYEwwFs6x9o5tW9tSASsw8J9hGtj39N9e8E3dI=w1688-h949-no?authuser=0)

 I props Icons into SlidebarOption:
  ![Icons](https://lh3.googleusercontent.com/zN5RsnzBiFa7iHeKCLuqcGuZu4D9_hppZrjldQuYEd0BDwsST18JsI7gKpeaMrWvX9ujSlnnTkTVezYK6EKx0TPxcHA611cZ6Q0KpyKt-jqXZfDLDV3D6OR4n92-TIjXCjsCJGBoytDJhhuvVmukmMpy3x1EGwq2zT24mSYhoxMZienxgALMlVQqCUS-7CZIGI5-ZWKFgY2EvqHCJlcpEppjH7JpiVnzOfQeIDEziSDqs7gTtj5FTZIkfMKhnLBcwY9_YU6-hZPS_01thbxsK9qRCjiev1FSr2em3qve-Y9ieGs1UKF87CppybPn5ecbauP-YOBAmL6wF8FlKoFfJLUfnaOeNH2vrwWF-DH4oZBk-XuK7Kh_cU7QHvH-Rrr4-AIdNwzBYVN6BPXDVMsXGh8VLeD2VSC06485hGrUUMlS0np-cFq9zH1akG5tzmlQgpnQa0a2AKyj4FpU0BaGXeBbKO911KsIw_cncLsf4tkry5YSu7oR5YsznqmK95e8Dl9G29mLDBuHtpaD3nSI90uwMC2bjUgLWqPNquM1QQydGgbFI2jp3u6G_DrD8rcayusOu615C11Z31PO8HmjRQ121DWWNSbgIhRCVNPN81gEufZQD4pNO8fCvru79SBA9GRoAa19Gov7ZWwFDNp8wNc2wZu5bzBA3JjBK5BqK6s4LZwdAfDCnrSX9xGsooZEGYooe7u8tNBaNy3ZFJ1RuFY=w1688-h949-no?authuser=0)