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
- Text lables can be used alongside icons to help identification for
small icon sets.
- For large icon sets, use rollovers.

---
