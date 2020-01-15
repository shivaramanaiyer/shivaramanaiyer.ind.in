---
author: shivadmin
comments: true
date: 2012-05-17 07:02:53+00:00
layout: post
link: https://shivaramaniyer.ind.in/2012/05/17/krita-start/
slug: krita-start
title: The start with Krita
wordpress_id: 23
categories:
- Krita
tags:
- gsoc
- krita
---

[Krita](http://krita.org/) is a painting and sketching program by KDE. It is a part of the [Calligra Suite](http://www.calligra.org/), and offers an end–to–end solution for creating digital painting files from scratch by masters. 

Well my journey with Krita began when I first heard about it from my friends, who had done SoK last year. And, I was mesmerized by the sketches of [david revoy](http://www.davidrevoy.com/). It was then that I wanted to contribute to Krita and help in its being a great digital painting tool, although it still is great!! :)





## Google Summer of Code and Krita











This year for GSoC, I had selected a project in Krita from the [KDE ideas page](http://community.kde.org/GSoC/2012/Ideas), **Perspective Drawing. ** Following are a few details of the same:





### Brief description:


Krita is a 2D painting tool, but artists often need to give the illusion of depth. Krita has two tools to help the user draw perspective correctly: the perspective grid and the perspective assistant. The latter is more advanced, but needs improvements to become a real star feature. It needs to be expanded by allowing real 3D objects to be important and put into perspective. This means rotation, setting the vanishing point, scaling, and then integration with the paint tools. At the same time, to get into the codebase, the student should implement other missing features in the perspective assistant.[1]



### Details of the work:



In this project the perspective assistant has to get all the functionality in the perspective grid. That is just a part of the project, the majority of the time is to be devoted to creating an import function, such that a [blender](blender.org) mesh can be imported. Now, this mesh should also be modifiable, that is, it can be rotated, scaled etc and then the mesh can be used in a similar way as the perspective assistant. The proper details of the timeline of the work have been provided in my [proposal](http://www.google-melange.com/gsoc/proposal/review/google/gsoc2012/sraman/1).

