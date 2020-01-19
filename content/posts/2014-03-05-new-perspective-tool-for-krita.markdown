---
date: 2014-03-05 16:41:27+00:00
layout: post
title: New Perspective Tool for Krita
categories:
  - Krita
---

I have been meaning to right about this fabulous new tool that is the brain child of none other than [David Revoy](davidrevoy.com) (the mockup of the same can be seen @ [New Perspective Tool](https://davidrevoy.com/article159/design-ideas-for-a-new-krita-perspective-tool)). Well, like many of you out there I am also mesmerized by this new tool, but, upon me is the task of making this tool and make it a part of the already amazing Krita.

This blog will just take you through what all I plan on doing and the hopeful timeline(although I haven't been good at following them, I am already a year late at creating this tool!).

## The Idea!

Well, I can go on about with the idea and the concept of this new tool, but then I am too lazy to go on about describing something that David has already done so beautifully in the blog described above. Although for those lazier than or equal to me here is the gist of the tool.

### The tool:

[caption id="" align="alignnone" width="710"]![https://www.davidrevoy.com/data/images/blog/2013/02/krita-perspective/2013-02-03_krita-perspective_design_02.jpg](https://www.davidrevoy.com/data/images/blog/2013/02/krita-perspective/2013-02-03_krita-perspective_design_02.jpg)](https://www.davidrevoy.com/data/images/blog/2013/02/krita-perspective/2013-02-03_krita-perspective_design_02.jpg) The tool showing all the three vanishing points, the horizon(line joining the red and green points)[/caption]

As it can be seen in the image above the tool looks very much like the Perspective Assistant with the difference that instead of the standard 2-D grid this tool will have a 3-D (although it would seem 2-D only because of the image) grid, which will be manipulated by the three vanishing points, Red, Blue and Green dots. And three different coloured grid lines converging to the corresponding vanishing point. The Green and Red vanishing points are connected by a line called the horizon line(Forgive me for my mistakes on these technicalities, I am not very sure of the terms myself).

The grid adapts with the change in the position of the vanishing points and also with the removal of the individual points. This is shown in the following images

[caption id="" align="alignnone" width="710"]![https://www.davidrevoy.com/data/images/blog/2013/02/krita-perspective/2013-02-03_krita-perspective_design_03.jpg](https://www.davidrevoy.com/data/images/blog/2013/02/krita-perspective/2013-02-03_krita-perspective_design_03.jpg)](https://www.davidrevoy.com/data/images/blog/2013/02/krita-perspective/2013-02-03_krita-perspective_design_03.jpg) The Grid Adapts to the removal of one of the Vanishing points(Blue) getting removed by making the grid behave as if the blue point is in infinity[/caption]

[caption id="" align="alignleft" width="710"]![https://www.davidrevoy.com/data/images/blog/2013/02/krita-perspective/2013-02-03_krita-perspective_design_08.jpg](https://www.davidrevoy.com/data/images/blog/2013/02/krita-perspective/2013-02-03_krita-perspective_design_08.jpg)](https://www.davidrevoy.com/data/images/blog/2013/02/krita-perspective/2013-02-03_krita-perspective_design_08.jpg) Single Vanishing point(A special case)[/caption]

Well I would like to explain the above image that is the special case. By design the Red vanishing point cannot be deleted and as soon as the Green point is deleted the Grey dot comes in place but such that it is stuck on the edge of the grid. This Grey point helps the user to just tilt the horizon line.

All in all this tool will be able to help the user to be able to get the perspective without the need to do it all manually. For more understanding and details visit [David's blog](https://www.davidrevoy.com/article159/design-ideas-for-a-new-krita-perspective-tool),

## The Plan

Please wait a minute, let me go through my drafts to fetch the mail I had saved for reference! Oh, there it is. Well, without further ado here is the proposed plan that I have thought of.

1.


    Basic setup(3 axes and their movement)

2.


    removing of the points and their effects

3.


    colour schemes of the points

4.


    grid density + line width (if possible earlier too)

5.


    single vanishing point

6.


    grid able to guide the freehand tool

7.


    'Bake' button

Well, you can say that the timeline is just a modularisation of David's blog, but, then as I said the [blog](https://davidrevoy.com/article159/design-ideas-for-a-new-krita-perspective-tool) is brilliantly written. So, that is what the plan is! Let's hope it can be achieved in good time and there will be a new tool among many added to Krita. Although, as it can be seen there isn't any specific timeline, but just steps to go through the whole process.

## Current State:

Well, here is where I talk more on the technical side(but I'll try to keep it as simple as possible, don't want to bore you guys). David's mock up shows that we can create more than one world limits, each of which is isolated from the other. Well, in Krita we have a similar tool called the Painting Assistant, which luckily has the Perspective assistant tool, which is a quadrilateral Painting Assistant.

This being my first time creating a new tool, my first step was to make a copy of the perspective tool, change the filenames as per need and modify it to first build without any glitches. Next, would be to modify the files to make it function enough to be able to create at least one Perspective Grid.

Although at the time of writing this blog, I have been able to accomplish only the first part, i.e. copying the files and modifying them such that they can be build. I am hoping to be able to complete the next step in the next few days, and the details of the hack will be put up in the next blog. Until then, keep Sketching!

**PS: ** Any comments on the idea/coding is appreciated. Also if anyone has a prior experience and would like to help, you are most welcome!
