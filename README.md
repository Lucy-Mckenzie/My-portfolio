## Welcome to my porfolio ☁️
I'm Lucy, a Software Developer based in New Zealand. I love building minimalistic websites with a focus on the small things, the attention to detail. This website is my creative outlet for when I get lost in the backend code, I'm learning three.js and motion.dev and slowly implementing things I have learnt.

#Link to Website: https://lucymckenziedev.com/
<img width="1493" alt="Screenshot of Portfolio" src="https://github.com/user-attachments/assets/39d2fdd0-9261-44a5-878e-c8ae1bb2a56b" />

## How it's made: 
Tech used: HTML, CSS, TypeScript, React, TailwindCSS, React.

I eagerly started coding this during boot camp and found myself getting very distracted building it. This project is some of my proudest work so far, I learnt how to make a website responsive, the basics of typography, spacing, and so many other Front-end Dev fundamentals. 

# The process: 
I could lie and say it all went well... but it didn't. My first problem was aligning everything, especially when changing to a responsive screen the text went everywhere. It turns out that items-center and justify-center are two different things. The night and day functionality took longer than I'd like to admit, this is when I came across the useContext hook, a game changer in React. The useContext hook allows you to make changes at a parent level to all children, meaning you don't have to individually pass props to every child. This is very useful for theme changing, it means that all pages can share the same state. 

I also learnt about optimising images, I used Google [Page Speed Insights](https://pagespeed.web.dev/) to check the functionality and speed of my website and found using webp to be a better solution than png. Improving performance and reducing load times. 

One part I am proud of is the projects page for Suncoast Patios, when you hover over the project on the main page a tooltip follows your mouse around which says View Project. The way I implemented the mouse follow was using clientX and clientY https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX, this finds the mouse position relative to the viewport both horizontal and vertical tracking where your mouse goes.

# Optimisations
I am constantly going in and refactoring code when I learn something new, a great example was using keyframes in my configcss file to animate the clouds. Instead of going to each cloud and animating them through the config file I used motion.ddev instead. This created a smoother cleaner transformation. 



# My plan
The clouds may be a little jerky I plan to build a 3D world of clouds that you can navigate around, with three different themes. 

1. Cumulous—The base cloud, the fluffy fun cloud that appears on sunny days, can turn into nimbocumulous, the giant storm clouds. Imagine you click the cloud type and the entire site changes to that cloud type's style. All of the buttons are bigger and softer.
   
2. Stratus—Going up in terms of altitude, we have Stratus. This is the big blanket cloud you find when you wake up and the sun has disappeared (if you live in England, you will know exactly what I am talking about). While dreary, clouds can be very beautiful (especially when you are climbing a mountain). So, the theme for this cloud is long and thin. The font changes to look longer, and the colours are a little greyer.

3. Cirrus—The highest of all three, above 18.000ft. These are completely made of ice crystals where temperatures are below freezing. They are thin and wispy and normally associated with high winds (New Zealand gets a lot of these because of its being situated so remotely). They are elegant clouds and will, therefore, be an elegant theme, with kites dancing around the place because who doesn't love kites?
