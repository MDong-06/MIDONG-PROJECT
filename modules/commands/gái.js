module.exports.config = {
  name: "gái",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thắng",
  description: "Random ảnh girl",
  commandCategory: "Random-IMG",
  usages: "gái",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/2SKrp2u.jpg",
"https://i.imgur.com/OlbhP3I.jpg",
"https://i.imgur.com/tv8YAqH.jpg",
"https://i.imgur.com/ck9lOWc.jpg",
"https://i.imgur.com/YfIrxAo.jpg",
"https://i.imgur.com/Zjzx5LB.jpg",
"https://i.imgur.com/I7Gkerg.jpg",
"https://i.imgur.com/GRoq1bw.jpg",
"https://i.imgur.com/RkrvTXD.jpg",
"https://i.imgur.com/dpm9YSJ.jpg",
"https://i.imgur.com/dbTFwnL.jpg",
"https://i.imgur.com/NniVjSX.jpg",
"https://i.imgur.com/sPTDj7J.jpg",
"https://i.imgur.com/eKO5bbW.jpg",
"https://i.imgur.com/e8Hs2LK.jpg",
"https://i.imgur.com/JB9Ma7r.jpg",
"https://i.imgur.com/skZasjw.jpg",
"https://i.imgur.com/uzlkEbQ.jpg",
"https://i.imgur.com/etPLICr.jpg",
"https://i.imgur.com/qDCx7ZN.jpg",
"https://i.imgur.com/9pcXEs7.jpg",
"https://i.imgur.com/UgcqVy6.jpg",
"https://i.imgur.com/87tIKH3.jpg",
"https://i.imgur.com/ISLIYWY.jpg",
"https://i.imgur.com/MWzaNIp.jpg",
"https://i.imgur.com/phQvE2O.jpg",
"https://i.imgur.com/rWn34JA.jpg",
"https://i.imgur.com/EazwRhR.jpg",
"https://i.imgur.com/KDMhunJ.jpg",
"https://i.imgur.com/08RUzA6.jpg",
"https://i.imgur.com/kpFhb0p.jpg",
"https://i.imgur.com/Ap5k1pG.jpg",
"https://i.imgur.com/hPqyBrA.jpg",
"https://i.imgur.com/giLgkEc.jpg",
"https://i.imgur.com/YENMRSS.jpg",
"https://i.imgur.com/WJLKBbf.jpg",
"https://i.imgur.com/7Whaezd.jpg",
"https://i.imgur.com/8w3EYPR.jpg",
"https://i.imgur.com/47dMIkP.jpg",
"https://i.imgur.com/tDfrVtL.jpg",
"https://i.imgur.com/CA6ArRA.jpg",
"https://i.imgur.com/nLrLI5a.jpg",
"https://i.imgur.com/dw3BhAm.jpg",
"https://i.imgur.com/pC2aXuC.jpg",
"https://i.imgur.com/YP28MO8.jpg",
"https://i.imgur.com/KFwCJys.jpg",
"https://i.imgur.com/ArLIBjf.jpg",
"https://i.imgur.com/6CVZ99N.jpg",
"https://i.imgur.com/8j6zktC.jpg",
"https://i.imgur.com/J9bRu0G.jpg",
"https://i.imgur.com/HZOBVcd.jpg",
"https://i.imgur.com/MoozhQ4.jpg",
"https://i.imgur.com/D7SErWN.jpg",
"https://i.imgur.com/Y92A06z.jpg",
"https://i.imgur.com/t1nXKRE.jpg",
"https://i.imgur.com/G4ZkJgb.jpg",
"https://i.imgur.com/KDrZUTI.jpg",
"https://i.imgur.com/BIGAkv6.jpg",
"https://i.imgur.com/jzd9SOz.jpg",
"https://i.imgur.com/ZP8Rt6X.jpg",
"https://i.imgur.com/QlakQZO.jpg",
"https://i.imgur.com/oa9mUMc.jpg",
"https://i.imgur.com/CaaGAlS.jpg",
"https://i.imgur.com/myWiaZq.jpg",
"https://i.imgur.com/SU3Ahjv.jpg",
"https://i.imgur.com/gpFOq8u.jpg",
"https://i.imgur.com/8djscvM.jpg",
"https://i.imgur.com/UUTCTH8.jpg",
"https://i.imgur.com/IBfQmpC.jpg",
"https://i.imgur.com/ZYBotms.jpg",
"https://i.imgur.com/PKXpOLt.jpg",
"https://i.imgur.com/Fbmn8pJ.jpg",
"https://i.imgur.com/COqwBC1.jpg",
"https://i.imgur.com/H3AvmJf.jpg",
"https://i.imgur.com/EWIwuLd.jpg",
"https://i.imgur.com/6jwc14e.jpg",
"https://i.imgur.com/P6ZeoXS.jpg",
"https://i.imgur.com/XuLiXEn.jpg",
"https://i.imgur.com/PePdM8G.jpg",
"https://i.imgur.com/GFlJZrX.jpg",
"https://i.imgur.com/xGTYbOn.jpg",
"https://i.imgur.com/zvSZRzy.jpg",
"https://i.imgur.com/Ryu6QWZ.jpg",
"https://i.imgur.com/c1jWpDB.jpg",
"https://i.imgur.com/UE8usdY.jpg",
"https://i.imgur.com/kNi5OwZ.jpg",
"https://i.imgur.com/4zqMGJM.jpg",
"https://i.imgur.com/h3EJCxZ.jpg",
"https://i.imgur.com/5Utsv72.jpg",
"https://i.imgur.com/2bxwpSN.jpg",
"https://i.imgur.com/GIgsDE7.jpg",
"https://i.imgur.com/ELw4MXY.jpg",
"https://i.imgur.com/6RNNMsS.jpg",
"https://i.imgur.com/zB86OHv.jpg",
"https://i.imgur.com/aLMebPV.jpg",
"https://i.imgur.com/b4vmkJc.jpg",
"https://i.imgur.com/16CDKNK.jpg",
"https://i.imgur.com/h1VBTPR.jpg",
"https://i.imgur.com/YChnU4J.jpg",
"https://i.imgur.com/oMqh9tK.jpg",
"https://i.imgur.com/oQvLuRQ.jpg",
"https://i.imgur.com/kGDQlEo.jpg",
"https://i.imgur.com/Z5Ss9PX.jpg",
"https://i.imgur.com/zp7aeRK.jpg",
"https://i.imgur.com/fk0NwMN.jpg",
"https://i.imgur.com/HIj5GcF.jpg",
"https://i.imgur.com/QSACPLy.jpg",
"https://i.imgur.com/7U2V2jM.jpg",
"https://i.imgur.com/pwwCcFh.jpg",
"https://i.imgur.com/ig1aqOp.jpg",
"https://i.imgur.com/JQOU5F3.jpg",
"https://i.imgur.com/18hfC7q.jpg",
"https://i.imgur.com/X1JzQpd.jpg",
"https://i.imgur.com/Xak0cS8.jpg",
"https://i.imgur.com/KBNHQwK.jpg",
"https://i.imgur.com/UnqYXdZ.jpg",
"https://i.imgur.com/eMbGZ4t.jpg",
"https://i.imgur.com/LVkwzaJ.jpg",
"https://i.imgur.com/TyM0dUS.jpg",
"https://i.imgur.com/aPpMYin.jpg",
"https://i.imgur.com/KPGE405.jpg",
"https://i.imgur.com/rpGR5bx.jpg",
"https://i.imgur.com/71wOpEu.jpg",
"https://i.imgur.com/e2xuLjB.jpg",
"https://i.imgur.com/7jaK4D2.jpg",
"https://i.imgur.com/IT8yhUM.jpg",
"https://i.imgur.com/6zg0uxN.jpg",
"https://i.imgur.com/w7KAi99.jpg",
"https://i.imgur.com/A1dtgTQ.jpg",
"https://i.imgur.com/geL27rv.jpg",
"https://i.imgur.com/D73XkSb.jpg",
"https://i.imgur.com/va0ms79.jpg",
"https://i.imgur.com/Pye2LvP.jpg",
"https://i.imgur.com/KuF7iNW.jpg",
"https://i.imgur.com/Jg197E5.jpg",
"https://i.imgur.com/m49l3uE.jpg",
"https://i.imgur.com/oqeYvrw.jpg",
"https://i.postimg.cc/P5trBYxV/172775346-123918253252068-2102626980051622383-n.jpg",
"https://i.postimg.cc/nh0cZr9F/200334998-116476810662879-8276134121970366200-n.jpg",
"https://i.postimg.cc/zvZqpR6j/240158615-162581826052377-8523678178204578520-n.jpg",
"https://i.postimg.cc/N0ns9nxZ/240672764-173950671582159-4608395208819502450-n.jpg",
"https://i.postimg.cc/6Qq6QKCd/241179573-149147074062519-1877653884812096404-n.jpg",
"https://i.postimg.cc/mDFbQSXk/241230696-157171143260112-7934560549275342134-n.jpg",
"https://i.postimg.cc/G3GLtqTS/241341079-175707984739761-7337459266933401806-n.jpg",
"https://i.postimg.cc/nr4pWhtt/241342754-149443587366201-2291360039206931062-n.jpg",
"https://i.postimg.cc/mrPRswGj/241461881-166262375684322-924968466708548897-n.jpg",
"https://i.postimg.cc/J7N8M0Sf/241479260-175070064803553-7036084814371565221-n.jpg",
"https://i.postimg.cc/7hkySrJt/241505364-428023478718147-785778795948756982-n.jpg",
"https://i.postimg.cc/ZR3S95ny/241546344-167676882209538-6234147779263235840-n.jpg",
"https://i.postimg.cc/Jz6mvFSt/241565538-150150293962197-8259387505590516661-n.jpg",
"https://i.postimg.cc/13t1GH4S/242091121-156046100039283-380060867800578540-n.jpg",
"https://i.postimg.cc/Znxzcsrb/242384059-164209922556234-256235901597578295-n.jpg",
"https://i.postimg.cc/W4xVbkNv/242400561-165803022396924-5086677504604738084-n.jpg",
"https://i.postimg.cc/YqtH9kHh/242430585-158600489783844-7367627965628180531-n.jpg",
"https://i.postimg.cc/RZD5XHnH/243168603-228944332749459-132478258009076504-n.jpg",
"https://i.postimg.cc/1txxZ1BR/244968434-175790071398219-6017877933733187947-n.jpg",
"https://i.postimg.cc/HL8GKkQP/245256485-173194924991067-5276520860724184338-n.jpg",
"https://i.postimg.cc/5NpMQG4p/246702893-178005837843309-2932521689644840248-n.jpg",
"https://i.postimg.cc/gjdfny1f/254007586-189722430004983-5012656765537255913-n.jpg",
"https://i.postimg.cc/ZR6Gbss8/258585411-436870164500145-4046560458954420858-n.jpg",
"https://i.postimg.cc/T19BmL6h/259164086-200797135564179-7638911198676060137-n.jpg",
"https://i.postimg.cc/5N4hJ3Bz/263093353-208575798119646-9094829618631075043-n.jpg",
"https://i.postimg.cc/tRtK8fxy/264433362-441346384052523-8951103239290547622-n.jpg",
"https://i.postimg.cc/xT6W1z54/268597823-222033763440516-4853679892394076951-n.jpg",
"https://i.postimg.cc/g2r1X2Bk/269815221-229324922711400-2005289245832992595-n.jpg",
"https://i.postimg.cc/g25Qvbfy/270465891-226327139677845-2684258203782247843-n.jpg",
"https://i.postimg.cc/fb9FCgNG/270598542-227645212879371-4553798268322598136-n.jpg",
"https://i.postimg.cc/W3cyH6ph/271640006-463975121789649-667349735834578780-n.jpg",
"https://i.postimg.cc/cH7zyg6T/271654900-232570075720218-2521563039874170502-n.jpg",
"https://i.postimg.cc/nVkW3Dyh/271825896-236032855373940-7222734720576414966-n.jpg",
"https://i.postimg.cc/4yBFyD69/272787198-250853713891854-8573012141414273761-n.jpg",
"https://i.postimg.cc/brzBzytP/272803839-470961597757668-731771586925543160-n.jpg",
"https://i.postimg.cc/NfjzS0t7/273182988-648811146442168-6253942538852908557-n.jpg",
"https://i.postimg.cc/90ZXPH0f/1cf0af6a26cd5f8307afe5a301c2f7db.jpg",
"https://i.postimg.cc/52x9zGVx/2498c4d24df63032670ce511ad00abd9.jpg",
"https://i.postimg.cc/J434G8S6/27167d597d746129a031adb6bd1dcf94.jpg",
"https://i.postimg.cc/MGHWPQHN/343875ae9c9050ce098116.jpg",
"https://i.postimg.cc/4493RVPT/3d187790031e99ebb6da5468c0437d70.jpg",
"https://i.postimg.cc/L8N93T9j/648f79aa1005d863fb2cc8c85102fe99.jpg",
"https://i.postimg.cc/GpfbZms2/795aa9cf40f18cafd5e013.jpg",
"https://i.postimg.cc/ZKz5bnsv/858c0b2cfc7af5ec03bbc159ab96c395.jpg",
"https://i.postimg.cc/3RD37QgZ/9b416d2d9b13574d0e0210.jpg",
"https://i.postimg.cc/tJ3yZdvZ/a-nh-ga-i-xinh-die-n-a-o-da-i-Sie-u-de-thu-o-ng1.jpg",
"https://i.postimg.cc/02v9g3rp/a-nh-ga-i-xinh-die-n-a-o-da-i-Sie-u-de-thu-o-ng2.jpg",
"https://i.postimg.cc/J7ZR2m7r/b2232e0d7a837addc9b7b435efbe9939.jpg",
"https://i.postimg.cc/8PbNTHrx/bbafa2204b1e8740de0f14.jpg",
"https://i.postimg.cc/VvQmkZgP/cc165e0e9473ef2ee5c83bd5a13e1ec8.jpg",
"https://i.postimg.cc/8zPDc6Rc/Chu-m-a-nh-ga-i-xinh-2k4-mu-o-n-mo-n-tuo-i-da-y-thi-6.jpg",
"https://i.postimg.cc/RZsmHZdR/ga-i-xinh-50.jpg",
"https://i.postimg.cc/8CxVZXqf/ga-i-xinh-die-n-a-o-da-i1.jpg",
"https://i.postimg.cc/pT8M4YHG/ga-i-xinh-ga-i-e-p-ma-t-sie-u-de-thu-o-ng17.jpg",
"https://i.postimg.cc/kGmPm6Mn/ga-i-xinh-ga-i-e-p-ma-t-sie-u-de-thu-o-ng36.jpg",
"https://i.postimg.cc/DfrKcg5m/ga-i-xinh-ga-i-e-p-ma-t-sie-u-de-thu-o-ng48.jpg",
"https://i.postimg.cc/KvmhpMsf/ga-i-xinh-ga-i-e-p-ma-t-sie-u-de-thu-o-ng56.jpg",
"https://i.postimg.cc/GtxwhL9v/ga-i-xinh-ma-t-thie-n-tha-n6.jpg",
"https://i.postimg.cc/rpDkC2YL/GA-I-XINH-E-P-SEXY-28.jpg",
"https://i.postimg.cc/c4TypLpS/hayvnnet-tuyen-tap-gai-xinh-dang-chuan-chao-thang-5-cuc-manh2-B252812529.jpg",
"https://i.postimg.cc/2S6RrfYB/hot-gymer-quang-ninh-so-huu-body-hap-dan-trieu-co-gai-uoc-ao-hinh-16.jpg",
"https://i.postimg.cc/3xcMwbrf/Nhu-ng-co-ga-i-e-p-nhu-ng-na-ng-ga-i-xinh-so-hu-u-gu-o-ng-ma-t-nhu-thie-n-tha-n3.jpg",
"https://i.postimg.cc/MGMCfbv6/suahloanhnong1.jpg",
"https://i.postimg.cc/GpJGhVRG/119a05a0aa1766493f0627.jpg",
"https://i.postimg.cc/gkQvM34X/34d4db1775a0b9fee0b1111.jpg",
"https://i.postimg.cc/rFK1CfG2/4f7b4957e6e02abe73f138.jpg",
"https://i.postimg.cc/8zvLxsny/6ed740e3ef54230a7a4533.jpg",
"https://i.postimg.cc/Xv09W3Rn/710dd93f7688bad6e39931.jpg",
"https://i.postimg.cc/B6mF2FXv/7210bf39108edcd0859f37.jpg",
"https://i.postimg.cc/76H7C9Pc/a4fe21198dae41f018bf8.jpg",
"https://i.postimg.cc/GtNs51Pw/a9d0daf9754eb910e05f36.jpg",
"https://i.postimg.cc/T1hD0PDJ/eaf24bcae47d2823716c26.jpg",
"https://i.postimg.cc/CLB8fzYF/f2afdfc77170bd2ee461100.jpg",
"https://i.postimg.cc/YSX5PfwN/004aab23822f4d71143e8.jpg",
"https://i.postimg.cc/x1PDvVx4/1ffeae90879c48c2118d12.jpg",
"https://i.postimg.cc/sfGknhHS/416dea1dc3110c4f550024.jpg",
"https://i.postimg.cc/nzCyfjHy/43e4718d588197dfce9010.jpg",
"https://i.postimg.cc/vHRpCZCK/44982ae903e5ccbb95f417.jpg",
"https://i.postimg.cc/k4zkJJGB/52ba66cb4fc78099d9d616.jpg",
"https://i.postimg.cc/W4bRSYxb/62eb67edabd1648f3dc010.jpg",
"https://i.postimg.cc/Y0FTj5L8/64b725dd0cd1c38f9ac07.jpg",
"https://i.postimg.cc/dt8zFKYV/aa85e0e9c9e506bb5ff427.jpg",
"https://i.postimg.cc/DwnRyYvd/bee99398ba9475ca2c8515.jpg",
     ];
     var callback = () => api.sendMessage({body:`=== 『 𝗔̉𝗡𝗛 𝗚𝗔́𝗜 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗔𝗱𝘂𝘂 𝘅𝗶𝗻𝗵 𝘁𝗵𝗶𝗲̣̂𝗰𝗰 𝗰𝗮́𝗰 𝗲𝗺 💖\n→ 𝗦𝗼̂́ 𝗮̉𝗻𝗵: 1 tỷ`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };