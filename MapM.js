import React, { 
  Component,
  PropTypes,
} from 'react';

import Mapbox from "react-native-mapbox-gl";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  ListView,
  MapView,
} from 'react-native';

var mapRef = 'map';

var NewFlag = require('./NewFlag');

var dot = 'http://i.imgur.com/8DKYOcP.png';
//var W_cat = 'http://i.imgur.com/vdxn5yp.png';
//var M_broom = 'http://i.imgur.com/8DKYOcP.png';

 var Rnum = Math.floor((Math.random() * 10) + 1);

export  default  class  Map  extends  Component {


  _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'NewFlag',
                component: NewFlag,               
            })
        }
  }

  _findTheDot() {
    Rnum=Math.floor((Math.random() * 10) + 1);
    ///////////////////////
    this.state = {
      center:{
        latitude: 25.036285,
        longitude: 121.432582
      },
      annotations: [/*{
        coordinates: [25.035299, 121.431659],
        type: 'point',
        title: 'Important!',
        subtitle: 'Neat, this is a custom annotation image',
        id: 'marker2',
        annotationImage: {
          url: 'http://image.spreadshirt.com/image-server/v1/designs/12249668,width%3D178,height%3D178/I-am-here!-Google-Maps.png',
          height: 35,
          width: 35
        }
      },*/
        {
        coordinates: [
          [
          25.03291985383185, 121.4356318116188
          ],
          [
          25.032997621974324, 121.43561840057372
          ],
          [
          25.033194472364663, 121.43533140420912
          ],
          [
          25.033819044969107, 121.43436580896376
          ],
          [
          25.034108242880112, 121.43435776233673
          ],
          [
          25.035007425307153, 121.43514901399612
          ],
          [
          25.035996518364577, 121.43602073192595
          ],
          [
          25.036169062036755, 121.43616825342178
          ],
          [
          25.036519009020964, 121.43557816743849
          ],
          [
          25.037231050844106, 121.43433630466463
          ],
          [
          25.03790906634927, 121.43316149711607
          ],
          [
          25.038351354013816, 121.43239974975587
          ],
          [
          25.038684283786168, 121.43182843923567
          ],
          [
          25.039209193124474, 121.43091648817062
          ],
          [
          25.03847529147992, 121.43045783042906
          ],
          [
          25.0381302103809, 121.43023520708084
          ],
          [
          25.037627167884715, 121.42987310886383
          ],
          [
          25.0372091793138, 121.42957001924513
          ],
          [
          25.03690540765632, 121.42932057380676
          ],
          [
          25.03617878279982, 121.42873048782347
          ],
          [
          25.03601352972335, 121.42859905958174
          ],
          [
          25.03531363187254, 121.42970144748689
          ],
          [
          25.034662334452328, 121.43072068691254
          ],
          [
          25.033891952069744, 121.43178552389143
          ],
          [
          25.033177460615015, 121.43274575471878
          ],
          [
          25.032543163694015, 121.43360674381255
          ],
          [
          25.032659816247428, 121.43423706293106
          ],
          [
          25.03286152769263, 121.43533408641814
          ],
          [
          25.03291985383185, 121.4356318116188,
          ]
        ],
        type: 'polyline',
        strokeColor: '#7966ff',
        strokeWidth: 1,
        alpha: 0.8,
        id: 'fju'
      },  {
        coordinates: [
          [
          25.03740359277978,
          121.43438994884491
          ],
          [
          25.03797711070914,
          121.43478959798813
          ],
          [
          25.038509313507532,
          121.4337944984436
          ],
          [
          25.03905366466582,
          121.43420487642287
          ],
          [
          25.03916545076541,
          121.43401443958284
          ],
          [
          25.039386592531827,
          121.43414586782455
          ],
          [
          25.040310037357447,
          121.43254458904266
          ],
          [
          25.04046556422292,
          121.43265455961227
          ],
          [
          25.040791197958733,
          121.43202155828476
          ],
          [
          25.040645391915277,
          121.43191426992415
          ],
          [
          25.04092728344291,
          121.43143147230147
          ],
          [
          25.04034648898424,
          121.43110960721968
          ],
          [
          25.04051173622315,
          121.43086820840834
          ],
          [
          25.03963689536882,
          121.43040418624878
          ],
          [
          25.03879607022239,
          121.43191426992415
          ],
          [
          25.0379916916385,
          121.43335998058318
          ],
          [
          25.03740359277978,
          121.43438994884491
          ]
        ],  
        type: 'polygon',
        alpha:0.1,
        fillColor: '#00FF00',
        strokeColor: '#FF1EAA',
        strokeWidth: 1,

        id: 'exercise'
      },   {
        coordinates : [
          [
          25.037695212400994,
          121.43355846405028
          ],
          [
          25.0365578919576,
          121.43283963203429
          ],
          [
          25.036285711142423,
          121.43292546272279
          ],
          [
          25.03612045820999,
          121.43279671669005
          ],
          [
          25.035430281791665,
          121.43304347991942
          ],
          [
          25.035945484274198,
          121.43420219421385
          ],
          [
          25.03694672064591,
          121.43411636352539
          ],
          [
          25.037238341353326,
          121.43430948257446
          ],
          [
          25.037695212400994,
          121.43355846405028
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#7744FF',
        strokeColor: '#7744FF',
        strokeWidth: 1,

        id: 'broadcast'
      },  {
        coordinates : [
          [
          25.037889625096643,
          121.43119812011719
          ],
          [
          25.038774198971158,
          121.43171310424803
          ],
          [
          25.039250505338135,
          121.43086552619933
          ],
          [
          25.038433979005145,
          121.43032908439636
          ],
          [
          25.037899345723325,
          121.43041491508482
          ],
          [
          25.037889625096643,
          121.43119812011719
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#33FF33',
        strokeColor: '#33FF33',
        strokeWidth: 1,

        id: 'medical'
      },  {
        coordinates : [
          [
          25.03544000261325,
          121.43304347991942
          ],
          [
          25.036509288284897,
          121.4355218410492
          ],
          [
          25.036149620508365,
          121.43617630004881          
          ],
          [
          25.03534279436274,
          121.43494248390198
          ],
          [
          25.03488591455351,
          121.43326878547668          
          ],
          [
          25.03544000261325,
          121.43304347991942          
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#E63F00',
        strokeColor: '#E63F00',
        strokeWidth: 1,

        id: 'humanlife'
      },  {
        coordinates : [
          [
          25.034876193688007,
          121.43324732780458
          ],
          [
          25.035323352703386,
          121.4349102973938          
          ],
          [
          25.03509977339943,
          121.43517851829527          
          ],
          [
          25.034186010269305,
          121.43432021141051          
          ],
          [
          25.03382633568112,
          121.43432021141051          
          ],
          [
          25.033690242318706,
          121.4337944984436          
          ],
          [
          25.0342540566944,
          121.43353700637817          
          ],
          [
          25.034429033042734,
          121.43360137939452          
          ],
          [
          25.034633171800404,
          121.43356919288637
          ],
          [
          25.034798426736355,
          121.43342971801758          
          ],
          [
          25.034876193688007,
          121.43324732780458          
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#EEEE00',
        strokeColor: '#EEEE00',
        strokeWidth: 1,

        id: 'foodcircle'
      },  {
        coordinates : [
          [
          25.036232246982774,
          121.4322978258133          
          ],
          [
          25.03552748997284,
          121.4302808046341          
          ],
          [
          25.035124075517437,
          121.43023788928986          
          ],
          [
          25.034735241051838,
          121.43083870410919          
          ],
          [
          25.034856751954713,
          121.43123030662535          
          ],
          [
          25.035036587870124,
          121.43120884895325          
          ],
          [
          25.035036587870124,
          121.43184185028076          
          ],
          [
          25.035405979734318,
          121.43180429935455          
          ],
          [
          25.03576564969121,
          121.43274307250977          
          ],
          [
          25.036057273206417,
          121.43263041973113          
          ],
          [
          25.036062133592452,
          121.43250703811644          
          ],
          [
          25.036135039360055,
          121.43234610557555          
          ],
          [
          25.036232246982774,
          121.4322978258133          
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#00AA55',
        strokeColor: '#00AA55',
        strokeWidth: 1,

        id: 'SF'   
      },  {
        coordinates : [
          [
          25.037165436241477,
          121.43060266971588          
          ],
          [
          25.03561983767363,
          121.43051147460938
          ],
          [
          25.0362419677408,
          121.4322978258133          
          ],
          [
          25.036368337525154,
          121.4322656393051          
          ],
          [
          25.036480126072043,
          121.43233001232147          
          ],
          [
          25.036572473055656,
          121.43241047859192          
          ],
          [
          25.03711197246525,
          121.432244181633          
          ],
          [
          25.037165436241477,
          121.43060266971588          
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#33CCFF',
        strokeColor: '#33CCFF',
        strokeWidth: 1,

        id: 'law&social' 
      },  {
        coordinates : [
          [
          25.0383659348987,
          121.43032908439636
          ],
          [
          25.03776325687951,
          121.42994284629823
          ],
          [
          25.037199458632386,  
          121.42993211746214
          ],
          [
          25.037102251776155,
          121.43219590187071
          ],
          [
          25.03764660917894,
          121.43201351165771
          ],
          [
          25.037899345723325,
          121.43121957778929
          ],
          [
          25.037899345723325,
          121.43040418624878
          ],
          [
          25.0383659348987,
          121.43032908439636
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#FF5511',
        strokeColor: '#FF5511',
        strokeWidth: 1,

        id: 'manage&night'
      },  {
        coordinates : [
          [
          25.03774867592303,
          121.42992675304413          
          ],
          [
          25.03617878279982,
          121.42868757247923          
          ],
          [
          25.03620308470404,
          121.4296907186508          
          ],
          [
          25.035512908750587,
          121.42964243888855          
          ],
          [
          25.03535737560522,
          121.42984092235565          
          ],
          [
          25.03561011686629,
          121.4305007457733          
          ],
          [
          25.03717515692556,
          121.43058657646178          
          ],
          [
          25.0372091793138,
          121.42990529537202          
          ],
          [
          25.03774867592303,
          121.42992675304413          
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#FFFF33',
        strokeColor: '#FFFF33',
        strokeWidth: 1,

        id: 'eat&mandorm'
      },{
        coordinates : [
          [
          25.035755928895426,
          121.43274843692778          
          ],
          [
          25.035401119322277,
          121.43182039260864          
          ],
          [
          25.034613730028585,
          121.43186330795287          
          ],
          [
          25.034623450914875,
          121.43209934234619          
          ],
          [
          25.034200591649288,
          121.43214762210845          
          ],
          [
          25.03423947532078,
          121.43331170082092          
          ],
          [
          25.034307521716208,
          121.43323123455048          
          ],
          [
          25.0344144516899,
          121.43314003944397          
          ],
          [
          25.034521381570418,
          121.43308103084563          
          ],
          [
          25.03466719489363,
          121.43308103084563          
          ],
          [
          25.034803287172288,
          121.43312394618987          
          ],
          [
          25.035755928895426,
          121.43274843692778          
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#A500CC',
        strokeColor: '#A500CC',
        strokeWidth: 1,

        id: 'language'
      },  {
        coordinates : [
          [
          25.038745037296756,
          121.43173456192017
          ],
          [
          25.037899345723325,
          121.43123030662535
          ],
          [
          25.03764660917894,
          121.432067155838
          ],
          [
          25.036655099245237,
          121.43253922462463
          ],
          [
          25.0365578919576,
          121.43286108970642
          ],
          [
          25.03768549175813,
          121.43356919288637
          ],
          [
          25.038745037296756,
          121.43173456192017
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#0066FF',
        strokeColor: '#0066FF',
        strokeWidth: 1,

        id: 'PE'
      },  {
        coordinates : [
          [
          25.037238341353326,
          121.4342987537384
          ],
          [
          25.03695644134735,
          121.43411636352539
          ],
          [
          25.035955205054947,
          121.43419146537781
          ],
          [
          25.036519009020964,
          121.43553256988524          
          ],
          [
          25.037238341353326,
          121.4342987537384
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#FF44AA',
        strokeColor: '#FF44AA',
        strokeWidth: 1,

        id: 'art'
      }, {
        coordinates: [25.03290770255513, 121.43403589725494],
        type: 'point',
        id: 'true beautiful',
        annotationImage: {
          url: dot,
          height: 30,
          width: 15
        }
      }
      ]
    };
    
    if(Rnum == 1){
      this.state.annotations.push({
          coordinates: [25.034613730028585, 121.43293619155884],
          type: 'point',
          id: 'small Paris',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          }, {
          coordinates: [25.035051169149014, 121.43165946006775],
          type: 'point',
          id: 'couple pull',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          }, {
          coordinates: [25.036130178976897, 121.43083333969116],
          type: 'point',
          id: 'lo yell la',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          }, {
          coordinates: [25.036966162047996, 121.4298892021179],
          type: 'point',
          id: 'heart circle',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },  {
          coordinates: [25.037218899994397, 121.43120884895325],
          type: 'point',
          id: 'lee ma do',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },  {
          coordinates: [25.038521464229383, 121.43138051033019],
          type: 'point',
          id: 'guo si building',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          }, {
          coordinates: [25.037549402677048, 121.4323353767395],
          type: 'point',
          id: 'gi gen building',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          }, {
          coordinates: [25.036839792879498, 121.43331170082092],
          type: 'point',
          id: 'broadcast collage',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          }, {
          coordinates: [25.036344035653652, 121.43504977226256],
          type: 'point',
          id: 'art collage',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
      }
          }, {
          coordinates: [25.03517754016007, 121.43322587013245],
          type: 'point',
          id: 'clothing',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          }, {
          coordinates: [25.03433182399113, 121.43403053283691],
          type: 'point',
          id: 'fu circle',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
      });
  }else if(Rnum == 2){
    this.state.annotations.push({
          coordinates: [25.03459428825369, 121.43221735954285],
          type: 'point',
          id: 'Vienna',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.0354886067096, 121.43144488334656],
          type: 'point',
          id: 'shan yen building',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036382918645756, 121.43220663070679],
          type: 'point',
          id: 'law',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.035770510088796, 121.43037199974059],
          type: 'point',
          id: 'FAHY',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037627167884715, 121.43023252487183],
          type: 'point',
          id: 'night school',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.038521464229383, 121.43138051033019],
          type: 'point',
          id: 'guo si building',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037879904469175, 121.43198132514954],
          type: 'point',
          id: 'center beautiful building',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037141134527882, 121.43393397331239],
          type: 'point',
          id: 'education collage',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036091295904694, 121.43428802490233],
          type: 'point',
          id: 'literature library',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.035352515191246, 121.43419146537781],
          type: 'point',
          id: 'College Of Human Ecology',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.0338943823057, 121.43380522727965],
          type: 'point',
          id: 'building of su',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
        }); 
  }else if(Rnum == 3){
    this.state.annotations.push({
          coordinates: [25.03459428825369, 121.43221735954285],
          type: 'point',
          id: 'forgein language',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.035323352703386, 121.43073678016661],
          type: 'point',
          id: 'lee circle',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036752306455835, 121.4319062232971],
          type: 'point',
          id: 'social technology',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03646068459294, 121.42969608306883],
          type: 'point',
          id: 'people circle',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037218899994397, 121.43120884895325],
          type: 'point',
          id: 'lee ma do',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03795766946733, 121.43111228942873],
          type: 'point',
          id: 'old medical',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037131413841102, 121.4323568344116],
          type: 'point',
          id: 'wind slide square',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036839792879498, 121.43331170082092],
          type: 'point',
          id: 'broadcast collage',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036344035653652, 121.43504977226256],
          type: 'point',
          id: 'art collage',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
      }
          }, {
          coordinates: [25.03517754016007, 121.43322587013245],
          type: 'point',
          id: 'clothing',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03476926411677, 121.43459916114807],
          type: 'point',
          id: 'icecream',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
        }); 
  }else if(Rnum == 4){
    this.state.annotations.push({
          coordinates: [25.034613730028585, 121.43293619155884],
          type: 'point',
          id: 'small Paris',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.035896880358834, 121.4317774772644],
          type: 'point',
          id: 'hundred',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036130178976897, 121.43083333969116],
          type: 'point',
          id: 'lo yell la',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036966162047996, 121.4298892021179],
          type: 'point',
          id: 'heart circle',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037627167884715, 121.43023252487183],
          type: 'point',
          id: 'night school',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.038521464229383, 121.43138051033019],
          type: 'point',
          id: 'guo si building',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03701476553966, 121.43287181854247],
          type: 'point',
          id: 'literature circle',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037141134527882, 121.43393397331239],
          type: 'point',
          id: 'education collage',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036091295904694, 121.43428802490233],
          type: 'point',
          id: 'literature library',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
      }
          }, {
          coordinates: [25.03585799721269, 121.43452405929564],
          type: 'point',
          id: 'yee may girl dorm',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.034808147608015, 121.43378376960754],
          type: 'point',
          id: 'yee true girl dorm',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
        }); 
  }else if(Rnum == 5){
    this.state.annotations.push({
          coordinates: [25.03459428825369, 121.43221735954285],
          type: 'point',
          id: 'Vienna',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.035323352703386, 121.43073678016661],
          type: 'point',
          id: 'lee circle',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036382918645756, 121.43220663070679],
          type: 'point',
          id: 'law',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.035770510088796, 121.43037199974059],
          type: 'point',
          id: 'FAHY',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037627167884715, 121.43023252487183],
          type: 'point',
          id: 'night school',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.038521464229383, 121.43138051033019],
          type: 'point',
          id: 'guo si building',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037549402677048, 121.4323353767395],
          type: 'point',
          id: 'gi gen building',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03633431490372, 121.4333653450012],
          type: 'point',
          id: 'literature collage',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036091295904694, 121.43428802490233],
          type: 'point',
          id: 'literature library',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03517754016007, 121.43322587013245],
          type: 'point',
          id: 'clothing',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.0338943823057, 121.43380522727965],
          type: 'point',
          id: 'building of su',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
        }); 
  }else if(Rnum == 6){
    this.state.annotations.push({
          coordinates: [25.03459428825369, 121.43221735954285],
          type: 'point',
          id: 'forgein language',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.035051169149014, 121.43165946006775],
          type: 'point',
          id: 'couple pull',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036752306455835, 121.4319062232971],
          type: 'point',
          id: 'social technology',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.035770510088796, 121.43037199974059],
          type: 'point',
          id: 'FAHY',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037218899994397, 121.43120884895325],
          type: 'point',
          id: 'lee ma do',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.038521464229383, 121.43138051033019],
          type: 'point',
          id: 'guo si building',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037131413841102, 121.4323568344116],
          type: 'point',
          id: 'wind slide square',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03633431490372, 121.4333653450012],
          type: 'point',
          id: 'literature collage',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036344035653652, 121.43504977226256],
          type: 'point',
          id: 'art collage',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
      }
          }, {
          coordinates: [25.03585799721269, 121.43452405929564],
          type: 'point',
          id: 'yee may girl dorm',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03476926411677, 121.43459916114807],
          type: 'point',
          id: 'icecream',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
        }); 
  }else if(Rnum == 7){
    this.state.annotations.push({
          coordinates: [25.034613730028585, 121.43293619155884],
          type: 'point',
          id: 'small Paris',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.034983123166068, 121.43106937408446],
          type: 'point',
          id: 'go boy dorm',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036382918645756, 121.43220663070679],
          type: 'point',
          id: 'law',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03646068459294, 121.42969608306883],
          type: 'point',
          id: 'people circle',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037627167884715, 121.43023252487183],
          type: 'point',
          id: 'night school',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03795766946733, 121.43111228942873],
          type: 'point',
          id: 'old medical',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03701476553966, 121.43287181854247],
          type: 'point',
          id: 'literature circle',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03633431490372, 121.4333653450012],
          type: 'point',
          id: 'literature collage',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036344035653652, 121.43504977226256],
          type: 'point',
          id: 'art collage',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.035352515191246, 121.43419146537781],
          type: 'point',
          id: 'College Of Human Ecology',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03433182399113, 121.43403053283691],
          type: 'point',
          id: 'fu circle',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
        }); 
  }else if(Rnum == 8){
    this.state.annotations.push({
          coordinates: [25.03459428825369, 121.43221735954285],
          type: 'point',
          id: 'Vienna',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.035896880358834, 121.4317774772644],
          type: 'point',
          id: 'hundred',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036752306455835, 121.4319062232971],
          type: 'point',
          id: 'social technology',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036966162047996, 121.4298892021179],
          type: 'point',
          id: 'heart circle',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037218899994397, 121.43120884895325],
          type: 'point',
          id: 'lee ma do',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.038521464229383, 121.43138051033019],
          type: 'point',
          id: 'guo si building',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037879904469175, 121.43198132514954],
          type: 'point',
          id: 'center beautiful building',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036839792879498, 121.43331170082092],
          type: 'point',
          id: 'broadcast collage',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036091295904694, 121.43428802490233],
          type: 'point',
          id: 'literature library',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
      }
          }, {
          coordinates: [25.03585799721269, 121.43452405929564],
          type: 'point',
          id: 'yee may girl dorm',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.0338943823057, 121.43380522727965],
          type: 'point',
          id: 'building of su',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
        }); 
  }else if(Rnum == 9){
    this.state.annotations.push({
          coordinates: [25.03459428825369, 121.43221735954285],
          type: 'point',
          id: 'forgein language',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.0354886067096, 121.43144488334656],
          type: 'point',
          id: 'shan yen building',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036130178976897, 121.43083333969116],
          type: 'point',
          id: 'lo yell la',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03646068459294, 121.42969608306883],
          type: 'point',
          id: 'people circle',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037627167884715, 121.43023252487183],
          type: 'point',
          id: 'night school',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.038521464229383, 121.43138051033019],
          type: 'point',
          id: 'guo si building',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037131413841102, 121.4323568344116],
          type: 'point',
          id: 'wind slide square',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037141134527882, 121.43393397331239],
          type: 'point',
          id: 'education collage',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036344035653652, 121.43504977226256],
          type: 'point',
          id: 'art collage',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
      }
          }, {
          coordinates: [25.035352515191246, 121.43419146537781],
          type: 'point',
          id: 'College Of Human Ecology',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03476926411677, 121.43459916114807],
          type: 'point',
          id: 'icecream',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
        }); 
  }else if(Rnum == 10){
    this.state.annotations.push({
          coordinates: [25.034613730028585, 121.43293619155884],
          type: 'point',
          id: 'small Paris',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.0354886067096, 121.43144488334656],
          type: 'point',
          id: 'shan yen building',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036752306455835, 121.4319062232971],
          type: 'point',
          id: 'social technology',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.035770510088796, 121.43037199974059],
          type: 'point',
          id: 'FAHY',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037627167884715, 121.43023252487183],
          type: 'point',
          id: 'night school',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03795766946733, 121.43111228942873],
          type: 'point',
          id: 'old medical',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037549402677048, 121.4323353767395],
          type: 'point',
          id: 'gi gen building',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.037141134527882, 121.43393397331239],
          type: 'point',
          id: 'education collage',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.036091295904694, 121.43428802490233],
          type: 'point',
          id: 'literature library',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03517754016007, 121.43322587013245],
          type: 'point',
          id: 'clothing',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
          },{
          coordinates: [25.03433182399113, 121.43403053283691],
          type: 'point',
          id: 'fu circle',
          annotationImage: {
              url: dot,
              height: 30,
              width: 15
          }
        }); 
  }   
    ///////////////////////
    this.forceUpdate(); // means rerender !!

  }

  mixins: [Mapbox.Mixin]

  constructor() {
    super();
    this.state = {
      center:{
        latitude: 25.036285,
        longitude: 121.432582
      },
      annotations: [/*{
        coordinates: [25.035299, 121.431659],
        type: 'point',
        title: 'Important!',
        subtitle: 'Neat, this is a custom annotation image',
        id: 'marker2',
        annotationImage: {
          url: 'http://image.spreadshirt.com/image-server/v1/designs/12249668,width%3D178,height%3D178/I-am-here!-Google-Maps.png',
          height: 35,
          width: 35
        }
      },*/
        {
        coordinates: [
          [
          25.03291985383185, 121.4356318116188
          ],
          [
          25.032997621974324, 121.43561840057372
          ],
          [
          25.033194472364663, 121.43533140420912
          ],
          [
          25.033819044969107, 121.43436580896376
          ],
          [
          25.034108242880112, 121.43435776233673
          ],
          [
          25.035007425307153, 121.43514901399612
          ],
          [
          25.035996518364577, 121.43602073192595
          ],
          [
          25.036169062036755, 121.43616825342178
          ],
          [
          25.036519009020964, 121.43557816743849
          ],
          [
          25.037231050844106, 121.43433630466463
          ],
          [
          25.03790906634927, 121.43316149711607
          ],
          [
          25.038351354013816, 121.43239974975587
          ],
          [
          25.038684283786168, 121.43182843923567
          ],
          [
          25.039209193124474, 121.43091648817062
          ],
          [
          25.03847529147992, 121.43045783042906
          ],
          [
          25.0381302103809, 121.43023520708084
          ],
          [
          25.037627167884715, 121.42987310886383
          ],
          [
          25.0372091793138, 121.42957001924513
          ],
          [
          25.03690540765632, 121.42932057380676
          ],
          [
          25.03617878279982, 121.42873048782347
          ],
          [
          25.03601352972335, 121.42859905958174
          ],
          [
          25.03531363187254, 121.42970144748689
          ],
          [
          25.034662334452328, 121.43072068691254
          ],
          [
          25.033891952069744, 121.43178552389143
          ],
          [
          25.033177460615015, 121.43274575471878
          ],
          [
          25.032543163694015, 121.43360674381255
          ],
          [
          25.032659816247428, 121.43423706293106
          ],
          [
          25.03286152769263, 121.43533408641814
          ],
          [
          25.03291985383185, 121.4356318116188,
          ]
        ],
        type: 'polyline',
        strokeColor: '#7966ff',
        strokeWidth: 1,
        alpha: 0.8,
        id: 'fju'
      },  {
        coordinates: [
          [
          25.03740359277978,
          121.43438994884491
          ],
          [
          25.03797711070914,
          121.43478959798813
          ],
          [
          25.038509313507532,
          121.4337944984436
          ],
          [
          25.03905366466582,
          121.43420487642287
          ],
          [
          25.03916545076541,
          121.43401443958284
          ],
          [
          25.039386592531827,
          121.43414586782455
          ],
          [
          25.040310037357447,
          121.43254458904266
          ],
          [
          25.04046556422292,
          121.43265455961227
          ],
          [
          25.040791197958733,
          121.43202155828476
          ],
          [
          25.040645391915277,
          121.43191426992415
          ],
          [
          25.04092728344291,
          121.43143147230147
          ],
          [
          25.04034648898424,
          121.43110960721968
          ],
          [
          25.04051173622315,
          121.43086820840834
          ],
          [
          25.03963689536882,
          121.43040418624878
          ],
          [
          25.03879607022239,
          121.43191426992415
          ],
          [
          25.0379916916385,
          121.43335998058318
          ],
          [
          25.03740359277978,
          121.43438994884491
          ]
        ],  
        type: 'polygon',
        alpha:0.1,
        fillColor: '#00FF00',
        strokeColor: '#FF1EAA',
        strokeWidth: 1,

        id: 'exercise'
      },   {
        coordinates : [
          [
          25.037695212400994,
          121.43355846405028
          ],
          [
          25.0365578919576,
          121.43283963203429
          ],
          [
          25.036285711142423,
          121.43292546272279
          ],
          [
          25.03612045820999,
          121.43279671669005
          ],
          [
          25.035430281791665,
          121.43304347991942
          ],
          [
          25.035945484274198,
          121.43420219421385
          ],
          [
          25.03694672064591,
          121.43411636352539
          ],
          [
          25.037238341353326,
          121.43430948257446
          ],
          [
          25.037695212400994,
          121.43355846405028
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#7744FF',
        strokeColor: '#7744FF',
        strokeWidth: 1,

        id: 'broadcast'
      },  {
        coordinates : [
          [
          25.037889625096643,
          121.43119812011719
          ],
          [
          25.038774198971158,
          121.43171310424803
          ],
          [
          25.039250505338135,
          121.43086552619933
          ],
          [
          25.038433979005145,
          121.43032908439636
          ],
          [
          25.037899345723325,
          121.43041491508482
          ],
          [
          25.037889625096643,
          121.43119812011719
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#33FF33',
        strokeColor: '#33FF33',
        strokeWidth: 1,

        id: 'medical'
      },  {
        coordinates : [
          [
          25.03544000261325,
          121.43304347991942
          ],
          [
          25.036509288284897,
          121.4355218410492
          ],
          [
          25.036149620508365,
          121.43617630004881          
          ],
          [
          25.03534279436274,
          121.43494248390198
          ],
          [
          25.03488591455351,
          121.43326878547668          
          ],
          [
          25.03544000261325,
          121.43304347991942          
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#E63F00',
        strokeColor: '#E63F00',
        strokeWidth: 1,

        id: 'humanlife'
      },  {
        coordinates : [
          [
          25.034876193688007,
          121.43324732780458
          ],
          [
          25.035323352703386,
          121.4349102973938          
          ],
          [
          25.03509977339943,
          121.43517851829527          
          ],
          [
          25.034186010269305,
          121.43432021141051          
          ],
          [
          25.03382633568112,
          121.43432021141051          
          ],
          [
          25.033690242318706,
          121.4337944984436          
          ],
          [
          25.0342540566944,
          121.43353700637817          
          ],
          [
          25.034429033042734,
          121.43360137939452          
          ],
          [
          25.034633171800404,
          121.43356919288637
          ],
          [
          25.034798426736355,
          121.43342971801758          
          ],
          [
          25.034876193688007,
          121.43324732780458          
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#EEEE00',
        strokeColor: '#EEEE00',
        strokeWidth: 1,

        id: 'foodcircle'
      },  {
        coordinates : [
          [
          25.036232246982774,
          121.4322978258133          
          ],
          [
          25.03552748997284,
          121.4302808046341          
          ],
          [
          25.035124075517437,
          121.43023788928986          
          ],
          [
          25.034735241051838,
          121.43083870410919          
          ],
          [
          25.034856751954713,
          121.43123030662535          
          ],
          [
          25.035036587870124,
          121.43120884895325          
          ],
          [
          25.035036587870124,
          121.43184185028076          
          ],
          [
          25.035405979734318,
          121.43180429935455          
          ],
          [
          25.03576564969121,
          121.43274307250977          
          ],
          [
          25.036057273206417,
          121.43263041973113          
          ],
          [
          25.036062133592452,
          121.43250703811644          
          ],
          [
          25.036135039360055,
          121.43234610557555          
          ],
          [
          25.036232246982774,
          121.4322978258133          
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#00AA55',
        strokeColor: '#00AA55',
        strokeWidth: 1,

        id: 'SF'   
      },  {
        coordinates : [
          [
          25.037165436241477,
          121.43060266971588          
          ],
          [
          25.03561983767363,
          121.43051147460938
          ],
          [
          25.0362419677408,
          121.4322978258133          
          ],
          [
          25.036368337525154,
          121.4322656393051          
          ],
          [
          25.036480126072043,
          121.43233001232147          
          ],
          [
          25.036572473055656,
          121.43241047859192          
          ],
          [
          25.03711197246525,
          121.432244181633          
          ],
          [
          25.037165436241477,
          121.43060266971588          
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#33CCFF',
        strokeColor: '#33CCFF',
        strokeWidth: 1,

        id: 'law&social' 
      },  {
        coordinates : [
          [
          25.0383659348987,
          121.43032908439636
          ],
          [
          25.03776325687951,
          121.42994284629823
          ],
          [
          25.037199458632386,  
          121.42993211746214
          ],
          [
          25.037102251776155,
          121.43219590187071
          ],
          [
          25.03764660917894,
          121.43201351165771
          ],
          [
          25.037899345723325,
          121.43121957778929
          ],
          [
          25.037899345723325,
          121.43040418624878
          ],
          [
          25.0383659348987,
          121.43032908439636
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#FF5511',
        strokeColor: '#FF5511',
        strokeWidth: 1,

        id: 'manage&night'
      },  {
        coordinates : [
          [
          25.03774867592303,
          121.42992675304413          
          ],
          [
          25.03617878279982,
          121.42868757247923          
          ],
          [
          25.03620308470404,
          121.4296907186508          
          ],
          [
          25.035512908750587,
          121.42964243888855          
          ],
          [
          25.03535737560522,
          121.42984092235565          
          ],
          [
          25.03561011686629,
          121.4305007457733          
          ],
          [
          25.03717515692556,
          121.43058657646178          
          ],
          [
          25.0372091793138,
          121.42990529537202          
          ],
          [
          25.03774867592303,
          121.42992675304413          
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#FFFF33',
        strokeColor: '#FFFF33',
        strokeWidth: 1,

        id: 'eat&mandorm'
      },{
        coordinates : [
          [
          25.035755928895426,
          121.43274843692778          
          ],
          [
          25.035401119322277,
          121.43182039260864          
          ],
          [
          25.034613730028585,
          121.43186330795287          
          ],
          [
          25.034623450914875,
          121.43209934234619          
          ],
          [
          25.034200591649288,
          121.43214762210845          
          ],
          [
          25.03423947532078,
          121.43331170082092          
          ],
          [
          25.034307521716208,
          121.43323123455048          
          ],
          [
          25.0344144516899,
          121.43314003944397          
          ],
          [
          25.034521381570418,
          121.43308103084563          
          ],
          [
          25.03466719489363,
          121.43308103084563          
          ],
          [
          25.034803287172288,
          121.43312394618987          
          ],
          [
          25.035755928895426,
          121.43274843692778          
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#A500CC',
        strokeColor: '#A500CC',
        strokeWidth: 1,

        id: 'language'
      },  {
        coordinates : [
          [
          25.038745037296756,
          121.43173456192017
          ],
          [
          25.037899345723325,
          121.43123030662535
          ],
          [
          25.03764660917894,
          121.432067155838
          ],
          [
          25.036655099245237,
          121.43253922462463
          ],
          [
          25.0365578919576,
          121.43286108970642
          ],
          [
          25.03768549175813,
          121.43356919288637
          ],
          [
          25.038745037296756,
          121.43173456192017
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#0066FF',
        strokeColor: '#0066FF',
        strokeWidth: 1,

        id: 'PE'
      },  {
        coordinates : [
          [
          25.037238341353326,
          121.4342987537384
          ],
          [
          25.03695644134735,
          121.43411636352539
          ],
          [
          25.035955205054947,
          121.43419146537781
          ],
          [
          25.036519009020964,
          121.43553256988524          
          ],
          [
          25.037238341353326,
          121.4342987537384
          ]
        ],
        type: 'polygon',
        alpha:0.3,
        fillColor: '#FF44AA',
        strokeColor: '#FF44AA',
        strokeWidth: 1,

        id: 'art'
      }
      ]
    };   
}
  onUserLocationChange(location) {
    var current_lat = location.latitude;
    var current_long = location.longitude;
    setCenterCoordinateZoomLevelAnimated(mapRef, current_lat, current_long, 17);
    console.log(location);
  }
  onLongPress(location) {
    console.log(location);
  }
  onOpenAnnotation(annotation) {
    console.log(annotation);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.title}>
            <Text style={styles.text}>迷霧森林</Text>
          </View>
        </View>

        <Mapbox
          annotations={this.state.annotations}
          accessToken={'pk.eyJ1IjoieXVrbzk5IiwiYSI6ImNpbG9vajM4ZDA4azh0bG0xY3Rpb3J4dHcifQ.aXwrnx9XiPycXWSx84pPkA'}
          centerCoordinate={this.state.center}
          debugActive={false}
          direction={10}
          ref={mapRef}
          onRegionChange={this.onRegionChange}
          rotateEnabled={true}
          scrollEnabled={true}
          style={styles.container}
          showsUserLocation={true}
          userLocationVisible={true}
          //styleURL={this.mapStyles.emerald}
          //userTrackingMode={this.userTrackingMode.none}
          zoomEnabled={true}
          zoomLevel={15} //0~21
          compassIsHidden={true}
          onUserLocationChange={this.onUserLocationChange.bind(this)}
          onLongPress={this.onLongPress}
          //onUpdateUserLocation={this.onUserLocationChange}
          onOpenAnnotation={this.onOpenAnnotation}
          logoIsHidden={true}/>
      

      <View style={styles.bottom}>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.button} onPress={this._findTheDot.bind(this)}>
              <View style={styles.btn}>
               <Text>　　尋找　</Text>
              </View>
              <View style={styles.btn}>
                <Image style={styles.dot} source={{uri:dot}} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.cnt}>
            <TouchableOpacity>
              <View style={styles.cnt}>
                <Text style={styles.cnt_text}>{Rnum}</Text>
              </View>
            </TouchableOpacity>
          </View> 
          <View style={styles.newflag}>
            <TouchableOpacity style={styles.flag_button} onPress={this._pressButton.bind(this)}>
              <View style={styles.newflag}>
                <Text>　留下足跡 ...　</Text>
              </View>
            </TouchableOpacity>
          </View> 
      </View>
      <View style={styles.tab}>
      </View>
    </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:　'#F0FFF0', 
  },
    top: {
      flex: .125,
      flexDirection: 'row',
    },
      title: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
    box: {
      flex: 9,
      alignItems: 'center',
      justifyContent: 'center',
    },
      text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold',
        color: '#000',
      },
    bottom: {
      flex: .125,
      flexDirection: 'row',
    },
      btn: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
       button: {
        flexDirection: 'row',
        backgroundColor: '#dd99ff',
        justifyContent: 'center',
        borderRadius: 4,
      },      
        btn_text: {
          fontSize: 20,
          margin: 10,
          fontWeight: 'bold',
          color: '#000',
        },
        dot: {
          width: 30,
          height: 30,
          resizeMode: 'contain',
        },
      cnt: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
        cnt_text: {
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
          fontWeight: 'bold',
          color: '#000',
        },
      newflag: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
       flag_button: {
        flexDirection: 'row',
        backgroundColor: '#ffbb99',
        justifyContent: 'center',
        borderRadius: 4,
        height: 32,
      },
    tab: {
      flex: .125,
      backgroundColor:'#F0FFF0',
    },
});

module.exports = Map;