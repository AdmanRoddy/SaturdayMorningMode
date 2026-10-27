/* Saturday Morning Mode — the channel lineup.
 *
 * Channel numbers follow the order below (first one is channel 1). Kids can only flip between these.
 *
 * Each channel is one of:
 *   { name: 'Show name', id: 'UC…' }                  a YouTube creator: plays their long videos (no Shorts)
 *   { name: 'Show name', list: 'PL…' }                one YouTube playlist (a show's episodes, a season)
 *   { name: 'Show name', ids: ['videoId', …] }        hand-picked videos only
 *   { name: 'Show name', mix: ['UC…', 'UC…'] }        several creators shuffled together, equal airtime
 *
 * Optional on any channel:
 *   min: 600          skip videos shorter than this many seconds (default 60; hand-picked videos always play)
 *   color: 'yellow'   the channel's panel color: 'red', 'yellow', 'blue' or 'green' (default: takes turns)
 *   slate: 'dvd'      commercial breaks show "Saturday Morning" bouncing around a black screen like an old DVD player
 *
 * To find a creator's id: on their YouTube channel page, open "About" (the "more" link under the name),
 * then Share channel > Copy channel ID. It starts with UC.
 *
 * Sources are the show's official channel, or a playlist on a channel run by the studio or its licensed
 * distributor, except Bear in the Big Blue House, Blue's Clues and Wishbone: nothing official exists for
 * the classic shows, so those three are fan-made playlists and can lose videos over time.
 */
