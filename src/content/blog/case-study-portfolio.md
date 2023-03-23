---
title: "3D Portfolio: Case Study"
description: "Lorem ipsum dolor sit amet"
pubDate: "Mar 21 2023"
heroImage: "/placeholder-hero.jpg"
---

## [OUT OF DATE]
It has certainly been a while since I've last thought about updating my portfolio. The last portfolio I worked on for myself was in 2018 (5 years ago, yikes!). Over the years I have learned so much about front end development that it was probably about time to create a new portfolio for myself.

## [INSPIRATION AND FOCUS]
The next step was for me to look through some modern portfolios and designs around the web. I've scoured through sites like awwwards, dribbble, and behance to gather some ideas. As I was scouring through some of these amazing sites, alot of them had a common theme that had caught my eye... 3D. 

I had always wanted give a shot at adding an extra dimension to my work. Coincidentally, over the past month I've also been learning and messing around with Blender (a 3d open source modeling software). So what better time than now to give it a fair chance? 

## [KEEP IT SIMPLE, STUPID]
Since my focus was primarily on implementing 3D, keeping the portfolio design and technology simple could help me minimalize "feature creep". At the same time, I wanted my portfolio to scream what resembled me. That was the easy part -- videogames made up a great part of my life so I decided to center my portfolio around a gaming theme.

For my portfolio I really only needed 2 things: A projects section, a contact section, and later on... a skills section (I know feature creep, but I had a good reason). React (a front end framework), was something I was comfortable with and trying a minimalist design was keeping the simple theme. 

Next was for me to figure out what I do I want to make 3D? 

## [GREASE PENCIL? 🤔]
Yep you read that right! Grease pencil is a special object in Blender that allows you to draw in a 3D space. This object acts like any other object in blender, which means you can edit, animate, apply textures, and many other things. I was pretty anxious to try something like this since my Blender experience is kind of... lacking. So what's the best way to jump into learning? Youtube!

I mainly watched a 2 part series on youtube to learn more about grease pencil and tried to concoct something of my own. To stick close to my theme of gaming and simple, I thought creating a gameboy (and calling it DevBoy) with technologies floating it, and animating it would do for a nice eye-catching hero. (It seems overwhelming, but trust me, as a Blender newbie, even I was able to make something. It was just real tedious.)

![This is a placeholder image description](/placeholder-social.jpg)
*Rough draft and line art of DevBoy*

However, drawing and animating this was not all sunshine and rainbows. Initially I wanted to showcase the gameboy rotating a full 360, where you would be able to see all sides of the object and interact with it. Because a real gameboy is not fully flat and is curved in the bottom right corner, I was not able to replicate that at all. This was not rendered in threejs and I decided to animate + make this a looping video.

The layers being see through. To my understanding, this is because the layers are set traditionally as 2d layers (the same kind of layers you would find in photoshop) where the layers are ordered top to bottom, foreground to background. A 3D layer settings exist, but with the way I built out the gameboy, I would've had to start from scratch... So, because of those issues, the entire right side is missing. I had to compromise and animate one side of the gameboy (which is not bad, but could've been better).

![This is a placeholder image description](/placeholder-social.jpg)
*The entire right side is missing*

## [YEAH, I'VE GOT SKILLS]
If the hero, wasn't going to use threejs, surely the skills section would? You betcha! Instead of placing a list squares on the page, how about a list of 3d objects instead 😏. Reading through documentation, I generated a number of icosahedrons (i know, a mouthful) on the page and slapped some technology logos on it. After looking through the documentation, it was so much easier than I thought! Although in the future, I still need to revisit some topics, since I did place some random values into some attributes & properties until it looked right.

![This is a placeholder image description](/placeholder-social.jpg)
*Skills section*

Overall, this section was not bad and can be considered "done". But there is something that can always be made better. For example, resetting each ball to it's original position after the user has moved away or stopped interacting with it.

## [TIME TO BUST OUT SOME CREATIVITY]
Ahhh... the projects section. This made me realize that I lack in the project department, but at the same time this section was mind-blowing and the most fun part of this project. My plan was to showcase my projects as floating game boy cartridges and draw the cover on the cartridges. The most fun part of this was drawing the covers. I took alot of creative inspiration from old games like Pokemon and try to tie in elements of the project and a different art style. 

![This is a placeholder image description](/placeholder-social.jpg)
*Drawing the covers*

After drawing the covers, I imported them into Blender and added it to the game boy cartridge model, and loaded them onto the site. IT LOOKED SO GOOD. Other than the 3D and art, the section itself was pretty straightforward.

## [WHAT CAN I DO BETTER]
I can call this project done, but I can definitely do better. I was able to throw in 3D objects in there combined with my art (both things I've never done before) so I can say I'm pretty proud of what this has become. I couldn't quite overcome some issues I had in blender and grease pencil, I wasn't able to create a bigger wow factor than just spinning 3d objects, but that's just likely due to my inexperience in the 3d world that's holding me back.. 

I didn't spend much time on this portfolio (2 weeks just about) and am looking to try a different approach in the future. Make a big portfolio with a BIG WOW factor that I can keep adding onto over the years.

Maybe in the next 5 years I can revisit and create a new portfolio with better art and 3d shenanigans. See you then!