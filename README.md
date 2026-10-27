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
so those three are fan-made playlists and can lose videos over time. The Ballet channel is hand-picked
performances posted by the companies and schools themselves (The Royal Ballet, English National Ballet, Pacific
Northwest Ballet and others' full Nutcrackers), and VeggieTales comes from the official VeggieTales channel. The movie channel, Saturday Matinee, plays the
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
| Yellow | Games (same as the shapes button on the banner) |
| Play/Pause | Pause |
| Number keys | Go straight to a channel |
| Green | Marshmallows! (same as the marshmallow button on the banner) |
| Back | Close the guide (in the Samsung app: back to the Bent Steering home screen) |

On a phone or tablet: swipe up or down to change channel, tap for the buttons.

## Grown-up settings

At the bottom of the guide, **Grown-ups** asks a times-table question with four big answers. Answer it and the
settings show: captions, picture fill or fit, jump in mid-show, cover commercials, music during commercials,
the learning games (on or off), tilt for the marshmallows (phones and iPads; asks for motion access once each time the app opens), and
YouTube's debug readout.
They hide again as soon as the guide closes.

## Learning games

The shapes button on the banner (Yellow on the remote, or **Games** in the guide) pauses the show and opens five
games made for 2 to 4 year olds:

| Game | What they do |
| --- | --- |
| Shapes | Find the shape that fits the hole; it flies in |
| Colors | Find the red (or blue, or green…) balloon; it floats away |
| Numbers | Match 3 to 3, and later count the stars and pick how many |
| Letters | Find the letter B |
| Words | The voice spells C-A-T as the letters pop up; tap the cat |

The device reads every question out loud, so they don't need to read. A wrong tap says what it was ("That's the
heart") and greys out, so they always get there; a right one gets a chime, sparkles and a star, and five stars
bring a marshmallow shower. Each game starts with two choices and adds one after three right in a row (up to
four), and drops one again after a tough question. Saying it again: the green speaker button. The red **TV**
button goes back to the show where it left off.

**Mr. Isaac**, the cow, hosts the games. He stands by the title on the menu and waves (tap him and he moos and
says hi). While they play he shows up every 10 to 20 seconds or so, behind the cards so he never gets in the way of a tap:
a little ballet to a music-box waltz, bouncing up from a trampoline below the screen, peeking his head in from
an edge, or wandering in with a marshmallow, taking a bite, realizing everyone can see him, and tiptoeing back out
until only his tail is left (and a few crumbs). He also bounces along when they earn five stars. His head and body are traced from Josh's drawing
(`isaac.js`, fetched the first time the games open); his arms, legs, tail, eyes and laughing mouth are drawn in
`index.html` so they can move. He sits still if the device is set to reduce motion.

Grown-ups can turn the games off in the settings; the button, the guide entry and the Yellow key go away.

## What's different from BSO TV

- Kids can't reach YouTube itself: every tap lands on Saturday Morning Mode, never on YouTube's player, and
  each show rolls straight into the next one with no "more videos" screen.
- Settings sit behind the grown-ups question.
- Videos down to a minute play (songs and short cartoons); BSO TV skips anything under 2½ minutes.
- No Premium mode on the Samsung app, since that hands the TV over to the full YouTube app.
- Its saved settings are kept separate from BSO TV's, even though both live at admanroddy.github.io.

`tv.js` is a copy of BSO TV's TV helpers (Samsung remote keys, fixes for the 2018 TV's browser).

## Commercial breaks

YouTube still runs its ads inside the player (a page can't block them). Saturday Morning Mode covers them with
its own screen, mutes them where the device allows it, and plays its own lofi tune over the break: original
music generated live by the device, so there's nothing to license or download. iPads don't let a page mute
another site's video, so there the ad's sound can still come through under the music. Signing in to YouTube
Premium is the only way to get rid of the ads themselves. Long ads (some run two or three minutes) stay covered
until they finish, up to five minutes.
