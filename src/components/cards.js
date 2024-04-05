import cmf from '../assets/CardItems/Electronic/cmf.png';
import cmfWatch from '../assets/CardItems/Electronic/cmfWatch.png';
import lap from '../assets/CardItems/Electronic/lap.png';
import pixel from '../assets/CardItems/Electronic/pixel.png';
import powerBank from '../assets/CardItems/Electronic/powerBank.png';
import ps5 from '../assets/CardItems/Electronic/ps5.png';
import remar from '../assets/CardItems/Electronic/cmf.png';
import tab from '../assets/CardItems/Electronic/tab.png';
import Adbanner from '../assets/AdBannerImg/banner1.png';
import AppAD  from '../assets/AdBannerImg/Rectangle.png';
import banner2 from '../../public/images/BannerImgs/group.png'
import banner1 from '../assets/BannerImages/BG.png'


const BannerImg1=[
    banner2,
    banner2,
 Adbanner,
 Adbanner
  ]
  const BannerImg=[
    banner1,
    banner1,
    banner1,
    banner1,
  ]


   
   const cards = {


    1: {
       id: 1,
       category: 'electronic',
       cardType:'Ad',
       From:'regal-blue-ad',
       To:'light-blue-ad',
       img:Adbanner,
       title: '',
       description: 'Description for Card 1',
       content: {
         subtitle: "Work better, together",
         title: "Get 25% off on Electronics"
       }
     },
    2:{
       id: 2,
       category: 'electronic',
       cardType:'item',
       From:'regal-blue-ad',
       To:'light-blue-ad',
       img:lap,
       title: '',
       description: 'Description for Card 1',
       content: {
         product: "Laptop",
         prize: "50",
       }
     },
    3:{
       id: 3,
       category: 'electronic',
       cardType:'item',
       From:'regal-blue-ad',
       To:'light-blue-ad',
       img:cmf,
       title: '',
       description: 'Description for Card 1',
       content: {
         product: "CMF",
         prize: "50",
       }
     },
    4:{
       id: 4,
       category: 'electronic',
       cardType:'item',
       From:'regal-blue-ad',
       To:'light-blue-ad',
       img:pixel,
       title: '',
       description: 'Description for Card 1',
       content: {
         product: "Pixel ",
         prize: "50",
       }
     },
    5:{
       id: 5,
       category: 'electronic',
       cardType:'item',
       From:'regal-blue-ad',
       To:'light-blue-ad',
       img:powerBank,
       title: '',
       description: 'Description for Card 1',
       content: {
         product: "Pixel ",
         prize: "50",
       }
     },
    6:{
       id: 6,
       category: 'electronic',
       cardType:'item',
       From:'regal-blue-ad',
       To:'light-blue-ad',
       img:cmfWatch,
       title: '',
       description: 'Description for Card 1',
       content: {
         product: "Pixel ",
         prize: "50",
       }
     },
    7:{
       id: 7,
       category: 'electronic',
       cardType:'item',
       From:'regal-blue-ad',
       To:'light-blue-ad',
       img:ps5,
       title: '',
       description: 'Description for Card 1',
       content: {
         product: "Pixel ",
         prize: "50",
       }
     },
   }

   console.log(cards);
export {BannerImg,BannerImg1}
export default cards;