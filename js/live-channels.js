// Curated public/free HLS live TV channels.
// Sources: iptv-org language playlists and Free-TV/IPTV. Keep entries to HLS only.
const LIVE_CHANNEL_CATEGORIES = [
    '全部',
    '中文新闻',
    '中文综合',
    '中文地区',
    '中文财经',
    '中文纪录',
    '中文教育',
    '中文影视',
    '中文生活',
    'English News',
    'English Local News',
    'English Business',
    'English Documentary',
    'English Public',
    'English Science',
    'English Weather',
    'English Movies',
    'English Entertainment',
    'English Classic'
];

const LIVE_CHANNELS = [
    { id: 'cgtn', name: 'CGTN', category: '中文新闻', lang: 'zh', region: 'Global', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/CGTN.svg/960px-CGTN.svg.png', url: 'https://amg00405-rakutentv-cgtn-rakuten-i9tar.amagi.tv/master.m3u8', source: 'iptv-org' },
    { id: 'cgtn-global-biz', name: 'CGTN Global Biz', category: '中文财经', lang: 'zh', region: 'Global', logo: 'https://i.imgur.com/qBmomnF.png', url: 'https://amg01314-amg01314c6-distrotv-us-10220.playouts.now.amagi.tv/playlist/amg01314-cgtn-cgtnglobalbiz-distrotvus/playlist.m3u8', source: 'iptv-org' },
    { id: 'cctv-plus-1', name: 'CCTV+ 1', category: '中文新闻', lang: 'zh', region: 'China', logo: 'https://i.imgur.com/U8d4Is6.png', url: 'https://cd-live-stream.news.cctvplus.com/live/smil:CHANNEL1.smil/playlist.m3u8', source: 'iptv-org' },
    { id: 'cctv-plus-2', name: 'CCTV+ 2', category: '中文新闻', lang: 'zh', region: 'China', logo: 'https://i.imgur.com/qSg862A.png', url: 'https://cd-live-stream.news.cctvplus.com/live/smil:CHANNEL2.smil/playlist.m3u8', source: 'iptv-org' },
    { id: 'cctv-4-america', name: 'CCTV-4 America', category: '中文综合', lang: 'zh', region: 'Americas', logo: 'https://i.imgur.com/gBbLyqh.png', url: 'https://global.cgtn.cicc.media.caton.cloud/master/cgtn-america.m3u8', source: 'iptv-org' },
    { id: 'cctv-4-europe', name: 'CCTV-4 Europe', category: '中文综合', lang: 'zh', region: 'Europe', logo: 'https://i.imgur.com/HGLFdfk.png', url: 'https://dash2.antik.sk/live/test_cctv_tizen/playlist.m3u8', source: 'iptv-org' },
    { id: 'phoenix-chinese', name: '凤凰中文', category: '中文综合', lang: 'zh', region: 'Hong Kong', logo: 'https://raw.githubusercontent.com/wanglindl/TVlogo/main/img/Phoenix1.png', url: 'http://223.110.245.139/ott.js.chinamobile.com/PLTV/3/224/3221226922/index.m3u8', source: 'iptv-org' },
    { id: 'phoenix-info', name: '凤凰资讯', category: '中文新闻', lang: 'zh', region: 'Hong Kong', logo: 'https://i.imgur.com/mt4h3VO.png', url: 'http://223.110.245.167/ott.js.chinamobile.com/PLTV/3/224/3221226923/index.m3u8', source: 'iptv-org' },
    { id: 'voa-chinese', name: 'VOA美国之音', category: '中文新闻', lang: 'zh', region: 'US', logo: 'https://i.imgur.com/XCTZkoq.png', url: 'https://voa-ingest.akamaized.net/hls/live/2033878/tvmc08/playlist.m3u8', source: 'iptv-org' },
    { id: 'tv-brics-chinese', name: 'TV BRICS Chinese', category: '中文综合', lang: 'zh', region: 'Global', logo: 'https://i.imgur.com/896132Z.png', url: 'https://chibrics.mediacdn.ru/cdn/brics/chinese/playlist.m3u8', source: 'iptv-org' },
    { id: 'channel-8', name: 'Channel 8', category: '中文综合', lang: 'zh', region: 'Singapore', logo: 'https://i.imgur.com/6YPZc24.png', url: 'https://app.viloud.tv/hls/channel/57148804a268f59e0c1af0c1b67a2f7e.m3u8', source: 'iptv-org' },
    { id: 'channel-u', name: 'Channel U', category: '中文综合', lang: 'zh', region: 'Singapore', logo: 'https://i.imgur.com/9MzEjoY.png', url: 'https://app.viloud.tv/hls/channel/aaf404bee904cff424bb5d1f6fdf9333.m3u8', source: 'iptv-org' },
    { id: 'tdm-satellite', name: '澳视澳门卫星', category: '中文地区', lang: 'zh', region: 'Macau', logo: 'https://i.imgur.com/iIfZsD6.png', url: 'https://live3.tdm.com.mo/ch3/ch3.live/playlist.m3u8', source: 'iptv-org' },
    { id: 'tdm-entertainment', name: 'TDM 娱乐台', category: '中文地区', lang: 'zh', region: 'Macau', logo: 'https://i.imgur.com/7ml2bfx.png', url: 'https://live3.tdm.com.mo/ch6/hd_ch6.live/playlist.m3u8', source: 'iptv-org' },
    { id: 'tdm-info', name: 'TDM 信息台', category: '中文新闻', lang: 'zh', region: 'Macau', logo: 'https://i.imgur.com/h7HfsLx.png', url: 'https://live3.tdm.com.mo/ch5/info_ch5.live/playlist.m3u8', source: 'iptv-org' },
    { id: 'tdm-sports', name: 'TDM 体育台', category: '中文地区', lang: 'zh', region: 'Macau', logo: 'https://i.imgur.com/AsWLf8S.png', url: 'https://live3.tdm.com.mo/ch4/sport_ch4.live/playlist.m3u8', source: 'iptv-org' },
    { id: 'tdm-ou-mun', name: 'TDM 澳视澳门', category: '中文地区', lang: 'zh', region: 'Macau', logo: 'https://i.imgur.com/qDI3aMp.png', url: 'http://61.244.22.4/ch1/ch1.live/playlist.m3u8', source: 'iptv-org' },
    { id: 'daai-1', name: 'DaAi1', category: '中文综合', lang: 'zh', region: 'Taiwan', logo: 'https://i.imgur.com/KdJi9af.png', url: 'https://pulltv1.wanfudaluye.com/live/tv1.m3u8', source: 'iptv-org' },
    { id: 'daai-2', name: 'DaAi2', category: '中文综合', lang: 'zh', region: 'Taiwan', logo: 'https://i.imgur.com/KdJi9af.png', url: 'https://pulltv2.wanfudaluye.com/live/tv2.m3u8', source: 'iptv-org' },
    { id: 'ntd-tv', name: 'NTD TV', category: '中文综合', lang: 'zh', region: 'Global', logo: 'https://i.imgur.com/QtFM5Oo.png', url: 'https://live.ntdtv.com/live900/playlist.m3u8', source: 'iptv-org' },
    { id: 'ntd-asia-pacific', name: 'NTD TV Asia-Pacific', category: '中文综合', lang: 'zh', region: 'Asia-Pacific', logo: 'https://i.imgur.com/iyFXcDy.png', url: 'https://live.ntdtv.com/aplive200/playlist.m3u8', source: 'iptv-org' },
    { id: 'ntd-china', name: 'NTD TV China', category: '中文综合', lang: 'zh', region: 'Global', logo: 'https://i.imgur.com/OpWTWdh.png', url: 'https://live.ntdtv.com/cnlive900/playlist.m3u8', source: 'iptv-org' },
    { id: 'ntd-canada', name: 'NTD TV Canada', category: '中文综合', lang: 'zh', region: 'Canada', logo: 'https://i.imgur.com/iyFXcDy.png', url: 'https://live.ntdtv.com/mllive860/playlist.m3u8', source: 'iptv-org' },
    { id: 'ntd-canada-west', name: 'NTD TV Canada West', category: '中文综合', lang: 'zh', region: 'Canada', logo: 'https://i.imgur.com/iyFXcDy.png', url: 'https://live.ntdtv.com/cwlive220/playlist.m3u8', source: 'iptv-org' },
    { id: 'china-travel', name: 'China Travel', category: '中文纪录', lang: 'zh', region: 'China', logo: 'https://i.imgur.com/vSgY3CD.png', url: 'https://amg01314-amg01314c7-distrotv-us-10219.playouts.now.amagi.tv/playlist/amg01314-cgtn-cgtnchinatravel-distrotvus/playlist.m3u8', source: 'iptv-org' },
    { id: 'discovering-china', name: 'Discovering China', category: '中文纪录', lang: 'zh', region: 'China', logo: 'https://i.imgur.com/wr2bLaA.png', url: 'https://amg01314-amg01314c8-distrotv-us-10218.playouts.now.amagi.tv/playlist/amg01314-cgtn-cgtndiscoveringchina-distrotvus/playlist.m3u8', source: 'iptv-org' },
    { id: 'china-weather', name: '中国气象', category: '中文新闻', lang: 'zh', region: 'China', logo: 'https://i.imgur.com/syNwDpg.png', url: 'http://hls.weathertv.cn/tslslive/qCFIfHB/hls/live_sd.m3u8', source: 'iptv-org' },
    { id: 'shenzhen-satellite', name: '深圳卫视', category: '中文地区', lang: 'zh', region: 'China', logo: '', url: 'https://livepull-tcms.sztv.com.cn/live/sz4Kpgm.m3u8', source: 'iptv-org' },
    { id: 'zhejiang-international', name: '浙江国际', category: '中文地区', lang: 'zh', region: 'China', logo: 'https://i.imgur.com/XOL1Hph.png', url: 'https://ali-m-l.cztv.com/channels/lantian/channel10/1080p.m3u8', source: 'iptv-org' },
    { id: 'hunan-tv', name: '湖南卫视', category: '中文地区', lang: 'zh', region: 'China', logo: 'https://parco-zh.github.io/demo/HNWS.png', url: 'http://hlsal-ldvt.qing.mgtv.com/nn_live/nn_x64/dWlwPTEyNy4wLjAuMSZ1aWQ9cWluZy1jbXMmbm5fdGltZXpvbmU9OCZjZG5leF9pZD1hbF9obHNfbGR2dCZ1dWlkPTliODY4NmU5ZTM2YzYwMmMmZT02OTE0NjA0JnY9MSZpZD1ITldTWkdTVCZzPTcwN2RiYTc2YzJjNmJmMTQ4MmUyZGYzOWU2NWM3YWFi/HNWSZGST.m3u8', source: 'iptv-org' },
    { id: 'guangzhou-tv', name: '广州综合', category: '中文地区', lang: 'zh', region: 'China', logo: 'https://i.imgur.com/ff3KQXp.png', url: 'https://tencentplaybusiness.gztv.com/live/zonghes.m3u8', source: 'iptv-org' },
    { id: 'shanghai-education', name: '上海教育', category: '中文教育', lang: 'zh', region: 'China', logo: '', url: 'http://223.166.234.114:7777/tsfile/live/1033_1.m3u8', source: 'iptv-org' },
    { id: 'cetv-1', name: 'CETV1', category: '中文教育', lang: 'zh', region: 'China', logo: 'https://i.imgur.com/6sOHLq8.png', url: 'http://117.161.133.51:81/gitv_live/G_CETV-1/G_CETV-1.m3u8?p=GITV', source: 'iptv-org' },
    { id: 'cetv-2', name: 'CETV2', category: '中文教育', lang: 'zh', region: 'China', logo: 'https://i.imgur.com/ZD8XPmw.png', url: 'http://117.161.133.51:81/gitv_live/G_CETV-2/G_CETV-2.m3u8?p=GITV', source: 'iptv-org' },
    { id: 'jiangxi-city', name: '江西都市', category: '中文地区', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/jxds.jpg', url: 'https://play-live-hls.jxtvcn.com.cn/live-city/tv_jxtv2.m3u8', source: 'iptv-org' },
    { id: 'jiangxi-economy', name: '江西经济生活', category: '中文财经', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/jxtv3.jpg', url: 'https://play-live-hls.jxtvcn.com.cn/live-city/tv_jxtv3.m3u8', source: 'iptv-org' },
    { id: 'jiangxi-movie', name: '江西影视', category: '中文综合', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/jiangxi.jpg', url: 'https://play-live-hls.jxtvcn.com.cn/live-city/tv_jxtv4.m3u8', source: 'iptv-org' },
    { id: 'jilin-lifestyle', name: '吉林生活', category: '中文地区', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/jlshpd.jpg', url: 'https://lsfb.avap.jilintv.cn/zqvk7vpj/channel/0a76740c72b74fabae611845aa21e06a/index.m3u8', source: 'iptv-org' },
    { id: 'taiwan-indigenous', name: '原住民电视', category: '中文综合', lang: 'zh', region: 'Taiwan', logo: 'https://i.imgur.com/QqIdVqz.png', url: 'http://streamipcf.akamaized.net/live/_definst_/live_720/key_b1500.m3u8', source: 'iptv-org' },
    { id: 'indigenous-tv', name: 'Indigenous TV', category: '中文综合', lang: 'zh', region: 'Taiwan', logo: 'https://i.imgur.com/vmk4F9u.png', url: 'http://streamipcf.akamaized.net/live/_definst_/smil:liveabr.smil/playlist.m3u8', source: 'iptv-org' },
    { id: 'abc-news', name: 'ABC News', category: 'English News', lang: 'en', region: 'US', logo: 'https://i.imgur.com/BrW7gk8.png', url: 'https://abc-news-dmd-streams-1.akamaized.net/out/v1/701126012d044971b3fa89406a440133/index.m3u8', source: 'iptv-org' },
    { id: 'abc-news-live-1', name: 'ABC News Live 1', category: 'English News', lang: 'en', region: 'US', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/ABC_News_Live_logo_2021.svg/960px-ABC_News_Live_logo_2021.svg.png', url: 'https://abcnews-streams.akamaized.net/hls/live/2023560/abcnewshudson1/master_4000.m3u8', source: 'iptv-org' },
    { id: 'cbs-news', name: 'CBS News 24/7', category: 'English News', lang: 'en', region: 'US', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/CBS_News_247_logo.svg/960px-CBS_News_247_logo.svg.png', url: 'https://jmp2.uk/plu-6350fdd266e9ea0007bedec5.m3u8', source: 'iptv-org' },
    { id: 'cbs-bay-area', name: 'CBS News Bay Area', category: 'English Local News', lang: 'en', region: 'US', logo: 'https://static.wikia.nocookie.net/logopedia/images/1/1a/Logo-cbsn-bayarea-1920x1080.jpg/revision/latest/scale-to-width-down/512', url: 'https://cbsn-sf.cbsnstream.cbsnews.com/out/v1/dac63c1abb3f4a2dac9f508f44bb072a/master.m3u8', source: 'iptv-org' },
    { id: 'cbs-boston', name: 'CBS News Boston', category: 'English Local News', lang: 'en', region: 'US', logo: 'https://i.imgur.com/9un7R3N.png', url: 'https://cbsn-bos.cbsnstream.cbsnews.com/out/v1/589d66ec6eb8434c96c28de0370d1326/master.m3u8', source: 'iptv-org' },
    { id: 'cbs-chicago', name: 'CBS News Chicago', category: 'English Local News', lang: 'en', region: 'US', logo: 'https://i.imgur.com/qGbVQir.png', url: 'https://cbsn-chi.cbsnstream.cbsnews.com/out/v1/b2fc0d5715d54908adf07f97d2616646/master.m3u8', source: 'iptv-org' },
    { id: 'cbs-la', name: 'CBS News Los Angeles', category: 'English Local News', lang: 'en', region: 'US', logo: 'https://i.imgur.com/klULxMV.png', url: 'https://cbsn-la.cbsnstream.cbsnews.com/out/v1/57b6c4534a164accb6b1872b501e0028/master.m3u8', source: 'iptv-org' },
    { id: 'cbs-miami', name: 'CBS News Miami', category: 'English Local News', lang: 'en', region: 'US', logo: 'https://i.imgur.com/DExbVa9.png', url: 'https://cbsn-mia.cbsnstream.cbsnews.com/out/v1/ac174b7938264d24ae27e56f6584bca0/master.m3u8', source: 'iptv-org' },
    { id: 'cbs-new-york', name: 'CBS News New York', category: 'English Local News', lang: 'en', region: 'US', logo: 'https://i.imgur.com/bpc4v0u.png', url: 'https://cbsn-ny.cbsnstream.cbsnews.com/out/v1/ec3897d58a9b45129a77d67aa247d136/master.m3u8', source: 'iptv-org' },
    { id: 'nbc-news-now', name: 'NBC News NOW', category: 'English News', lang: 'en', region: 'US', logo: 'https://i.imgur.com/JZt2qh5.png', url: 'https://d1si3n1st4nkgb.cloudfront.net/10502/88896001/hls/master.m3u8?ads.xumo_channelId=88896001', source: 'iptv-org' },
    { id: 'scripps-news', name: 'Scripps News', category: 'English News', lang: 'en', region: 'US', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Scripps_News_logo.svg/960px-Scripps_News_logo.svg.png', url: 'https://jmp2.uk/plu-5459795fc9f133a519bc0bef.m3u8', source: 'iptv-org' },
    { id: 'bloomberg-us', name: 'Bloomberg', category: 'English Business', lang: 'en', region: 'US', logo: 'https://i.imgur.com/VnCcH73.png', url: 'https://bloomberg.com/media-manifest/streams/us.m3u8', source: 'Free-TV' },
    { id: 'bloomberg-asia', name: 'Bloomberg TV Asia', category: 'English Business', lang: 'en', region: 'Asia', logo: 'https://i.imgur.com/OuogLHx.png', url: 'https://bloomberg.com/media-manifest/streams/asia.m3u8', source: 'iptv-org' },
    { id: 'bloomberg-europe', name: 'Bloomberg TV Europe', category: 'English Business', lang: 'en', region: 'Europe', logo: 'https://i.imgur.com/OuogLHx.png', url: 'https://bloomberg.com/media-manifest/streams/eu.m3u8', source: 'iptv-org' },
    { id: 'reuters', name: 'Reuters', category: 'English News', lang: 'en', region: 'Global', logo: 'https://i.imgur.com/6eQ2nCJ.png', url: 'https://amg00453-reuters-amg00453c1-rakuten-uk-2110.playouts.now.amagi.tv/playlist/amg00453-reuters-reuters-rakutenuk/playlist.m3u8', source: 'iptv-org' },
    { id: 'france-24-en', name: 'France 24 English', category: 'English News', lang: 'en', region: 'France', logo: 'https://xstreamcp-assets-msp.streamready.in/assets/LIVETV/LIVECHANNEL/LIVETV_LIVETVCHANNEL_FRANCE_24/images/LOGO_HD/image.png', url: 'https://live.france24.com/hls/live/2037218-b/F24_EN_HI_HLS/master_5000.m3u8', source: 'iptv-org' },
    { id: 'dw-english', name: 'DW English', category: 'English News', lang: 'en', region: 'Germany', logo: 'https://i.imgur.com/8MRNFb9.png', url: 'https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/master.m3u8', source: 'iptv-org' },
    { id: 'al-jazeera-en', name: 'Al Jazeera English', category: 'English News', lang: 'en', region: 'Qatar', logo: 'https://i.imgur.com/7bRVpnu.png', url: 'https://live-hls-apps-aje-fa.getaj.net/AJE/index.m3u8', source: 'iptv-org' },
    { id: 'sky-news', name: 'Sky News', category: 'English News', lang: 'en', region: 'UK', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Sky_News_logo.svg/1024px-Sky_News_logo.svg.png', url: 'https://linear021-gb-hls1-prd-ak.cdn.skycdp.com/Content/HLS_001_hd/Live/channel(skynews)/index_mob.m3u8', source: 'Free-TV' },
    { id: 'euronews-en', name: 'Euronews English HD', category: 'English News', lang: 'en', region: 'Europe', logo: 'https://jiotvimages.cdn.jio.com/dare_images/images/Euro_News.png', url: 'https://dash4.antik.sk/live/test_euronews/playlist.m3u8', source: 'iptv-org' },
    { id: 'cna-international', name: 'CNA International', category: 'English News', lang: 'en', region: 'Singapore', logo: 'https://i.imgur.com/xWglicB.png', url: 'https://mediacorp-videosbclive.akamaized.net/dd724cfb0e8e4cdc921bbc4ac94614bf/ap-southeast-1/6057994443001/playlist.m3u8', source: 'iptv-org' },
    { id: 'nhk-world', name: 'NHK WORLD JAPAN', category: 'English News', lang: 'en', region: 'Japan', logo: 'https://i.imgur.com/Mhw1Ihk.png', url: 'https://master.nhkworld.jp/nhkworld-tv/playlist/live.m3u8', source: 'Free-TV' },
    { id: 'trt-world', name: 'TRT World', category: 'English News', lang: 'en', region: 'Turkey', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/TRT_World.svg/960px-TRT_World.svg.png', url: 'https://tv-trtworld.medya.trt.com.tr/master.m3u8', source: 'iptv-org' },
    { id: 'gb-news', name: 'GB News', category: 'English News', lang: 'en', region: 'UK', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/GB_News_Logo.svg/640px-GB_News_Logo.svg.png', url: 'https://live-gbnews.simplestreamcdn.com/live5/gbnews/bitrate1.isml/manifest.m3u8', source: 'Free-TV' },
    { id: 'newsmax-2', name: 'Newsmax 2', category: 'English News', lang: 'en', region: 'US', logo: 'https://www.lyngsat.com/logo/tv/nn/newsmax-2-us-ug.png', url: 'https://amg00217-newsmax-newsmax-zeasn-022k9.amagi.tv/playlist.m3u8', source: 'iptv-org' },
    { id: 'real-americas-voice', name: "Real America's Voice", category: 'English News', lang: 'en', region: 'US', logo: 'https://i.imgur.com/l7tmTjX.png', url: 'https://stream.weathernationtv.com/RAVStirr_poekxujeisurekugzezyg/O1/playlistSCTE35.m3u8', source: 'iptv-org' },
    { id: 'cheddar-news', name: 'Cheddar News', category: 'English Business', lang: 'en', region: 'US', logo: 'https://i.imgur.com/tuP9GW8.png', url: 'https://wurlcheddar.global.transmit.live/hls/689ceac9301c34d3919676f3/v1/Cheddar/samsung_us/latest/main/hls/playlist.m3u8', source: 'iptv-org' },
    { id: 'cnbc', name: 'CNBC', category: 'English Business', lang: 'en', region: 'UK', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/CNBC_2025.svg/960px-CNBC_2025.svg.png', url: 'https://amg01079-nbcuuk-amg01079c2-samsung-gb-1258.playouts.now.amagi.tv/playlist.m3u8', source: 'iptv-org' },
    { id: 'weathernation', name: 'WeatherNation', category: 'English Weather', lang: 'en', region: 'US', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/WeatherNation_Logo.svg/960px-WeatherNation_Logo.svg.png', url: 'https://stream.weathernationtv.com/WNTVStirr_eokxldieulowixkdimn/ND1/playlistSCTE35.m3u8', source: 'iptv-org' },
    { id: 'fox-weather', name: 'Fox Weather', category: 'English Weather', lang: 'en', region: 'US', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Fox_Weather_logo.svg/960px-Fox_Weather_logo.svg.png', url: 'https://foxweather-xumo.amagi.tv/playlist.m3u8', source: 'iptv-org' },
    { id: 'nasa-public', name: 'NASA TV Public', category: 'English Science', lang: 'en', region: 'US', logo: 'https://i.imgur.com/rmyfoOI.png', url: 'https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master_2000.m3u8', source: 'Free-TV' },
    { id: 'nasa-media', name: 'NASA TV Media', category: 'English Science', lang: 'en', region: 'US', logo: 'https://i.imgur.com/rmyfoOI.png', url: 'https://ntv2.akamaized.net/hls/live/2013923/NASA-NTV2-HLS/master.m3u8', source: 'Free-TV' },
    { id: 'world-channel', name: 'World Channel', category: 'English Public', lang: 'en', region: 'US', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/World_Channel_2023.svg', url: 'https://world.lls.pbs.org/index.m3u8', source: 'iptv-org' },
    { id: 'pbs-kids', name: 'PBS Kids', category: 'English Public', lang: 'en', region: 'US', logo: 'https://i.imgur.com/q4cUQKW.png', url: 'https://livestream.pbskids.org/out/v1/14507d931bbe48a69287e4850e53443c/est.m3u8', source: 'iptv-org' },
    { id: 'pbs-nature', name: 'PBS Nature', category: 'English Documentary', lang: 'en', region: 'US', logo: 'https://i.imgur.com/Brry7cZ.png', url: 'https://d3mr43kyql7wgk.cloudfront.net/PBS_Nature.m3u8', source: 'iptv-org' },
    { id: 'pbs-travel', name: 'PBS Travel', category: 'English Entertainment', lang: 'en', region: 'US', logo: 'https://i.imgur.com/A6GXhta.png', url: 'https://d3hqevbyoxtkoi.cloudfront.net/PBS_Travel.m3u8', source: 'iptv-org' },
    { id: 'court-tv', name: 'Court TV', category: 'English Documentary', lang: 'en', region: 'US', logo: 'https://i.imgur.com/qkfe3o9.png', url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01438-ewscrippscompan-courttv-tablo/playlist.m3u8', source: 'iptv-org' },
    { id: 'cgtn-documentary', name: 'CGTN Documentary', category: 'English Documentary', lang: 'en', region: 'Global', logo: 'https://i.imgur.com/JHv0WxM.png', url: 'https://amg00405-rakutentv-cgtndocumentary-rakuten-0ql8j.amagi.tv/master.m3u8', source: 'iptv-org' },
    { id: 'cna-originals', name: 'CNA Originals', category: 'English Documentary', lang: 'en', region: 'Singapore', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/CNA_new_logo.svg/500px-CNA_new_logo.svg.png', url: 'https://amg01082-cna-amg01082c1-rlaxx-us-11304.playouts.now.amagi.tv/playlist.m3u8', source: 'iptv-org' },
    { id: 'love-nature', name: 'Love Nature', category: 'English Documentary', lang: 'en', region: 'Global', logo: 'https://tv.lovenature.com/wp-content/uploads/2024/10/LoveNature2024_Logo_full_colour-copy.png', url: 'https://aegis-cloudfront-1.tubi.video/6d6d0f24-8445-4b4c-bdf6-44f9e38beaa4/playlist.m3u8', source: 'iptv-org' },
    { id: 'xplore', name: 'Xplore', category: 'English Entertainment', lang: 'en', region: 'Global', logo: 'https://i.imgur.com/WaGRlFO.png', url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00111-hearstmediaprod-xploreintlnl-samsungnl/playlist.m3u8', source: 'iptv-org' },
    { id: 'wonder', name: 'Wonder', category: 'English Science', lang: 'en', region: 'Global', logo: 'https://i.imgur.com/LquGNbh.png', url: 'https://lds-wonder-rakuten.amagi.tv/playlist.m3u8', source: 'iptv-org' },
    { id: 'documentary-plus', name: 'Documentary+', category: 'English Documentary', lang: 'en', region: 'US', logo: 'https://i.imgur.com/x57klfS.png', url: 'https://ef79b15c8c7c46c7a9de9d33001dbd07.mediatailor.us-west-2.amazonaws.com/v1/master/ba62fe743df0fe93366eba3a257d792884136c7f/LINEAR-859-DOCUMENTARYPLUS-DOCUMENTARYPLUS/mt/documentaryplus/859/hls/master/playlist.m3u8', source: 'iptv-org' },
    { id: 'docurama', name: 'Docurama', category: 'English Documentary', lang: 'en', region: 'US', logo: 'https://i.imgur.com/2248nxX.png', url: 'https://docurama-plex-ingest.cinedigm.com/playlist.m3u8', source: 'iptv-org' },
    { id: 'curiosity-now', name: 'Curiosity Now', category: 'English Documentary', lang: 'en', region: 'US', logo: 'https://i.imgur.com/gJ9eMaG.png', url: 'https://amg00170-amg00170c4-samsung-gb-4232.playouts.now.amagi.tv/playlist.m3u8', source: 'iptv-org' },
    { id: 'bbc-earth', name: 'BBC Earth', category: 'English Documentary', lang: 'en', region: 'UK', logo: 'https://i.imgur.com/nGSsUd4.png', url: 'https://amg00793-amg00793c6-xumo-us-2669.playouts.now.amagi.tv/BBCStudios-BBCEarthA-hls/playlist.m3u8', source: 'iptv-org' },
    { id: 'people-are-awesome', name: 'People Are Awesome', category: 'English Entertainment', lang: 'en', region: 'Global', logo: 'https://i.imgur.com/MsIx7Ax.png', url: 'https://3ab76e42.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X1Blb3BsZUFyZUF3ZXNvbWVfSExT/playlist.m3u8', source: 'iptv-org' },
    { id: 'failarmy', name: 'FailArmy', category: 'English Entertainment', lang: 'en', region: 'Global', logo: 'https://i.imgur.com/VIpQJxL.png', url: 'https://failarmy-international-gb.samsung.wurl.tv/playlist.m3u8', source: 'iptv-org' },
    { id: 'pet-collective', name: 'The Pet Collective', category: 'English Entertainment', lang: 'en', region: 'Global', logo: 'https://i.imgur.com/yH7n2dF.png', url: 'https://6ec8627d.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X1RoZVBldENvbGxlY3RpdmVfSExT/playlist.m3u8', source: 'iptv-org' },
    { id: 'just-for-laughs', name: 'Just for Laughs Gags', category: 'English Entertainment', lang: 'en', region: 'Global', logo: 'https://i.imgur.com/HjVEVMJ.png', url: 'https://streams2.sofast.tv/sofastplayout/4c727f82-d2ec-4a07-870c-49a6f22ee6f9_0_HLS/master.m3u8', source: 'iptv-org' },
    { id: 'dust-alien-nation', name: 'Alien Nation by DUST', category: 'English Entertainment', lang: 'en', region: 'US', logo: 'https://i.imgur.com/FxYhME9.png', url: 'https://dqi7ayt2o24fn.cloudfront.net/playlist.m3u8', source: 'iptv-org' },
    { id: 'filmrise-classic-tv', name: 'FilmRise Classic TV', category: 'English Classic', lang: 'en', region: 'US', logo: 'https://i.imgur.com/8j2npVc.png', url: 'https://d2tv4k5moji5m7.cloudfront.net/v1/master/3722c60a815c199d9c0ef36c5b73da68a62b09d1/cc-lu4pzh9l4b57p/master.m3u8', source: 'iptv-org' },
    { id: 'filmrise-westerns', name: 'FilmRise Westerns', category: 'English Entertainment', lang: 'en', region: 'US', logo: 'https://i.imgur.com/8j2npVc.png', url: 'https://dz05z8iljgvbe.cloudfront.net/master.m3u8', source: 'iptv-org' },
    { id: 'maverick-black-cinema', name: 'Maverick Black Cinema', category: 'English Entertainment', lang: 'en', region: 'US', logo: 'https://images.fubo.tv/station_logos/maverick_black_cinema_c.png', url: 'https://maverick-maverick-black-cinema-3-us.roku.wurl.tv/playlist.m3u8', source: 'iptv-org' },
    { id: 'unsolved-mysteries', name: 'Unsolved Mysteries', category: 'English Entertainment', lang: 'en', region: 'US', logo: 'https://i.imgur.com/De3khrX.png', url: 'https://d31z96rdrmwfsp.cloudfront.net/master.m3u8', source: 'iptv-org' },
    { id: 'baywatch', name: 'Baywatch', category: 'English Entertainment', lang: 'en', region: 'US', logo: 'https://i.imgur.com/c2esKHg.png', url: 'https://amg00145-fremantlemedian-baywatch-samsungau-gtsd6.amagi.tv/playlist/amg00145-fremantlemedian-baywatch-samsungau/playlist.m3u8', source: 'iptv-org' },
    { id: 'deal-or-no-deal', name: 'Deal or No Deal', category: 'English Entertainment', lang: 'en', region: 'Global', logo: 'https://i.imgur.com/lZvNXA1.png', url: 'https://amg00627-banijaygroup-dealornodeal-samsungau-si7xg.amagi.tv/playlist/amg00627-banijaygroup-dealornodeal-samsungau/playlist.m3u8', source: 'iptv-org' },
    { id: 'bob-ross', name: 'The Bob Ross Channel', category: 'English Classic', lang: 'en', region: 'US', logo: 'https://i.imgur.com/gFHKCbZ.png', url: 'https://bobross-xumous.cinedigm.com/midroll/amagi_hls_data_xumo-host-bobross-xumo/CDN/master.m3u8', source: 'iptv-org' },
    { id: 'classic-arts-showcase', name: 'Classic Arts Showcase', category: 'English Classic', lang: 'en', region: 'US', logo: 'https://i.imgur.com/M6FFkc3.png', url: 'https://classicarts.akamaized.net/hls/live/1024257/CAS/master.m3u8', source: 'iptv-org' },
    { id: 'carol-burnett', name: 'The Carol Burnett Show', category: 'English Classic', lang: 'en', region: 'US', logo: 'https://i.imgur.com/1a03FlX.png', url: 'https://carolburnett-vizio.amagi.tv/playlist.m3u8', source: 'iptv-org' },
    { id: 'twilight-zone', name: 'The Twilight Zone', category: 'English Classic', lang: 'en', region: 'US', logo: 'https://i.imgur.com/FiIRQAR.png', url: 'https://jmp2.uk/plu-67352ed93a61d4000881f9fa.m3u8', source: 'iptv-org' },
    { id: 'nbc-comedy-vault', name: 'NBC Comedy Vault', category: 'English Entertainment', lang: 'en', region: 'US', logo: 'https://i.imgur.com/nydZWwg.png', url: 'https://xumo-xumoent-vc-105-z0vpm.fast.nbcuni.com/live/master.m3u8', source: 'iptv-org' },
    { id: '2gb-sydney', name: '2GB Sydney', category: 'English News', lang: 'en', region: 'Australia', logo: 'https://i.ibb.co/jwM8DFG/2GB-1.png', url: 'https://2gblive.akamaized.net/hls/live/2033805/2GB/index.m3u8', source: 'iptv-org' },
    { id: '3aw-melbourne', name: '3AW Melbourne', category: 'English News', lang: 'en', region: 'Australia', logo: 'https://i.imgur.com/Z4MdB0S.png', url: 'https://3awlive.akamaized.net/hls/live/2032295/3AW/index.m3u8', source: 'iptv-org' },
    { id: '6pr-perth', name: '6PR Perth', category: 'English News', lang: 'en', region: 'Australia', logo: 'https://i.imgur.com/Q9iCxg1.png', url: 'https://6prlive.akamaized.net/hls/live/2033806/6PR/index.m3u8', source: 'iptv-org' },
    { id: 'abc-wmar-baltimore', name: 'ABC 2 Baltimore', category: 'English Local News', lang: 'en', region: 'US', logo: 'https://upload.wikimedia.org/wikipedia/en/d/db/2_ABC_WMAR_Baltimore.png', url: 'https://aegis-cloudfront-1.tubi.video/c28d1ca8-9467-4798-81dc-09c1d6e90be1/playlist.m3u8', source: 'iptv-org' },
    { id: 'abc-wmur-manchester', name: 'ABC 9 Manchester', category: 'English Local News', lang: 'en', region: 'US', logo: 'https://upload.wikimedia.org/wikipedia/en/7/72/WMURCurrentLogo.png', url: 'https://aegis-cloudfront-1.tubi.video/b77ffe96-c5d1-43a7-8687-306ff244d725/playlist.m3u8', source: 'iptv-org' },
    { id: 'abc-wftv-orlando', name: 'ABC 9 Orlando', category: 'English Local News', lang: 'en', region: 'US', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/WWAY_logo.png', url: 'https://amg00327-coxmediagroup-wftvbreaking-ono-hec7b.amagi.tv/playlist/amg00327-coxmediagroup-wftvbreaking-ono/playlist.m3u8', source: 'iptv-org' },
    { id: 'abc-wplg-miami', name: 'ABC Local 10 Miami', category: 'English Local News', lang: 'en', region: 'US', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/WPLG_Local_10_%282014%2C_without_ABC_logo%29.svg/500px-WPLG_Local_10_%282014%2C_without_ABC_logo%29.svg.png', url: 'https://pubads.g.doubleclick.net/ssai/event/tQD6w9OJQVOobcyV3Dammw/master.m3u8', source: 'iptv-org' },
    { id: 'abante-tv', name: 'Abante TV', category: 'English News', lang: 'en', region: 'Dominican Republic', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Abante_masthead.svg', url: 'https://amg19223-amg19223c12-amgplt0352.playout.now3.amagi.tv/playlist/amg19223-amg19223c12-amgplt0352/playlist.m3u8', source: 'iptv-org' },
    { id: 'al-arabiya-english', name: 'Al Arabiya English', category: 'English News', lang: 'en', region: 'Middle East', logo: 'https://shahid.mbc.net/mediaObject/7cfc0baf-1201-477f-b722-d3099fafe17f?height=230&width=512&croppingPoint=&version=1&type=png', url: 'https://live.alarabiya.net/alarabiapublish/english/playlist_dvr.m3u8', source: 'iptv-org' },
    { id: 'afghanistan-international', name: 'Afghanistan International', category: 'English News', lang: 'en', region: 'Afghanistan', logo: 'https://i.imgur.com/r8MmFRX.png', url: 'https://hls.afintl.com/hls/stream.m3u8', source: 'iptv-org' },
    { id: 'africa-24-english', name: 'Africa 24 English', category: 'English News', lang: 'en', region: 'Africa', logo: 'https://africa24tv.com/wp-content/uploads/2023/12/logo-Africa24TVEnglish.png', url: 'https://edge20.vedge.infomaniak.com/livecast/ik:africa24english/manifest.m3u8', source: 'iptv-org' },
    { id: 'accuweather-now', name: 'AccuWeather Now', category: 'English Weather', lang: 'en', region: 'US', logo: 'https://i.imgur.com/M8wbVYK.png', url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00684-accuweather-accuweather-plex/playlist.m3u8', source: 'iptv-org' },
    { id: 'adventure-earth', name: 'Adventure Earth', category: 'English Documentary', lang: 'en', region: 'Global', logo: 'https://d3b6luslimvglo.cloudfront.net/images/79/rlaxximages/channels-rescaled/icon-white/adventureearth_white.png', url: 'https://a57e9c69976649b582a8d7604c00e69a.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/RlaxxTV-eu_AdventureEarth/playlist.m3u8', source: 'iptv-org' },
    { id: 'autentic-history', name: 'Autentic History', category: 'English Documentary', lang: 'en', region: 'Global', logo: 'https://d3b6luslimvglo.cloudfront.net/images/79/rlaxximages/channels-rescaled/icon-white/autentichistory_white.png', url: 'https://9e754fa707344ccca6d84955c8fcaf36.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/RlaxxTV-eu_AutenticHistory/playlist.m3u8', source: 'iptv-org' },
    { id: 'autentic-travel', name: 'Autentic Travel', category: 'English Entertainment', lang: 'en', region: 'Global', logo: 'https://d3b6luslimvglo.cloudfront.net/images/79/rlaxximages/channels-rescaled/icon-white/autentictravel_white.png', url: 'https://cb0c87cc605942ff9766a4e6744bbadc.mediatailor.us-east-1.amazonaws.com/v1/master/44f73ba4d03e9607dcd9bebdcb8494d86964f1d8/RlaxxTV-eu_AutenticTravel/playlist.m3u8', source: 'iptv-org' },
    { id: 'arirang-tv', name: 'Arirang TV', category: 'English News', lang: 'en', region: 'Korea', logo: 'https://i.imgur.com/Asu5pE9.png', url: 'https://dash3.antik.sk/live/test_arirang/playlist.m3u8', source: 'iptv-org' },
    { id: 'arirang-un', name: 'Arirang TV UN', category: 'English News', lang: 'en', region: 'Korea', logo: 'https://i.imgur.com/Jdy3WNm.png', url: 'https://amdlive-ch02-ctnd-com.akamaized.net/arirang_2ch/smil:arirang_2ch.smil/playlist.m3u8', source: 'iptv-org' },
    { id: 'antiques-roadshow-pbs', name: 'Antiques Roadshow PBS', category: 'English Public', lang: 'en', region: 'US', logo: 'https://i.imgur.com/U9CYaok.png', url: 'https://amg00953-pbsusa-antiroadshow-xumo-x6ud5.amagi.tv/playlist.m3u8', source: 'iptv-org' },
    { id: 'antiques-roadshow-uk', name: 'Antiques Roadshow UK', category: 'English Entertainment', lang: 'en', region: 'UK', logo: 'https://i.imgur.com/rKWLv48.png', url: 'https://bbc-antiquesroadshowuk-1-us.roku.wurl.tv/playlist.m3u8', source: 'iptv-org' },
    { id: 'americas-funniest-home-videos', name: "America's Funniest Home Videos", category: 'English Entertainment', lang: 'en', region: 'US', logo: 'https://i.imgur.com/TOB9vmW.png', url: 'https://d1mp1kdk5zi1ie.cloudfront.net/playlist.m3u8', source: 'iptv-org' },
    { id: 'baby-shark-tv', name: 'Baby Shark TV', category: 'English Entertainment', lang: 'en', region: 'US', logo: 'https://i.imgur.com/SbBKr8L.png', url: 'https://newidco-babysharktv-1-us.roku.wurl.tv/playlist.m3u8', source: 'iptv-org' },
    { id: 'bbc-doctor-who-classic', name: 'BBC Doctor Who Classic', category: 'English Classic', lang: 'en', region: 'UK', logo: 'https://i.imgur.com/JIqJQQM.png', url: 'https://bbc-classicdrwho-1-us.roku.wurl.tv/playlist.m3u8', source: 'iptv-org' },
    { id: 'bbc-home-garden', name: 'BBC Home & Garden', category: 'English Entertainment', lang: 'en', region: 'UK', logo: 'https://i.imgur.com/rC0pi1D.png', url: 'https://d11r33s5i066xh.cloudfront.net/playlist.m3u8', source: 'iptv-org' },
    { id: 'bbc-four-uk', name: 'BBC Four UK HD', category: 'English Documentary', lang: 'en', region: 'UK', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/BBC_Four_logo_2021.svg/960px-BBC_Four_logo_2021.svg.png', url: 'https://streamer.nexyl.uk/48559ccd-6400-457d-8acc-06b9e24c2ed8.m3u8', source: 'iptv-org' },
    { id: 'abc-kids', name: 'ABC Kids', category: 'English Public', lang: 'en', region: 'Australia', logo: 'https://static.wikia.nocookie.net/logopedia/images/2/29/ABC_Kids_%282020%29.svg/revision/latest/scale-to-width-down/512', url: 'https://c.mjh.nz/abc-kids.m3u8', source: 'iptv-org' },
    { id: 'abc-entertains', name: 'ABC Entertains', category: 'English Public', lang: 'en', region: 'Australia', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/ABC_Entertains_logo.svg/960px-ABC_Entertains_logo.svg.png', url: 'https://c.mjh.nz/abc-me.m3u8', source: 'iptv-org' },
    { id: 'artflix-classics', name: 'Artflix Movie Classics', category: 'English Classic', lang: 'en', region: 'Global', logo: 'https://i.imgur.com/5pOZQB4.png', url: 'https://amogonetworx-artflix-1-nl.samsung.wurl.tv/playlist.m3u8', source: 'iptv-org' },
    { id: 'backstage', name: 'Backstage', category: 'English Documentary', lang: 'en', region: 'Global', logo: 'https://i.imgur.com/qcTNvNU.png', url: 'https://d2ah48mnofquik.cloudfront.net/Backstage.m3u8', source: 'iptv-org' },
    { id: 'amg-tv', name: 'AMG TV', category: 'English Entertainment', lang: 'en', region: 'US', logo: 'https://i.imgur.com/m5Anun9.png', url: 'https://2-fss-2.streamhoster.com/pl_138/201660-1270634-1/playlist.m3u8', source: 'iptv-org' },
    { id: 'bar-rescue', name: 'Bar Rescue', category: 'English Entertainment', lang: 'en', region: 'US', logo: 'https://i.imgur.com/WFgWGPb.png', url: 'https://jmp2.uk/plu-60a3d889a5b3690008dc7fe8.m3u8', source: 'iptv-org' },
    { id: '48-hours', name: '48 Hours', category: 'English Entertainment', lang: 'en', region: 'US', logo: 'https://images.pluto.tv/channels/6176f39e709f160007ec61c3/colorLogoPNG.png', url: 'https://jmp2.uk/plu-62e925bc68d18a00077bb990.m3u8', source: 'iptv-org' },
    { id: 'chifeng-news', name: '赤峰新闻综合', category: '中文新闻', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/cfxwzhpd.jpg', url: 'http://play1-qk.nmtv.cn/live/1735546697341033.m3u8', source: 'iptv-org country' },
    { id: 'anshun-news', name: '安顺新闻综合', category: '中文新闻', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/anshun.jpg', url: 'https://hplayer1.juyun.tv/camera/154379194.m3u8', source: 'iptv-org country' },
    { id: 'harbin-movie', name: '哈尔滨影视', category: '中文影视', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/haerbin.jpg', url: 'https://stream.hrbtv.net/yspd/playlist.m3u8', source: 'iptv-org country' },
    { id: 'harbin-news', name: '哈尔滨新闻综合', category: '中文新闻', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/haerbin.jpg', url: 'https://stream.hrbtv.net/xwzh/playlist.m3u8?_upt=ef41dd531755913594', source: 'iptv-org country' },
    { id: 'qtv-1', name: '青岛新闻综合 QTV-1', category: '中文新闻', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/qdtv1.jpg', url: 'http://video10.qtv.com.cn/drm/qtv1at/manifest.m3u8', source: 'iptv-org country' },
    { id: 'qtv-2', name: '青岛生活服务 QTV-2', category: '中文生活', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/qdtv2.jpg', url: 'http://video10.qtv.com.cn/drm/qtv2at/manifest.m3u8', source: 'iptv-org country' },
    { id: 'qtv-3', name: '青岛影视 QTV-3', category: '中文影视', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/qdtv3.jpg', url: 'http://video10.qtv.com.cn/drm/qtv3at/manifest.m3u8', source: 'iptv-org country' },
    { id: 'qtv-4', name: '青岛文体 QTV-4', category: '中文综合', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/qdtv4.jpg', url: 'http://video10.qtv.com.cn/drm/qtv4at/manifest.m3u8', source: 'iptv-org country' },
    { id: 'qtv-5', name: '青岛财经 QTV-5', category: '中文财经', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/qdtv5.jpg', url: 'http://video10.qtv.com.cn/drm/qtv5at/manifest.m3u8', source: 'iptv-org country' },
    { id: 'qtv-6', name: '青岛少儿 QTV-6', category: '中文生活', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/qdtv6.jpg', url: 'http://video10.qtv.com.cn/drm/qtv6at/manifest.m3u8', source: 'iptv-org country' },
    { id: 'cctv-9-documentary', name: 'CCTV-9 纪录', category: '中文纪录', lang: 'zh', region: 'China', logo: 'https://i.imgur.com/3tivvMm.png', url: 'https://xykt-fix.github.io/Y77.m3u8', source: 'iptv-org country' },
    { id: 'siping-tv', name: '四平综合', category: '中文综合', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/sptv1.jpg', url: 'http://stream2.jlntv.cn/sptv/sd/live.m3u8?_upt=f27750421743154598', source: 'iptv-org country' },
    { id: 'tonghua-news', name: '通化新闻综合', category: '中文新闻', lang: 'zh', region: 'China', logo: 'https://www.tvchinese.net/uploads/tv/thtv1.jpg', url: 'http://lsfb.avap.jilintv.cn/zqvk7vpj/channel/43ea5771aa44421591f9dfd2b71f1b9b/index.m3u8', source: 'iptv-org country' },
    { id: 'home-plus', name: 'Home Plus', category: '中文影视', lang: 'zh', region: 'Hong Kong', logo: 'https://www.lyngsat.com/logo/tv/hh/homeplus.png', url: 'https://homeplushls.wns.live/hls/stream.m3u8', source: 'iptv-org country' },
    { id: 'bread-tv', name: 'Bread TV 面包台', category: '中文综合', lang: 'zh', region: 'Global', logo: 'https://bread-tv.com/uploads/allimg/241202/9_1836542371.png', url: 'https://video.bread-tv.com:8091/hls-live24/online/index.m3u8', source: 'iptv-org country' },
    { id: 'celestial-movies', name: '天映频道', category: '中文影视', lang: 'zh', region: 'Hong Kong', logo: 'https://i.imgur.com/Mb5ssnu.png', url: 'http://103.58.160.157:8278/720-CELESTIALMOVIES/playlist.m3u8', source: 'iptv-org country' },
    { id: 'pet-club-tv', name: 'Pet Club TV', category: '中文生活', lang: 'zh', region: 'Hong Kong', logo: 'https://i.imgur.com/ykPNNwQ.png', url: 'https://petclub-samsungaus.amagi.tv/playlist.m3u8', source: 'iptv-org country' },
    { id: 'dali-tv', name: '大立电视台', category: '中文综合', lang: 'zh', region: 'Taiwan', logo: 'https://i.imgur.com/pFIMLsA.png', url: 'http://www.dalitv.com.tw:4568/live/dali/index.m3u8', source: 'iptv-org country' },
    { id: 'supreme-master-tv', name: 'Supreme Master TV', category: '中文综合', lang: 'zh', region: 'Taiwan', logo: 'https://i.imgur.com/kFMHayP.png', url: 'https://lbs-us1.suprememastertv.com/720p.m3u8', source: 'iptv-org country' },
    { id: 'tvbs-asia', name: 'TVBS Asia', category: '中文综合', lang: 'zh', region: 'Taiwan', logo: 'https://i.imgur.com/4S1rkhm.png', url: 'http://38.64.72.148/hls/modn/list/4005/playlist.m3u8', source: 'iptv-org country' },
    { id: 'rtm-asean', name: 'RTM ASEAN', category: 'English News', lang: 'en', region: 'Singapore', logo: 'https://i.imgur.com/skAiUxg.png', url: 'https://d25tgymtnqzu8s.cloudfront.net/event/smil:event1/chunklist_b2596000_slENG.m3u8', source: 'iptv-org country' },
    { id: 'livenow-abc-news', name: 'ABC News US', category: 'English News', lang: 'en', region: 'US', logo: 'https://livenow.news/images/abcnews-us_hu_9e8033f39e4d5045.jpeg', url: 'https://aegis-cloudfront-1.tubi.video/d6cbb0de-68e4-4f3b-82f9-bf5d526e0bde/index.m3u8', source: 'livenow.news' },
    { id: 'livenow-nbc-news-now', name: 'NBC News Now Alternate', category: 'English News', lang: 'en', region: 'US', logo: 'https://livenow.news/images/nbcnewsnow_hu_fa5a22b5e91c561c.jpeg', url: 'https://xumo-drct-nbcnn-ir8ze.fast.nbcuni.com/live/master.m3u8', source: 'livenow.news' },
    { id: 'livenow-fox', name: 'LiveNOW from FOX', category: 'English News', lang: 'en', region: 'US', logo: 'https://livenow.news/images/livenowfox_hu_78d9456d69479ed0.jpeg', url: 'https://fox-foxnewsnow-vizio.amagi.tv/playlist.m3u8', source: 'livenow.news' },
    { id: 'livenow-scripps', name: 'Scripps TV Alternate', category: 'English News', lang: 'en', region: 'US', logo: 'https://livenow.news/images/scripps_hu_807c57c4c7a63d58.jpeg', url: 'https://547f72e6652371c3.mediapackage.us-east-1.amazonaws.com/out/v1/e3e6e29095844c4ba7d887f01e44a5ef/index.m3u8', source: 'livenow.news' },
    { id: 'citynews-canada', name: 'CityNews Canada', category: 'English News', lang: 'en', region: 'Canada', logo: 'https://livenow.news/images/citynews_hu_b86fdf010eb61c4a.jpeg', url: 'https://citynewsregional.akamaized.net/hls/live/1024053/Regional_Live_8/master.m3u8', source: 'livenow.news' },
    { id: 'global-news-canada', name: 'Global News Canada', category: 'English News', lang: 'en', region: 'Canada', logo: 'https://livenow.news/images/globalnews_hu_3c882fc9d29bcad2.jpeg', url: 'https://live.corusdigitaldev.com/groupd/live/49a91e7f-1023-430f-8d66-561055f3d0f7/live.isml/live-audio_1=96000-video=2499968.m3u8', source: 'livenow.news' },
    { id: 'euronews-alt', name: 'Euronews Alternate', category: 'English News', lang: 'en', region: 'Europe', logo: 'https://livenow.news/images/euronews_hu_2adc21c127e6d35.jpeg', url: 'https://a-cdn.klowdtv.com/live3/euronews_720p/playlist.m3u8', source: 'livenow.news' },
    { id: 'ticker-news', name: 'Ticker News', category: 'English News', lang: 'en', region: 'Australia', logo: 'https://livenow.news/images/ticker-news_hu_1d27a87035bcc732.jpeg', url: 'https://live-hls-7agy.livepush.io/live_abr_cdn/nsitWAl1pTZtwca/emnmZbKZcO8RfwJR/index.m3u8', source: 'livenow.news' },
    { id: 'bbc-news-uk', name: 'BBC News UK', category: 'English News', lang: 'en', region: 'UK', logo: 'https://livenow.news/images/bbcnewsuk_hu_55e27e299146ee01.jpeg', url: 'https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/t=3840/v=pv10/b=1604032/main.m3u8', source: 'livenow.news' },
    { id: 'cbs-news-alt', name: 'CBS News Alternate', category: 'English News', lang: 'en', region: 'US', logo: 'https://livenow.news/images/cbsnews_hu_d605769ba6225b31.jpeg', url: 'https://dai.google.com/linear/hls/event/Sid4xiTQTkCT1SLu6rjUSQ/master.m3u8', source: 'livenow.news' },
    { id: 'bbc-news-worldwide', name: 'BBC News Worldwide', category: 'English News', lang: 'en', region: 'UK', logo: 'https://livenow.news/images/bbcnews_hu_6e8eac7bdbdf022c.jpeg', url: 'https://dash2.antik.sk/live/test_bbc_world/playlist.m3u8', source: 'livenow.news' },
    { id: 'gb-news-alt', name: 'GB News Alternate', category: 'English News', lang: 'en', region: 'UK', logo: 'https://livenow.news/images/gbnews_hu_e09c7f6c92dc5858.jpeg', url: 'https://amg01076-lightningintern-gbnewsau-samsungau-et7fz.amagi.tv/playlist/amg01076-lightningintern-gbnewsau-samsungau/playlist.m3u8', source: 'livenow.news' },
    { id: 'ndtv-india', name: 'NDTV India', category: 'English News', lang: 'en', region: 'India', logo: 'https://livenow.news/images/ndtv_hu_c53c2c9cc41880ce.jpeg', url: 'https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8', source: 'livenow.news' },
    { id: 'india-today', name: 'India Today', category: 'English News', lang: 'en', region: 'India', logo: 'https://livenow.news/images/indiatoday_hu_ce2b01a3fcc66a77.jpeg', url: 'https://feeds.intoday.in/hltapps/api/master.m3u8', source: 'livenow.news' },
    { id: 'cna-alt', name: 'CNA Alternate', category: 'English News', lang: 'en', region: 'Singapore', logo: 'https://livenow.news/images/cna_hu_4bae030b0befef02.jpeg', url: 'https://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index.m3u8', source: 'livenow.news' },
    { id: 'telesur-english', name: 'TeleSUR English', category: 'English News', lang: 'en', region: 'Venezuela', logo: 'https://livenow.news/images/telesur_hu_408abfea96423450.jpeg', url: 'https://mblenmain01.telesur.ultrabase.net/mblivev3/hd/playlist.m3u8', source: 'livenow.news' },
    { id: 'wion-india', name: 'WION', category: 'English News', lang: 'en', region: 'India', logo: 'https://livenow.news/images/wion_hu_c9a87ebcf300cc94.jpeg', url: 'https://d7x8z4yuq42qn.cloudfront.net/index_7.m3u8', source: 'livenow.news' },
    { id: 'press-tv', name: 'Press TV', category: 'English News', lang: 'en', region: 'Iran', logo: 'https://livenow.news/images/presstv_hu_3f1e843b6c21d054.jpeg', url: 'https://live.presstv.ir/hls/presstv_5_482/index.m3u8', source: 'livenow.news' },
    { id: 'sabc-news', name: 'SABC News', category: 'English News', lang: 'en', region: 'South Africa', logo: 'https://livenow.news/images/sabc-news_hu_211888b714a456dd.jpeg', url: 'https://sabconetanw.cdn.mangomolo.com/news/smil:news.stream.smil/master.m3u8', source: 'livenow.news' },
    { id: 'sky-news-australia', name: 'Sky News Australia', category: 'English News', lang: 'en', region: 'Australia', logo: 'https://livenow.news/images/sky-news-australia_hu_77f6caed4a66404b.jpeg', url: 'https://i.mjh.nz/.r/sky-news-now.m3u8', source: 'livenow.news' },
    { id: 'rt-news', name: 'RT News', category: 'English News', lang: 'en', region: 'Russia', logo: 'https://livenow.news/images/rt_hu_7c61dfd43f91a522.jpeg', url: 'https://rt-glb.rttv.com/dvr/rtnews/playlist_4500Kb.m3u8', source: 'livenow.news' }
];

const DISABLED_LIVE_CHANNEL_IDS = new Set([
    'tdm-entertainment', 'tdm-satellite', 'channel-8', 'channel-u',
    'tdm-info', 'tdm-sports', 'daai-2', 'daai-1',
    'ntd-asia-pacific', 'ntd-tv', 'ntd-canada', 'ntd-china',
    'shenzhen-satellite', 'ntd-canada-west', 'jiangxi-city',
    'jiangxi-economy', 'jiangxi-movie', 'phoenix-chinese',
    'phoenix-info', 'jilin-lifestyle', 'taiwan-indigenous',
    'indigenous-tv', 'china-weather', 'shanghai-education',
    'cetv-1', 'cetv-2', 'tdm-ou-mun', 'sky-news',
    'cna-international', 'nasa-public', 'docurama', 'bob-ross',
    'americas-funniest-home-videos', 'guangzhou-tv', 'tv-brics-chinese',
    'euronews-alt'
]);

const ACTIVE_LIVE_CHANNELS = LIVE_CHANNELS.filter(channel => !DISABLED_LIVE_CHANNEL_IDS.has(channel.id));
const LIVE_FAVORITES_KEY = 'liveFavoriteChannels';
const LIVE_RECENT_KEY = 'liveRecentChannels';
const LIVE_RECENT_LIMIT = 12;

let currentLiveCategory = '全部';
let currentLiveQuery = '';

function readLiveStorageArray(key) {
    try {
        const data = JSON.parse(localStorage.getItem(key) || '[]');
        return Array.isArray(data) ? data : [];
    } catch (error) {
        return [];
    }
}

function getFavoriteLiveIds() {
    return readLiveStorageArray(LIVE_FAVORITES_KEY);
}

function setFavoriteLiveIds(ids) {
    localStorage.setItem(LIVE_FAVORITES_KEY, JSON.stringify([...new Set(ids)]));
}

function getRecentLiveIds() {
    return readLiveStorageArray(LIVE_RECENT_KEY);
}

function addRecentLiveChannel(channelId) {
    const ids = [channelId, ...getRecentLiveIds().filter(id => id !== channelId)].slice(0, LIVE_RECENT_LIMIT);
    localStorage.setItem(LIVE_RECENT_KEY, JSON.stringify(ids));
}

function getLiveChannelById(channelId) {
    return ACTIVE_LIVE_CHANNELS.find(channel => channel.id === channelId);
}

function getLiveLogoFallback(channel) {
    const label = encodeURIComponent(channel.lang === 'zh' ? '直播' : 'LIVE');
    const name = encodeURIComponent(channel.name.slice(0, 18));
    return `data:image/svg+xml;charset=UTF-8,%3Csvg width='320' height='180' viewBox='0 0 320 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23172436'/%3E%3Cstop offset='1' stop-color='%23070b12'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='320' height='180' rx='18' fill='url(%23bg)'/%3E%3Ccircle cx='76' cy='72' r='32' fill='%2300ccff' fill-opacity='.16'/%3E%3Cpath d='M64 54l42 24-42 24z' fill='%2300ccff'/%3E%3Ctext x='160' y='82' text-anchor='middle' fill='%23e6f2ff' font-family='Arial,sans-serif' font-size='24' font-weight='700'%3E${label}%3C/text%3E%3Ctext x='160' y='118' text-anchor='middle' fill='%238599b2' font-family='Arial,sans-serif' font-size='16'%3E${name}%3C/text%3E%3C/svg%3E`;
}

function normalizeLiveText(value) {
    return String(value || '').toLowerCase().replace(/\s+/g, '');
}

function getFilteredLiveChannels() {
    const query = normalizeLiveText(currentLiveQuery);
    const favoriteIds = getFavoriteLiveIds();
    const recentIds = getRecentLiveIds();
    const favoriteSet = new Set(favoriteIds);
    const recentSet = new Set(recentIds);
    let channels = ACTIVE_LIVE_CHANNELS;

    if (currentLiveCategory === '收藏') {
        channels = favoriteIds.map(getLiveChannelById).filter(Boolean);
    } else if (currentLiveCategory === '最近观看') {
        channels = recentIds.map(getLiveChannelById).filter(Boolean);
    }

    return channels.filter(channel => {
        const categoryMatched = ['全部', '收藏', '最近观看'].includes(currentLiveCategory) || channel.category === currentLiveCategory;
        const queryMatched = !query || normalizeLiveText(`${channel.name}${channel.category}${channel.region}`).includes(query);
        return categoryMatched && queryMatched;
    }).sort((a, b) => {
        const favoriteRank = Number(favoriteSet.has(b.id)) - Number(favoriteSet.has(a.id));
        if (favoriteRank !== 0) return favoriteRank;
        const recentRank = Number(recentSet.has(b.id)) - Number(recentSet.has(a.id));
        if (recentRank !== 0) return recentRank;
        return 0;
    });
}

function renderLiveCategories() {
    const container = document.getElementById('liveCategoryTabs');
    if (!container) return;
    const categories = ['收藏', '最近观看', ...LIVE_CHANNEL_CATEGORIES];
    container.innerHTML = categories.map(category => `
        <button type="button"
                class="live-category-tab ${category === currentLiveCategory ? 'active' : ''}"
                data-live-category="${encodeURIComponent(category)}">
            ${escapeHtml(category)}
        </button>
    `).join('');
}

function renderLiveChannels() {
    const list = document.getElementById('liveChannelList');
    const count = document.getElementById('liveChannelCount');
    if (!list) return;

    const channels = getFilteredLiveChannels();
    const favoriteSet = new Set(getFavoriteLiveIds());
    if (count) count.textContent = channels.length;

    if (channels.length === 0) {
        list.innerHTML = '<div class="col-span-full text-center text-gray-400 py-12">没有匹配的直播频道</div>';
        return;
    }

    list.innerHTML = channels.map(channel => {
        const fallback = getLiveLogoFallback(channel);
        return `
            <div class="live-channel-card" data-live-channel="${escapeHtml(channel.id)}">
                <button type="button"
                        class="live-favorite-btn ${favoriteSet.has(channel.id) ? 'active' : ''}"
                        data-live-favorite="${escapeHtml(channel.id)}"
                        title="${favoriteSet.has(channel.id) ? '取消收藏' : '收藏频道'}"
                        aria-label="${favoriteSet.has(channel.id) ? '取消收藏' : '收藏频道'}">
                    ★
                </button>
                <div class="live-channel-logo-wrap">
                    <img src="${escapeHtml(channel.logo || fallback)}"
                         alt="${escapeHtml(channel.name)}"
                         class="live-channel-logo"
                         loading="lazy"
                         onerror="this.onerror=null;this.src='${fallback}'">
                </div>
                <div class="live-channel-body">
                    <div class="live-channel-name">${escapeHtml(channel.name)}</div>
                    <div class="live-channel-meta">
                        <span>${escapeHtml(channel.category)}</span>
                        <span>${escapeHtml(channel.region)}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function toggleLiveFavorite(channelId) {
    const channel = getLiveChannelById(channelId);
    if (!channel) return;
    const favorites = getFavoriteLiveIds();
    const nextFavorites = favorites.includes(channelId)
        ? favorites.filter(id => id !== channelId)
        : [channelId, ...favorites];
    setFavoriteLiveIds(nextFavorites);
    renderLiveCategories();
    renderLiveChannels();
}

function showLiveTv() {
    if (window.isPasswordProtected && window.isPasswordVerified) {
        if (window.isPasswordProtected() && !window.isPasswordVerified()) {
            showPasswordModal && showPasswordModal();
            return;
        }
    }

    document.getElementById('searchArea')?.classList.remove('flex-1');
    document.getElementById('searchArea')?.classList.add('mb-8');
    document.getElementById('resultsArea')?.classList.add('hidden');
    document.getElementById('doubanArea')?.classList.add('hidden');
    document.getElementById('liveTvArea')?.classList.remove('hidden');
    renderLiveCategories();
    renderLiveChannels();

    try {
        window.history.pushState({}, '电视直播 - LibreTV', '/?live=1');
        document.title = '电视直播 - LibreTV';
    } catch (error) {
    }
}

function hideLiveTv() {
    document.getElementById('liveTvArea')?.classList.add('hidden');
}

function playLiveChannel(channelId) {
    const channel = ACTIVE_LIVE_CHANNELS.find(item => item.id === channelId);
    if (!channel) {
        showToast('直播频道不存在', 'error');
        return;
    }

    const params = new URLSearchParams({
        live: '1',
        source: 'live',
        id: channel.id,
        title: channel.name,
        url: channel.url,
        category: channel.category,
        region: channel.region
    });
    addRecentLiveChannel(channel.id);
    localStorage.setItem('lastPageUrl', window.location.href);
    window.location.href = `player.html?${params.toString()}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const liveButton = document.getElementById('liveTvButton');
    const liveSearch = document.getElementById('liveChannelSearch');
    const liveList = document.getElementById('liveChannelList');
    const liveTabs = document.getElementById('liveCategoryTabs');

    liveButton?.addEventListener('click', showLiveTv);
    liveSearch?.addEventListener('input', event => {
        currentLiveQuery = event.target.value;
        renderLiveChannels();
    });
    liveTabs?.addEventListener('click', event => {
        const tab = event.target.closest('[data-live-category]');
        if (!tab) return;
        currentLiveCategory = decodeURIComponent(tab.dataset.liveCategory || '全部');
        renderLiveCategories();
        renderLiveChannels();
    });
    liveList?.addEventListener('click', event => {
        const favoriteButton = event.target.closest('[data-live-favorite]');
        if (favoriteButton) {
            event.preventDefault();
            event.stopPropagation();
            toggleLiveFavorite(favoriteButton.dataset.liveFavorite);
            return;
        }

        const card = event.target.closest('[data-live-channel]');
        if (!card) return;
        playLiveChannel(card.dataset.liveChannel);
    });

    if (new URLSearchParams(window.location.search).get('live') === '1') {
        showLiveTv();
    }
});

window.LIVE_CHANNELS = ACTIVE_LIVE_CHANNELS;
window.showLiveTv = showLiveTv;
window.hideLiveTv = hideLiveTv;
