# Saturday Morning Mode

A kids' TV channel that only plays the channels you pick. It runs on the same engine as BSO TV: every
channel is a YouTube creator, playlist or set of videos playing like live TV, flipped with the remote's
channel buttons.

Web address (once GitHub Pages is on): https://admanroddy.github.io/SaturdayMorningMode/

## Turn on the web address

Repo **Settings > Pages**, Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)**, Save.
It's live a minute or two later.

## Pick the channels

Everything is in `channels.js`. Channel numbers follow the order in the list. Each channel is one of:

| Kind | Example |
| --- | --- |
| A YouTube creator (their long videos, no Shorts) | `{ name: 'Sesame Street', id: 'UCoookXUzPciGrEZEXmh4Jjg' }` |
| One playlist | `{ name: 'Season 1', list: 'PL…' }` |
| Hand-picked videos only | `{ name: 'Favorites', ids: ['videoId', 'videoId'] }` |
| Several creators shuffled together | `{ name: 'Cartoon Mix', mix: ['UC…', 'UC…'] }` |

Optional on any channel: `min: 600` skips videos shorter than that many seconds (default 60), `color: 'yellow'`
sets the channel's panel color (`red`, `yellow`, `blue` or `green`; by default they take turns), and
`slate: 'dvd'` covers that channel's commercial breaks with "Saturday Morning" bouncing around a black screen
like an old DVD player (only the movie channel has it).

Shows come from their official channel, or a playlist on a channel run by the studio or its licensed
distributor. Bear in the Big Blue House, classic Blue's Clues and Wishbone have nothing official on YouTube,
so those three are fan-made playlists and can lose videos over time. The movie channel, Saturday Matinee, plays the
Air Bud films from Air Bud Entertainment's own channel; the other 90s movies are only rentals on YouTube, which
won't play inside another app.

To find a creator's id: on their YouTube channel page, open **About**, then **Share channel > Copy channel ID**.
It starts with `UC`.

## Remote

| Button | Does |
| --- | --- |
| ▲ ▼ / CH + − | Change channel |
| OK | Guide |
| ◀ | Last channel |
| ▶ | Start the show over |
| Play/Pause | Pause |
| Number keys | Go straight to a channel |
| Back | Close the guide (in the Samsung app: back to the Bent Steering home screen) |

On a phone or tablet: swipe up or down to change channel, tap for the buttons.

## Grown-up settings

At the bottom of the guide, **Grown-ups** asks a times-table question with four big answers. Answer it and the
settings show: captions, picture fill or fit, jump in mid-show, cover commercials, and YouTube's debug readout.
They hide again as soon as the guide closes.

## What's different from BSO TV

- Kids can't reach YouTube itself: every tap lands on Saturday Morning Mode, never on YouTube's player, and
  each show rolls straight into the next one with no "more videos" screen.
- Settings sit behind the grown-ups question.
- Videos down to a minute play (songs and short cartoons); BSO TV skips anything under 2½ minutes.
- No Premium mode on the Samsung app, since that hands the TV over to the full YouTube app.
- Its saved settings are kept separate from BSO TV's, even though both live at admanroddy.github.io.

`tv.js` is a copy of BSO TV's TV helpers (Samsung remote keys, fixes for the 2018 TV's browser).
