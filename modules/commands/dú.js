/**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "dú",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "Random Ảnh Dú Gái Cực Bổ Mắt ( Lưu Ý Đây Là Lệnh Ảnh 18+ Cân Nhắc Trước Khi Sử Dụng)",
  commandCategory: "Random-IMG",
  usages: "dú",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
 "https://i.imgur.com/pRg5qET.jpg",
 "https://i.imgur.com/y6PnEJE.jpg",
 "https://i.imgur.com/FHNvIA0.jpg",
 "https://i.imgur.com/40GaVOO.jpg",
 "https://i.imgur.com/sG5lJe4.jpg",
 "https://i.imgur.com/CMbxtaB.jpg",
 "https://i.imgur.com/TZ105zu.jpg",
 "https://i.imgur.com/DEJab10.jpg",
 "https://i.imgur.com/ks4oOg4.jpg",
 "https://i.imgur.com/IMSU2FJ.jpg",
 "https://i.imgur.com/IMSU2FJ.jpg",
 "https://i.imgur.com/3FavLt7.jpg",
 "https://i.imgur.com/4rVr3TV.jpg",
 "https://i.imgur.com/sIDlURq.jpg",
 "https://i.imgur.com/LTmfxeo.jpg",
 "https://i.imgur.com/cLDbO90.jpg",
 "https://i.imgur.com/AF1JDbF.jpg",
 "https://i.imgur.com/NzkALfW.jpg",
 "https://i.imgur.com/lifdLYH.jpg",
 "https://i.imgur.com/4oEFZjF.jpg",
 "https://i.imgur.com/HPiSjRC.jpg",
 "https://i.imgur.com/RZxztwx.jpg",
 "https://i.imgur.com/NC9Xu3c.jpg",
 "https://i.imgur.com/sLrbig9.jpg",
 "https://i.imgur.com/nQgYnuI.jpg",
 "https://i.imgur.com/8zNLmU6.jpg",
 "https://i.imgur.com/f3vk2Kr.jpg",
 "https://i.imgur.com/FxYtbNa.jpg",
 "https://i.imgur.com/FV2WHHT.jpg",
 "https://i.imgur.com/2Cs24NV.jpg",
 "https://i.imgur.com/iZ3JCQQ.jpg",
 "https://i.imgur.com/EBT3hmi.jpg",
 "https://i.imgur.com/BRwv4Ck.jpg",
 "https://i.imgur.com/oF9RFzD.jpg",
 "https://i.imgur.com/FFUrVmh.jpg",
 "https://i.imgur.com/NtXg25A.jpg",
 "https://i.imgur.com/icZoYK4.jpg",
 "https://i.imgur.com/LJ3iZND.jpg",
 "https://i.imgur.com/U2APxYE.jpg",
 "https://i.imgur.com/dwnA7rP.jpg",
 "https://i.imgur.com/fQplZWY.jpg",
 "https://i.imgur.com/DDVVriA.jpg",
 "https://i.imgur.com/w9lzk5O.jpg",
 "https://i.imgur.com/xCwtn75.jpg",
 "https://i.imgur.com/UlupTxZ.jpg",
 "https://i.imgur.com/T7z4Ke2.jpg",
 "https://i.imgur.com/ptyKC2y.jpg",
 "https://i.imgur.com/R6IANqE.jpg",
 "https://i.imgur.com/wGhgwgo.jpg",
 "https://i.imgur.com/IY4WbUz.jpg",
 "https://i.imgur.com/09VdsI2.jpg",
 "https://i.imgur.com/I8PjDKj.jpg",
 "https://i.imgur.com/3HqGJhw.jpg",
 "https://i.imgur.com/JHppwej.jpg",
 "https://i.imgur.com/NQ05CGP.jpg",
 "https://i.imgur.com/ysd9446.jpg",
 "https://i.imgur.com/s2LGLR0.jpg",
 "https://i.imgur.com/jpSnpzo.jpg",
 "https://i.imgur.com/73bi7YD.jpg",
 "https://i.imgur.com/j6Yb4lt.jpg",
 "https://i.imgur.com/1koOc6p.jpg",
 "https://i.imgur.com/etPi54j.jpg",
 "https://i.imgur.com/YiX4yS9.jpg",
 "https://i.imgur.com/bMs7pZD.jpg",
 "https://i.imgur.com/cUvihXS.jpg",
 "https://i.imgur.com/fIKZn8w.jpg",
 "https://i.imgur.com/cx6R7kE.jpg",
 "https://i.imgur.com/A2LNaxQ.jpg",
 "https://i.imgur.com/ELOC3TQ.jpg",
 "https://i.imgur.com/1aR2NiQ.jpg",
 "https://i.imgur.com/VJr12NV.jpg",
 "https://i.imgur.com/QYqkHDG.jpg",
 "https://i.imgur.com/rQYj4n6.jpg",
 "https://i.imgur.com/71CTDot.jpg",
 "https://i.imgur.com/L2emsEt.jpg",
 "https://i.imgur.com/EJbGaqx.jpg",
 "https://i.imgur.com/N44LhXM.jpg",
 "https://i.imgur.com/yRBuo11.jpg",
 "https://i.imgur.com/NlxnQ59.jpg",
 "https://i.imgur.com/CCG8HI2.jpg",
 "https://i.imgur.com/wuivKM0.jpg",
 "https://i.imgur.com/6xaWClG.jpg",
 "https://i.imgur.com/dUFyENn.jpg",
 "https://i.imgur.com/R2z9D49.jpg",
 "https://i.imgur.com/vdgp60Q.jpg",
 "https://i.imgur.com/TxPiuEm.jpg",
 "https://i.imgur.com/ihMwIEt.jpg",
 "https://i.imgur.com/ZnOET7L.jpg",
 "https://i.imgur.com/FUqt1tH.jpg",
 "https://i.imgur.com/AaJgzLp.jpg",
 "https://i.imgur.com/5X7Nhus.jpg",
 "https://i.imgur.com/mvgxkIV.jpg",
 "https://i.imgur.com/CcjNaLN.jpg",
 "https://i.imgur.com/kW5pE8q.jpg",
 "https://i.imgur.com/iZowivb.jpg",
 "https://i.imgur.com/b1GFFR5.jpg",
 "https://i.imgur.com/F2bREnY.jpg",
 "https://i.imgur.com/3UJKAE9.jpg",
 "https://i.imgur.com/4MdQVYH.jpg",
 "https://i.imgur.com/OvZDUWD.jpg",
 "https://i.imgur.com/XkveQzu.jpg",
 "https://i.imgur.com/xl5Xvem.jpg",
 "https://i.imgur.com/lHcNHpO.jpg",
 "https://i.imgur.com/OdwZDNM.jpg",
 "https://i.imgur.com/tK5LfDo.jpg",
 "https://i.imgur.com/7Gwdck8.jpg",
 "https://i.imgur.com/6GLlgMm.jpg",
 "https://i.imgur.com/cI3sPMX.jpg",
 "https://i.imgur.com/qdpAz9D.jpg",
 "https://i.imgur.com/KCpToPG.jpg",
 "https://i.imgur.com/OdwZDNM.jpg",
 "https://i.imgur.com/gNoiQ1S.jpg",
 "https://i.imgur.com/D4da2RD.jpg",
 "https://i.imgur.com/FRx4q4F.jpg",
 "https://i.imgur.com/PBh8h0c.jpg",
 "https://i.imgur.com/B1DoMjW.jpg",
 "https://i.imgur.com/vPvtHTG.jpg",
 "https://i.imgur.com/99NHaI7.jpg",
 "https://i.imgur.com/ecyCQvr.jpg",
 "https://i.imgur.com/CpbKXNb.jpg",
 "https://i.imgur.com/X2BmpO3.jpg",
 "https://i.imgur.com/ENhF9SY.jpg",
 "https://i.imgur.com/4nB8n51.jpg",
 "https://i.imgur.com/m2wKvRA.jpg",
 "https://i.imgur.com/UaupnMB.jpg",
 "https://i.imgur.com/p4PFHFv.jpg",
 "https://i.imgur.com/F9pNp2E.jpg",
 "https://i.imgur.com/2JG2N7E.jpg",
 "https://i.imgur.com/SGReyeG.jpg",
 "https://i.imgur.com/TwfEGPH.jpg",
 "https://i.imgur.com/flxVpyd.jpg",
 "https://i.imgur.com/bGWUZKF.jpg",
 "https://i.imgur.com/HhG0Wjq.jpg",
 "https://i.imgur.com/kGw8EBS.jpg",
 "https://i.imgur.com/jIr8RX2.jpg",
 "https://i.imgur.com/AOFNeLA.jpg",
 "https://i.imgur.com/dGAost4.jpg",
 "https://i.imgur.com/uLknKoJ.jpg",
 "https://i.imgur.com/RXP9628.jpg",
 "https://i.imgur.com/UQHsdPU.jpg",
 "https://i.imgur.com/aJqkHbN.jpg",
 "https://i.imgur.com/n3Aqzyd.jpg",
 "https://i.imgur.com/uXzwwSv.jpg",
 "https://i.imgur.com/qvG4Ejo.jpg",
 "https://i.imgur.com/ovfmT5W.jpg",
 "https://i.imgur.com/oGSGsNf.jpg",
 "https://i.imgur.com/M71wUs6.jpg",
 "https://i.imgur.com/OMEuUtn.jpg",
 "https://i.imgur.com/NniVjSX.jpg",
 "https://i.imgur.com/DVM4p9d.jpg",
 "https://i.imgur.com/IMY4OEF.jpg",
 "https://i.imgur.com/l1hVJ1U.jpg",
 "https://i.imgur.com/D6Tm831.jpg",
 "https://i.imgur.com/pwFoVfY.jpg",
 "https://i.imgur.com/t1LbojG.jpg",
 "https://i.imgur.com/tpOhVKE.jpg",
 "https://i.imgur.com/ZUG1cGv.jpg",
 "https://i.imgur.com/WoBjRsy.jpg",
 "https://i.imgur.com/sS1SBfc.jpg",
 "https://i.imgur.com/6dQEV6k.jpg",
 "https://i.imgur.com/jqFmxmn.jpg",
 "https://i.imgur.com/WI0YflD.jpg",
 "https://i.imgur.com/1OiBCLP.jpg",
 "https://i.imgur.com/bOu9yYv.jpg",
 "https://i.imgur.com/8rfjGOS.jpg",
 "https://i.imgur.com/8V73XNa.jpg",
 "https://i.imgur.com/tLdkJV3.jpg",
 "https://i.imgur.com/aBSQpXm.jpg",
 "https://i.imgur.com/0DFLNvJ.jpg",
 "https://i.imgur.com/UAn1JgE.jpg",
 "https://i.imgur.com/FpLf7ib.jpg",
 "https://i.imgur.com/snm7yfj.jpg",
 "https://i.imgur.com/sgrH5aV.jpg",
 "https://i.imgur.com/hoPNSCR.jpg",
 "https://i.imgur.com/jEMTKTx.jpg",
 "https://i.imgur.com/ts1BemO.jpg",
 "https://i.imgur.com/IAWtACk.jpg",
 "https://i.imgur.com/JMqx1LR.jpg",
 "https://i.imgur.com/LRJuN6K.jpg",
 "https://i.imgur.com/AH88XVK.jpg",
 "https://i.imgur.com/gj0R0xq.jpg",
 "https://i.imgur.com/AETxJJD.jpg",
 "https://i.imgur.com/MbFvHCn.jpg",
 "https://i.imgur.com/Q8zLydl.jpg",
 "https://i.imgur.com/UsJENqe.jpg",
 "https://i.imgur.com/xpJpU6R.jpg",
 "https://i.imgur.com/9ZTOJQi.jpg",
 "https://i.imgur.com/KMQGjnU.jpg",
 "https://i.imgur.com/T1q0fWY.jpg",
 "https://i.imgur.com/gJFIBc3.jpg",
 "https://i.imgur.com/lsGAlYb.jpg",
 "https://i.imgur.com/5LPpKwg.jpg",
 "https://i.imgur.com/dztFRd7.jpg",
 "https://i.imgur.com/FxchIKS.jpg",
 "https://i.imgur.com/P73sgEK.jpg",
 "https://i.imgur.com/ScNfipI.jpg",
 "https://i.imgur.com/gqsPMnJ.jpg",
 "https://i.imgur.com/30ll2w8.jpg",
 "https://i.imgur.com/fn24mug.jpg",
 "https://i.imgur.com/u1iVigr.jpg",
 "https://i.imgur.com/e5oK2ND.jpg",
 "https://i.imgur.com/FKGxYuS.jpg",
 "https://i.imgur.com/Ojy5NSz.jpg",
 "https://i.imgur.com/In7aus1.jpg",
 "https://i.imgur.com/PudGnyV.jpg",
 "https://i.imgur.com/wHJC0JE.jpg",
 "https://i.imgur.com/em9fNTq.jpg",
 "https://i.imgur.com/j92kGtW.jpg",
 "https://i.imgur.com/dv1OU4v.jpg",
 "https://i.imgur.com/xmuwQeK.jpg",
 "https://i.imgur.com/EnRZhEp.jpg",
 "https://i.imgur.com/6X2Xuvn.jpg",
 "https://i.imgur.com/9Ll7J9h.jpg",
 "https://i.imgur.com/scuJpXq.jpg",
 "https://i.imgur.com/RILekj6.jpg",
 "https://i.imgur.com/OCt2ovb.jpg",
 "https://i.imgur.com/FLvki2A.jpg",
 "https://i.imgur.com/ZX25OpU.jpg",
 "https://i.imgur.com/rXuXFp7.jpg",
 "https://i.imgur.com/24PvOAV.jpg",
 "https://i.imgur.com/Ijq7hcy.jpg",
 "https://i.imgur.com/fql0QZw.jpg",
 "https://i.imgur.com/9QthcXG.jpg",
 "https://i.imgur.com/gDkSKjI.jpg",
 "https://i.imgur.com/HEBMuCi.jpg",
 "https://i.imgur.com/fMXkoXe.jpg",
 "https://i.imgur.com/IyDnwue.jpg",
 "https://i.imgur.com/BBokm2J.jpg",
 "https://i.imgur.com/kwMVWTX.jpg",
 "https://i.imgur.com/h1rX6yW.jpg",
 "https://i.imgur.com/aCGJdDe.jpg",
 "https://i.imgur.com/HtQpVpk.jpg",
 "https://i.imgur.com/CT1DdiB.jpg",
 "https://i.imgur.com/NC2dNVQ.jpg",
 "https://i.imgur.com/EKUEhc6.jpg",
 "https://i.imgur.com/iVcieYh.jpg",
 "https://i.imgur.com/YOMhsVr.jpg",
 "https://i.imgur.com/YI6g3r8.jpg",
 "https://i.imgur.com/XTM6cSN.jpg",
 "https://i.imgur.com/bMyb5do.jpg",
 "https://i.imgur.com/y09R7i7.jpg",
 "https://i.imgur.com/9WEoZkj.jpg",
 "https://i.imgur.com/ZpSEeF0.jpg",
 "https://i.imgur.com/IT0NnVf.jpg",
 "https://i.imgur.com/AJUXVEW.jpg",
 "https://i.imgur.com/4pVvXGa.jpg",
 "https://i.imgur.com/aZrA8KV.jpg",
 "https://i.imgur.com/xqgrVb0.jpg",
 "https://i.imgur.com/jGm5k9b.jpg",
 "https://i.imgur.com/VVVpnHQ.jpg",
 "https://i.imgur.com/hfIoLBw.jpg",
 "https://i.imgur.com/xQvjLgi.jpg",
 "https://i.imgur.com/gBaHQQ7.jpg",
 "https://i.imgur.com/SOLBlNI.jpg",
 "https://i.imgur.com/bIG2oeL.jpg",
 "https://i.imgur.com/3IzD6t8.jpg",
 "https://i.imgur.com/oxfhgDm.jpg",
 "https://i.imgur.com/j1Ckt2C.jpg",
 "https://i.imgur.com/WU9I3ae.jpg",
 "https://i.imgur.com/2EhHbym.jpg",
 "https://i.imgur.com/9KyGRVE.jpg",
 "https://i.imgur.com/Vn9R6uZ.jpg",
 "https://i.imgur.com/0pqY9VB.jpg",
 "https://i.imgur.com/eMNFy5Q.jpg",
 "https://i.imgur.com/q7fttuL.jpg",
 "https://i.imgur.com/Kag1Bp3.jpg",
 "https://i.postimg.cc/K8b0Pvzy/194290927-113432477633979-1224909257786179582-n.jpg",
 "https://i.postimg.cc/fbT5P2m2/201034733-125136939796866-7789490736021663641-n.jpg",
 "https://i.postimg.cc/mgS88fz1/239803489-143957694581457-1559095017672212956-n.jpg",
 "https://i.postimg.cc/MTn56ns1/240131184-145536501090243-6582678601954987175-n.jpg",
 "https://i.postimg.cc/FRwZ7hq8/240181519-164520859191807-8573544782657241490-n.jpg",
 "https://i.postimg.cc/xjb5BbN2/240529975-169504288693464-7809960437520509723-n.jpg",
 "https://i.postimg.cc/xTvR1DPp/240655565-148222474154979-132215561903338801-n.jpg",
 "https://i.postimg.cc/rsW94v2m/241060948-177478537896039-7286543256909518271-n.jpg",
 "https://i.postimg.cc/3x9F2XVg/241252318-148222540821639-8371561568404747269-n.jpg",
 "https://i.postimg.cc/cLdcK99x/241347606-169393442037882-243526049572956501-n.jpg",
 "https://i.postimg.cc/tgTtk1G8/241515378-154655226845037-8736339382749832252-n.jpg",
 "https://i.postimg.cc/ncb2xcqQ/247090368-178542624456297-521124634018329037-n.jpg",
 "https://i.postimg.cc/BvV5Vqqb/257386139-196938319283394-1670397472646319125-n.jpg",
 "https://i.postimg.cc/KjXPmJ3y/259441418-199889852321574-7487620754943953489-n.jpg",
 "https://i.postimg.cc/h4x82WN4/261175198-206271978350028-5811079553929682196-n.jpg",
 "https://i.postimg.cc/pXHf7ctf/265982312-214844127492813-1236086116455268420-n.jpg",
 "https://i.postimg.cc/CLsGVCFW/268950364-216367860673773-7334362440152316456-n.jpg",
 "https://i.postimg.cc/QdNpNBCV/269504284-222755206701705-3231309028939526887-n.jpg",
 "https://i.postimg.cc/6pHC894c/270282205-230117575965468-4063898853652977037-n.jpg",
 "https://i.postimg.cc/PJmmJY1v/271134797-456475285872966-8876350206358335376-n.jpg",
 "https://i.postimg.cc/nLCB76vJ/271656210-461473155373179-2980242163389474907-n.jpg",
 "https://i.postimg.cc/LXPPQLCQ/271793859-231928582451034-4492058161988456537-n.jpg",
 "https://i.postimg.cc/tgwPz25V/271801782-463365701850591-5728345316440405911-n.jpg",
 "https://i.postimg.cc/QCrT2Cv8/271901288-463646655155829-5763819091563724919-n.jpg",
 "https://i.postimg.cc/d3mywvK8/272046446-236925571951335-4422122764237725253-n.jpg",
 "https://i.postimg.cc/pVD8DQnp/272193749-237964275180798-1597224103837255399-n.jpg",
 "https://i.postimg.cc/c403TKQT/272988170-1270016636869651-5778310935264758534-n.jpg",
 "https://i.postimg.cc/65cvP9cK/272996729-250781673899058-5075090889356536863-n.jpg",
 "https://i.postimg.cc/bwvtcKVt/273604215-248814487429110-7368494625544786866-n.jpg",
 "https://i.postimg.cc/9QNqWJsN/273684061-249520380691854-3285028032621870790-n.jpg",
 "https://i.postimg.cc/vHfPx6Gz/4d0e9e4c7d5fb101e84e.jpg",
 "https://i.postimg.cc/BvLPt20Z/b52fd59a3789fbd7a298.jpg",
"https://i.postimg.cc/x8Dcqz8m/026e608b3fa9f3f7aab814.jpg",
"https://i.postimg.cc/hj7XSrDg/09c265283a0af654af1b13.jpg",
"https://i.postimg.cc/HkBc3nvG/1000c4af9b8d57d30e9c6.jpg",
"https://i.postimg.cc/tgc1QfH2/1824daca85e849b610f99.jpg",
"https://i.postimg.cc/nhH9vBkY/1dd2f504d2e646f6b651bbc5355074a7.jpg",
"https://i.postimg.cc/QxDF31RG/7172a3e5f0c73c9965d6.jpg",
"https://i.postimg.cc/tgJ1cb8s/7d38e3dcbcfe70a029ef18.jpg",
"https://i.postimg.cc/3NXWGx0c/a33196d5c9f705a95ce616.jpg",
"https://i.postimg.cc/2jh1M297/a56b6e8231a0fdfea4b110.jpg",
"https://i.postimg.cc/NjJFmVLB/b9e0ee07b1257d7b243419.jpg",
"https://i.postimg.cc/g2krwdzg/g1-WNWann-PBm3j-M8-St-U7j.jpg",
"https://i.postimg.cc/TYcpYh6y/image.jpg",
"https://i.postimg.cc/5tKrxP19/1114a4934dad81f3d8bc23.jpg",
"https://i.postimg.cc/VvnZWmt5/119576562-687579251851580-7076085859685093065-n-1600162818-246-width650height800.jpg",
"https://i.postimg.cc/YqBsqLcF/149467469-1643309909205298-7233888850399250913-o-1.jpg",
"https://i.postimg.cc/y8vQPfDh/1572924969-345-h-nh1-1572413143-width720height704.jpg",
"https://i.postimg.cc/v8VKsLKM/17589d376b09a757fe189.jpg",
"https://i.postimg.cc/gkyBwcdT/20180820-085451-39811587-285139052278512-5444369963966005248-n.jpg",
"https://i.postimg.cc/9QWgy3QF/20210530-gai-mac-bikini-3-617x926.jpg",
"https://i.postimg.cc/wMmZ4DCq/241b0dafe49128cf718041.jpg",
"https://i.postimg.cc/25jpjbZG/36fcdb7c2d42e11cb8535.jpg",
"https://i.postimg.cc/tTmBj73s/3dcfe4460d78c126986926.jpg",
"https://i.postimg.cc/ZYBGqhCG/472c076ff0513c0f65404.jpg",
"https://i.postimg.cc/gjC4x5Bd/4bb7b02b5915954bcc0420.jpg",
"https://i.postimg.cc/027hpdGZ/562f5841ae7f62213b6e8.jpg",
"https://i.postimg.cc/x8JtTY5t/6b01af9746a98af7d3b817.jpg",
"https://i.postimg.cc/ZYWSydDD/6fb1783f91015d5f041031.jpg",
"https://i.postimg.cc/ZYG1BDNC/77c84742ae7c62223b6d28.jpg",
"https://i.postimg.cc/05hqGyT5/7b7c52c9bbf777a92ee638.jpg",
"https://i.postimg.cc/rmzvWBgt/86d20febf8d5348b6dc42.jpg",
"https://i.postimg.cc/NMWPX55W/88370425-138706214308230-6978091185463650284-n.jpg",
"https://i.postimg.cc/YqgBdw76/8c2196907faeb3f0eabf33.jpg",
"https://i.postimg.cc/Jny2tb4N/90297391-2932487136872949-3025359935211831296-n-306x400.jpg",
"https://i.postimg.cc/JzmvKDP8/9246ce2b0795f4208e5ba8b5aeb5e6a2.jpg",
"https://i.postimg.cc/JzqgFr2k/984a1b70ec4e2010795f3.jpg",
"https://i.postimg.cc/g2HFPqnr/9d8bf3391a07d6598f1640.jpg",
"https://i.postimg.cc/NjcqVPGW/9f2ecba73d99f1c7a8886.jpg",
"https://i.postimg.cc/YS0Xy1F5/a33975ae9c9050ce098112.jpg",
"https://i.postimg.cc/HnDBxRNm/af1778208f1e43401a0f1.jpg",
"https://i.postimg.cc/hGYCFfbf/anh-11-1625554469-499-width650height650.jpg",
"https://i.postimg.cc/ZRywJ4Vj/anh-13-1591865238-327-width650height812.jpg",
"https://i.postimg.cc/5yBpFpcC/anh-gai-xinh-nobra.jpg",
"https://i.postimg.cc/SQCg5QXx/be50e5d40ceac0b499fb24.jpg",
"https://i.postimg.cc/L6SxMdfB/bi-dot-nhap-vao-phong-luc-dang-ngu-nang-hot-girl-xinh-dep-khien-fan-sung-sot-khi-lo-anh-giuong-chieu.jpg",
"https://i.postimg.cc/dVtnL85h/ce580fefe6d12a8f73c036.jpg",
"https://i.postimg.cc/jjDXhR0K/d081ee1b0725cb7b923419.jpg",
"https://i.postimg.cc/MTRmhtpF/d089050fec31206f792025.jpg",
"https://i.postimg.cc/NfxpsNkh/ef918d06-nhin-ngam-loat-anh-khoe-vong-1-goi-cam-cua-hotgirl-khien-fan-nam-chang-muon-lay-vo-nguoidep.jpg",
"https://i.postimg.cc/wMpQHJtT/f85d9fee76d0ba8ee3c135.jpg",
"https://i.postimg.cc/cCBMJHY7/FA8fa-UBXs-AAHJmo.jpg",
"https://i.postimg.cc/MGgYPgqB/gai-1-12.jpg",
"https://i.postimg.cc/W1W8rhyX/gai-1-2.jpg",
"https://i.postimg.cc/52R5yDHr/gai-xinh-11.jpg",
"https://i.postimg.cc/Ghbx5FwX/gai-xinh-khong-mac-ao-nguc.jpg",
"https://i.postimg.cc/4NwQkYXs/gai-xinh-khong-mac-bra-min.jpg",
"https://i.postimg.cc/9QMtWcfT/gai-xinh-mac-noi-y-sieu-mong-4.jpg",
"https://i.postimg.cc/Y91QX9Xc/Gai-xxinh-nguc-khung.jpg",
"https://i.postimg.cc/8kRb4y3F/girl-khong-ao-nguc.jpg",
"https://i.postimg.cc/Ss0W78f7/hot-girl-ca-mau-khoe-dang-voi-do-ngu-caro-xinh-nhu-bup-be-15-1595498215-246-width600height693.jpg",
"https://i.postimg.cc/656C0BnS/hot-girl-quang-ngai-nong-bong-voi-loat-anh-sexy-2.jpg",
"https://i.postimg.cc/brpk4hMZ/huong-chuka-2k4.jpg",
"https://i.postimg.cc/t4YPKDrN/imager-12-4324-700.jpg",
"https://i.postimg.cc/sxm7rLdw/ngam-gai-xinh-giup-tang-tuoi-tho.jpg",
"https://i.postimg.cc/tCrWv8zg/Nguyen-Phuong-Thao-6-min.jpg",
"https://i.postimg.cc/BZBxHjLH/ranh-bung-sau-hun-hut-hiem-co-kho-tim-cua-kieu-nu-xinh-dep-que-xu-hoa-da-lat-f92-5233555.jpg",
"https://i.postimg.cc/pL48R84b/rgrehh-20200619154222.jpg",
"https://i.postimg.cc/JhXXn0Cy/su-ah.jpg",
"https://i.postimg.cc/vBdV6yG0/su-ah-15.jpg",
"https://i.postimg.cc/QtkWQzth/su-ah-lo-anh-nong-1.jpg",
"https://i.postimg.cc/fyzSBvtX/t-i-xu-ng.jpg",
"https://i.postimg.cc/L5xY7ZLW/t-i-xu-ng.jpg",
"https://i.postimg.cc/Y2RWjTZx/tu-linh-hot-girl-nguc-khung-lo-anh-nong-vu-40gb-link-19.jpg",
"https://i.postimg.cc/KvKVWr7t/00457867d6d01a8e43c156.jpg",
"https://i.postimg.cc/76xdtFXL/01304c4de2fa2ea477eb85.jpg",
"https://i.postimg.cc/mrQW5Nsm/020b92053db2f1eca8a317.jpg",
"https://i.postimg.cc/pXg7Mhk4/02587579dace16904fdf41.jpg",
"https://i.postimg.cc/Xqqh49RS/08765e2af09d3cc3658c59.jpg",
"https://i.postimg.cc/nrWWzCxs/09669f1d31aafdf4a4bb83.jpg",
"https://i.postimg.cc/kGjmyJm9/0dff24dd886a44341d7b14.jpg",
"https://i.postimg.cc/D0zV09bN/15a75989f73e3b60622f54.jpg",
"https://i.postimg.cc/y6nsKPS5/1a0407e4ab53670d3e427.jpg",
"https://i.postimg.cc/FsRmHLyK/1f7dfe5f51e89db6c4f942.jpg",
"https://i.postimg.cc/sgGrpC0d/1f817a56d4e118bf41f0103.jpg",
"https://i.postimg.cc/prcwFsfL/29f81d87b3307f6e262187.jpg",
"https://i.postimg.cc/HLGCzvfJ/2d6839829535596b00244.jpg",
"https://i.postimg.cc/XN1mxD5V/33875edef1693d37647849.jpg",
"https://i.postimg.cc/7PB8dZFr/41c921b38f04435a1a1576.jpg",
"https://i.postimg.cc/5tWZLYCL/480ced3742808eded79128.jpg",
"https://i.postimg.cc/dtpMQSQW/51cd45fdea4a26147f5b30.jpg",
"https://i.postimg.cc/kXB3mdC6/51d074a7da10164e4f0198.jpg",
"https://i.postimg.cc/G2dnw83d/5bcb6cb3c2040e5a571579.jpg",
"https://i.postimg.cc/ydj4V1W9/7ff3e3b54d02815cd81378.jpg",
"https://i.postimg.cc/76mcFKQn/8087aef60041cc1f955090.jpg",
"https://i.postimg.cc/6QVF0WrS/829e99903627fa79a33615.jpg",
"https://i.postimg.cc/RZHkWQNv/96f9c5b06b07a759fe1662.jpg",
"https://i.postimg.cc/kgKHJJp4/a1adba9d142ad874813b51.jpg",
"https://i.postimg.cc/nL1wmdZf/a68137839834546a0d2519.jpg",
"https://i.postimg.cc/PqHRNggM/a738b4751ac2d69c8fd367.jpg",
"https://i.postimg.cc/TwYNJrYL/adf83bdc946b5835017a45.jpg",
"https://i.postimg.cc/qRbbbzzm/b12530039fb453ea0aa546.jpg",
"https://i.postimg.cc/kG2jkqS7/ba9e99de3769fb37a27869.jpg",
"https://i.postimg.cc/br46PW0k/baac34d89a6f56310f7e95.jpg",
"https://i.postimg.cc/SQP1cY0R/bad86edcc16b0d35547a22.jpg",
"https://i.postimg.cc/c489h1Zm/bd1b06f7aa40661e3f513.jpg",
"https://i.postimg.cc/XYf2M2rB/c42a566ef8d934876dc875.jpg",
"https://i.postimg.cc/3w3t3gGS/c537ff4351f49daac4e594.jpg",
"https://i.postimg.cc/DwkCMVwK/c7e59b1436a3fafda3b21.jpg",
"https://i.postimg.cc/6QzYqyL9/ccafc5b26a05a65bff1410.jpg",
"https://i.postimg.cc/SsvdL3v3/d34e0d83a3346f6a3625107.jpg",
"https://i.postimg.cc/ZnvcwjkR/d49532de9c695037097865.jpg",
"https://i.postimg.cc/NMMbHBpR/d6b4aec8007fcc21956e84.jpg",
"https://i.postimg.cc/xqrPhHYP/dbec07c1a87664283d6739.jpg",
"https://i.postimg.cc/SQXb0hkX/de3196253992f5ccac8312.jpg",
"https://i.postimg.cc/wjpCsRJJ/e10491763fc1f39faad092.jpg",
"https://i.postimg.cc/tCW0TN1p/e1539f2d319afdc4a48b86.jpg",
"https://i.postimg.cc/DftknMwx/e861e3564ce180bfd9f035.jpg",
"https://i.postimg.cc/nLVN383h/f9c0568cf83b34656d2a66.jpg",
"https://i.postimg.cc/pd0470SY/fa50282a869d4ac3138c82.jpg",
"https://i.postimg.cc/t4NLdRtc/fc73e77348c4849addd518.jpg",
"https://i.postimg.cc/DySst2kt/09916ae043ec8cb2d5fd20.jpg",
"https://i.postimg.cc/d1JrXrwB/14bfc2d1ebdd24837dcc14.jpg",
"https://i.postimg.cc/Y2nYnvV6/258606705-451491312998872-8750805063997290423-n.jpg",
"https://i.postimg.cc/XJxd0qv0/4753bc3d95315a6f032013.jpg",
"https://i.postimg.cc/ht7L7K29/7fc81fe2d3de1c8045cf6.jpg",
"https://i.postimg.cc/rwW4wQpj/84360a46234aec14b55b26.jpg",
"https://i.postimg.cc/Bb6DZ38P/87d084b4adb862e63ba92.jpg",
"https://i.postimg.cc/QMQc00GC/97a6d1a61d9ad2c48b8b9.jpg",
"https://i.postimg.cc/TYBmxZTh/a532163fda03155d4c1211.jpg",
"https://i.postimg.cc/gJMXT7Mz/bba33689fab535eb6ca48.jpg",
"https://i.postimg.cc/SsQYV4f1/bf3eda54f3583c0665496.jpg",
"https://i.postimg.cc/bvhtDkDh/c1c238ab11a7def987b69.jpg",
"https://i.postimg.cc/zfFRnvKR/c8fb97d85be494bacdf54.jpg",
"https://i.postimg.cc/3Nd45Z6g/d246a937803b4f65162a18.jpg",
"https://i.postimg.cc/PfRvbBpK/d277b4557869b737ee785.jpg",
"https://i.postimg.cc/nrgsHDbN/d5077d6854649b3ac27511.jpg",
"https://i.postimg.cc/tCnZB2Fb/f3a1d7811bbdd4e38dac2.jpg",
"https://i.postimg.cc/P5GL9YMw/fbeaecd520e9efb7b6f83.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100) api.sendMessage("Bạn cần 100 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100})
   var callback = () => api.sendMessage({body:`=== 『 𝗔̉𝗡𝗛 𝗗𝗨́ 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝗦𝘂𝗼̂́𝘁 𝗻𝗴𝗮̀𝘆 𝗱𝘂́ 𝗱𝘂́ 😼\n→ 𝗦𝗼̂́ 𝗮̉𝗻𝗵: 460\n→ 𝗦𝗼̂́ 𝗱𝘂̛: -𝟭𝟬𝟬 đ𝗼̂`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};