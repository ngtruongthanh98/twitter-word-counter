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

![Code](https://lh3.googleusercontent.com/RLz8juLyqK6GgWBL4mw3F1RQa9aeT_GGgsnwDx19-UVcKd3M6zlCfS-rnYj3D4fsC6OZ4hq9u88faQXJqZ3_myUkVcXYaeuLfuPaGloMCkVKvpKtH88b6CpixQrGR6C9Hnw1gw9Pj6dz8vtcsrWj0IzjT8dhyU0_tiXBb0ZRi_zHkM-YvqrG2XMGI8VDThVi5Jom6VIyP8MECoIZM2m4d0HaR61c7n6UlprVIZZrKni7dxwxJo8S0rtKJ9rCtVyW9qA2VhfqQpgQAQqznIkfBhG2wdfE8Hji-gioqRuZybxGoWK-TyEUzlNXRmRQJAK0fiR12xmotQ_Td7YsV8nbLcSZ1DfMY7XnRhtekrOes6qr13QzwCk3MZVbRPeWxZCKyia9I61opJLtXPupfnYDr_1VfRrDn9RyNVd0hKrA5IQE4HA7TXj4CEQfc4IcEyAHGIbeWiLG2maOPDl1NgtIz3e9aXrY7LwYZAdZMddXu1O1ui53pQpU4I-cyQ2xJmWY5byrKxGANVxrRa3ug0DzWJrip-8Y5lNcgKGaQ_PQpCeW7xv87MECqjpKzzrmBd8i2mk3e1V3fzvcFjl0crTYBIw-SidcNOn2pq4AB5m5lkIeW4BC1ajcku7J82A_bMS9Obf9hkfT41BcBkyXNck5CcvEJK_aBHCuOsi2NqMYqVgdjEc1P5zzujRoBpyJ1xToiZSBajKD3tRP7J1iRo0q2R8=w907-h511-no?authuser=0)

In Feed component, we create a component (TweetBox) for containing messages. I divide into avatar part, input for typing word and other buttons including tweet button.

![TweetBox](https://lh3.googleusercontent.com/yDJmPQSCVPMSLlvrnAj443DLKDYV-ZS7d-l4q0pLbBMvS94sv0909boNlnxAV1qLq9s4tGjnZpY0djZKGPSccWJa-VaM7Y4x_LHlf-2wVAKbfDnDsieAasF_bNjWhByF2vT9vPyHNPKK6cqWoSm2loh9HCQS5XKkNGcPDq-kPioFUYxp7PmxmwtaCT7OVn6DKxKQTO9lnbCi9T8NNKSyslJdtIn07rjTotfiXi1t_a51wJ3ed5XrqpUXGA4qFVpQ1hRJtuFfw8MDiFdbgeJ1CJZYd53OOcwBSGFoGlWHOY7VOeTTV38c2wEHn0BP0-IPqR2gLbeNqtZOvqKB2gQmpfoBzrTMFkj-iirxBp5mQNqJ21VlkCUx6SvXVT1pPoAoE12PEPYbhWsO12Ihq7zDjAMtoewGm51KMRPEzBsCkv0ZUMqFCHwHA1ZKxNS6Il723TbgIFKEmaFXLYDTxfIuaDGHFyZlVF4mFswzjKdks5XaVX1HCpE-i7A0_vGw6RMSKpYpnashqI5gdp5scGS1jDXVEKZ3ce-oRJyq5Mf74uf69Wu_6HXPUrwo5xtZPCQmqGeYIpPI_EeGr8i7VZBkxWNlqSbucYukHbQDzWDaL21eXfkM0i4JcTJI9_qbGBz6KjqEMWuJj2Zgh310k3ZsSjDAN-AFSaLHq27wmn6_ngE-3pxDpeKhwKxw8DGoAjyHszvPno5wC8OVvOfH_Rsf2Iw=w907-h511-no?authuser=0)

I continue create component for Post, including avatar, username, a check of verification, content, image,...

![Post Component](https://lh3.googleusercontent.com/xRDCrZ33bXDrNJzT7BM7UOiHPU06TCWoDi4RfvqYQfZ0nN5FUnFDIKCBFXdSZEuFbWjTLRT73Jz7ocKp0hh9BxoeM0AvAybZGFEUhUf6nhDNh5RlwlXZvPtGNsi83XYEb2Dt8vo-irUYZMkbz73Y3fNBPInNMW5IpTUF4_N8ChnVqFEYx5bsTvf7sTRcc41Pbt2ndP7umYwd7hZ2pBrdJnWcuBL3K3ae1rEhS5N58FlBjWBUgmMTDNt_sAox_aB_Hj0bsOjwGa4Yvrbfv6aeFam_wX2ReRAF5XZ_v5e0AIN79357_i1xY6Al7LyuVYTNJbudWrXi7zXISS1bUdXQZjgeWWlsHNjr8ySPhYahJIWgFaOUoIac6XblJMcaJAYL2ZUMnan_j_pFoAXUopKX0csxVWQUt94Vl7BE-QfvKlqnIWmN2H3y55RhRQIPGEwgpDeM_mWISlEoBa_bNTc5bukXE_Xk-TFT5Bwz4SiqaYox7mhQaomVeWOhcRTqlLP10AAGqkAx63aijlfUbZ_nvHLpNpwxr-x9gSN76Z5O1cGOjVfc4bs3P-PxTeesGoUqaGa_XGEVsCXaSeD__EDwoyEozHugHYwPCVZ1v2gwoCZIkppPUXlGmOL09nqdo7f23Jc6mH75S7Nq-Tbdu08kKyvqta-wy8APbZApH_UTefd-ecW4rw7aex8mclSxsH9uYb5b1_BtPCeEvFVEerreMsI=w1688-h949-no?authuser=0)

All code change in Post.js and Post.css

![Post.js](https://lh3.googleusercontent.com/xziZcnR5h087XyA8szac4-Y3xlfFSeKMFJ0SpSfYLX4T9jxolfuLWGguX0V67qFHuTYMQ1pWGrb5lah4NR-d6OCcyNNBlfbXRmIe4YTzzI_RVLnDcsNF1mVIpjFXqvsenpw1rdHBJd-d0kwckJEjW33jGrpHiaeQ0Zq_4LSYNjRNFGhgfWmHm4lh4Ky458I8QZ2V335juNur0x9Xq35aUy_LS4sXlKnpGskHQ-Bvv-UVHRjNVSQ9y8LcmIlYbtcuHuCyjSHbvp9S3EalEilXUDVnN9lFR71kBiEi1rncyKPzOvoFq2vxistNNbvU15y3lH1gz2cFzH191UmndwwQJa3OstPnbEti6wHW3qxs-8PBgnogc8pzmi-ubf_e_4OmMjBkAj8nw2JhMGE7i6mz6KCM2cPH-NSmS7kiD2hkJvjbVz8NSU_KRuHD0jbLUSOq1jkKHtb-84fyF-Yxqz9otsMOk63dphS9MvJPMXgLr2ghNo5dMaoFBuQ8xLfZhUX958rWs-v-hKc0saJPGWh_jpQVIo6eU2KPObDmpAicjjwX9Ed8xeCOL34PRPIeG-6EU4DtD3lMkOGsZCdQmZ_VxCIucvI_uFvnKu8437_blvc9dhlvgNIgkywWFNLP5Uxu6OZYUFVQ5aNXiJWN5RdX3uncE8MjU2CbSBNXzsstgqWBVMiw3dXUGSqkOY2w9zDisNrp9YaE8Yz3dkXy8KFVcOg=w1688-h949-no?authuser=0)

![Post.css](https://lh3.googleusercontent.com/3TB80W05Md3E4u-KQsueXbv_jRfYL5KMmpSeiWi0TkwRY3wJluWege1TF7sZvVLRV4WkB2unYcD83gBV793fsT2QIEbaubLXHcVB0HzV4eZefL0OyeZJi9s0SXMIL9HsPIUSPCKbOdmw7-TBNcIOGqPwt-3iRT3fr9OsywjqtmLm3oJrr37bum1CnFpZjPhiJtZ1O6ZUA_tAzI_ClZUK6bZGv5sBn-6dgm_8bjJs3VqaZjSY-Mh9nmZzn2zqLS4OOhzzglbtkNW2GMs9jon7ljz-Kd2GBwBTiZ8v9qxEFpXSBIReeKtdPQpxkMevc9oEXIs6ar1OjV9Whbfq507ZxlhvwiqVZNGrhIMJrDK2xnBvQYcjVPAShPgq9z4OoYH5pT1pkNIVBfDjldRaZk7qZchR7AvahNFlv7hRBXGgAtjkL3z-Ppm7Bi0fOdK0U86PlSO9vFkRqpyQvMFJR3JNjLu_pDbYdqmIirqHUxHuT-nn-XvHYf7aubDyQAxOHS5FYyGahPw9uaA6TYKzvABm8I8tYGjar3PUnt5MINZh8bE9zh-z1_FAvCrAdLJPgc4sKsfAXnR24Hptx7iWnw8LI1on_UFfBF1-jS-0en4Hv86POmgu4Zf0Z04u2zxGSNCi0jvQkZ-HX1R66PfheyrS_ouXnhyR0Ad975UIexCtGkqzKuKKWwBwgkWqvMxiwXvk1HsbgKEsBimtWGrDRFKwMI4=w1688-h949-no?authuser=0)