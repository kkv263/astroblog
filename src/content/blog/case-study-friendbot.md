---
title: "D&D Friend Bot: Implementation Case Study"
description: "Case Study of D&D Bot"
pubDate: "Apr 12 2023"
heroImage: "/friendbot/dicehero.jpg"
githubLink: "https://github.com/kkv263/friendbot/"
liveLink: "http://dnd-landing.vercel.app/"
relatedPosts:
- case-study-friendbot-design 
---
```This case study may not be accurate since I no longer maintain the project. Most of the content is from recollecting what I did back then on the proejct. :)```

```Images to come later ```

## [INTRO: HISTORY, DUNGEONS, AND DRAGONS]
Back when I was a wee lad in university, I was very interested in an open-ended role-playing game called Dungeons and Dragons. A storytelling game where one player is a narrator (dungeon master), while the other players take control of a character in a fictonal setting. I joined a D&D Club but meeting once a week was not enough to support my unhealthy obsession of D&D. After some research, I looked high and low until a found a Discord Server to play D&D in, and boy... did I fall into a deep, deep rabbit hole.

## [SO WHAT'S THE PROBLEM?]
So this discord server, doesn't play traditional D&D where a full campaign spans across many meetups and sessions. In this server they follow a format similar to what's called "Adventurer's League", where people can signup for a one and done session of D&D (usually called a one-shot). The neat thing about this is once you create a character, you're able to reuse and level them up through different one-shots and keep playing D&D. You would then fill logs and have moderators of the server cross check to make sure everything was correct.

After playing for about a year, and becoming a moderator on the server, I thought to my self (and any smart programmer would lol), why not automate this? 

## [3... 2... 1... GO!]
I decided to jump in and make a discord bot with python (a language I was comfortable with at the time) and start small, you know, dip my toes in the water with this. When you play D&D you accumulate "experience" (needed to level your characters) based on the amount of time you play in a session. So my first goal was to create a timer to keep track of time, how hard could that be? Well it wasn't too hard to create a basic timer. I started seeing value in the timer and starting exploring the potential for different types of automation. What if we can automatically create characters and store them in a database? Provide item table lookups? The possibilities were endless...

## [DATA BASE]
Utilizing a database might have been the biggest turning point as it paved the way for connecting all of the bot's features. Here I was able to store data for look ups (like items, classes, races etc.) and player tracking (like characters, character inventory etc.) This basically eliminates all of the manual tracking and user error for players so they can focus on playing rather than the logging.

![Rough diagram of data for friend bot](/friendbot/friendbotdiagram.png)
*Rough diagram of data for friend bot*

## [TYING IT ALL TOGETHER]
And finally, I tied all the functions and the database together. To better explain it, I'll walk you through how you would be able to use the bot as a new user. As you read through the flow, you may notice that most of this heavily relies on the players and how they use the bot.

### Creating a character
1. Join server, and go to a bot command channel. 
2. Here you would create a character using the $create command. 
  - The create command grabs items like classes, and races from multiple dictionaries of options to create a character.
  - User's follow a prompt through a series of messages and use "Discord" reactions to choose an option
  - All stats are automatically calculated and allocated per D&D rules.
3. Then player is ready to play!

### Joining a Game
1. In the "quest" channel, you're able to look for games to join if there are spots open 
 - (players can also create games through the bot if you're a DM or narrating)
2. When the day comes to play, the DM will use the bot to set a timer for the game, and keep track of how long the game is played for.
3. During the game, players can use the bot for timer related commands, use items in the journey, or DM can reward items. 
4. After the session is over, the DM will stop the game and rewards and XP will automatically be allocated per player. This means no more manual logging!

### Afterword
Above bolsters the main use of the bot. Outside of games, you can use the bot to manage characters, items, guilds and many other things. Information lookup is also a nice feature for use. Here is an example of a character lookup in action!

![Rough diagram of data for friend bot](/friendbot/discord.png)
*Blurred out some details. Character lookup of a specific character.*

## [SO LONG, FRIEND]
Unfortunately, I fell out of love for D&D since I got busier and did not enjoy the 4+ hour commitments per session. However, I learned alot from this project I developed over 2+ years. I've burnt out and transferred maintenance to a friend who still manages it to this day. 