window.SMM_CHANNELS = [
  { name: 'Sesame Street', id: 'UCoookXUzPciGrEZEXmh4Jjg' },
  { name: 'Ms Rachel', id: 'UCG2CL6EUjG8TVT1Tpl9nJdg' },
  // BBC Studios' "Bluey Full Episodes Collection" playlist (the channel itself is mostly clips)
  { name: 'Bluey', list: 'PLbtUQWldWkKjFcPqDd_XI3QQ_3IBqaoV7' },
  // the original 1997–2004 series, on Kindlight Lane (Nelvana's shows)
  { name: 'Franklin', list: 'PLGbBuikY0YkEF3rxDz6J3RgWMqQ7EekDB' },
  // on Little Boat (Boat Rocker's kids shows)
  { name: 'The Big Comfy Couch', list: 'PLsrHA2p9h-Bif_bYyyBTjl6Dke2MXbg-p' },
  { name: 'Little Bear', id: 'UCncFzSeWqySvOXEbQoEJsZg' },
  // fan-made "Complete Seasons 1-5" playlist (Play Breakz): Disney hasn't posted the show
  { name: 'Bear in the Big Blue House', list: 'PLAVu1r3_Gd-4' },
  // classic LeVar Burton episodes, on Sony's Kidzuko channel
  { name: 'Reading Rainbow', list: 'PLKjPuuAb_XK9LvO36b0xCCfnh8F8Dy3Rx' },
  // Scholastic's "Magic School Bus Classic" channel: the original 1994–97 series
  { name: 'The Magic School Bus', id: 'UCi7STzPDqcOvmjm7-bEsvDg' },
  // fan-made "Blue's Clues Full Episodes" playlist (Keith Kelly): Nick Jr. doesn't post the classic episodes
  { name: "Blue's Clues", list: 'PLiaDPpe0DqF6JUZQTSLQwv2RjrJcN3slb' },
  // Scholastic's classic 2000–03 series, plus Clifford's Puppy Days
  { name: 'Clifford the Big Red Dog', id: 'UCqu9w7Mw14mAUQMzcyV3D4A' },
  // fan-made full-episodes playlist (Bronson B): Mattel hasn't posted the show
  { name: 'Wishbone', list: 'PLXUunJz_da3FB5YWRoDofUj707xs-Se8H' },
  // Fisher-Price's "Kipper | Full Episodes" playlist (Mattel owns Kipper)
  { name: 'Kipper', list: 'PLKCNCfD_4af85o-6BX7nV0JLEwBv3uKE-' },
  // WildBrain's "All Episodes | Zoboomafoo" playlist
  { name: 'Zoboomafoo', list: 'PLOBp3v-_cPa2f05inQWNrm0KMd6VHSgyc' },
  // Fred Rogers Productions' official channel (opened in 2026): full episodes, songs and visits
  { name: "Mister Rogers' Neighborhood", id: 'UCQr37RLNViAkEwli9WiaUug' },
  // PBS KIDS' full episodes and compilations playlist
  { name: "Daniel Tiger's Neighborhood", list: 'PLa8HWWMcQEGT8bMsS9WSyXbvbxm5i8bUW' },
  // Most official Arthur videos are blocked from playing outside YouTube. These PBS KIDS full episodes
  // (from the "Arthur FULL Episodes" playlist Josh found) were each tested and do play here.
  { name: 'Arthur', ids: [
    'mpsu-YYGdeU',   // Silent Treatment
    'QpYHnyO4-_U',   // Through the Looking Glasses
    '4ETDmav5CmQ',   // Muffy Misses Out
    '2JMYazJC5ys',   // Cents-less
    'Xjriy-iizbw',   // The Princess Problem
    'SSA6LFLXtgE',   // S.W.E.A.T.
    'ZwO5_ZnqXxY',   // Arthur's Numbers Nightmare
    'yFKxJVOc81o',   // What's in a Name?
    'nuaq888PtM4',   // Best Enemies
    'A7FFCnmiZdI'    // Brain Gets Hooked
  ] },
  // Disney Kids' own "The New Adventures of Winnie the Pooh" playlist
  { name: 'Winnie the Pooh', list: 'PLWMhB1nOHzvs' },
  // Real ballet companies and schools, each video tested to play here: full-length Nutcrackers, plus stage
  // clips from story ballets (no trailers, interviews or rehearsals)
  { name: 'Ballet', ids: [
    // Full-length Nutcrackers, posted by the companies and schools themselves
    'Lv-migIgqq4',   // Central Florida Ballet: The Nutcracker (full length)
    'FkcfsFp10AI',   // Central Florida Ballet: The Nutcracker (1 hour, narrated for children)
    'ed-pB5VnKr0',   // Imperial Classical Ballet: The Nutcracker (full performance)
    'tR_Z1LUDQuQ',   // Imperial Classical Ballet: The Nutcracker (full performance, HD)
    '6tsVHpaiLrA',   // Swedish National Ballet School: The Nutcracker
    'VZLnm5vWqpM',   // Joffrey Ballet School: Nutcracker 2019
    'prTm33RDsLg',   // Armour Dance Theatre: The Nutcracker 2018
    // The Royal Ballet's stage clips (Royal Ballet and Opera)
    'zV1qLYukTH8',   // Nutcracker: Dance of the Sugar Plum Fairy
    'KiOSA7PDvG0',   // Nutcracker: Sugar Plum pas de deux
    'qy6dlGpC3Ns',   // Nutcracker: Sugar Plum adagio
    'Iz9fqHJdrZc',   // Nutcracker: Sugar Plum Prince variation
    'AfpiTEzL_FA',   // Nutcracker: Waltz of the Snowflakes
    'UYaIQNjAX_8',   // Nutcracker: Waltz of the Snowflakes (longer)
    'eqNJkorD2Yw',   // Nutcracker: Rose Fairy
    'V32zWkB1MiY',   // Nutcracker: Dance of the Mirlitons
    'cEjEtPgaL60',   // Nutcracker: Act I pas de deux
    'F-CwMdtpq1A',   // Nutcracker: the Christmas tree grows
    'kRayVFD1Njk',   // Nutcracker: the mouse battle
    'fTvqpSHSqh8',   // Nutcracker: a moment
    'SwJKarHapr8',   // Nutcracker: Hans-Peter's mime
    'hpHjMf7q7o4',   // Nutcracker: Hans-Peter's mime (another cast)
    'LGfrEexvqYg',   // Nutcracker: cinema clip
    '07iuzXMRzZA',   // Swan Lake: Odette's entrance
    '077BgT3h6As',   // Swan Lake: Act II pas de deux
    'cSGLGnHJDSQ',   // Swan Lake: the swans
    'UWxtpBcYzao',   // Swan Lake: end of Act II
    'BGcQ18MnQkc',   // Swan Lake: Neapolitan Dance
    '3SKLSOGtayE',   // Swan Lake: Black Swan solo
    'p21n1xorjEs',   // Swan Lake: Black Swan entrance and adage
    'XfmSv0z205s',   // Swan Lake: Black Swan coda
    'kJ4uowripdw',   // The Dying Swan
    'ZSDkn77_OOc',   // Sleeping Beauty: Carabosse curses Aurora
    't0eqzWD1HH8',   // Sleeping Beauty: Lilac Fairy
    'qqejv_BQ7Zg',   // Sleeping Beauty: Rose Adage
    'DOpl9nMptPg',   // Sleeping Beauty: Aurora's Act I variation
    'Jfi2g_sFkqQ',   // Sleeping Beauty: Act II pas de deux
    'BZe0TFU75rI',   // Sleeping Beauty: Bluebird and Princess Florine
    'omIZgkAPsPU',   // Sleeping Beauty: White Cat and Puss-in-Boots
    'NguzVDUANPQ',   // Sleeping Beauty: Prince Florimund
    'nusHjVjugh4',   // Sleeping Beauty: wedding pas de deux
    'doqAcLEirss',   // Cinderella: Act II pas de deux
    'NLkTFhhw2So',   // Cinderella: the Fairy Godmother
    '6F0lo3Izaog',   // Coppélia: the mechanical dolls
    '7dYUHfcM-Sg',   // Coppélia: Act III pas de deux
    'y_56m_iHRh8',   // Coppélia: Franz's variation
    'Kq8zqhqjUIo',   // Alice's Adventures in Wonderland: Mad Hatter's Tea Party
    'gOiK2G88sbw',   // Alice: the Caterpillar
    'urN6ypzZnfo',   // Alice: Pig and Pepper
    'e1BuBdGunC8',   // Alice: Knave of Hearts pas de deux
    '25tor-1rYk4',   // Alice: Act II
    'Mgn5pzV4HZI',   // La Fille mal gardée: the Maypole Dance
    'BT9naCq0fdE',   // La Fille mal gardée: the Clog Dance
    'H50e7FgcsQE',   // La Fille mal gardée: ribbon dance
    'Fsjz3aLKZGw',   // La Fille mal gardée: Act I pas de deux
    'ES4g495cp3M',   // La Fille mal gardée: adagio
    'CmaxDQbA0C0',   // Don Quixote: Dance of the Matadors
    '5fKxzQ8ARTQ',   // Don Quixote: Act I finale
    '3iTBHVeUDgo',   // Don Quixote: Queen of the Dryads
    'L2WOKBWOCiI',   // Don Quixote: Cupid
    '9lpR7yQ66mc',   // Don Quixote: Kitri's variation
    'xhjSXEv_APQ',   // Don Quixote: Act III pas de deux
    'Ol6EtEJwAlc',   // The Dream: Titania and the fairies
    'fy2tjWVcTEY',   // The Dream: Titania and Oberon
    'RRMc4G8FLPg',   // Giselle: Dance of the Wilis
    'bcTOC-OpS0E',   // Giselle: Myrtha, Queen of the Wilis
    'GoG5izkLe-Y',   // Giselle: Act I variation
    'eKRbJ8jvhKM',   // Giselle: Act I pas de deux
    '8xjuwzb7Olg',   // Giselle: Act II pas de deux
    'ql3o-1eSdbQ',   // Giselle: Act II pas de deux (another cast)
    'sC6cu3BNZ-s',   // Romeo and Juliet: party pas de deux
    'SyDo3h1Tu7c',   // Romeo and Juliet: Dance of the Knights
    'FrJ8gxzkW2c',   // Romeo and Juliet: Juliet's variation
    'O5vljmZRY4w',   // Romeo and Juliet: balcony pas de deux
    '7zXfYygXX0I',   // Romeo and Juliet: balcony pas de deux (another cast)
    'zWBVa2m_4Fs',   // Romeo and Juliet: balcony pas de deux (a third cast)
    'g6MEm2IxyUE',   // Raymonda: Act III
    'ojbsyz5h_0c',   // Raymonda: variation
    'RB7sgUbI_uY',   // La Bayadère: Act II pas de deux
    'We7KAkWJow8',   // Sylvia: Act III solo
    'qdZuqWYIxiU',   // Jewels: 'Diamonds' pas de deux
    '-rodEJzRXBs',   // Jewels: 'Diamonds' pas de deux (another cast)
    'CQNx0oX6TEk',   // Jewels: 'Diamonds' corps de ballet
    'DSOsjLYaA88',   // Jewels: 'Rubies' pas de deux
    'wo9UWrKYFh8',   // Jewels: 'Emeralds' variation
    // English National Ballet's Nutcracker
    'SM6Emqyo6dY',   // Sugar Plum Fairy and Cavalier
    'O1LP7QB0UFI',   // Liquorice Allsorts
    'Gj_4ejZ-1Kk',   // Buttercream Roses
    'xgns-ujBlW8',   // Butler and Maid
    // Pacific Northwest Ballet's Nutcracker
    'rZmZz6gIpE4',   // Waltz of the Snowflakes
    'XHktscKh9WA',   // Marzipan
    'UIb0g6iMQ5M'    // Flowers
  ] },
  // free full movies from Air Bud Entertainment's own channel (the only ones from the list posted free by their owner)
  { name: 'Saturday Matinee', slate: 'dvd', ids: [
    '1VRVdf71dfo',   // Air Bud
    'FJFqC8o1fVE',   // Air Bud: Golden Receiver
    'h2irxpnEKdQ',   // Air Bud: World Pup
    'Vh-Sa1RlRfA',   // Air Bud: Seventh Inning Fetch
    'YazStuuIpOM',   // Air Bud: Spikes Back
    'jEUJgZOsDes',   // Air Buddies
    'rWG0bi0AQYA',   // MVP: Most Valuable Primate
    'iT-ozlJGiE0'    // It's the Great Pumpkin, Charlie Brown (a fan's upload, so it may disappear someday)
  ] }
];
