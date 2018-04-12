# Interfaces

## Command Based UI

- Commands are abbreviations of what they do typed at the 
prompt.
- Efficient, precise, fast. 
- Large overhead to learning set of commands.
- Some functions are hardwired.

### Research and Design issues

- Form, name types, structure are key research questions.	
- Consistency is the most important design principle.
- Command interfaces are popular for web scripting.

---

## WIMP and GUI

WIMP stands for : **W**indows **I**cons **M**enus **P**ointing Devices.
These are the components of the interface. The GUI further expands on 
WIMP, adding color, 3d, sound, and animation, with many types of 
menus, icons, and windows, and new elements such as toolbars, docks,
and rollovers. 

The challenge now is to design GUIs that are best suited for 
tablet, smartphone, and smartwatch interfaces.

### Windows 

Windows were invented to overcome the physical constraints of a computer
display. They enable more information to be viewed and tasks to be performed. 
Scrollbars were added to enable more information to be viewed, and multiple
windows can exist on the same screen(this could cause issues).


#### Research and Design issues

- Window management : enabling users to move easily between windows.
- How to switch between windows without getting distracted.
- Spacing, grouping, and simplicity.

### Menus

There are a number of kinds of menus: flat, scrolling, cascading, etc. 

- Flat Menus : good at displaying small number of options, where the 
size of the display is small. However, we have to nest the list of options, 
requiring several steps to get to the list of the desired options.

- Cascading Menus : menus that expand menus from some of their selections. 
these are useful when there are a large number of items but the screen isnt
large enough for all of them, leading to the need to cascade them. Cascaded 
menus are frustrating to use regularly, as they require precise mouse control.

- Contextual Menus : menus whose items are related to the context of the 
current task. For example, right clicking a compressed archive brings up 
a different menu than right clicking a PDF file. This helps us overcome
the navigation problems of cascading menus.

#### Research and Design issues

- What are the best labels/names?
- What is the best placement? What should be near to each other and what should be far?
- Choice of menu determined by application and type of system. Flat menus are best 
for displaying a small amount of options, expanding menus are good for showing
a large number of options. 

### Icons

Icons are small glyphs representing a function. They are easier to learn 
and remember than commands. They can be designed to be compact 
and variably positioned on a screen. They now present in every interface. 
They usually represent actions and tools associated with them.

The mapping between the representation and the underlying referent can be :

1. Similar(a picture of a file to represent a file).
2. Analogical(a picture of scissors to represent cut).
3. Arbitrary(the use of X to represent delete).

The most effective icons are similar ones. Many operations are actions
making it more difficult to represent them. So we use a combinations and 
symbols to capture the salient(the doing) part of the action.

#### Research and Design issues

- There is a wealth of resources now so we do not 
have to draw or invent new icons from scratch.
- There are guides, icon builders, libraries.
- Text labels can be used alongside icons to help identification for
small icon sets.
- For large icon sets, use rollovers.
- Tooltips or a small amount of text next to an icon can be really helpful.

### Multimedia

- Different media in the same interface with various forms of interactivity,
such as graphics,text,video,sound,animation.

- Interaction with the GUI causes some action and playback of some media.

- Facilitates rapid access to multiple representations of information.

- Can provide better ways of presenting information than any media can alone.

- Can enable easier learning, better, understanding, more engagement, and
more pleasure.

- Can encourage users to explore different parts of a game or story

- Tendency to play video clips and  animations, while
skimming through accompanying text or diagrams.

### Virtual Reality

In virtual reality, we use Computer generated graphical simulations to give 
a person "the illusion of participation in an artificial environment
rather than external observation of such an environment". It provides
new kinds of experience, enabling users to interact with objects
and navigate in 3D space. They create highly engaging user experience.

Usually, we user virtual reality headsets and stereo headphones to 
immerse a user in a Virtual Reality environment. Sometimes, there is tactile feedback,
or other kinds of feedback, that help with immersion.

Virtual Reality can have a higher level of fidelity with the objects they
represent compared to multimedia. They induced a sense of presence where
someone is totally engaged by the experiences. They can have multiple view points,
as a 1st, 2nd, or 3rd person. However, Head-mounted displays can be 
uncomfortable to wear, and cause motion sickness and disorientation.

#### Research and Design Issues

- Much research in safe and realistic Virtual Reality simulations. Such 
as flying simulators, or helping people overcome some phobia.

- How do we best navigate through them? (eg first versus third person.)

- How do we control interactions and movement?(eg use of head and body movement.)

- How best to interact with informations? (eg using joysticks, mice, wiimotes etc.)


---

## Information Visualization 

- Computer generate interactive graphics of complex data.

- Amplify human cognition, enabling users to see patterns, trends, and 
variances.

### Dashboards

- Show screentshots of data-updated over periods of time, to be 
read at a glance.

- Usually not interactive, slices of data that show the current state
of the system or process.

- Need to provide easy and legible information for users, we must design
the spatial layout to be intuitive and direct a user's attention to 
differences or unexpected situations.

#### Research and Design issues

- Whether to use animation or interactivity.

-  What form of coding to use(color or text).

- Whether to use a 2D or 3D representational format

- What forms of navigation? (zooming or panning).

- What kinds and how much additional information to provide(rollovers or tables of text).

- What navigational metaphor to use.

---

## Web Interface

Early web was largely text-based, providing hyperlinks. Concern was 
with how to structure information at the interface to enable users to 
navigate and access it easily and quickly. Nowadays, we focus more on 
making pages distinctive, striking, and pleasurable. 

We need to think of how to design information for multiple platforms as well,
such as phones and PCs and tablets.

We need to consider usability vs attractive design. Do want a plain
**vanilla** design or a **multi-flavor** design. There is always a trade 
off between the ease of finding something vs beautiful and enjoyable experience.
Users need to be able to take a glance and figure everything out and get
all the info they need. We need to determine how to brand a web page to 
catch and keep the 'eyeballs'.

There is also the issue of advertisement. We need advertisement to 
keep the website free for users, but at the same time, too much of it 
can drive users away. 

### Research and design issues

- need to consider how best to design, present , and structure the design.

- Veen's design principles :
  - Where am i ? Is answered on the top of the page.
  - Where can i go ? Is answered on the side of the page.
  - What is here in ? Is answered on the middle of the page.
  
  This is a classical design approach. Modern design differ, and not all 
  designs are liked by all.
  
---

## Consumer Electronics and Appliances

There are everyday devices like washing machines, dryers, fridged, etc, 
and personal devices like mp3s, digital clocks, and cameras. 

There are things we interact with for short periods, such as loading a washer
or pressing next on a music player.

Therefore, we need to be able to use them with minimal steps and little to 
no learning.

#### Research and Design Issues

- Need to design brief interfaces with short interactions.

- Simple interfaces.

- Consider trade-off between soft and hard controls.


---

## Mobile Interfaces

Interfaces for handheld devices intended to be used while on the move. 
Mobiles have become ubiquitous, and are used in all aspects of everyday 
and working life. The market and complexity of applications has expanded
a lot since their inception.

This all started with the iphone app. The user experience was designed
primary for people to enjoy. Many apps were not deigned for any 
need, want, or use, eg, ibeer/igun, which were just creative uses of 
the accelerometer. However, apps have since expanded to every walk of life.

### Challenges in Mobile

- Small screens, small number of keys, and restricted number of controls.


---
