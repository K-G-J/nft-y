const { Projects } = require('../models');
const projectsData = [
    {
      image: "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s130",
      name: "Bored Ape Yacht Club",
      addrs: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    },
    {
      image: "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s130",
      name: "Crypto Punks",
      addrs: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
    },
    {
      image: "https://lh3.googleusercontent.com/l1wZXP2hHFUQ3turU5VQ9PpgVVasyQ79-ChvCgjoU5xKkBA50OGoJqKZeMOR-qLrzqwIfd1HpYmiv23JWm0EZ14owiPYaufqzmj1=s0",
      name: "Bored Ape Kennel Club",
      addrs: "0xba30E5F9Bb24caa003E9f2f0497Ad287FDF95623",
    },
    {
      image: "https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s0",
      name: "Doodles",
      addrs: "0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e",
    },
    {
      image: "https://lh3.googleusercontent.com/7gOej3SUvqALR-qkqL_ApAt97SpUKQOZQe88p8jPjeiDDcqITesbAdsLcWlsIg8oh7SRrTpUPfPlm12lb4xDahgP2h32pQQYCsuOM_s=s0",
      name: "0N1 Force",
      addrs: "0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D",
    },
    {
      image: "https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s0",
      name: "Mutant Ape Yacht Club",
      addrs: "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
    },
    {
      image: "https://lh3.googleusercontent.com/LIpf9z6Ux8uxn69auBME9FCTXpXqSYFo8ZLO1GaM8T7S3hiKScHaClXe0ZdhTv5br6FE2g5i-J5SobhKFsYfe6CIMCv-UfnrlYFWOM4=s0",
      name: "CyberKongz",
      addrs: "0x57a204AA1042f6E66DD7730813f4024114d74f37",
    },
    {
      image: "https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s0",
      name: "Cool Cats NFT",
      addrs: "0x1A92f7381B9F03921564a437210bB9396471050C",
    },
    {
      image: "https://coincentral.com/wp-content/uploads/2022/01/deadfellaz.png",
      name: "DeadFellaz",
      addrs: "0x2acAb3DEa77832C09420663b0E1cB386031bA17B"
    },
    {
      image: "https://miro.medium.com/max/640/0*GCQlu6dpQwV_jXKr.png",
      name: "Wizards & Dragons Game",
      addrs: "0x999e88075692bCeE3dBC07e7E64cD32f39A1D3ab"
    },
    {
      image: "https://cdn-612d39b2c1ac189e9851cc81.closte.com/wp-content/uploads/2021/11/Wolf-Game-1-360x360.png",
      name: "Wolf Game",
      addrs: "0xEB834ae72B30866af20a6ce5440Fa598BfAd3a42"
    },
    {
      image: "https://lh3.googleusercontent.com/6cVSUgEYbPR43dfnoNYbKnIvY7cfPHywosowwj7mLV9v36kRKUMRS68fHYsQTRXCnzI8nw2ZI7-CP1D-CFxRGhznYINSLvmh8DH3kA=w1400-k",
      name: "Desperate ApeWives",
      addrs: "0xF1268733C6FB05EF6bE9cF23d24436Dcd6E0B35E"
    },
    {
      image: "https://lh3.googleusercontent.com/YmtOxRTAXEhp8e_0pAwGrRzoaFjZI3sW1r4DPw-O5FYC92aVT2cZ5QtaUU6UcGRwtg56u_u3Ee5DI4oksEcE2zpLQ_6zHfYqculHlOk=w600",
      name: "Pudgy Penguins",
      addrs: "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8"
    }
  ]
const seedProjects = () => Projects.bulkCreate(projectsData);
module.exports = seedProjects;