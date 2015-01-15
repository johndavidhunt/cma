Columbia Museum of Art
======================

Demo site for The Iron Yard


This design is for the New Member registration page of the Columbia Museum of Art Site.

The site has 4 breakpoints. What follows are the changes at each breakpoint:

    default ( no media queries ):
        - site is 90% wide with 5% gutters on each side for mobile
        - vertical, single column layout
        - static navigation in single vertical column with large tappable areas
        - Some elements text align left and others text align center

    $mq1 ( 660px ):
        - Search input and submit button line up horizontally
        - User info form fields break into two vertical groups that stack horizonally
        - Form "Complete Registration" button shrinks and aligns right with the form
        - Secondary navigation items float into three columns
        - "Membership levels" and "Additional Options" become two columns below the Membership levels descriptions.

    $mq2 ( 840px ):
        - Main navigation restructures to horizontal bar
        - Search form shrinks to fixed size and relocates to upper right hand corner of site
        - Logo relocates left and shrinks to fixed size
        - Page title and subtitle emphasized with gray background
        - Membership levels restructure to three column display

    $mq3 ( 1000px ):
        - Full layout shifts from single column to two column. Main page content in left-hand main column. Secondary links in smaller right sidebar.

    $mq4 ( 1280px ):
        - Site max size

Fonts - Google Fonts
```
<link href='http://fonts.googleapis.com/css?family=Tinos:400,700,400italic|Merriweather+Sans:800,400italic,400' rel='stylesheet' type='text/css'>
```