




export const posts = [
    {
        id: 1,
        title: "My Programming Origin Story",
        description: `My programming story began like many of my other interests. I have this obsession with mastering things that can appear to be so effortlessly understood by one person but completely foreign to
         another. Things which can look simple on the outside but belie incredible complexity and experience. Like how a chess grandmaster can calmly and efficiently analyze who has the advantage and give the best 
         next move in any given match.`,
        date: 'October 5, 2022',
        time: '10 min read',
        featured: true,
        textblocks: 
            [
                {
                    type: 'paragraph',
                    text:  `My programming story began like many of my other interests. I have this obsession with mastering things that can appear to be so effortlessly understood by one person but completely foreign to another. Things which can look simple on the outside but belie incredible complexity and experience. Like how a chess grandmaster can calmly and efficiently analyze who has the advantage and give the best next move in any given match. A layman with a basic understanding of the game might see how the move makes sense, but often it needs to be explained further to see the true beauty of it. They experience the magic of mastery: something so seemingly basic can be so incomprehensibly complex within. The layman understands how the pieces move and the objective of the game just fine, they may even understand some game theory and have practiced some tactics. I can speak to the perspective of the layman because, in fact, I am him.  
                    `
                },
                
                {
                    type: 'paragraph',
                    text: `After watching a random YouTube video of a casual chess match between 2 grandmasters, I found myself fascinated by the fact that I could look at something which I had vague familiarity with, and be completely and utterly lost. The match seemingly swung in one's favor then suddenly back to the other's. And out of the blue an "Oh, no!", a blunder! And then a resignation. All the while I am listening to the discourse between these two masters, pausing the video and attempting to understand where player 1 went wrong and how player 2 took advantage of it or vice versa, but sadly to no avail. What. So. Ever. `
                },
                {
                    type: 'paragraph',
                    text: ` I spent the next year or two playing online games, doing tactics puzzles and studying opening theory just to get a small glimpse into the mind of either of those grandmasters. After a while I could, sometimes even with laser-like precision, summarily crush other laymen at chess.. I was starting to get to a point where I could display the magic of expertise to a layman, albeit in a much tamer way.
                    `
                },
                {
                    type: 'code',
                    blocks: [
                    {text: `if(isMotivated) {`, indents: 0},
                    {text: 'continue;', indents: 1},
                    {text: `} else {`, indents: 0},
                    {text:  `break;`, indents: 1},
                    {text: `}`, indents: 0}
                    ]
                },
                {
                    type: 'paragraph',
                    text: `This same obsession has only happened to me at this level two other times. One was with the PC game League of Legends (circa 2015) and the other with programming. I was completely fascinated with the fact that some English-like words and some special symbols and spacing all put together could create a website, an app, or even the chess games I had played and practiced online. After I decided I'd had enough with being a layman, I began learning python on Codecademy. I enjoyed the rage-inducing missing semicolon on line 8, the computer fan testing infinite loops, and whatever the heck a class is. All the while I thought to myself, "Wow this stuff is cool and I'm learning a lot, but I can't wait to get to more advanced stuff", but even after finishing the course I felt as if I had missed some section with the secret to making software and websites. I could do a for loop, sure.. but how can I build an application? I experimented with command line games and online IDEs and enjoyed it all but I still couldn't understand how one could make anything with this stuff. `
                },
                {
                    type: 'paragraph',
                    text: `There's no doubt that Python is a great place to start, but my hunger for knowledge only grew once I had the basics down. For the next months, I essentially took a world tour of programming stopping for two days in each language. I did the C# course on codecademy with the goal of building a game in mind. I tried Unity and built some small games like pong and chess. It was a great way to use code to actually change things visually and do some basic application design.
                    `
                },
                
                {
                    type: 'paragraph',
                    text: `Then, I thought I would try to learn a language with a similar name and maybe use it to build a game without the help of a pre-built game engine like Unity. I embarked to the land of C++. I learned what I could and followed some tutorials on YouTube from a guy calling himself TheCherno. I began following his game engine series where he builds an engine from absolutely zero. This is the point where I understood how complex these things can really get. I followed along for weeks and 1000 or so lines of code later, we had a window from the Windows API, and a rendered blue square. I really understood what was going on too, finally. I even had to debug sometimes as the tutorial was a year or so old and some of the libraries we utilized had undergone small breaking changes. I started realizing why software engineers get paid the big bucks around this point. 
                    `
                },
                {
                    type: 'code',
                    blocks: [
                        {
                            indents: 0,
                            text: '// requires constant maintenence!'
                        },
                        {
                            indents: 0,
                            text: 'makeLifeBetter();'
                        }

                    ]
                },
                {
                    type: 'paragraph',
                    text: `The next few stops on this journey were unexpected detours which turned out to be the most impactful. A good friend of mine randomly presented an idea to me for a website that can take stock market data and mix it with comment sentiment and present it in a meaningful way. The idea was a good one but neither of us knew anything about web development; but that was all we needed - a challenge. 
                    `
                },
                {
                    type: 'paragraph',
                    text: `I got to work immediately. I learned the basics in HTML, CSS, and JavaScript. We tried probably about 5 frameworks to build the site unaware of the purpose each actually served in a web app. The ones I remember trying were express, React, PHP, and Ruby on Rails. The only one that stuck was PHP. I imagine it stuck because it could be set up with minimum hassle. We used MariaDB for our database and Python for web scraping the comments. I focused mainly on the front end and requests to the database and my friend built the scrapers and the database itself. By the time we had something that looked vaguely like a website, we had built a plain HTML / CSS and PHP web "app". `
                },
                {
                    type: 'cc1'
                },
                {
                    type: 'paragraph',
                    text: `I wrote every line of HTML and CSS myself. No Sass, no components, and probably 10 lines of JavaScript. The PHP sent queries to search through databases with 5 million rows with no indexes or optimizations in sight. Each page required 5 queries to run. Page loads were timed in seconds, not milliseconds. And the icing on the cake? It all ran from a raspberry pi in a college dorm room. It was an absolute mess, but it was ours and we built it starting from zero, both code-wise and knowledge-wise. Nothing much came of it, although at one time we had around 50 people using it at once. I think more than a few of our users called their ISP complaining about their internet speed those days.
                    `
                },
                {
                    type: 'specialstyle',
                    text: `Up to this point in my journey, I considered myself a hobbyist. Getting a software development job was just not in my field of view.. yet. `,
                    style: 'has-text-weight-bold'
                },
                {
                    type: 'paragraph',
                    text: `After having some time to mull over my previous endeavor, I was presented with a real opportunity to make something impactful with code. I had gotten a new job a few months prior as a CAD operator. One of my coworkers was also my cousin with whom I shared a lot of interests. He had been at this company for a while and had made a few plugins to help with daily tasks in our then CAD program of choice AutoCAD. They did things like adding information that is required frequently, and creating pdfs of drawings quickly. I arrived at an optimal time for innovation though as they were in the process of changing CAD programs to a more powerful one. I would soon learn it was more powerful in ways beyond its design capabilities. It had a strong API from the developers with the ability to integrate with C#. It was called Rhino3D and the API was developed very smartly and had immense power. `
                },
                {
                    type: 'paragraph',
                    text: `We got to work right away starting with recreating the commands from the previous program. Once finished, we progressed to commands that weren't possible in the other program. By the time we were a few months in we were creating commands we didn't know could be possible like automating complete (small routine) jobs with minimal user intervention. We strove for two things: implementing company standards and making our work more efficient. In the process of doing this our daily work became very hands-off. Tasks that would normally take 10 minutes could be done in 2 (and with fewer mistakes on average). We completely changed the way our department functioned for the better, all with code. As time went on, things were refined based on department feedback. The code became more efficient and connected. When I finally decided to leave, we had around 5000 lines of code written which helped with every single one of the tasks we needed to do.
                    `
                },
                {
                    type: 'paragraph',
                    text: `The decision to leave wasn’t an easy one, but it was the right one. I left because I want to pursue software engineering full time (at the time of writing this I am still in hot pursuit - please reach out to joshrudesill@gmail.com if you’re hiring!). I had down time at my last job to work on personal projects but it never felt right and I didn’t like the idea of working on personal stuff on someone else's time, so I left. The move was discussed with my family, friends, and importantly with my mentor Mark who is a software engineer with 10 years experience. I found him on a website called MentorCruise and we began working on my plan to enter into this wondrous field. We began as one might in a real dev job; we decided on a project that I must build, we laid out the requirements for what a finished app might look like, chose tech stacks and then I began. We decided I would be building a scheduling application for small businesses and it would be built using React / Next.js. There will be an entire blog post about my journey through that project but I have completed that project. 

                    `
                },
                {
                    type: 'link',
                    link: 'Jewel Blog Post',
                    href: 'https://blog.jrudesill.dev/posts/2'
                },
                {
                    type: 'paragraph',
                    text: `I went from having an amateur level understanding of React and how it is useful to being, well, a “highly advanced amateur”. I still say amateur because I know how complex applications can be. Nonetheless, I am extremely proud of myself for the progress I’ve made. I’ve learnt an incredible amount about every step of the process in application design. I took an idea all the way to a fully deployed app. I had an extensive amount of help along the way from my aforementioned mentor which was key. What I found most useful from him is we rarely discussed specific problems within the codebase but rather he guided me to places where he knew I would find the answer on my own. Instead of telling me how to do something explicitly we discussed some solutions to problems of similar nature or tech stacks people use. 
                    `
                },
                {
                    type: 'link',
                    link: 'Jewel App',
                    href: 'https://jewel.jrudesill.dev'
                },
                {
                    type: 'paragraph',
                    text: `That leads me to where I am today. I’m preparing my personal portfolio website, writing articles on this blog and applying to jobs. I’m also about to start work on another large project. It will be some sort of scrum manager (something to manage tasks in a team of people). I'm looking forward to it because there will be less struggling with boilerplate stuff. Now that I have a decent grasp on how an app should be structured I can work through problems much faster and focus on building something effectively. I’m ready to get my first software job, and I know that whichever company decides I’m worthy won’t regret hiring me.`
                }
                
            ],
    },
    {
        id: 2,
        title: "Jewel",
        description: `If you've read the article about my programming origin story then you may have some idea what this will be about, if you haven't then here's a quick rundown. A few months ago I started a mentorship with Mark, a software developer with 10ish years of experience. We came up with a long term plan to get me on track to land my first software development job, preferably in web development.`,
        date: 'October 15, 2022',
        time: '20 min read',
        featured: false,
        textblocks: [
            {
                type: 'paragraph',
                text: `If you've read the article about my programming origin story then you may have some idea what this will be about, if you haven't then here's a quick rundown. A few months ago I started a mentorship with Mark, a software developer with 10ish years of experience. We came up with a long term plan to get me on track to land my first software development job, preferably in web development. The first and most important step was to build a fullstack app from start to finish using a modern tech stack. With his help we laid out a document detailing what the app should do and some possible ways to structure it from a server perspective. We also decided on the tech stack I would be using, Next.js. After that I was essentially on my own with Mark being there for high level support. High level support meaning he wouldn't delve into code specific things but rather lead me to where I needed to go. At first it was a huge struggle getting through problems but with time it taught me not only how to solve problems but the right way to look for solutions. `
            },
            {
                type: 'paragraph',
                text: `
                The project we chose was to be a scheduling app. That’s a very basic idea but that was on purpose. It needed to be used to schedule things, yes, but in what way? This was one of the first design decisions I had to make on my own before I even put pen to paper, or in this case finger to key. I tried to minimize exposure to other applications that do scheduling like calendly because I didn't want to copy. My initial thought was to allow a business or person to create an availability period and allow people to book time slots within that period. This fell through pretty quickly in my mind because I couldn't see how that would be more useful than an appointment system. An admin creates appointments at specific times and users can view said times, and book. This was where I started.
                `
            },
            {
                type: 'paragraph',
                text: `Now I had to start getting things connected. I should probably mention what technologies I used to build this first. Since I had been using React for a bit, we decided on something in the React world, Next.js. If you’re unaware what Next is, it's basically an extension of React that solves a lot of boilerplate issues that React has with components of its own. Also it changes the way apps are structured and adds different options to deal with rendering, pages, server requests and much more. That’s a very generalized description but an entire book could be written about it so I won't go further. So I had Next for my front / middle end. I originally thought I would use an express backend but quickly realized that Next’s built in API routes were too good not to utilize and they are very similar to how express works (Node environment) but were supported natively in a Next app. So now I had my entire stack from client to server and now I needed a database. We decided on a website called PlanetScale which offers serverless MySQL databases deployed on AWS and their dev mode is free so it was an easy choice. Things were coming together.`
            },
            {
                type: 'code',
                blocks: [
                    {text: `select * from tech-stacks order by most-useful desc;`, indents: 0},
                    
                    ]
            },
            {
                type: 'paragraph',
                text: `Now that the most basic but important elements were chosen a few things had to happen before I could start making the app. Firstly, I needed to read a lot of documentation about Next. I was decently familiar with React but Next has a lot that is different from React. I read, I watched videos and when I started to get the basics down it was time to start writing. The next thing I needed to do was to get everything to respond to each other. I started simple by making a new project and adding a button that sends an API route request which then queries the database, returns the query result and then console logs in in the browser. I should mention as well that I was using a node library called Sequelize which is an ORM for SQL like Prisma. After I was able to get the button to send a request and query the database through an API route, I could move on to structuring the app and adding features.`
            },
            {
                type: 'paragraph',
                text: `The first feature was a fundamental one, account authentication. Originally I thought this app would be completely account locked. Users and admins would need to have accounts to interact with each other but I abandoned this idea pretty early because I thought about businesses such as salons where a person might only go every couple months and creating an account could be a hassle. As long as they entered their email they could reserve the appointment. The business itself obviously needed to be logged in to create and manage appointments. I looked into many options for auth. There are tons of Next specific libraries that are very secure and very complete but within no time at all I realized I would be copying a lot of code to get these libraries set up. Security wasn’t a huge concern at this point in the process but learning was absolutely paramount so I decided to try and build my own version of auth. I found some basic examples of a library called jsonwebtoken which when given a secret key and some data, can create a token that can be sent back to the client as a cookie. On subsequent requests, if the header has withCredentials set to true, the cookie would be included and therefore could be decrypted and verified. `
            },
            {
                type: 'cc2'
            },
            {
                type: 'paragraph',
                text: `Looking back now it’s a very simple idea and I understand how it works inside and out but it took a fair bit of fiddling to one understand it, and two actually get it working. It came out thusly: a user tries to log in with a username and password, both the username and password get sent to an API route which will query the database to check if a username equal to the one sent exists. If it does it will check the hashed password against the password from the request, if they match send a 200 status with a set-cookie header with a newly serialized token including the username and account type, else send 401. Now the user has their authenticated token. Every time they make a request for user specific data we simply deserialize the token and check the account type and username match the privileges of the data they are requesting.`
            },
            {
                type: 'paragraph',
                text: `Now that I had a way to authenticate requests I could start with the authenticated part of the app, the admin or ‘Creator’ as I dubbed it. There were many things to do at first and I had to essentially learn how to do every single one as I was building them. I decided to start with the most fundamental feature which is the appointment itself. In order to do that I needed to move over to my database first and create a schema that fulfilled my requirements. It should have a start time and an end time, both in UTC. It needs to include the admin ID which is the primary key of the users table. It also needs a column for userEmail and message for use once an appointment is claimed. Pretty basic stuff and this schema would almost go unchanged until much later in the process. Now that I had a structure I could easily hard code a button that would create a random appointment, great.. But I needed a form. `
            },
            {
                type: 'code',
                blocks: [
                    {text: `const { handleSubmit, register, reset } = useForm({ mode: 'onSubmit' });`, indents: 0},
                ]
            },
            {
                type: 'paragraph',
                text: `After some looking and discussion I went with react-hook-form. It integrates well with what I needed and was *fairly* easy to get started on. I say fairly because although most of its functionality is pretty clearly stated in the docs, getting it to integrate in your app takes some thought. More on this later though. So after hours of tweaking and debugging I had a form wherein a user could create an appointment. It was far from production ready though, the hour and minute inputs for start time were just that, inputs. They had some regex validation but you literally had to type in a number from 0-23 and 0-59. Pretty intuitive I know but I was happy with where I had gotten to. Once submitted I needed to create date objects which were facilitated by a library called dayjs, which I’m told is a continuation of an old date library called momentjs that is no longer maintained. At first I was just shoving things into the database because I had to start somewhere but the next hurdle would be verifying if an appointment is valid beyond just that the form is filled out correctly. The appointment can't interfere with other appointments. This is where dayjs really showed its true power. It has built in methods for checking isBefore, isBetween and so on so with a bit of javascript and a lot of debugging I was able to query already created appointments, validate the incoming appointment and handle success and failure. `
            },
            {
                type: 'paragraph',
                text: `Now I needed to be able to see the appointments so a simple component was made to get everything from the database and spit out a list of components ordered by date descending. I added a button to cancel and some simple style. Next came sorting and filtering. I had built one of those tutorial monster rolodex / employee rolodex react apps so I had some experience with manipulating state to filter and sort static data. Unfortunately almost none of that experience came into play because after thinking about it, all the sorting and filtering should be done in  the database. The client and server should be left out of it. Databases are so quick these days that it makes sense to shift as much of the heavy lifting over to it as possible. All I needed to do on the server was read the request from the form and translate it into a query. It could be done either way looking back but I think each technology should be allowed to excel at what it was created for and SQL excels at.. well, querying.  
                `
            },
            {
                type: 'paragraph',
                text: `One of the things I had discussed with my mentor on our weekly chat was database schema. We talked about two key features that I should implement and understand early, pagination and indexing. Once I understood indexes after some *light* reading I added them to the appointments table and saw my query time fall dramatically (I had previously added fake data to the database in order to test performance). Even more confirmation that letting the SQL server handle data searching was the right move. 1 to 3 ms to search through 50k rows is mind boggling but less so when you realize that you only search through what you need and indexes allow the database to know exactly where the data starts and ends.. Are you even searching at that point?`
            },
            {
                type: 'cc3'
            },
            {
                type: 'paragraph',
                text: `Instead of having all my apartment components stack on a single page I needed to get started on pagination. I decided I would make the component all on my own instead of using one already provided by the CSS library I was using (Bulma.io). Styling it was easy enough but getting the logic right proved more difficult. I essentially needed to have a scrolling window of numbers (think more than 10 pages) and it turned out more complicated than I initially thought it would be. Luckily this is exactly the type of challenge I can become obsessed over, and I did. Looking at it from a high level it sounds simple, in my case I just had a total number of results to show and a page size to start. Some simple division gives the number of pages required. Now I need an array of page numbers, and an offset based on what page you’re on to shift the window to only see 10 page numbers at a time if there's more than 10 pages. Now just put the page number into state and the API route will handle the limit and skip params for the query. Those are a few sentences describing 4 or 5 hours of struggle.`
            },
            {
                type: 'paragraph',
                text: `Around this time in the project I found myself reusing a lot of code with only minor changes. A common piece of code was creating API route requests from a component. There are custom hooks out there already dedicated to this exact thing such as useSWR which is provided by the creators of Next. Just like the decision to figure out an auth system, I figured I should try my hand at creating a custom react hook. It sounded super daunting at first because I had no idea what it entailed. Five minutes of research calmed my nerves though. A custom hook is just a function that contains the prebuilt hooks from React. I came up with the brilliant name “useFetchManager” and you’ll never guess what its purpose was. Jokes aside this was a huge realization for me and a huge time saver. Packaging up reused code into a function or method wasn't a new idea to me by any means but I guess I never put 2 and 2 together and realized hooks could be utilized the same way. After a few hours of work and a multitude of bug fixes and improvements I had my first custom hook. I focused mainly on my application needs rather than being something that could be shared between other apps (although with minor tweaking it easily could). `
            },
            {
                type: 'code',
                blocks: [
                    {text: `const { isHandlingRequest, execute, status, error } = useFetchManager(`, indents: 0},
                    {text: `'/api/createapt',`, indents: 1},
                    {text: `{ watchFields, tz: tz, username: creator },`, indents: 1},
                    {text: `'POST',`, indents: 1},
                    {text: `false`, indents: 1},
                    {text: `);`, indents: 0},
                ]
            },
            {
                type: 'paragraph',
                text: `To initialize my hook you must provide it with an API route path as a string, an object with parameters to send either as a body or url query string, a request type like get or post and a parameter called immediate. What the hook returns you is a few variables / states. It returns one called data which remains null until data is either returned from a get request or until a post returns a success code. It provides an isHandlingRequest state which is just a useState set to true or false based on if a request has been sent and you haven't received a response. Error, for errors, and a late addition which solved a lot of issues I was having called execute which only worked when the immediate parameter was set to false. `
            },
            {
                type: 'paragraph',
                text: `At first the hook would send a request on load but that didn't work for a lot of things. I experimented with a lot of different solutions but, like many other times, was led to the right answer by my mentor Mark. He sent me a link to a site with some basic hook design principles and on it I discovered a hook very similar to my own but with the immediate / execute design pattern, so I adopted it into my own hook. A few small lessons I learned along the way: One is that get requests can't have a body so when data is required to be sent I can put the data in a url query string. I also learned that in React, objects can’t be used in a dependency array of a useEffect because the memory address changes on each render so you’ll end up with a ‘different’ object on each render thus running the useEffect indefinitely. This one broke my brain for a while because useEffect was so robust and easy up until this point. The solution was a bit hacky but it worked, I created a reference to the params object with useRef, I then used a method called isDeepEqual to compare the .current value of the ref to the original params object and if they are different I set the reference.current value to the new params. In the useEffect dependency array I watch the reference.current value, not the params object itself. It works great but likely I will have to find a better way to do this in the future. After I completed useFetchManager I whipped up another quick hook called useAuthManager which basically does the same thing except it only sends a request to a single API route to check for auth based on some privileges you provide it.
                `
            },
            {
                type: 'code',
                blocks: [
                    {text: `const { authorized } = useAuth();`, indents: 0}
                ]
            },
            {
                type: 'paragraph',
                text: `After creating a basic ‘customer’ facing page for booking appointments, I needed to filter and sort appointments. I can easily create a form with some select tags and watch for changes then update state then have a useEffect trigger and then blah blah blah. A better idea is to utilize react-hook-form and my new hook to avoid all that boilerplate for each component that needs to sort or filter. One thing I didn’t mention is that a big part of the useFetchManager was having it integrate with react-hook-forms. I found a nice pattern that I used throughout the project. I'm not sure if they intended it to be used in this way but it works great. When you call the useForm hook, one of the functions it returns is called watch. What watch does is basically subscribe to form field changes. I create a variable called watchFields and set it equal to watch and I throw that inside my hook parameters and voila, every time a field changes the parameters change which sends a request based on the updated values. Now all I have to do inside the API route is update the query to match what is sent. I should mention that along with watchFields I can include any number of other variables such as the username and the current page number.
                `
            },
            {
                type: 'specialstyle',
                text: `After creating an API route for booking appointments with an email and optional message, I basically had all the fundamentals and it was time to start building actual features.`,
                style: 'has-text-weight-light is-size-5'
            },
            {
                type: 'paragraph',
                text: `I started with a feature that adds a lot of quality of life and clarity to the project. I called it appointment types which is exactly as it sounds. An example of an appointment type would be something like a haircut. When creating an appointment, if the user already has types created they can choose to select an appointment type. What that will do is lock in a price and duration preset by the type when it was created. Along with that, when a user is viewing appointments they can search only for their desired appointment type. In the database a table called “appointment-types” was created with the following columns: adminID for tracking who created it, a name, a description (for showing in a tooltip), a price and a default time. It’s a fairly simple idea but it adds a lot more flexibility to the project if it were to actually be used. It was a good warmup for the final feature I planned on adding before showing off the project and deploying. `
            },
            {
                type: 'paragraph',
                text: `The final feature was a circle back to my original idea whereby an admin would simply provide an availability window and users could choose times within that period. I still didn’t and don’t like the idea of having users freely choose time slots so I combined that idea with what the project ended up being. My idea was to create a form wherein an admin could provide a start time and an end time, an optional break period, an appointment time length OR type and give a period of time like 1 week or 1 month. What it would do is take all of that information and fill the given time period with appointments of the desired type or time length (type would lock the length). It would do this intelligently without having appointments overflow the given period within a day nor would it interfere with the break period if one was provided. There is also a selection for which days of the week you want appointments to be added to. This is kind of the epitome of usefulness I imagined for this project. An admin can create and cancel appointments, at specific times. There are some tools to improve the process of batch creation, and users are able to book times.`
            },
            {
                type: 'cc4'
            },
            {
                type: 'paragraph',
                text: `I didn’t want it to be a complete solution like calendly (nor do I possess the time or skill to create such a service.. yet) but I wanted to show potential employers and myself most importantly, that I have what it takes to make this a career. I have proven to myself that I have plenty of motivation and that with effort I can understand things I thought incomprehensible a year ago. I know now for sure that I can provide value as a web developer and I will continue to add value to myself until I find what I’m looking for. `
            },
            {
                type: 'paragraph',
                text: `There are a couple small features I will be adding eventually like integrating Stripe payments and creating cron tasks for reminding users about appointments but also for notifying admins when an appointment is claimed. But for now, I’m moving to my next project to apply and expand all my new knowledge. `
            },
            {
                type: 'paragraph',
                text: `The project is fully deployed on Vercel at`
            },
            {
                type: 'link',
                link: 'Jewel',
                href: 'https://jewel.jrudesill.dev'
            }
           
        ]  
    }
]


