---
created: 2012-05-29
edited: 2020-01-19
title: Saving and Loading of Assistants
layout: post
thumbnail: ../images/thumbnail/krita-logo.png
archived: true
categories:
  - GSoC
  - Krita
---

My first work in Krita, was to add the feature of saving and loading of the Assistant tools. Krita has four Assistant tools - Ellipse, Spline, Perspective and Ruler. As their name suggest each Assistant is used to make an Assistant having shape of an ellipse, curve, quadrilateral grid and a line respectively. The purpose of these Assistants is to make a complex 3D mesh which can be painted on. Now, suppose someone has created a very complex structure of these assistants, but, has to shutdown his/her computer, (s)he would loose all the created assistants as there was no implementation of saving the Assistants. Here, is where my work came in.

## **THE NEED**

![A structure made using the assistants](../images/assistants_structure.png)

As it can be seen in the above image, the structure is a half completed scene illustrating the use of the assistants in showing of depth in a 2D canvas. And this structure is also very time consuming and also something that can be reused. Thus, the saving of one's work at such a stage is very vital requiring for the need to implement the saving of the same.

## **THE WORK**

Even if all the assistants have a very different structure compared to each other, they all have common attributes. All the assistants have `handles` (the circles on each assistant in the image above) which give the individual assistants their shape and have only x-coordinates and y-coordinates as their attributes and `type`, which tells the program which type of assistant is being created.

## **Saving**

Each assistant has the `type` and `handles` as its attribute. So, in order to save the assistant these attributes had to be saved. "How to save the assistants so that it is easy to load them back?" One big question which made me change my implementation of saving around three times. Well, now the assistants are saved in the following manner:

**File structure**

Following are the modifications which are done in the end of file/folder structure for saving of the assistants.

1.  There is a list of assistants in the `maindoc.xml` file which tells the program the *type* of the assistants and the _filenames_ in which the assistants are saved. The list has a xml style formatting.

2) Whenever there is at least one assistant to be saved, the program creates a new folder called **"assistants"** inside the folder giving the name same as the name of the created document. Inside this folder are the files with the filenames as given in the list in *maindoc.xml*. These files individually contain the information of an assistant of the type as described in the list. The name of these files are of the form '_type\<count\>.assistant_' where count is between 0 and n-1(n = total number of that type of assistant), for e.g. ellipse0.assistant, ellipse1.assistant, perspective0.assistant, etc.

3. Now, echo of these files store data of an assistant in xml format. They store the type and handles, where each handle then stores attributes like handle id(for using in shared pointer), x-coordinate and y-coordinate.

**Process**

Now, the whole process of saving of the assistants is done in a systematic manner.

First, the list of assistants is stored in the *maindoc.xml* and then the assistants are saved in their respecitve files.

## **Loading**

Because of the way assistants are saved, the loading part was rather simpler to implement.

First, the list of assistants is fetched from the *maindoc.xml* and stored in a `QMap` of filename -> type.

Second, The blank assistants are created on basis of the type using the Factory and once created the assistant is given its handles and inserted into a `Qlist`.

Finally, the Assistants are added to the Manager which is at last set to visible, making it possible to see the saved assistants.

Well, that is how the current implementation of the saving and loading of assistants is done and I have a request the wonderful artists who use Krita to use the assistants and help in making them better by the day.

CHEERS!
