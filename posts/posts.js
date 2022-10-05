




export const posts = [
    {
        id: 1,
        title: "My Programming Origin Story",
        description: `My story begins as began many of my other interests. I have this weird obsession with things that can to one be so effortlessly understood but to another completely foreign.
        Things which can look simple on the outside but be incredibly convoluted once you observe someone with experience. Like how a chess grandmaster can calmly and efficiently analyze who 
        has the advantage and give the best next move in any given match. `,
        date: 'October 5, 2022',
        time: '10 min read',
        textblocks: 
            [
                {
                    type: 'paragraph',
                    text:  `My story begins as began many of my other interests. I have this weird obsession with things that can to one be so effortlessly understood but to another completely foreign.
                     Things which can look simple on the outside but be incredibly convoluted once you observe someone with experience. Like how a chess grandmaster can calmly and efficiently analyze who 
                     has the advantage and give the best next move in any given match. A layman who has a basic understanding of the game can see how the move is good if it's explained to them and they're 
                     given sufficient time to analyze on their own, or maybe not. They experience the magic of expertise. Something so seemingly basic can be so incomprehensibly complex. The layman understands 
                     how the pieces move and the objective of the game just fine, they may even understand some game theory and have practiced some tactics. In fact, I guarantee the layman has done these things
                      because I am him. 
                    `
                },
                {
                    type: 'quote',
                    author: 'Mikhail Chigorin',
                    quote: 'Even a poor plan is better than no plan at all.'
                },
                {
                    type: 'paragraph',
                    text: `After watching a random YouTube algorithm video recommendation of a casual chess match between 2 grandmasters, I found myself obsessed by the fact that I could look at something which
                     I had vague familiarity with, and be completely and utterly lost. The match seemingly swung in one's favor then suddenly back to the other's. Then "Oh, no!", a blunder! And then a resignation.
                      All the while I am listening to the discourse between these two masters, pausing the video and attempting to understand where player 1 went wrong and how player 2 took advantage of it or vice
                       versa, but sadly to no avail. What. So. Ever. I spent the next year or two playing online games, doing tactics puzzles and studying opening theory just to get a small glimpse into the mind of
                        either of those grandmasters. The more I learned, the more I realized how much I don't know. (Someone famous has probably said that before, but I'm saying it too). Concurrently I was getting
                         a grasp of the game. After a while I could (with laser-like precision) destroy any layman who dare step in my way. I got to a point where I could display the magic of expertise to a layman,
                          albeit in a much tamer way.`
                },
                {
                    type: 'paragraph',
                    text: `This same phenomenon has only happened to me at this level 2 other times. One was with the PC game League of Legends (circa 2015) and the other with programming. 
                    I was obsessed with the fact that some English like words and some special symbols and spacing could create a website, or a piece of software. After I decided I'd had 
                    enough with being a layman, I began learning python on Codecademy. I enjoyed the rage inducing missing semicolon on line 8, the computer fan testing infinite loops, and
                     whatever the heck a class is. All the while I thought to myself, "Wow this stuff is cool and I'm learning a lot, but I can't wait to get to more advanced stuff", but 
                     even after finishing the course I felt as if I had missed some section with the secret to making software and websites. I could do a for loop, sure.. but how can I build
                      an application? I experimented with command line games and online IDEs and enjoyed it all but I still couldn't understand how one could make anything with this stuff. 
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
                    text: `There's no doubt that Python is a great place to start, but my hunger for knowledge only grew once I had the basics. For the next months, I essentially
                     took a world tour of programming stopping for 2 days in each language. I did the C# course on codecademy with building a game in my mind. I tried Unity and built 
                     some small games like pong and chess. It was a great way to use code to actually change things visually and do some basic application design. Then I thought I would 
                     try to learn a language with a similar name and maybe use it to build a game without the help of a pre-built game engine like Unity. I embarked to the land of C++. 
                     I learned what I could and followed some tutorials on YouTube from a guy calling himself TheCherno. I began following his game engine series where he builds an engine
                      from absolutely zero. This is the point where I understood how complex these things can really get. I followed along for weeks and 1000 or so lines of code later, we 
                      had a window from the Windows API, and a rendered blue square. I really understood what was going on too, finally. I even had to debug sometimes as the tutorial was a 
                      year or so old and some of the libraries we utilized had undergone small breaking changes. I realized fully why software engineers get paid the big bucks around this point. `
                },
                {
                    type: 'paragraph',
                    text: `The next few stops on this journey were unexpected detours which turned out to be the most impactful. A good friend of mine randomly presented an idea
                     to me for a website that can take stock data and mix it with comment sentiment and present it in a meaningful way. The idea was a good one but neither of us knew
                      anything about web development. That was all we needed, a challenge. I got to work immediately. I learned the basics in HTML, CSS, and JavaScript. We tried probably
                       about 5 frameworks to build the site unaware of the purpose each actually server in a web app. The ones I remember trying were express, React, PHP, and Ruby on 
                       Rails. The only one that stuck was PHP. I imagine it stuck because it could be set up with minimum hassle. We used MariaDB for our database and Python for web 
                       scraping the comments. I focused mainly on the front end and requests to the database and my friend built the scrapers and the database itself. By the time we had
                        something that looked vaguely like a website, we had built a plain HTML / CSS and PHP web "app". I wrote every line of HTML and CSS myself. No Sass, no components,
                         and probably 10 lines of JavaScript. The PHP sent queries to search through databases with 5 million rows with no indexes or optimizations in sight. Each page required
                          5 queries to run. Page loads were timed in seconds, not milliseconds. And the icing on the cake? It all ran from a raspberry pi in a college dorm room. It was an 
                          absolute mess, but it was ours and we built it starting from zero. Nothing much came of it, although at one time we had around 50 people using it at once. I think 
                          more than a few of our users called their ISP complaining about their internet speed that day.`
                },
                {
                    type: 'specialstyle',
                    text: `Up to this point in my journey, I considered myself a hobbyist. Getting a software development job was just not in my field of view.. yet. `,
                    style: 'has-text-weight-bold'
                },
                {
                    type: 'paragraph',
                    text: `After having some time to mull over my previous endeavor, I was presented with a real opportunity to make something impactful with code. I had gotten a new job a 
                    few months prior as a CAD operator. One of my coworkers was also my cousin with whom I shared a lot of interests. He had been at this company for a while and had made a few 
                    plugins to help with daily tasks in our then CAD program of choice AutoCAD. They did things like adding information that is required frequently, and creating pdfs of drawings
                     quickly. I arrived at an optimal time for innovation though. They were in the process of changing CAD programs to a more powerful one. I would soon learn it was more powerful
                      also in its ability to integrate with C#. It was called Rhino3D and it had a very well developed and complete API for creating commands to do basically anything. We got to work
                       right away starting with recreating the commands from the previous program. We progressed to commands that weren't possible in the other program. By the time we were a few
                        months in we were creating commands we didn't know could be possible. We strove for two things: implementing company standards and making our work more efficient. In the process
                         of doing this our daily work became very hands-off. Tasks that would normally take 10 minutes could be done in 2 (and with fewer mistakes on average). We completely changed the
                          way our department functioned for the better, all with code. As time went on, things were refined based on department feedback. The code became more efficient and connected. 
                          When I finally decided to leave, we had around 5000 lines of code written which helped with every single one of the tasks we needed to do.`
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
                    text: `The decision to leave wasn't an easy one, but it was the right one. I left because I want to pursue software engineering full time (at the time of writing this I am still in hot pursuit).
                     I had down time at my last job to work on personal projects but it never felt right and I didn't like the idea of working on personal stuff on someone else's time, so I left. The move was 
                     discussed with my family, friends but importantly my mentor Mark who is a software engineer with 10 years experience. I found him on a website called MentorCruise and we began working on 
                     my plan to enter into this wondrous field. We began as one might in a real dev job; we decided on a project that I must build, we laid out the requirements for what a finished app might look
                      like, chose tech stacks and then I began. We decided I would be building a scheduling application for small businesses and it would be built using React + Next.js. There will be an entire 
                      blog post about my journey through that project but I have completed that project. `
                },
                {
                    type: 'paragraph',
                    text: `I went from having an amateur level understanding of React and how it is useful to being, well, a “highly advanced amateur”. I still say amateur because I know how complex applications
                     can be. Nonetheless I am extremely proud of myself for the progress I've made. I've learnt an incredible amount about every step of the process in application design. I took an idea all 
                     the way to a fully deployed app. I had an extensive amount of help along the way from my aforementioned mentor which was key. What I found most useful from him is we rarely discussed specific
                      problems within the codebase but rather he guided me to places where he knew I would find the answer on my own. Instead of telling me how to do something explicitly we discussed some solutions
                       to problems of similar nature or tech stacks people use.`
                },
                {
                    type: 'link',
                    link: 'Jewel',
                    href: 'https://jewel.jrudesill.dev'
                },
                {
                    type: 'paragraph',
                    text: `That leads me to where I am today. I'm preparing my personal portfolio website, writing articles on this blog and applying to jobs. I'm also about to start work on another large project.
                     It will be some sort of scrum manager (something to manage tasks in a team of people). I'm looking forward to it because there will be less struggling with boilerplate stuff. Now that I have a 
                     decent grasp on how an app should be structured I can work through problems much faster and focus on building something effectively. I'm ready to get my first software job, and I know that whichever
                      company decides I'm worthy won't regret hiring me.`
                }
                
            ],
    }
]


