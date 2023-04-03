# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a language that is used in React and it is a hybrid of JavaScript and HTML.

Researched answer: JSX stands for JavaScript XML and is an extension syntax for Javascript language that combines the ability to use HTML and JS in the same code in React. An example of the utilization is that JSX converts HTML tags <></> into react fragments that can render on the app itself. You can also write expressions in {} similar to a parameter in a function for JS that can be a variable or a property that is to be excecuted to return a result.

https://stackoverflow.com/questions/20477177/creating-an-array-of-cumulative-sum-in-javascript

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: yarn stands for "yet another resource negotiator"

Researched answer: yarn is a package manager just like node. It adds all of the code snippets and dependencies through a package to make it an easier process to develop your own app. It also allows your terminal to act as a local server that reflects the changes to your code in real time. Other benefits is security yarn only istalls dependecies from the yarn.lock and package.json files which is considered to be safer that node. Bugs are able to be indentified in the code and reported on the console and taken care of in a quicker time whithout getting to far down the project and having to backtrack to find the bug.

https://www.freecodecamp.org/news/javascript-package-manager-npm-and-yarn/

3. What is a React component?

Your answer:React component is an "html" tag that is read in JSX that holds a peice of information to be rendered on the user interface. Just like html there need to be an opening that and a closing tag or a self-closing one.
ex. <></>

Researched answer: React fragments allow us to returns multiple elements from a child component to the parent component. The framgments are similar to the div tag and can be used interchangeably the advatage to using the fragments when nesting multiple elements is the rendering time when loading the information. <div> is an element which means it has a larger DOM that uses more memory than the react fragments do. That could potentially slow down the loading speed of the site or application this will come into play when you have a larger project.

4. What is the difference between state values and props in React?

Your answer: props are objects in react while the state values are special functions that tells a set of data how to behave.

Researched answer: state values and props are both Javascript plain objects and they both hold information that tells an actions and have influence on the rendering of the information. The main difference is how the information gets passed through each. prop is similar to the paramater where the informationis passed to the component while the state value is something that is decalred internally in the component lives locally.

https://legacy.reactjs.org/docs/faq-state.html#:~:text=While%20both%20hold%20information%20that,variables%20declared%20within%20a%20function).

5. What is the DOM?

Your answer: The Document Object Model acts as a blueprint or map for the application or site.

Researched answer: The DOM is a tree like structure that lays out the html elements into a map of the user interface. Html elements are added as node to the tree that can be accessed by JS and make changes to the styles and attributes.

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: I am familar with the div tag and that is used to create a spacing or a part of the website or app that can store further elemtes to be nested inside of it. I am not familiar with the span tag.

Researched answer: One of the differences between a div tag and a span tag would be the level of the tag the div is used as a block level element while the span tag is an in-line level element. span tag is used to make a portion of content stand out or be manipulated in a diffrent way to the rest using css or javascript. It can also be used as a container for inline elements. span tags are also typically not nested as the div tags are.

https://www.w3schools.com/tags/tag_span.asp

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:It is model of programming that structures the code in a class. This makes it easier for objects to intereact with each other. Python is a popular languge that uses oop.

2. Ruby:Ruby is programming language that is used for front-end and back-end development. It is an object oriented language that uses high-level syntax making it a very user frienldy language. It is very versitile that can be used on many operating systems.

3. Implicit return: In Ruby ever method will have a return of the last evaluated statement. Eventhough the programmer does not use "return" there is still a return of the last evaluated statement.

4. Ruby blocks: These are anonymus functions that can be passed into methods. There blocks require either a do/end statement or for it to be wrapped in {}.

5. Ruby hashes: These are a data structure that is also referred to as a key-pair value such as in an object. They are values stored with their associated key.
