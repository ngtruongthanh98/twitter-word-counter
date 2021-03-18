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

  ![SlidebarOption CSS](https://lh3.googleusercontent.com/zGSprX7Ttfms66DiyfLKWnpLMVX2QSDwp77Xdr9bHbpM1liOa8xZG8yInlxTSrkM-iQhoQBfmxKu1tCJCUcTHhwOn4RLNb2DAHrn5_bzTOJfBitwlmJs_HdNshmUfGSvQg8R-VOTNkUfnYYblQL4PjPaNo_QHEmiRqdoxacoKZwBB4UpGIS1paYeykuBgC4wn17nXzt8SgFNHG7FMBF9OzKTkywuoHytB7rCcetmDfDiRKN5rWcisW3sXHgcG6MQKL5xBnMJqlUylfO-aHjABOLp8clM44bBGDwOK3zLh2N4ZjYLrB-LgUehczzFObmSEv1xk0ValQIoIvOjKaBTZd5pwrjMKfuZ6ma9hn2evJxfK4zl2GWllgVVKmF387B_XnspdebxLH-1W8Kyw-9lbiIScT-sb_4B30552rlZTEvSczw0_ulqUblkrAuLbwX1Sj2N4PBeSTQqJ2dD_VbBOndW4YcQPIeZ2obWZKGoBXqFCb4P_DNp4nCm8n7kZ_gKSni1bZl-a38t8h2qcR-f1hSar9FjRPln2ooom7HNWKQVRdwx_rK16BvXyFp0UqvvHjhxT7w7vGonvKbxWOPv7uX3gQ-z8wIRPfS2PwkEPWRJtHpnvzJtq_aTvjR-NZsY80iOIEyNSfdUOvesKMfuAZwvTP5pGxBsoF6rLS_OaAepapQo46ofXTP3is6G-YtwS8esh_vqcyJfS9mHIQY1xvc=w1688-h949-no?authuser=0)

  In .slidebarOption, I used "display: flex" to display content and icon in one row. "align-item: center" is for the icon is in center of the content. "cursor: pointer" is for when the cursor mouse moves to the content or icon, it changes to the cursor.

  I also make the hover and change CSS of MuiSvgIcon-root and h2 tag. All color I put in App.css, and call colors via variables.

  With Tweet Button, I use the <Button> from Material UI. 
  ![Button Tweet](https://lh3.googleusercontent.com/5pQvix_nMY3QCDfJbRGyYZ8vCcbUrDaQi1lIcbh6b2kuu0VJek9sFnSeiVGEu0gIWCgpN7HMSgFGwPcyaAxlJ3sZZJTAgEwxzB5jNdRx84iH7Wd8DN1HEpcps-g3-kKmw69HzB27q71Kx9FRbE5fvw8_-IUrIc2EkgGETwkpRehEreuXnbPuu3Y_vwJMUbzl7YPrv6YBtfZJG6ctrS8yX-3L4IBo1HsHnlV_87nmrrfi_KP8NJA6S4GD-H6nsIGDJs3Ope_GxDssmpSL_gqwLl-uAzRQZG7WEh8QmPDRyxbAJBYyNGHdPf7cXmBg9Pk7_e_XjUvEuivfmIgLN2rsOvyBVfTkPnLMUxTC08EVAiMzocYmkx_C9QEnW7CE85LYy2B4nj_TbthfQgXhJQm4WsvpMYa0852xH8lzLTO9CTf3pD1bjIBoQr17eTp93qRaAbnya0O9D28NFxGd6619iLC9qQfXOLyIq79tJ46kAeB48a2aLjZGXE8K3EPV9HK7pYimWGm-WcZUfW9hHfAG_DjAjfQPjPhEYQcGfFfozIDjFDDrjjkSzU6_0O_PE2Y1owrf55xL88Eup59YqQGRuH4aL3zNm9v9Qc4LtGG-LckfJqv37QXHsBH01OJsUQg-xqwEVWytewp43sbnEqK-O9zkhqU3Z2n1YYcA0i9sCckMXf1uhcGHH7_pDMw19AayIgV-X4R9kIIGF22EeB2yuw8=w890-h501-no?authuser=0)

_______________________________________
Now we move on the next component, Feed

![NewsFeed](https://lh3.googleusercontent.com/tFa_2pv6pm-rm4LATC1WVXCfMZquUBK7jXsIGRLZLPwQtIdPmuyVtm23GUEnBlQYfTqkqJ6Oo9nTr8l7cP-uImgAmpkpq8vXt1RoNPwUrh4QAOEObDUCjAHAHW2nQvakP_h9Nptxw2oMkWiimXvlVmeLj_KbVo_VOnlJ1BiQZ_gRwGCWeIEvjIwk_T4peCHRhmNUHBa37NM90UYfax9RUQ1fXAN_EFldbnwviQecF9xqOzJKpJ24jvtkv2OehjSTaPWtVKujLpXGBOca3MaLpVrCZEGADKia3tSmvbb9v57yd8coUSdKU-jCIdOy4t1LMKUXejQu3bJVIc4JkdllDpiZRA1s1XeoIqgkDwHsxvTfhqnTgZ4aYdKNtgz_unia0Ufn7baOWGEaz6nL1mXE4ujbv68XFhkdK6OryGFvlw3vcI-Kisa-19hPa1G6NKxLfnteU8DXI51viCqr30KdGa9b2gy5esPeenoN-AOSQkhQ2Ppy5DjQ6jZvJj_t0VtR6KVXz2kj5DU7dmVEsHLegp6l0p9atJFZAw4KbZM00qKfKkbeV1vJ3upCUroB9VxRA6zRDrFPGNu_EA8G5HsV60XEKpQqaGRhYFcbnyjLrDILKaflLT9MPxFSJEUkNP9P99xjw5Pe8MdWWF7xhHSzoBRHuU5OS_FbRBU4ZAgFAs8x800CrGgnOdyl0L8oPpAa3MWGct9UnYFGVFas9o1gp0I=w890-h501-no?authuser=0)

As we see, there are 3 main components: header, message box and post.

- In App.js, after import Slidebar and Feed component, the Feed is below after the slidebar component. So, in App.js I change the attribute for .app to "display: flex". Then Feed and Slidebar is displayed in 2 columns. 
- In Slidebar.css I created this:
`
.slidebar {
    border-right: 1px solid var(--twitter-background);
}
`
to make a line separated 2 components, Slidebar and Feed.

![Change CSS Feed](https://lh3.googleusercontent.com/vVIDFIw8gX45Bgr_MPN0RCvjWyhIFU0b_iRBTeJ7Xb-MvUw304Db7chGuM2EXgFsnvoETvEOCn5VoeJAbYubWBH8x48gS4WYIric2Srm8Wuc6VEt0wAiCYO-fwZN1-led-S4R4v04K2IimdY1Ud2lUW6npGNopwp4d-wQLA8Ytdutgd8QEB7-S2vMw-E-zWUQOguWOybFQr7T_SWzIpiboezSlSh10PUFtQ_2gnWPj8Po7UhOBLl_TmyBszCXw1rAnBdLWsIa6ZubhfOzwyn-YYa_w0MEwM9Sv7qxcI3ueqTHvSURO7TRPero1Y_g_cC6YIYlnl6O1mNIZHDRSmATaiAATnV_gXVzHpgc3Oe6SXOfv2nkMrhQKxN32g38YA3p55tbXXCuLoL5GlyVCLUAC5hOnmhM_SpDke1O9ZG0Rm_qW5DQJgIgDukuuVrclLTWbP4rExdtoVfWSETruLH2HAL0iMv_iiX6UL4NmkaSnbKXsOg2LD0in_FA50rTYj83yr_PmlGcWPJsv08-y2t8PP7y637CJrheS6mMOJRu1OYiINXRN1i8JeqW2mDLdXZ5UXH6gHk17WjRp7IhaELqUAbjZQHxrBZu_fEM2cQFv6TPnBvAEuCuzWOknxokXT4ORJv3olZ1ctFdr7lm-4anS1swAeuQD56FCIf5ZuJvVMHgA8QZFJ4H1_8-CRlaXzlpDs0DpnbwRdQgfHb2zBCyb4=w890-h501-no?authuser=0)

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

[Code](https://lh3.googleusercontent.com/RLz8juLyqK6GgWBL4mw3F1RQa9aeT_GGgsnwDx19-UVcKd3M6zlCfS-rnYj3D4fsC6OZ4hq9u88faQXJqZ3_myUkVcXYaeuLfuPaGloMCkVKvpKtH88b6CpixQrGR6C9Hnw1gw9Pj6dz8vtcsrWj0IzjT8dhyU0_tiXBb0ZRi_zHkM-YvqrG2XMGI8VDThVi5Jom6VIyP8MECoIZM2m4d0HaR61c7n6UlprVIZZrKni7dxwxJo8S0rtKJ9rCtVyW9qA2VhfqQpgQAQqznIkfBhG2wdfE8Hji-gioqRuZybxGoWK-TyEUzlNXRmRQJAK0fiR12xmotQ_Td7YsV8nbLcSZ1DfMY7XnRhtekrOes6qr13QzwCk3MZVbRPeWxZCKyia9I61opJLtXPupfnYDr_1VfRrDn9RyNVd0hKrA5IQE4HA7TXj4CEQfc4IcEyAHGIbeWiLG2maOPDl1NgtIz3e9aXrY7LwYZAdZMddXu1O1ui53pQpU4I-cyQ2xJmWY5byrKxGANVxrRa3ug0DzWJrip-8Y5lNcgKGaQ_PQpCeW7xv87MECqjpKzzrmBd8i2mk3e1V3fzvcFjl0crTYBIw-SidcNOn2pq4AB5m5lkIeW4BC1ajcku7J82A_bMS9Obf9hkfT41BcBkyXNck5CcvEJK_aBHCuOsi2NqMYqVgdjEc1P5zzujRoBpyJ1xToiZSBajKD3tRP7J1iRo0q2R8=w907-h511-no?authuser=0)
