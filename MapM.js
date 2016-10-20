import React, { 
  Component,
  PropTypes,
} from 'react';

import Mapbox, { MapView } from 'react-native-mapbox-gl';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
  ListView,
  ScrollView
} from 'react-native';

import NewFlag from './NewFlag';
import config from './config.js';

var dot = 'http://i.imgur.com/8DKYOcP.png';
//var W_cat = 'http://i.imgur.com/vdxn5yp.png';
//var M_broom = 'http://i.imgur.com/8DKYOcP.png';
var Rnum;
var count = 0;
var user = config.user;
var friend = config.friend;
var friendName;
var newfriend = config.newfriend;
var newfriendName;
var userLatitude;
var userLongtitude;
var friendLatitude = null;
var friendLongtitude = null;
var newfriendLatitude = null;
var newfriendLongtitude = null;
var myFirebaseRef = new Firebase('https://fittogether.firebaseio.com/');
const accessToken = 'pk.eyJ1IjoieXVrbzk5IiwiYSI6ImNpbG9vajM4ZDA4azh0bG0xY3Rpb3J4dHcifQ.aXwrnx9XiPycXWSx84pPkA';
Mapbox.setAccessToken(accessToken);

export  default  class  MapW  extends  Component {

  constructor(props){
    super(props);

    //var myFirebaseRef = new Firebase('https://fittogether.firebaseio.com/');

    //--------friend--------
    this.itemsRefFN = myFirebaseRef.child('user/' + friend + '/name').on("value", function(snapshot) {
      //alert(snapshot.val());  
      console.log('what I get from firebase (friendname) : ' + snapshot.val());
      friendName = snapshot.val();

    }, function (errorObject) {
      console.log("The read friendName failed: " + errorObject.code);
    });

    this.itemsRefLon = myFirebaseRef.child('user/' + friend + '/self/longtitude').on("value", function(snapshot) {
      //alert(snapshot.val());  
      console.log('what I get from firebase (friendLongtitude) : ' + snapshot.val());
      friendLongtitude = snapshot.val();

    }, function (errorObject) {
      console.log("The read friendLongtitude failed: " + errorObject.code);
    });

    this.itemsRefLat = myFirebaseRef.child('user/' + friend + '/self/latitude').on("value", function(snapshot) {
      //alert(snapshot.val());  
      console.log('what I get from firebase (friendLatitude) : ' + snapshot.val());
      friendLatitude = snapshot.val();

    }, function (errorObject) {
      console.log("The read friendLatitude failed: " + errorObject.code);
    });

    //--------new friend--------
    this.itemsRefNFN = myFirebaseRef.child('user/' + newfriend + '/name').on("value", function(snapshot) {
      //alert(snapshot.val());  
      console.log('what I get from firebase (newfriendname) : ' + snapshot.val());
      newfriendName = snapshot.val();

    }, function (errorObject) {
      console.log("The read friendName failed: " + errorObject.code);
    });

    this.itemsRefNLon = myFirebaseRef.child('user/' + newfriend + '/self/longtitude').on("value", function(snapshot) {
      //alert(snapshot.val());  
      console.log('what I get from firebase (newfriendLongtitude) : ' + snapshot.val());
      newfriendLongtitude = snapshot.val();

    }, function (errorObject) {
      console.log("The read friendLongtitude failed: " + errorObject.code);
    });

    this.itemsRefNLat = myFirebaseRef.child('user/' + newfriend + '/self/latitude').on("value", function(snapshot) {
      //alert(snapshot.val());  
      console.log('what I get from firebase (newfriendLatitude) : ' + snapshot.val());
      newfriendLatitude = snapshot.val();

    }, function (errorObject) {
      console.log("The read friendLatitude failed: " + errorObject.code);
    });

    this.itemsRefSelf = myFirebaseRef.child('user/' + user + '/self'); // child *********
    // this.itemsRefSelf.update({
    //     longtitude: 0,  
    //     latitude: 0,      
    // });
    
  }

