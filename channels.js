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
  // free full movies from Air Bud Entertainment's own channel (the only ones from the list posted free by their owner)
  { name: 'Saturday Matinee', slate: 'dvd', ids: [
    '1VRVdf71dfo',   // Air Bud
    'FJFqC8o1fVE',   // Air Bud: Golden Receiver
    'h2irxpnEKdQ',   // Air Bud: World Pup
    'Vh-Sa1RlRfA',   // Air Bud: Seventh Inning Fetch
    'YazStuuIpOM',   // Air Bud: Spikes Back
    'jEUJgZOsDes',   // Air Buddies
    'rWG0bi0AQYA'    // MVP: Most Valuable Primate
  ] }
];
