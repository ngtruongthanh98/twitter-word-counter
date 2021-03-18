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

![Twitter homepage](https://lh3.googleusercontent.com/01Cz8C7ZBp6USRXf-Ge_WAfdYhW72VLRd-P86OH-lTtz49etSj9Q9JwYyyT_7L6NOyLL2cO_sDjGLraHyQxqoDwSKn_BepQo_j0wTPWg7LCGmIq4j_AdJcoH_3SL4UVoFxgBpvnwQyp6t52m5QMgzGj6O_5139uMnh_iFrIzity76PISfi6Sl7R7sVb73e9J9txq-FH6V9qPOtqXtO25pIpVzgaXZsLiKZLD1N4-Mx5NqHjto4gh9FtS0khxcC9jPfJHmO7-iGQnKrm6IvyW_sgQBgCkAHXuPJCLP_wZHwQLaR4mKaGsP-SnQP9qMuaFaErkuGZHPdW0RpKQ05_N_xQW43SUTU3IxioqPusQcI9vvXmd3ta8qkRuRY6MqmL1P9lgcQspJvyeYrxZFQCuynsiIuOk38g3V8rzZjeR3GXxXO3pTc_rnP4V75Z7sibK3xn7NOMjfyv9efFYFad3YbU2W6s9ZZRN3RRtNUF3ejEhz0XYVEJuTmX7ou6BE7MhNy8Rcb519Yf25X72LyvivRHfBUJ_PoJxwC5NNnbNNqhJTDqHsdSXZHccc5kxslN6K6uEsheJ9rohEaJoZbLG60K4mdnLS-IgDU5U9hm2fujkUUtay_c5-QeVrBDW9DamYqS21kY4cZca8ERNVkfCQcjVxj68avvO8cQMUZo7Vmv6ne18190yqnF54QGwM0xI_-W2AHddpPAC---AgbMoZWc=w1688-h949-no?authuser=0)

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

 ![SlidebarOption](https://lh3.googleusercontent.com/cJDPtThFNOKCJWycxxA6VDOJXXzqlTk_Lm-JzcXbXDzEc92YBmz9x7eZhCiV-aNaYj-T9FRs_oDJduzoGc1Nx0CW8CJDBI8XrxvwzQVcjMTxXNUBoyziWlczneOkwLL8QaMn6u0UBLRRUWTJTzhA0zTc-McLpIXr3Q1gp1qd3gDV1833rWdwqY95AQ7tiDIthfmHJ3ucgcdOrNJ3qOPXAtGRNm4Cqkv4A9uMjAa0iMAhhp2A08UZTadbG5kfV-QoIfyDrF4axzC5N3LSJU-cGtqFgIYUb1af0V8Oj2rDjIz7yl7BLQrr654p9zP1KE9y1wm800P4eJdxeR2s25ZxOV8xFihFouC9cwjAmT4iIKAiSCvWrlvhHSw-K3Q4YMtKBf0BovsluKHA3WMxesH3gOYX-dpHxkGzWnN_KzEzCjTF4JleP6DCTUBOZmmuJJO8WKQ467AMoBeJIpx37ygntm8NcdCTAeQjugz7wzEW3qaL29utLTFs-2wMahGNQOFFrb2IIUXY8N84Z00vNREDAHw3vnDcu2zpt6jtCSsWds8OAuTq0wb-PqdtB2L5DihGXK-IPB8RhIzRJ0QrpCkn0ZNJdDiuTTKbuoH37kM-N5Jq96Y6MAugvkvRQoVjM1ly7Akjpu-rfSaYkARL7QnBJi2leQUwIOBkXl5BKIWRPBd4uocGahcU_PkR-NpCtErRggwJfF6UmwRu78-HnExBFkE=w1688-h949-no?authuser=0)

 About Tweet button, I will do it later

 ![Tweet button](https://lh3.googleusercontent.com/y8w8lWFfUVdnV3aU6XlLnHvadmkODgl5rdSpS_pk1qPnrSN9GV3bNsEcl4EtRUY_14-IVCCktyuJ8Afj-cGhjQl5hMoMXa-RivghP3DUH910S2ZSIYPKjpb1o_K-sDUIf430R82IkF3LXou1ZpIPJ7KPJoJChNLutkmEZR8EXk3XLXMKODbEB60vFsenv_HK2PkWH8FjeY9w17d5BeHibM_Z3PrVLPsrSMW0gRE7e4vH5FbH45WCFTbBU-fodAUwd3Jn_1r4SwtHgBbgfUN7orfiJE_Ul-4mcTmuF7_iUJc-tRxfAlGeYf89r2w8Tx62R4I3pQxOFSVAN0VeIzBUqcmJze4EvWemvw0bl9z-j4FD4iPts_JFFiYh1DsCuA2LiHva-pW2_BnRm8QpISFqdSYmkMpP8jf-yScgRMZWvNHIUU3_5EjZWiqEzapzYY3dDuslcCzLAsDuYJRF5ptbMWlA9H6XBPiAH335H87sbwqNGznJiRpfNQvtSACTLukDVRaYBxbc4F1tz2NLULDd7mZ0DK1ZVPURcj26YqqcW0cZCF1I3sJZV1loPFYhn64e6pt5_2AGvc8fc2JSKIn8H39iMZGZlIqPbvNSdkLT4LwgVEMl1kRPGAhT3YCpfpoRt1tmsn9ywBuFA3PF9_jIz81hsljhyAAYf5Vi9oDL5TRjWMdQglYEwwFs6x9o5tW9tSASsw8J9hGtj39N9e8E3dI=w1688-h949-no?authuser=0)

 I props Icons into SlidebarOption:
  ![Icons](https://lh3.googleusercontent.com/Qg_KO1a3zvCqcpMuzMkWSzeilrypIMAfFPN3FlMWPoqAYo58zy4Dralw6q4SpVVPf1yOtJTMjZ6VmSSwD2lZZEgQi3iJ5siqCSo_cw_P4_uIFFT66MIosSgqb9zbmBU2ID3tvvKH6j_mIQ7KrIf43QqgcVYZ927AfvY4NFJCp_sQAETqLU2mPYRbxTNhbmZgt7upcaarrhmb6qga9LhOlIxZkViCt5PVvYABq0ugTYF6rk7ceMSz8LmZdeEBj7Zf1Ky1hdaHQONw1OVHgy5gQ-YOOK5IRp1mevJBtk-04jjdgJYa9fWUr4nmP6LxRkUgkjun7wtTGrMWjl4Pfvk-fyQj2hafI3mf4kGqLZoUClqXsUM89BVO549PjkxrzqniF38q2e7GlAZbUVR60zzZEuTmJd72DY_LjwtA8tod2QoeO-LRhx9o6VnHWFNG6So9_ehm__lNTf_64ZAtJGOG9zx6469G04-BhFiH92yozBmTNjEtBNGCudgHYoWonZ8wkvLDgzqzIhYql-Q7_jOIXh_TvS2ESNnMEFGG7a1v8PPpLkcQAdgGb6F5MZEXNurn_NZaB_jPQ75Va3A4SFBTesDKApFSwI9mQOb5LUX-2D3KpRp6Yr3ssGuzRyEWpzmFz3_uaJlXBwP4GcW1hvkHaRZchgz7IvKL8VcQjruSnq9F7_oeuc_77e2GQbJ0HUkPF5FijKD26viiafmw6joIPDM=w1688-h949-no?authuser=0)

  ![SlidebarOption CSS](https://lh3.googleusercontent.com/TaUbBEvCowz--yrpUIWolhJ393f1TDLWEelx1Bzklx30-qdSh6DpS3iAAF7zJ-S9reP5AQBMuzGlovDu-WsnUPRc0g2tZ46nQhuMsz1JVxmZNaqVg31-abiwDLgyKU4FsXMGDIhgsgdg6B6IFt_8556X8K3-37QYsznmrdXL2a4H5eEbE6RijMHyxcH2SwXmmPssMzrhpEDOUq9OLY3JOK9YvXTXP6lnY2GFb2ysUnt-XzcTCYQQ2OSr04avjJoWZN1wjmBUT0SOH9T9nX-GqlCApYgTVuHkdKA-oqshsPF0TPriKaUhLzRLb5U9csOCWorYtqxoqxarq3AWCaAE8xeWkrSev-MK0CiKgedgmtYe83gcAejwSYbJ2ZVmaBYC3-yqRyCBn1GGEm8wWcuEjZ4vO4HpMgrPFIZJP8q8h6b1ExFbErP_i3_62_SZ5miYJCVCR8bi9nm7yjlF4hA5VCudCb-U2PBvQ8QQMWMMQ04q_maL0HqXNEX7I77P-LEEQaH1OuirGR2kGvHrZVZMb8gXNsomehW5JbNNEeqNoNEPHdtefiiWvSY-n2na_-FBCH1VLM29Yr7X-2tn1Nth-IUWEsCM4lVEF40bT37k1o6G6b-6Fx-q9mog2JqaOMq_M_l16wKuSACSbh0e4uZrG4kh038rwCGfYYcIPnDIR4kTVazV8jf00PyYveHq59PQIfw0S0b34No01Z9KZlxh2IQ=w1688-h949-no?authuser=0)

  In .slidebarOption, I used "display: flex" to display content and icon in one row. "align-item: center" is for the icon is in center of the content. "cursor: pointer" is for when the cursor mouse moves to the content or icon, it changes to the cursor.

  I also make the hover and change CSS of MuiSvgIcon-root and h2 tag. All color I put in App.css, and call colors via variables.

  With Tweet Button, I use the <Button> from Material UI. 
  ![Button Tweet](https://lh3.googleusercontent.com/Ze9XCaAmUewNZFUvJIE3Ves-gdba-rIp5Nx3H90KMqX_X18i0Ext3cuv9Wgru-BlnAeUu5lT-5Ng65kYRAJoi5ZEjef1ugGMdyEXUqlRWG3ek4qeKfLCKPtIZf2k53wLP61kFlTSixAF8kGiJ9t-Ow8gcXjwET0cQcGXEmjRjwePMwzhf8BcpBiX3yHH8A3GO778uimbnw1olkcfZzVoW72TgObEP-Y-SX-PKGwtL781p_25wn483qc2x-5fN2wwkGk-dF4EyNh3q6NLyiC4su6Oeer_rsIgT3DxvRrtrbZhMklA8rEHktIeio5Q3HVUoqBohSo95M2gntDt3XQtSNHTe_KKuSCrFfGPw7C90Ri_Z-UQMyTtXTDuHKuJ9lOXMMWJL8ytGyJMXrssNIgqSkjX6RoHcdMEK29c_0-ZogVZyJctSl1rdwfW1mLWo65lzZ9MmsnJWTw_Gj1_jHhSuMmj0jkPnIhQjJ4leVMJrVexaHavjl7mAlHoma6EMC_GYay2qOuv93b9QgGd-SkEVqRKg4GLhcnytp9I8Ed1vPDmK3B9x7YBTYuSv4aTf7c_gTwsZXtgztLThckWcxK2vtisuzycfnJMD2W6P4RXEMLUC9S6IEDrwEDw8hJ59X1IyfBFbICsClp6Db-Ba9hEusc8IGgSvTnDC5hDf91thvScyvHyUAxqUxQzbG2cMXl1V2b1YUK4pT1_aLJNJaowJ0w=w1688-h949-no?authuser=0)

_______________________________________
Now we move on the next component, Feed

![NewsFeed](https://lh3.googleusercontent.com/iQf2NAyNNRLgSu946UgxgtYd4D9kHVvsm2T30yUa-tCCSkyS1Dm_ngjRCpk6UZVZfAfZf3m4qjC_VOPp1Wb6O425qK4sAekiZhDsEC8eY7lRnNw_KUYryNBlbrgA2Xul4o6KV7UQRrzuKl6BMVbF2osan8pnUZ34n1lgYvJxFFDfbyk0GUCn54CnphQEwXlh-KJK9aUfAFob_PxXiU7xonje5LSCtm3bVsf0hR-mwlDXZSRun9EPyUzstC1o_W2ZVDsMRh8JNs3JAKeTL27VMoGGd-WZHXj1utNZ80yMSQ6fMVsk4-QvQeXnU5-mJBwTRxrGYrCknQcB--FbsFMPvdiKQlA9BX5aCtx0Tf7zDg9Y72PN4D0dMTDIRfV6Ge60bygYs7u9xybTwysp-MWGTzMk9A8N7wevU9QUMQmq5TIvkfrs5v6z65vIdUHwgMOaksYzqPgpnGJMQ-ecRChLW5WQqGiIdmWawByxVEh94rNWH-l5_-fGbPEXBMNkIu0eidSFoGsIQsBgzxf1oZEKpwFHMmbBo_1BOYvR7NsPJHHqI-9w367OO-OuvIFpWn3buNFq61EsswWCyFYQAJ5ztzG2YlaxWvfoYm7EKcgncdOwfEGptwMyPr4iUYSP0EQyjl-HZJtvRo6HZoryMHzK40o0o24Wri8d43LcsbGJ00m6C5PPKNuOdj6UFx3uU-gquVmPx1NO_-j5wlSnN8bcFFI=w1688-h949-no?authuser=0)

As we see, there are 3 main components: header, message box and post.

- In App.js, after import Slidebar and Feed component, the Feed is below after the slidebar component. So, in App.js I change the attribute for .app to "display: flex". Then Feed and Slidebar is displayed in 2 columns. 
- In Slidebar.css I created this:
`
.slidebar {
    border-right: 1px solid var(--twitter-background);
}
`
to make a line separated 2 components, Slidebar and Feed.

![Change CSS Feed](https://lh3.googleusercontent.com/QJQJnpgl1sMPS4Jopk62tgNxq1yyTqVUMs7_58etEJomXoNZj5CF0bRdjFUFaCwUlojaiH2hJsfG4mSNGd3aXuK0cMk66aBPwsj6Qy99puVnBIKdDpZftdzGmb_GkEdB_KaRvFvn8GW13fUaPppxKJsHJHXIxUOcqGacPn7xodMrQJD6Oip7LKuplKSbacOLFSR1Pi4VUQT-M9vn5V8pLO4JKpQsDdoDfBxZNWKDkQfVtdNcFmUWopaLDMuOXQj-0RpF8_etlXjBiNV4lMuGNXbB8zpCrcaLTJHLF5kxac4rV54cY32TLnceUtsPwgylM_pSGYPy3Xsx5hVNdG6U1LheC0HhP3oHhu0OM38q_xmKFRZdleeJvjCt7iyb73gBRjzQJIbCC1dZjcrzQ6An1OIsMdKg2U4G30naUi7XHH3__8KjThAnmrm2bw7AICu9jPMMZv6Pt82uqqxbhPd55leHjj4Tbp2SpxSPfXHqIm2FB9XahWboBHNLqD8P2AUiYF3z4Ul8gsJpTy4Xj7xhrnnKI5qavjrOD97JfERS0YBhFIuzWu9G-cCObS5pvkCUlr2G20TaHa-PEVRwxM-wUYWgG6uWVMf0VE7qhgU-uobkFnsA2_BCS1n7MsxeQRKNzzK2NaprTE6SaSo8a7U22bUq11ZwtJE7ryZIxgbOgyhKT6Y9S9Bj3LDdgjAQ5jDtfQPSyrKFFlWCwXxhPcSjPIo=w1688-h949-no?authuser=0)

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

![Code](https://lh3.googleusercontent.com/RLz8juLyqK6GgWBL4mw3F1RQa9aeT_GGgsnwDx19-UVcKd3M6zlCfS-rnYj3D4fsC6OZ4hq9u88faQXJqZ3_myUkVcXYaeuLfuPaGloMCkVKvpKtH88b6CpixQrGR6C9Hnw1gw9Pj6dz8vtcsrWj0IzjT8dhyU0_tiXBb0ZRi_zHkM-YvqrG2XMGI8VDThVi5Jom6VIyP8MECoIZM2m4d0HaR61c7n6UlprVIZZrKni7dxwxJo8S0rtKJ9rCtVyW9qA2VhfqQpgQAQqznIkfBhG2wdfE8Hji-gioqRuZybxGoWK-TyEUzlNXRmRQJAK0fiR12xmotQ_Td7YsV8nbLcSZ1DfMY7XnRhtekrOes6qr13QzwCk3MZVbRPeWxZCKyia9I61opJLtXPupfnYDr_1VfRrDn9RyNVd0hKrA5IQE4HA7TXj4CEQfc4IcEyAHGIbeWiLG2maOPDl1NgtIz3e9aXrY7LwYZAdZMddXu1O1ui53pQpU4I-cyQ2xJmWY5byrKxGANVxrRa3ug0DzWJrip-8Y5lNcgKGaQ_PQpCeW7xv87MECqjpKzzrmBd8i2mk3e1V3fzvcFjl0crTYBIw-SidcNOn2pq4AB5m5lkIeW4BC1ajcku7J82A_bMS9Obf9hkfT41BcBkyXNck5CcvEJK_aBHCuOsi2NqMYqVgdjEc1P5zzujRoBpyJ1xToiZSBajKD3tRP7J1iRo0q2R8=w907-h511-no?authuser=0)

In Feed component, we create a component (TweetBox) for containing messages. I divide into avatar part, input for typing word and other buttons including tweet button.

![TweetBox](https://lh3.googleusercontent.com/PemxgWbqw7SJlKfa-fyYKmMBmiYl3N7mHFTSCvitI0-EyLGLK-bm7rv5Jt14FK-UA87wifQU3bRJkrzQSViE4xMm_NrsYCybRzzz3CiD3sMXpsBuZutl2QQj6bSw238QQilZUzGk5ZKiSL4s-E5ktVNRd4NVUn-E6xVSgH5NbGdOyyCym7X3rwyt4ZbgLaLyXOMTzCiZ4bXSjacjUPAJ6ne-wmS-Kg_1xCbeEjjk_YQQD1GrUuUQGsdl-K2mIEG3NaHBQhiQW2eT1alNyq_bvegNoiluxxK98g5jeiTRxSdG2mVWs-q0QaL80PymQW_khRJh1Va7df2J2yx_nVzZKWvf4XBLk9n728vp4F-cIr6NFJ2TCBgI2iVYcn42_9pMhTtZWgTgTPNw2gTvAqfVDASyq7iFB6YEyS6OXBzDpbSuTjYzzHhMo9solGtRuv0bF4ub6SS-BL3s1YiWAVMFFlHdaLXJRz-wF9SDQhdL_XkEA1vQL7nPB2AWVVOg7iIBhlOqg_o9w75vrlNPoi1LISfrgx9X1qSWMN8hHFV59tVKwQOl9GnfXXEHoBCPk6HNw7OaFiUv2B13DkGT8qWpow1WqOcliWpj6iEzBdg4jj9A9zDYI7p5c4hhzxkLuID0LrDBDo5hYFdlcSN3i6AnoybuaFnYP4vMy99hvraAuUZpjMnopqwtsZ2p4YF9t-_vMZVWU-pazEwSYZq5229d8bE=w1688-h949-no?authuser=0)

I continue create component for Post, including avatar, username, a check of verification, content, image,...

![Post Component](https://lh3.googleusercontent.com/xRDCrZ33bXDrNJzT7BM7UOiHPU06TCWoDi4RfvqYQfZ0nN5FUnFDIKCBFXdSZEuFbWjTLRT73Jz7ocKp0hh9BxoeM0AvAybZGFEUhUf6nhDNh5RlwlXZvPtGNsi83XYEb2Dt8vo-irUYZMkbz73Y3fNBPInNMW5IpTUF4_N8ChnVqFEYx5bsTvf7sTRcc41Pbt2ndP7umYwd7hZ2pBrdJnWcuBL3K3ae1rEhS5N58FlBjWBUgmMTDNt_sAox_aB_Hj0bsOjwGa4Yvrbfv6aeFam_wX2ReRAF5XZ_v5e0AIN79357_i1xY6Al7LyuVYTNJbudWrXi7zXISS1bUdXQZjgeWWlsHNjr8ySPhYahJIWgFaOUoIac6XblJMcaJAYL2ZUMnan_j_pFoAXUopKX0csxVWQUt94Vl7BE-QfvKlqnIWmN2H3y55RhRQIPGEwgpDeM_mWISlEoBa_bNTc5bukXE_Xk-TFT5Bwz4SiqaYox7mhQaomVeWOhcRTqlLP10AAGqkAx63aijlfUbZ_nvHLpNpwxr-x9gSN76Z5O1cGOjVfc4bs3P-PxTeesGoUqaGa_XGEVsCXaSeD__EDwoyEozHugHYwPCVZ1v2gwoCZIkppPUXlGmOL09nqdo7f23Jc6mH75S7Nq-Tbdu08kKyvqta-wy8APbZApH_UTefd-ecW4rw7aex8mclSxsH9uYb5b1_BtPCeEvFVEerreMsI=w1688-h949-no?authuser=0)

All code change in Post.js and Post.css

![Post.js](https://lh3.googleusercontent.com/xziZcnR5h087XyA8szac4-Y3xlfFSeKMFJ0SpSfYLX4T9jxolfuLWGguX0V67qFHuTYMQ1pWGrb5lah4NR-d6OCcyNNBlfbXRmIe4YTzzI_RVLnDcsNF1mVIpjFXqvsenpw1rdHBJd-d0kwckJEjW33jGrpHiaeQ0Zq_4LSYNjRNFGhgfWmHm4lh4Ky458I8QZ2V335juNur0x9Xq35aUy_LS4sXlKnpGskHQ-Bvv-UVHRjNVSQ9y8LcmIlYbtcuHuCyjSHbvp9S3EalEilXUDVnN9lFR71kBiEi1rncyKPzOvoFq2vxistNNbvU15y3lH1gz2cFzH191UmndwwQJa3OstPnbEti6wHW3qxs-8PBgnogc8pzmi-ubf_e_4OmMjBkAj8nw2JhMGE7i6mz6KCM2cPH-NSmS7kiD2hkJvjbVz8NSU_KRuHD0jbLUSOq1jkKHtb-84fyF-Yxqz9otsMOk63dphS9MvJPMXgLr2ghNo5dMaoFBuQ8xLfZhUX958rWs-v-hKc0saJPGWh_jpQVIo6eU2KPObDmpAicjjwX9Ed8xeCOL34PRPIeG-6EU4DtD3lMkOGsZCdQmZ_VxCIucvI_uFvnKu8437_blvc9dhlvgNIgkywWFNLP5Uxu6OZYUFVQ5aNXiJWN5RdX3uncE8MjU2CbSBNXzsstgqWBVMiw3dXUGSqkOY2w9zDisNrp9YaE8Yz3dkXy8KFVcOg=w1688-h949-no?authuser=0)

![Post.css](https://lh3.googleusercontent.com/3TB80W05Md3E4u-KQsueXbv_jRfYL5KMmpSeiWi0TkwRY3wJluWege1TF7sZvVLRV4WkB2unYcD83gBV793fsT2QIEbaubLXHcVB0HzV4eZefL0OyeZJi9s0SXMIL9HsPIUSPCKbOdmw7-TBNcIOGqPwt-3iRT3fr9OsywjqtmLm3oJrr37bum1CnFpZjPhiJtZ1O6ZUA_tAzI_ClZUK6bZGv5sBn-6dgm_8bjJs3VqaZjSY-Mh9nmZzn2zqLS4OOhzzglbtkNW2GMs9jon7ljz-Kd2GBwBTiZ8v9qxEFpXSBIReeKtdPQpxkMevc9oEXIs6ar1OjV9Whbfq507ZxlhvwiqVZNGrhIMJrDK2xnBvQYcjVPAShPgq9z4OoYH5pT1pkNIVBfDjldRaZk7qZchR7AvahNFlv7hRBXGgAtjkL3z-Ppm7Bi0fOdK0U86PlSO9vFkRqpyQvMFJR3JNjLu_pDbYdqmIirqHUxHuT-nn-XvHYf7aubDyQAxOHS5FYyGahPw9uaA6TYKzvABm8I8tYGjar3PUnt5MINZh8bE9zh-z1_FAvCrAdLJPgc4sKsfAXnR24Hptx7iWnw8LI1on_UFfBF1-jS-0en4Hv86POmgu4Zf0Z04u2zxGSNCi0jvQkZ-HX1R66PfheyrS_ouXnhyR0Ad975UIexCtGkqzKuKKWwBwgkWqvMxiwXvk1HsbgKEsBimtWGrDRFKwMI4=w1688-h949-no?authuser=0)