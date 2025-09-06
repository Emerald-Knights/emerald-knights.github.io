# EK-Website
Official website for the Emerald Knights


Quick and easy guide to updating the site:

To add new things to the Seasonal calendar, go onto the EK team's Google Calendar and add a new event to "Emerald Knights Schedule". It'll automatically show up in the calendar.


To add new team members, copy the following code:

<div class="member-container popup">
            <span class="popup-text">
                Biography popup section
            </span>
            <p>Name</p>
            <img src="../res/img/team/image" alt="name" class="member-img">
</div>

Replace name with the name of the person

To quickly run through what each line does, <div> makes a new section. 
Class sets the properties of the section as defined in a css file. 
<span> inserts something without changing the layout of the other elements on the page. 
<p> makes a new text area. <img> attaches an image.
Within the first <div>, we set the class to be member-container and popup. 
These are 2 classes, destinguished with a space. 
Member-container basically gives some formatting for like spacing and sizing for each person. 
Within the member container, there is the name and the image. 
Image has a src property, which is just where the source image is located. 
alt is just some alternate text for if an image can't load or something. 
It just describes that is in the image. 
Finally member-img is another property that is given to the image to make it the size it is.
Next, onto the popup and popup-text. 
Popup just means that when someone mouses over the section, we will show what is within popup-text. 

Also the captain class can be added to give the gold name color, signifying captain. I use it loosely, David wasn't officially a captain but was a captain in all our minds.
  

Now, to add to contact. It's literally a bunch of text with links. Copy the <href> code.
  
  
To change any of the pictures anywhere in the site, just use a new <img> thing and copy the styles and classes of the image that used to be there. It's not hard. Same with replacing any of the text.
  
The home page video is also just a video. To add to it, just get some nice clips, take the old vide, and add the new clips to it using something like Hitfilm Express.