  _pressButton() {
        const { navigator } = this.props;
        // if(count > 4)
        // {
          if(navigator) {
              navigator.push({
                  name: 'NewFlag',
                  component: NewFlag,   

                  params: {
                      userLongtitude: userLongtitude,
                      userLatitude: userLatitude
                  }            
              })
          }
        // }
        // else
        // {
        //   alert("至少要收集 5 支掃叟哦 !");
        // }
  }

  state = {
    center: {
      latitude: 25.036285,
      longitude: 121.432582
    },
    userTrackingMode: Mapbox.userTrackingMode.followWithCourse,
    annotations: [{
      coordinates:  [
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
    }, {
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
      }, {
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
      }, {
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
      },
      {
        coordinates: [friendLatitude, friendLongtitude],
        type: 'point',
        id: 'friend',
       
        annotationImage: {
          source: { uri: 'friendw' },
          height: 30,
          width: 30
        }
      }
    ]
  };

  onRegionDidChange = (location) => {
    this.setState({ currentZoom: location.zoomLevel });
    console.log('onRegionDidChange', location);
  };
  onRegionWillChange = (location) => {
    console.log('onRegionWillChange', location);
  };
  onUpdateUserLocation = (location) => {
    console.log('onUpdateUserLocation', location);
    userLatitude=location.latitude;
    userLongtitude=location.longitude;

    if(userLongtitude != null && userLatitude != null)
    {
      this.itemsRefSelf.update({
          longtitude: userLongtitude,  
          latitude: userLatitude,      
      });
    }
    if(Math.abs(userLatitude-newfriendLatitude)<0.00025 && Math.abs(userLongtitude-newfriendLongtitude)<0.00015){
      
      alert(" 有同好剛剛經過你喲 <3 \n 去悄悄話交流看看吧  !!");
     
    }
  };
  //點擊marker(地圖上的貓或掃叟)做距離判斷及消失與否
  onOpenAnnotation = (annotation) => {
    if(annotation.id !== 'friend'  && Math.abs(annotation.latitude-userLatitude)<0.0005 && Math.abs(annotation.longitude-userLongtitude)<0.00033){
      this.state = {
      annotations: this.state.annotations.filter(a =>  {
        //在annotation上該id不應存在的會消逝
        if(a.id !== annotation.id)
        {   
            return a;
        }  

      })
    }
      count++;
  }
    // reloading
    this.forceUpdate();
  };
  onRightAnnotationTapped = (e) => {
    console.log('onRightAnnotationTapped', e);
  };
  onLongPress = (location) => {
    console.log('onLongPress', location);
  };
  onTap = (location) => {
    console.log('onTap', location);
  };
  onChangeUserTrackingMode = (userTrackingMode) => {
    this.setState({ userTrackingMode });
    console.log('onChangeUserTrackingMode', userTrackingMode);
  };

  componentWillMount() {
    this._offlineProgressSubscription = Mapbox.addOfflinePackProgressListener(progress => {
      console.log('offline pack progress', progress);
    });
    this._offlineMaxTilesSubscription = Mapbox.addOfflineMaxAllowedTilesListener(tiles => {
      console.log('offline max allowed tiles', tiles);
    });
    this._offlineErrorSubscription = Mapbox.addOfflineErrorListener(error => {
      console.log('offline error', error);
    });
  }

  componentWillUnmount() {
    this._offlineProgressSubscription.remove();
    this._offlineMaxTilesSubscription.remove();
    this._offlineErrorSubscription.remove();
  }

  //找尋貓與掃叟
  addNewMarkers = () => {

    count = 0;
    Rnum = Math.floor((Math.random() * 10) + 1);
    this.state = {
      annotations: this.state.annotations.filter(a =>  {

        if(a.id !== 'small Paris') //小巴黎
        if(a.id !== 'fu circle') //輔園
        if(a.id !== 'clothing') //織品
        if(a.id !== 'literature library') //公博樓
        if(a.id !== 'education collage') //教育學院
        if(a.id !== 'gi gen building') //積健樓
        if(a.id !== 'old medical') //舊醫學大樓
        if(a.id !== 'night school') //進修部
        if(a.id !== 'FAHY') //FAHY
        if(a.id !== 'social technology') //社科院
        if(a.id !== 'shan yen building') //聖言樓
        if(a.id !== 'icecream') //輔大冰淇淋
        if(a.id !== 'College Of Human Ecology') //民生學院
        if(a.id !== 'wind slide square') //風華廣場
        if(a.id !== 'guo si building') //國璽樓
        if(a.id !== 'people circle') //仁園
        if(a.id !== 'lo yell la') //羅耀拉
        if(a.id !== 'forgein language') //外語學院
        if(a.id !== 'yee may girl dorm') //宜美女宿
        if(a.id !== 'broadcast collage') //傳播學院
        if(a.id !== 'center beautiful building') //中美堂
        if(a.id !== 'lee ma do') //利瑪竇
        if(a.id !== 'heart circle') //心園
        if(a.id !== 'hundred') //百鍊聽
        if(a.id !== 'Vienna') //維也納森林
        if(a.id !== 'true beautiful') //真善美聖
        if(a.id !== 'art collage') //藝術學院
        if(a.id !== 'literature collage') //文學院
        if(a.id !== 'literature circle') //文園
        if(a.id !== 'law') //法律學院
        if(a.id !== 'go boy dorm') //格物男宿
        if(a.id !== 'couple pull') //情人批
        if(a.id !== 'building of su') //舒德樓
        if(a.id !== 'lee circle') //理園
        if(a.id !== 'yee true girl dorm') //宜真女宿

          return a;
      })
    }
    
    // Treat annotations as immutable and create a new one instead of using .push()
    if(Rnum == 1 ){

    this.setState({
      annotations: [ ...this.state.annotations, {
        coordinates: [25.03290770255513, 121.43403589725494],
        type: 'point',
        id: 'true beautiful',
        title: '真善美聖',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.035051169149014, 121.43165946006775],
        type: 'point',
        id: 'couple pull',
        title: '情人坡',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.034613730028585, 121.43293619155884],
        type: 'point',
        id: 'small Paris',
        title: '小巴黎',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036130178976897, 121.43083333969116],
        type: 'point',
        id: 'lo yell la',
        title: '羅耀拉',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036966162047996, 121.4298892021179],
        type: 'point',
        id: 'heart circle',
        title: '心園',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037218899994397, 121.43120884895325],
        type: 'point',
        id: 'lee ma do',
        title: '利瑪竇',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.038521464229383, 121.43138051033019],
        type: 'point',
        id: 'guo si building',
        title: '國璽樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037549402677048, 121.4323353767395],
        type: 'point',
        id: 'gi gen building',
        title: '積健樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036839792879498, 121.43331170082092],
        type: 'point',
        id: 'broadcast collage',
        title: '傳播學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036344035653652, 121.43504977226256],
        type: 'point',
        id: 'art collage',
        title: '藝術學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03517754016007, 121.43322587013245],
        type: 'point',
        id: 'clothing',
        title: '織品',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03433182399113, 121.43403053283691],
        type: 'point',
        id: 'fu circle',
        title: '輔園',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [friendLatitude, friendLongtitude],
        type: 'point',
        id: 'friend',
        title: friendName,
        subtitle: '感應到上次在此出沒 ...',
        annotationImage: {
          source: { uri: 'friendw' },
          height: 30,
          width: 30
        }
      },
      ]
    });
  }
  else if(Rnum == 2 ){
    this.setState({
      annotations: [ ...this.state.annotations, {
        coordinates: [25.03290770255513, 121.43403589725494],
        type: 'point',
        id: 'true beautiful',
        title: '真善美聖',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03459428825369, 121.43221735954285],
        type: 'point',
        id: 'Vienna',
        title: '維也納森林',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.0354886067096, 121.43144488334656],
        type: 'point',
        id: 'shan yen building',
        title: '聖言樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036382918645756, 121.43220663070679],
        type: 'point',
        id: 'law',
        title: '法律學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.035770510088796, 121.43037199974059],
        type: 'point',
        id: 'FAHY',
        title: '濟時樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037627167884715, 121.43023252487183],
        type: 'point',
        id: 'night school',
        title: '進修部',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.038521464229383, 121.43138051033019],
        type: 'point',
        id: 'guo si building',
        title: '國璽樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037879904469175, 121.43198132514954],
        type: 'point',
        id: 'center beautiful building',
        title: '中美堂',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037141134527882, 121.43393397331239],
        type: 'point',
        id: 'education collage',
        title: '教育學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036091295904694, 121.43428802490233],
        type: 'point',
        id: 'literature library',
        title: '公博樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.035352515191246, 121.43419146537781],
        type: 'point',
        id: 'College Of Human Ecology',
        title: '民生學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.0338943823057, 121.43380522727965],
        type: 'point',
        id: 'building of su',
        title: '舒德樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [friendLatitude, friendLongtitude],
        type: 'point',
        id: 'friend',
        title: friendName,
        subtitle: '感應到上次在此出沒 ...',
        annotationImage: {
          source: { uri: 'friendw' },
          height: 30,
          width: 30
        }
      },
      ]
    });
  }
  else if(Rnum == 3 ){
    this.setState({
      annotations: [ ...this.state.annotations, {
        coordinates: [25.03290770255513, 121.43403589725494],
        type: 'point',
        id: 'true beautiful',
        title: '真善美聖',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03459428825369, 121.43221735954285],
        type: 'point',
        id: 'forgein language',
        title: '外語學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.035323352703386, 121.43073678016661],
        type: 'point',
        id: 'lee circle',
        title: '理園',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036752306455835, 121.4319062232971],
        type: 'point',
        id: 'social technology',
        title: '社會學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03646068459294, 121.42969608306883],
        type: 'point',
        id: 'people circle',
        title: '仁園',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037218899994397, 121.43120884895325],
        type: 'point',
        id: 'lee ma do',
        title: '利瑪竇',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03795766946733, 121.43111228942873],
        type: 'point',
        id: 'old medical',
        title: '舊醫學大樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037131413841102, 121.4323568344116],
        type: 'point',
        id: 'wind slide square',
        title: '風華廣場',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036839792879498, 121.43331170082092],
        type: 'point',
        id: 'broadcast collage',
        title: '傳播學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036344035653652, 121.43504977226256],
        type: 'point',
        id: 'art collage',
        title: '藝術學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03517754016007, 121.43322587013245],
        type: 'point',
        id: 'clothing',
        title: '織品',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03476926411677, 121.43459916114807],
        type: 'point',
        id: 'icecream',
        title: '輔大冰淇淋',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [friendLatitude, friendLongtitude],
        type: 'point',
        id: 'friend',
        title: friendName,
        subtitle: '感應到上次在此出沒 ...',
        annotationImage: {
          source: { uri: 'friendw' },
          height: 30,
          width: 30
        }
      },
      ]
    });
  }
  else if(Rnum == 4 ){
    this.setState({
      annotations: [ ...this.state.annotations, {
        coordinates: [25.03290770255513, 121.43403589725494],
        type: 'point',
        id: 'true beautiful',
        title: '真善美聖',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.034613730028585, 121.43293619155884],
        type: 'point',
        id: 'small Paris',
        title: '小巴黎',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.035896880358834, 121.4317774772644],
        type: 'point',
        id: 'hundred',
        title: '百鍊廳',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036130178976897, 121.43083333969116],
        type: 'point',
        id: 'lo yell la',
        title: '羅耀拉',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036966162047996, 121.4298892021179],
        type: 'point',
        id: 'heart circle',
        title: '心園',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037627167884715, 121.43023252487183],
        type: 'point',
        id: 'night school',
        title: '進修部',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.038521464229383, 121.43138051033019],
        type: 'point',
        id: 'guo si building',
        title: '國璽樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03701476553966, 121.43287181854247],
        type: 'point',
        id: 'literature circle',
        title: '文園',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
       coordinates: [25.037141134527882, 121.43393397331239],
        type: 'point',
        id: 'education collage',
        title: '教育學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036091295904694, 121.43428802490233],
        type: 'point',
        id: 'literature library',
        title: '公博樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03585799721269, 121.43452405929564],
        type: 'point',
        id: 'yee may girl dorm',
        title: '宜美宿舍',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.034808147608015, 121.43378376960754],
        type: 'point',
        id: 'yee true girl dorm',
        title: '宜真宿舍',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [friendLatitude, friendLongtitude],
        type: 'point',
        id: 'friend',
        title: friendName,
        subtitle: '感應到上次在此出沒 ...',
        annotationImage: {
          source: { uri: 'friendw' },
          height: 30,
          width: 30
        }
      },
      ]
    });
  }
  else if(Rnum == 5 ){
    this.setState({
      annotations: [ ...this.state.annotations, {
        coordinates: [25.03290770255513, 121.43403589725494],
        type: 'point',
        id: 'true beautiful',
        title: '真善美聖',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03459428825369, 121.43221735954285],
        type: 'point',
        id: 'Vienna',
        title: '維也納森林',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.035323352703386, 121.43073678016661],
        type: 'point',
        id: 'lee circle',
        title: '理園',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036382918645756, 121.43220663070679],
        type: 'point',
        id: 'law',
        title: '法律學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.035770510088796, 121.43037199974059],
        type: 'point',
        id: 'FAHY',
        title: '濟時樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037627167884715, 121.43023252487183],
        type: 'point',
        id: 'night school',
        title: '進修部',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.038521464229383, 121.43138051033019],
        type: 'point',
        id: 'guo si building',
        title: '國璽樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037549402677048, 121.4323353767395],
        type: 'point',
        id: 'gi gen building',
        title: '積健樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03633431490372, 121.4333653450012],
        type: 'point',
        id: 'literature collage',
        title: '文學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036091295904694, 121.43428802490233],
        type: 'point',
        id: 'literature library',
        title: '公博樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03517754016007, 121.43322587013245],
        type: 'point',
        id: 'clothing',
        title: '織品',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.0338943823057, 121.43380522727965],
        type: 'point',
        id: 'building of su',
        title: '舒德樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [friendLatitude, friendLongtitude],
        type: 'point',
        id: 'friend',
        title: friendName,
        subtitle: '感應到上次在此出沒 ...',
        annotationImage: {
          source: { uri: 'friendw' },
          height: 30,
          width: 30
        }
      },
      ]
    });
  }
  else if(Rnum == 6 ){
    this.setState({
      annotations: [ ...this.state.annotations, {
        coordinates: [25.03290770255513, 121.43403589725494],
        type: 'point',
        id: 'true beautiful',
        title: '真善美聖',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03459428825369, 121.43221735954285],
        type: 'point',
        id: 'forgein language',
        title: '外語學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.035051169149014, 121.43165946006775],
        type: 'point',
        id: 'couple pull',
        title: '情人坡',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036752306455835, 121.4319062232971],
        type: 'point',
        id: 'social technology',
        title: '社會學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.035770510088796, 121.43037199974059],
        type: 'point',
        id: 'FAHY',
        title: '濟時樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037218899994397, 121.43120884895325],
        type: 'point',
        id: 'lee ma do',
        title: '利瑪竇',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.038521464229383, 121.43138051033019],
        type: 'point',
        id: 'guo si building',
        title: '國璽樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037131413841102, 121.4323568344116],
        type: 'point',
        id: 'wind slide square',
        title: '風華廣場',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03633431490372, 121.4333653450012],
        type: 'point',
        id: 'literature collage',
        title: '文學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036344035653652, 121.43504977226256],
        type: 'point',
        id: 'art collage',
        title: '藝術學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03585799721269, 121.43452405929564],
        type: 'point',
        id: 'yee may girl dorm',
        title: '宜美學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03476926411677, 121.43459916114807],
        type: 'point',
        id: 'icecream',
        title: '輔大冰淇淋',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [friendLatitude, friendLongtitude],
        type: 'point',
        id: 'friend',
        title: friendName,
        subtitle: '感應到上次在此出沒 ...',
        annotationImage: {
          source: { uri: 'friendw' },
          height: 30,
          width: 30
        }
      },
      ]
    });
  }
  else if(Rnum == 7 ){
    this.setState({
      annotations: [ ...this.state.annotations, {
        coordinates: [25.03290770255513, 121.43403589725494],
        type: 'point',
        id: 'true beautiful',
        title: '真善美聖',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.034613730028585, 121.43293619155884],
        type: 'point',
        id: 'small Paris',
        title: '小巴黎',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.034983123166068, 121.43106937408446],
        type: 'point',
        id: 'go boy dorm',
        title: '格物宿舍',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036382918645756, 121.43220663070679],
        type: 'point',
        id: 'law',
        title: '法律學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03646068459294, 121.42969608306883],
        type: 'point',
        id: 'people circle',
        title: '仁園',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037627167884715, 121.43023252487183],
        type: 'point',
        id: 'night school',
        title: '進修部',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03795766946733, 121.43111228942873],
        type: 'point',
        id: 'old medical',
        title: '舊醫學大樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03701476553966, 121.43287181854247],
        type: 'point',
        id: 'literature circle',
        title: '文園',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03633431490372, 121.4333653450012],
        type: 'point',
        id: 'literature collage',
        title: '文學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036344035653652, 121.43504977226256],
        type: 'point',
        id: 'art collage',
        title: '藝術學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.035352515191246, 121.43419146537781],
        type: 'point',
        id: 'College Of Human Ecology',
        title: '民生學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03433182399113, 121.43403053283691],
        type: 'point',
        id: 'fu circle',
        title: '輔園',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [friendLatitude, friendLongtitude],
        type: 'point',
        id: 'friend',
        title: friendName,
        subtitle: '感應到上次在此出沒 ...',
        annotationImage: {
          source: { uri: 'friendw' },
          height: 30,
          width: 30
        }
      },
      ]
    });
  }
  else if(Rnum == 8 ){
    this.setState({
      annotations: [ ...this.state.annotations, {
        coordinates: [25.03290770255513, 121.43403589725494],
        type: 'point',
        id: 'true beautiful',
        title: '真善美聖',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03459428825369, 121.43221735954285],
        type: 'point',
        id: 'Vienna',
        title: '維也納森林',
        annotationImage: {
              source: { uri: 'broom' },
              height: 30,
              width: 15
          }
      }, {
        coordinates: [25.035896880358834, 121.4317774772644],
        type: 'point',
        id: 'hundred',
        title: '百鍊廳',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036752306455835, 121.4319062232971],
        type: 'point',
        id: 'social technology',
        title: '社會學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036966162047996, 121.4298892021179],
        type: 'point',
        id: 'heart circle',
        title: '心園',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037218899994397, 121.43120884895325],
        type: 'point',
        id: 'lee ma do',
        title: '利瑪竇',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.038521464229383, 121.43138051033019],
        type: 'point',
        id: 'guo si building',
        title: '國璽樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037879904469175, 121.43198132514954],
        type: 'point',
        id: 'center beautiful building',
        title: '中美堂',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036839792879498, 121.43331170082092],
        type: 'point',
        id: 'broadcast collage',
        title: '傳播學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036091295904694, 121.43428802490233],
        type: 'point',
        id: 'literature library',
        title: '公博樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03585799721269, 121.43452405929564],
        type: 'point',
        id: 'yee may girl dorm',
        title: '宜美宿舍',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.0338943823057, 121.43380522727965],
        type: 'point',
        id: 'building of su',
        title: '舒德樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [friendLatitude, friendLongtitude],
        type: 'point',
        id: 'friend',
        title: friendName,
        subtitle: '感應到上次在此出沒 ...',
        annotationImage: {
          source: { uri: 'friendw' },
          height: 30,
          width: 30
        }
      },
      ]
    });
  }
  else if(Rnum == 9 ){
    this.setState({
      annotations: [ ...this.state.annotations, {
        coordinates: [25.03290770255513, 121.43403589725494],
        type: 'point',
        id: 'true beautiful',
        title: '真善美聖',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03459428825369, 121.43221735954285],
        type: 'point',
        id: 'forgein language',
        title: '外語學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.0354886067096, 121.43144488334656],
        type: 'point',
        id: 'shan yen building',
        title: '聖言樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036130178976897, 121.43083333969116],
        type: 'point',
        id: 'lo yell la',
        title: '羅耀拉',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03646068459294, 121.42969608306883],
        type: 'point',
        id: 'people circle',
        title: '仁園',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037627167884715, 121.43023252487183],
        type: 'point',
        id: 'night school',
        title: '進修部',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.038521464229383, 121.43138051033019],
        type: 'point',
        id: 'guo si building',
        title: '國璽樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037131413841102, 121.4323568344116],
        type: 'point',
        id: 'wind slide square',
        title: '風華廣場',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037141134527882, 121.43393397331239],
        type: 'point',
        id: 'education collage',
        title: '教育學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036344035653652, 121.43504977226256],
        type: 'point',
        id: 'art collage',
        title: '藝術學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.035352515191246, 121.43419146537781],
        type: 'point',
        id: 'College Of Human Ecology',
        title: '民生學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03476926411677, 121.43459916114807],
        type: 'point',
        id: 'icecream',
        title: '輔大冰淇淋',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [friendLatitude, friendLongtitude],
        type: 'point',
        id: 'friend',
        title: friendName,
        subtitle: '感應到上次在此出沒 ...',
        annotationImage: {
          source: { uri: 'friendw' },
          height: 30,
          width: 30
        }
      },
      ]
    });
  }
  else if(Rnum == 10 ){
    this.setState({
      annotations: [ ...this.state.annotations, {
        coordinates: [25.03290770255513, 121.43403589725494],
        type: 'point',
        id: 'true beautiful',
        title: '真善美聖',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.034613730028585, 121.43293619155884],
        type: 'point',
        id: 'small Paris',
        title: '小巴黎',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.0354886067096, 121.43144488334656],
        type: 'point',
        id: 'shan yen building',
        title: '聖言樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036752306455835, 121.4319062232971],
        type: 'point',
        id: 'social technology',
        title: '社會學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.035770510088796, 121.43037199974059],
        type: 'point',
        id: 'FAHY',
        title: '濟時樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037627167884715, 121.43023252487183],
        type: 'point',
        id: 'night school',
        title: '進修部',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03795766946733, 121.43111228942873],
        type: 'point',
        id: 'old medical',
        title: '舊醫學大樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037549402677048, 121.4323353767395],
        type: 'point',
        id: 'gi gen building',
        title: '積健樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.037141134527882, 121.43393397331239],
        type: 'point',
        id: 'education collage',
        title: '教育學院',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.036091295904694, 121.43428802490233],
        type: 'point',
        id: 'literature library',
        title: '公博樓',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03517754016007, 121.43322587013245],
        type: 'point',
        id: 'clothing',
        title: '織品',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [25.03433182399113, 121.43403053283691],
        type: 'point',
        id: 'fu circle',
        title: '輔園',
        annotationImage: {
          source: { uri: 'broom' },
          height: 30,
          width: 15
        }
      }, {
        coordinates: [friendLatitude, friendLongtitude],
        type: 'point',
        id: 'friend',
        title: friendName,
        subtitle: '感應到上次在此出沒 ...',
        annotationImage: {
          source: { uri: 'friendw' },
          height: 30,
          width: 30
        }
      },
      ]
    });
  }
  else;
  //好友點 藉由尋找的btn觸發
  // if(friendLatitude != 0 && friendLongtitude !=0) {
  //   this.state = {
  //     annotations: [ ...this.state.annotations, {
  //       coordinates: [friendLatitude, friendLongtitude],
  //       type: 'point',
  //       id: 'friend',
  //       title: friendName,
  //       subtitle: '感應到上次在此出沒 ...',
  //       annotationImage: {
  //         source: { uri: 'friendw' },
  //         height: 30,
  //         width: 30
  //       }
  //     },
  //     ]
  //   };
  // }

};

  // updateMarker2 = () => {
  //   // Treat annotations as immutable and use .map() instead of changing the array
  //   this.setState({
  //     annotations: this.state.annotations.map(annotation => {
  //       if (annotation.id !== 'marker2') { return annotation; }
  //       return {
  //         coordinates: [40.714541341726175,-74.00579452514648],
  //         'type': 'point',
  //         title: 'New Title!',
  //         subtitle: 'New Subtitle',
  //         annotationImage: {
  //           source: { uri: 'broom' },
  //           height: 25,
  //           width: 25
  //         },
  //         id: 'marker2'
  //       };
  //     })
  //   });
  // };

  removeMarker = () => {
    this.setState({
      annotations: this.state.annotations.filter(a =>  {

        if(a.id !== 'small Paris') //{ return a; }
        if(a.id !== 'fu circle')
        if(a.id !== 'clothing')
        if(a.id !== 'literature library')
        if(a.id !== 'education collage')
        if(a.id !== 'gi gen building')
        if(a.id !== 'old medical')
        if(a.id !== 'night school')
        if(a.id !== 'FAHY')
        if(a.id !== 'social technology')
        if(a.id !== 'shan yen building')
        if(a.id !== 'icecream')
        if(a.id !== 'College Of Human Ecology')
        if(a.id !== 'wind slide square')
        if(a.id !== 'guo si building')
        if(a.id !== 'people circle')
        if(a.id !== 'lo yell la')
        if(a.id !== 'forgein language')
        if(a.id !== 'yee may girl dorm')
        if(a.id !== 'broadcast collage')
        if(a.id !== 'center beautiful building')
        if(a.id !== 'lee ma do')
        if(a.id !== 'heart circle')
        if(a.id !== 'hundred')
        if(a.id !== 'Vienna')
        if(a.id !== 'true beautiful')
        if(a.id !== 'art collage')
        if(a.id !== 'literature collage')
        if(a.id !== 'literature circle')
        if(a.id !== 'law')
        if(a.id !== 'go boy dorm')
        if(a.id !== 'couple pull')
        if(a.id !== 'building of su')
        if(a.id !== 'lee circle')
        if(a.id !== 'yee true girl dorm')
          return a;
      })
    })
    
      //annotations: this.state.annotations.filter(a => a.id !== 'FAHY' )

  };

  render() {
    StatusBar.setHidden(true);
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.title}>
            <Text style={styles.text}>迷霧森林</Text>
          </View>
        </View>

        <MapView
          ref={map => { this._map = map; }}
          style={styles.map}
          initialCenterCoordinate={this.state.center}
          initialZoomLevel={15}
          initialDirection={0}
          rotateEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showsUserLocation={true}
          //styleURL={Mapbox.mapStyles.dark}
          userTrackingMode={this.state.userTrackingMode}
          annotations={this.state.annotations}
          annotationsAreImmutable
          onChangeUserTrackingMode={this.onChangeUserTrackingMode.none}
          onRegionDidChange={this.onRegionDidChange}
          onRegionWillChange={this.onRegionWillChange}
          onOpenAnnotation={this.onOpenAnnotation}
          onRightAnnotationTapped={this.onRightAnnotationTapped}
          onUpdateUserLocation={this.onUpdateUserLocation}
          onLongPress={this.onLongPress}
          onTap={this.onTap}
        />

      <View style={styles.bottom}>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.button} onPress={this.addNewMarkers.bind(this)}>
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
                <Text style={styles.cnt_text}>{this._renderCounts()}</Text>
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
  
  _renderCounts() {
    return (
      <Text>
        {count}
      </Text>
    );
  }

}

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
    map: {
      flex: .75,
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

