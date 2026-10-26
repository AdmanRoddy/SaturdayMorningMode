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
 *   min: 120          skip videos shorter than this many seconds (default 60)
 *   color: 'yellow'   the channel's panel color: 'red', 'yellow', 'blue' or 'green' (default: takes turns)
 *   slate: 'dvd'      commercial breaks show "Saturday Morning" bouncing around a black screen like an old DVD player
 *
 * To find a creator's id: on their YouTube channel page, open "About" (the "more" link under the name),
 * then Share channel > Copy channel ID. It starts with UC.
 *
 * These three are a starter lineup so the draft plays something. Swap them for your picks.
 */
window.SMM_CHANNELS = [
  { name: 'Sesame Street', id: 'UCoookXUzPciGrEZEXmh4Jjg' },
  { name: 'PBS KIDS', id: 'UCrNnk0wFBnCS1awGjq_ijGQ' },
  { name: 'Bluey', id: 'UCVzLLZkDuFGAE2BGdBuBNBg' }
];
