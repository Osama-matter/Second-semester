const QUESTIONS = [

    // ============================================================
    // INTRODUCTION TO WEB DEVELOPMENT
    // ============================================================
    {
        id: 1, topic: "Web Intro", subtopic: "Web Pages", type: "mcq", difficulty: "easy",
        question: "What is a web page?",
        options: ["A hardware component used to connect to the internet", "A digital document accessed through the Web using a web browser", "A programming language for creating websites", "A file stored only on personal computers"],
        answer: 1, explanation: "A web page is a digital document accessed via a web browser over the internet.",
        wrongExplanations: ["Hardware = routers/switches, not pages", "Correct!", "HTML/CSS/JS are languages, not the page itself", "Web pages are stored on web servers, not just local computers"]
    },

    {
        id: 2, topic: "Web Intro", subtopic: "Web Servers", type: "mcq", difficulty: "easy",
        question: "What is a web server?",
        options: ["Hardware that connects devices to the internet", "Software that responds to requests from web clients", "A search engine for web content", "A programming language used to build websites"],
        answer: 1, explanation: "A web server is software that receives HTTP requests from clients (browsers) and returns web content.",
        wrongExplanations: ["That's a router/network device", "Correct!", "Search engines like Google are different from web servers", "Languages like PHP are used on servers but they aren't the server itself"]
    },

    {
        id: 3, topic: "Web Intro", subtopic: "Static vs Dynamic", type: "mcq", difficulty: "easy",
        question: "Which of the following statements about web pages is TRUE?",
        options: ["All web pages are static and cannot change", "Web pages can only display information but not collect data", "Web pages can be static or dynamic and may include interactive features", "Web pages do not use any markup language"],
        answer: 2, explanation: "Web pages can be static (fixed content) or dynamic (content changes based on user/server interaction) and can include forms, scripts, etc.",
        wrongExplanations: ["Dynamic pages change content based on interaction", "Forms and interactive elements allow data collection", "HTML is a markup language used on all web pages", "Correct!"]
    },

    {
        id: 4, topic: "Web Intro", subtopic: "Web Languages", type: "mcq", difficulty: "easy",
        question: "Which language provides the STRUCTURE of a web page?",
        options: ["CSS", "HTML", "JavaScript", "SQL"],
        answer: 1, explanation: "HTML (HyperText Markup Language) provides the structure and content of web pages.",
        wrongExplanations: ["CSS handles styling (appearance)", "Correct!", "JavaScript adds behavior/interactivity", "SQL is for databases"]
    },

    {
        id: 5, topic: "Web Intro", subtopic: "Web Languages", type: "mcq", difficulty: "easy",
        question: "Which language is used mainly for STYLING and layout in web pages?",
        options: ["Java", "HTML", "Python", "CSS"],
        answer: 3, explanation: "CSS (Cascading Style Sheets) controls the visual presentation of HTML elements.",
        wrongExplanations: ["Java is a general-purpose language, not for web styling", "HTML provides structure, not style", "Python is server-side", "Correct!"]
    },

    {
        id: 6, topic: "Web Intro", subtopic: "Static vs Dynamic", type: "tf", difficulty: "easy",
        question: "Static web pages display the same content to every visitor.",
        answer: true, explanation: "Static pages have fixed content that doesn't change regardless of who visits."
    },

    {
        id: 7, topic: "Web Intro", subtopic: "Web Clients", type: "mcq", difficulty: "easy",
        question: "Which of the following is a type of web CLIENT?",
        options: ["Web browser", "Cloud platform", "OS", "Server farm"],
        answer: 0, explanation: "A web browser (Chrome, Firefox, etc.) is a web client that requests and displays web content.",
        wrongExplanations: ["Correct!", "Cloud platforms are services, not web clients specifically", "The OS is the operating system, not a web client", "Server farms HOST content, not consume it"]
    },

    {
        id: 8, topic: "Web Intro", subtopic: "Websites", type: "mcq", difficulty: "easy",
        question: "Which of the following best describes a WEBSITE?",
        options: ["A collection of related web pages hosted together", "A single HTML document", "A local file on a computer", "A digital image stored online"],
        answer: 0, explanation: "A website is a collection of related web pages hosted on a web server under the same domain.",
        wrongExplanations: ["Correct!", "A single HTML file is just one page, not a full website", "Local files aren't accessible via the internet", "An image is just one file, not a website"]
    },

    // ============================================================
    // HTML
    // ============================================================
    {
        id: 101, topic: "HTML", subtopic: "Basics", type: "tf", difficulty: "easy",
        question: "Empty elements (like <br> and <img>) must have a closing tag in HTML.",
        answer: false, explanation: "Empty/void elements in HTML do not require a closing tag. They are self-closing."
    },

    {
        id: 102, topic: "HTML", subtopic: "Basics", type: "mcq", difficulty: "easy",
        question: "What does HTML stand for?",
        options: ["Hot Typing Markup Language", "Home Typing Modern Language", "Hyper Text Markup Language", "Home Testing Mixed Language"],
        answer: 2, explanation: "HTML stands for HyperText Markup Language — the standard language for creating web pages.",
        wrongExplanations: ["Not a real acronym", "Not a real acronym", "Correct!", "Not a real acronym"]
    },

    {
        id: 103, topic: "HTML", subtopic: "Links", type: "mcq", difficulty: "easy",
        question: "How do you create a hyperlink in HTML?",
        options: ['<a link="www.example.com">Visit</a>', '<a> www.example.com <example.com /a>', '<a href="www.example.com">Visit</a>', '<a url="www.example.com" text />'],
        answer: 2, explanation: "The <a> tag uses the 'href' attribute to specify the URL of the hyperlink.",
        wrongExplanations: ["'link' is not a valid attribute for <a>", "This syntax is completely wrong", "Correct!", "'url' is not a valid attribute for <a>"]
    },

    {
        id: 104, topic: "HTML", subtopic: "Headings", type: "mcq", difficulty: "easy",
        question: "Which of the following headers is the LARGEST and MOST IMPORTANT?",
        options: ["<h1>", "<h2>", "<h3>", "<h6>"],
        answer: 0, explanation: "<h1> is the largest and most important heading. Headings go from h1 (most important) to h6 (least important).",
        wrongExplanations: ["Correct!", "h2 is second most important", "h3 is third", "h6 is the smallest/least important"]
    },

    {
        id: 105, topic: "HTML", subtopic: "Block vs Inline", type: "mcq", difficulty: "medium",
        question: "Which of the following is a BLOCK-LEVEL element in HTML?",
        options: ["<span>", "<div>", "<a>", "<strong>"],
        answer: 1, explanation: "<div> is a block-level element that starts on a new line and takes full width. span, a, and strong are inline elements.",
        wrongExplanations: ["<span> is inline", "Correct!", "<a> is inline", "<strong> is inline"]
    },

    {
        id: 106, topic: "HTML", subtopic: "Tables", type: "mcq", difficulty: "easy",
        question: "Which elements can be used in HTML to create a table?",
        options: ["<table>, <tbody>, <trow>", "<table>, <tb>, <trow>", "<table>, <tbody>, <tr>", "All of the above"],
        answer: 2, explanation: "The correct HTML table elements are <table>, <tbody>, <tr> (table row), <th> (header cell), and <td> (data cell). <trow> and <tb> don't exist.",
        wrongExplanations: ["<trow> is not a valid HTML tag", "<tb> and <trow> are not valid", "Correct!", "The others contain invalid tags"]
    },

    {
        id: 107, topic: "HTML", subtopic: "Lists", type: "mcq", difficulty: "easy",
        question: "Which tag is used to define an UNORDERED list in HTML?",
        options: ["<ul>", "<ol>", "<list>", "<li>"],
        answer: 0, explanation: "<ul> creates an unordered (bulleted) list. <ol> creates an ordered (numbered) list. <li> defines each list item.",
        wrongExplanations: ["Correct!", "<ol> is ordered list", "<list> is not a valid HTML tag", "<li> is a list item, not the list container"]
    },

    {
        id: 108, topic: "HTML", subtopic: "Comments", type: "mcq", difficulty: "easy",
        question: "In HTML, the correct way to write a comment is:",
        options: ["## and #", "<!-- and -->", "</– and -/->", "<!– and -!>"],
        answer: 1, explanation: "HTML comments use <!-- to open and --> to close.",
        wrongExplanations: ["## is used in Markdown/Python", "Correct!", "Wrong syntax", "Wrong syntax — the closing tag is -->"]
    },

    {
        id: 109, topic: "HTML", subtopic: "iFrame", type: "mcq", difficulty: "easy",
        question: "What is the PRIMARY purpose of the <iframe> element in HTML?",
        options: ["To display images from external sources", "To create a pop-up message box", "To embed another HTML document within the current page", "To apply internal CSS styling"],
        answer: 2, explanation: "<iframe> (Inline Frame) embeds another HTML page or external content within the current page.",
        wrongExplanations: ["<img> is used for images", "alert() or modal divs create popups", "Correct!", "<style> tag applies internal CSS"]
    },

    {
        id: 110, topic: "HTML", subtopic: "Tables", type: "mcq", difficulty: "easy",
        question: "In an HTML table, what is the correct use of the <caption> element?",
        options: ["To insert a tooltip for each cell", "To provide a title or description for the table", "To create a header row", "To align cells vertically"],
        answer: 1, explanation: "<caption> provides a title or summary for a table and is placed immediately after the <table> tag.",
        wrongExplanations: ["Tooltips use the 'title' attribute", "Correct!", "<tr> with <th> creates header rows", "vertical-align CSS property handles vertical alignment"]
    },

    {
        id: 111, topic: "HTML", subtopic: "Lists", type: "mcq", difficulty: "medium",
        question: "Which statement about NESTED lists in HTML is TRUE?",
        options: ["HTML does not support nesting of ordered and unordered lists", "A <ul> can only be nested inside another <ul>", "Nested lists must be placed outside of <li> elements", "Nested lists are placed inside <li> elements and can mix list types"],
        answer: 3, explanation: "Nested lists must be placed inside <li> elements, and you can mix <ul> and <ol> types freely.",
        wrongExplanations: ["HTML fully supports nested lists of any type", "A <ul> can be nested inside an <ol> and vice versa", "Nested lists MUST be inside <li> elements", "Correct!"]
    },

    {
        id: 112, topic: "HTML", subtopic: "Images", type: "fill", difficulty: "easy",
        question: "The attribute used to specify alternative text for an image is: <img src='logo.png' ___='Company Logo'>",
        answer: "alt", explanation: "The 'alt' attribute provides alternative text displayed when the image cannot load, and is important for accessibility."
    },

    {
        id: 113, topic: "HTML", subtopic: "Links", type: "fill", difficulty: "easy",
        question: "To create a hyperlink that opens a link in a NEW tab/window, you use the attribute: <a href='...' _____='_blank'>",
        answer: "target", explanation: "The 'target' attribute with value '_blank' opens the link in a new browser tab or window."
    },

    {
        id: 114, topic: "HTML", subtopic: "Links", type: "mcq", difficulty: "easy",
        question: "How do you create a hyperlink to an EMAIL address in HTML?",
        options: ["<mail>", "<email>", "<a href='mailto:email@example.com'>", "<a email='email@example.com'>"],
        answer: 2, explanation: "Use 'mailto:' in the href attribute to create an email link.",
        wrongExplanations: ["<mail> is not an HTML tag", "<email> is not an HTML tag", "Correct!", "'email' is not a valid href syntax"]
    },

    {
        id: 115, topic: "HTML", subtopic: "Tables", type: "mcq", difficulty: "easy",
        question: "What is the correct tag name for a TABLE CELL in HTML?",
        options: ["<tc>", "<td>", "<tr>", "<cell>"],
        answer: 1, explanation: "<td> (Table Data) creates a standard table cell. <tr> creates a row, <th> creates a header cell.",
        wrongExplanations: ["<tc> is not a valid tag", "Correct!", "<tr> is a table row, not a cell", "<cell> is not a valid HTML tag"]
    },

    {
        id: 116, topic: "HTML", subtopic: "Basics", type: "mcq", difficulty: "easy",
        question: "What is the correct HTML markup for the document type declaration?",
        options: ["<!DOCTYPE html>", "DOCTYPE html;", "--DOCTYPE html;", "None of the above"],
        answer: 0, explanation: "<!DOCTYPE html> must be the first line of an HTML document, telling the browser which version of HTML is being used.",
        wrongExplanations: ["Correct!", "Missing the <! prefix", "Incorrect syntax", "The first option is correct"]
    },

    {
        id: 117, topic: "HTML", subtopic: "Tables", type: "mcq", difficulty: "medium",
        question: "Which HTML attribute is used to make a cell span MULTIPLE ROWS?",
        options: ["span", "rowspan", "spanning", "colspan"],
        answer: 1, explanation: "'rowspan' makes a cell span multiple rows. 'colspan' makes a cell span multiple columns.",
        wrongExplanations: ["'span' is not a table attribute", "Correct!", "'spanning' is not a valid attribute", "'colspan' spans columns, not rows"]
    },

    {
        id: 118, topic: "HTML", subtopic: "Basics", type: "tf", difficulty: "easy",
        question: "HTML paragraphs always start on a new line.",
        answer: true, explanation: "<p> is a block-level element, so it always starts on a new line and adds margin above and below."
    },

    {
        id: 119, topic: "HTML", subtopic: "DOM/JavaScript", type: "fill", difficulty: "medium",
        question: "Complete: document.getElementById('demo').________ = 'Hello World!'; (to change HTML content)",
        answer: "innerHTML", explanation: "innerHTML property gets or sets the HTML content inside an element."
    },

    {
        id: 120, topic: "HTML", subtopic: "Forms", type: "mcq", difficulty: "easy",
        question: "Which HTML element is used to EMBED JavaScript in a webpage?",
        options: ["<java>", "<javascript>", "<script>", "<js>"],
        answer: 2, explanation: "JavaScript is placed inside <script> tags, either inline in HTML or linked externally.",
        wrongExplanations: ["<java> is not a valid HTML tag", "<javascript> is not a valid HTML tag", "Correct!", "<js> is not a valid HTML tag"]
    },

    {
        id: 121, topic: "HTML", subtopic: "Basics", type: "mcq", difficulty: "easy",
        question: "Which tag is used to add a HORIZONTAL LINE between elements?",
        options: ["<line>", "<br>", "<hr>", "<hl>"],
        answer: 2, explanation: "<hr> (Horizontal Rule) adds a horizontal line/divider in HTML.",
        wrongExplanations: ["<line> is not a standard HTML tag", "<br> adds a line break, not a horizontal line", "Correct!", "<hl> is not a valid HTML tag"]
    },

    {
        id: 122, topic: "HTML", subtopic: "Basics", type: "mcq", difficulty: "easy",
        question: "Which HTML element preserves both spaces and line breaks when displayed?",
        options: ["<p>", "<span>", "<pre>", "<div>"],
        answer: 2, explanation: "<pre> (Preformatted Text) preserves whitespace, spaces, and line breaks exactly as written in the HTML.",
        wrongExplanations: ["<p> collapses whitespace", "<span> is inline and doesn't preserve whitespace", "Correct!", "<div> collapses whitespace"]
    },

    // ============================================================
    // HTML FORMS
    // ============================================================
    {
        id: 201, topic: "HTML Forms", subtopic: "Form Basics", type: "mcq", difficulty: "easy",
        question: "Which HTML tag is used to create a FORM?",
        options: ["<input>", "<form>", "<textarea>", "<button>"],
        answer: 1, explanation: "The <form> element creates an HTML form for user input. It wraps all the input elements.",
        wrongExplanations: ["<input> is an input field inside a form", "Correct!", "<textarea> is just one type of input field", "<button> is just a button element"]
    },

    {
        id: 202, topic: "HTML Forms", subtopic: "Form Methods", type: "mcq", difficulty: "easy",
        question: "Which HTTP method sends form data VISIBLE in the URL?",
        options: ["POST", "GET", "SEND", "PUSH"],
        answer: 1, explanation: "GET appends form data to the URL as query string parameters (e.g., ?name=John&age=25).",
        wrongExplanations: ["POST sends data in the request body, not the URL", "Correct!", "SEND is not an HTTP method", "PUSH is used in HTTP/2 server push, not form submission"]
    },

    {
        id: 203, topic: "HTML Forms", subtopic: "Form Methods", type: "mcq", difficulty: "easy",
        question: "Which HTTP method is MORE SECURE for sending sensitive data (like passwords)?",
        options: ["GET", "POST", "LINK", "PUT"],
        answer: 1, explanation: "POST sends data in the request body, not in the URL, making it more secure for sensitive information like passwords.",
        wrongExplanations: ["GET data is visible in the URL — insecure for passwords", "Correct!", "LINK is not used for form submission", "PUT is for updating resources, not typically for HTML forms"]
    },

    {
        id: 204, topic: "HTML Forms", subtopic: "Input Types", type: "mcq", difficulty: "easy",
        question: "Which input type HIDES the entered characters (shows dots/asterisks)?",
        options: ["text", "hidden", "password", "secure"],
        answer: 2, explanation: "<input type='password'> masks the entered characters for security.",
        wrongExplanations: ["<input type='text'> shows characters as typed", "<input type='hidden'> hides the field entirely from view", "Correct!", "'secure' is not a valid input type"]
    },

    {
        id: 205, topic: "HTML Forms", subtopic: "Input Types", type: "mcq", difficulty: "easy",
        question: "Which input type allows selecting ONLY ONE option from multiple choices?",
        options: ["checkbox", "radio", "button", "select"],
        answer: 1, explanation: "Radio buttons (<input type='radio'>) allow selecting only one option from a group with the same 'name' attribute.",
        wrongExplanations: ["Checkboxes allow MULTIPLE selections", "Correct!", "A button doesn't select from options", "<select> creates a dropdown, but radio is the answer here"]
    },

    {
        id: 206, topic: "HTML Forms", subtopic: "Input Types", type: "mcq", difficulty: "easy",
        question: "Which element creates a DROP-DOWN list?",
        options: ["<dropdown>", "<list>", "<select>", "<optionlist>"],
        answer: 2, explanation: "<select> creates a dropdown list. The options inside are defined with <option> tags.",
        wrongExplanations: ["<dropdown> is not a valid HTML tag", "<list> is not a valid HTML tag", "Correct!", "<optionlist> is not a valid HTML tag"]
    },

    {
        id: 207, topic: "HTML Forms", subtopic: "Input Types", type: "mcq", difficulty: "easy",
        question: "Which element creates a MULTI-LINE text input?",
        options: ["<input>", "<textarea>", "<textbox>", "<multiline>"],
        answer: 1, explanation: "<textarea> creates a resizable multi-line text input. <input type='text'> is single-line only.",
        wrongExplanations: ["<input type='text'> is single-line only", "Correct!", "<textbox> is not a valid HTML tag", "<multiline> is not a valid HTML tag"]
    },

    {
        id: 208, topic: "HTML Forms", subtopic: "Form Attributes", type: "mcq", difficulty: "easy",
        question: "Which attribute makes an input field MANDATORY (cannot submit without filling it)?",
        options: ["required", "necessary", "must", "validate"],
        answer: 0, explanation: "The 'required' attribute prevents form submission if the field is empty.",
        wrongExplanations: ["Correct!", "'necessary' is not a valid HTML attribute", "'must' is not a valid HTML attribute", "'validate' is not a valid HTML attribute"]
    },

    {
        id: 209, topic: "HTML Forms", subtopic: "Form Attributes", type: "mcq", difficulty: "easy",
        question: "Which attribute displays HINT TEXT inside an input field before the user types?",
        options: ["hint", "placeholder", "help", "text"],
        answer: 1, explanation: "The 'placeholder' attribute shows hint text inside the input field that disappears when the user starts typing.",
        wrongExplanations: ["'hint' is not a valid HTML attribute", "Correct!", "'help' is not a valid HTML attribute", "'text' is not a valid input attribute"]
    },

    {
        id: 210, topic: "HTML Forms", subtopic: "Form Attributes", type: "mcq", difficulty: "medium",
        question: "What is the difference between 'readonly' and 'disabled' attributes on an input?",
        options: ["They are identical", "readonly prevents modification but still submits the value; disabled prevents modification AND is not submitted", "disabled prevents modification but still submits; readonly is not submitted", "Neither submits the value"],
        answer: 1, explanation: "readonly: user can see but not edit, value IS submitted. disabled: user cannot interact at all, value is NOT submitted.",
        wrongExplanations: ["They have important differences", "Correct!", "This is backwards — readonly submits, disabled doesn't", "Both can submit depending on the attribute used"]
    },

    {
        id: 211, topic: "HTML Forms", subtopic: "Form Attributes", type: "mcq", difficulty: "easy",
        question: "Which attribute specifies the URL where form data will be SUBMITTED?",
        options: ["link", "href", "action", "submit"],
        answer: 2, explanation: "The 'action' attribute on <form> specifies the URL that processes the form data.",
        wrongExplanations: ["'link' is not a form attribute", "'href' is for <a> tags, not <form>", "Correct!", "'submit' is an input type, not a form URL attribute"]
    },

    {
        id: 212, topic: "HTML Forms", subtopic: "Input Types", type: "mcq", difficulty: "easy",
        question: "Which input type clears ALL form fields?",
        options: ["reset", "clear", "delete", "cancel"],
        answer: 0, explanation: "<input type='reset'> creates a button that resets all form fields to their default values.",
        wrongExplanations: ["Correct!", "'clear' is not a valid input type", "'delete' is not a valid input type", "'cancel' is not a valid input type"]
    },

    {
        id: 213, topic: "HTML Forms", subtopic: "Form Attributes", type: "mcq", difficulty: "medium",
        question: "What is the DEFAULT method used by an HTML form if the 'method' attribute is NOT specified?",
        options: ["POST", "GET", "PUT", "SEND"],
        answer: 1, explanation: "The default form method is GET if not specified, which appends data to the URL.",
        wrongExplanations: ["POST must be explicitly specified", "Correct!", "PUT is not a default form method", "SEND is not an HTTP method"]
    },

    {
        id: 214, topic: "HTML Forms", subtopic: "Form Tags Matching", type: "matching", difficulty: "easy",
        question: "Match each HTML tag with its correct description:",
        pairs: [
            { left: "<select>", right: "Defines a dropdown list" },
            { left: "<textarea>", right: "Defines a multi-line text input" },
            { left: "<button>", right: "Defines a form button" },
            { left: "<input>", right: "Defines a single-line text input" }
        ],
        answer: "select→dropdown, textarea→multi-line, button→form button, input→single-line",
        explanation: "These are the standard HTML form elements and their primary purposes."
    },

    // ============================================================
    // CSS
    // ============================================================
    {
        id: 301, topic: "CSS", subtopic: "Basics", type: "mcq", difficulty: "easy",
        question: "What are the THREE MAIN PARTS of CSS syntax?",
        options: ["Tags, attributes, IDs", "Selectors, properties, values", "Classes, functions, operators", "Elements, scripts, styles"],
        answer: 1, explanation: "CSS syntax: selector { property: value; } — e.g., p { color: red; }",
        wrongExplanations: ["Tags and attributes are HTML concepts", "Correct!", "Functions exist but aren't the 3 main parts", "'Scripts' is JavaScript, not CSS"]
    },

    {
        id: 302, topic: "CSS", subtopic: "Selectors", type: "mcq", difficulty: "easy",
        question: "Which tag is used to EMBED CSS in an HTML page?",
        options: ["<css>", "<script>", "<style>", "<!DOCTYPE html>"],
        answer: 2, explanation: "CSS is embedded in HTML using the <style> tag, usually placed in the <head> section.",
        wrongExplanations: ["<css> is not a valid HTML tag", "<script> is for JavaScript", "Correct!", "<!DOCTYPE> is the document type declaration"]
    },

    {
        id: 303, topic: "CSS", subtopic: "Linking CSS", type: "mcq", difficulty: "easy",
        question: "Which is the correct syntax to LINK an external style sheet?",
        options: ['<link rel="stylesheet" href="style.css" />', '<link rel="stylesheet" src="style.css" />', '<style rel="stylesheet" src="style.css" />', '<style rel="stylesheet" link="style.css" />'],
        answer: 0, explanation: "Use <link> in the <head> with rel='stylesheet' and href pointing to the CSS file.",
        wrongExplanations: ["Correct!", "<link> uses 'href' not 'src'", "<style> is for internal CSS, not linking external files", "<style> is for internal CSS, and 'link' is not a valid attribute"]
    },

    {
        id: 304, topic: "CSS", subtopic: "Box Model", type: "mcq", difficulty: "easy",
        question: "What does PADDING represent in CSS?",
        options: ["Space outside the border", "The border thickness", "Space between the content and the border", "The element size"],
        answer: 2, explanation: "Padding is the space between the element's content and its border. Margin is outside the border.",
        wrongExplanations: ["Space outside the border is margin", "Border thickness is set with border-width", "Correct!", "The element size is set with width/height"]
    },

    {
        id: 305, topic: "CSS", subtopic: "Selectors", type: "mcq", difficulty: "easy",
        question: "What does the UNIVERSAL SELECTOR (*) do?",
        options: ["Selects only elements with IDs", "Selects only body elements", "Selects every element on the webpage", "Selects classes only"],
        answer: 2, explanation: "The * selector targets ALL elements on the page.",
        wrongExplanations: ["# targets IDs", "body {} targets only the body", "Correct!", ". targets classes"]
    },

    {
        id: 306, topic: "CSS", subtopic: "Display", type: "mcq", difficulty: "easy",
        question: "What does 'display: flex' do?",
        options: ["Turns elements into block-level elements", "Hides all child elements", "Converts the parent element into a flexible container", "Makes all child elements inline"],
        answer: 2, explanation: "display: flex makes the parent a flex container, enabling powerful alignment and layout controls for its children.",
        wrongExplanations: ["Block display is 'display: block'", "'display: none' hides elements", "Correct!", "Inline display is 'display: inline'"]
    },

    {
        id: 307, topic: "CSS", subtopic: "Selectors", type: "mcq", difficulty: "medium",
        question: "Which CSS selector targets an element with a specific CLASS?",
        options: ["#example", "example", ".example", "*example"],
        answer: 2, explanation: "Class selectors use a dot (.) prefix: .example { } applies to all elements with class='example'.",
        wrongExplanations: ["# targets ID selectors", "No prefix is an element/tag selector", "Correct!", "* is the universal selector"]
    },

    {
        id: 308, topic: "CSS", subtopic: "Selectors", type: "mcq", difficulty: "easy",
        question: "Which CSS selector targets a specific ID?",
        options: [".myId", "#myId", "myId", "@myId"],
        answer: 1, explanation: "ID selectors use a hash (#) prefix: #myId { } applies to the element with id='myId'.",
        wrongExplanations: ["Dot is for classes", "Correct!", "No prefix is a tag/element selector", "@ is used for CSS at-rules like @media, @keyframes"]
    },

    {
        id: 309, topic: "CSS", subtopic: "Specificity", type: "mcq", difficulty: "medium",
        question: "Which CSS type has the HIGHEST specificity (overrides others)?",
        options: ["Class selectors", "ID selectors", "Inline styles", "Element selectors"],
        answer: 2, explanation: "Specificity order (highest to lowest): Inline styles > ID selectors > Class selectors > Element selectors",
        wrongExplanations: ["Classes are below inline and ID", "IDs are high but inline beats them", "Correct!", "Element selectors have the lowest specificity"]
    },

    {
        id: 310, topic: "CSS", subtopic: "Box Model", type: "mcq", difficulty: "easy",
        question: "What does the CSS Box Model represent?",
        options: ["Only the border of an element", "The way content is displayed inside tables", "The structure that surrounds every HTML element", "How animations behave"],
        answer: 2, explanation: "The CSS Box Model describes the rectangular box around every HTML element: content, padding, border, and margin.",
        wrongExplanations: ["The box model is more than just the border", "Tables have their own layout model", "Correct!", "Animations use @keyframes and animation properties"]
    },

    {
        id: 311, topic: "CSS", subtopic: "Flexbox", type: "mcq", difficulty: "medium",
        question: "Which Flexbox property controls the MAIN AXIS direction of items?",
        options: ["flex-direction", "justify-content", "align-items", "order"],
        answer: 0, explanation: "flex-direction sets the main axis: row (horizontal, default) or column (vertical), and their reverse variants.",
        wrongExplanations: ["Correct!", "justify-content aligns items along the main axis", "align-items aligns items on the cross axis", "order changes the visual order of individual items"]
    },

    {
        id: 312, topic: "CSS", subtopic: "Flexbox", type: "mcq", difficulty: "medium",
        question: "Which property aligns flex items along the CROSS AXIS?",
        options: ["align-items", "justify-content", "order", "flex-grow"],
        answer: 0, explanation: "align-items aligns flex items on the cross axis (perpendicular to main axis). Default value is stretch.",
        wrongExplanations: ["Correct!", "justify-content aligns on the MAIN axis", "order controls visual order, not alignment", "flex-grow controls how items grow to fill space"]
    },

    {
        id: 313, topic: "CSS", subtopic: "Transitions", type: "mcq", difficulty: "medium",
        question: "Which CSS property specifies WHICH properties will be affected by a transition?",
        options: ["transition-duration", "transition-delay", "transition-property", "transition-style"],
        answer: 2, explanation: "transition-property specifies which CSS property (or 'all') the transition effect should apply to.",
        wrongExplanations: ["transition-duration sets HOW LONG the transition takes", "transition-delay sets a waiting time before the transition starts", "Correct!", "'transition-style' is not a valid CSS property"]
    },

    {
        id: 314, topic: "CSS", subtopic: "Animations", type: "mcq", difficulty: "medium",
        question: "Which CSS at-rule is used to DEFINE animation keyframes?",
        options: ["To pause animations", "To define animation states at different percentages", "To control animation priority", "To specify animation direction"],
        answer: 1, explanation: "@keyframes defines animation states at specific points (0%, 50%, 100% or from/to). The animation-name must match.",
        wrongExplanations: ["animation-play-state pauses animations", "Correct!", "No CSS rule controls animation priority", "animation-direction controls direction"]
    },

    {
        id: 315, topic: "CSS", subtopic: "Transform", type: "mcq", difficulty: "medium",
        question: "What does 'transform: scale(2)' do?",
        options: ["Enlarges the element's width only", "Enlarges the element by 200% (twice as large)", "Shrinks the element", "Moves the element"],
        answer: 1, explanation: "scale(2) makes the element twice as large in both dimensions. scale(0.5) would halve the size.",
        wrongExplanations: ["scale() affects both dimensions", "Correct!", "scale(0.5) would shrink; scale(2) enlarges", "translate() moves elements"]
    },

    {
        id: 316, topic: "CSS", subtopic: "Transform", type: "mcq", difficulty: "medium",
        question: "Which transform function is used to ROTATE an element 45 degrees?",
        options: ["transform: rotateX(45deg)", "transform: turn(45deg)", "transform: rotate(45deg)", "transform: angle(45deg)"],
        answer: 2, explanation: "rotate(45deg) rotates an element clockwise by 45 degrees. rotateX() and rotateY() are for 3D rotation.",
        wrongExplanations: ["rotateX() rotates around the X axis (3D)", "turn() is not a valid transform function", "Correct!", "angle() is not a valid transform function"]
    },

    {
        id: 317, topic: "CSS", subtopic: "Grid", type: "mcq", difficulty: "medium",
        question: "Which CSS Grid property defines the WIDTH of columns?",
        options: ["grid-template-rows", "grid-template-columns", "grid-column", "grid-area"],
        answer: 1, explanation: "grid-template-columns defines the number and width of columns. E.g., grid-template-columns: 200px 1fr 200px",
        wrongExplanations: ["grid-template-rows defines ROW heights", "grid-template-columns is the answer", "Correct!", "grid-area is for placing items into named areas"]
    },

    {
        id: 318, topic: "CSS", subtopic: "Display", type: "mcq", difficulty: "medium",
        question: "Which display value keeps elements on the SAME LINE but also allows width and height to be set?",
        options: ["block", "inline", "inline-block", "flex"],
        answer: 2, explanation: "inline-block: stays inline like text BUT respects width/height. Pure inline ignores width/height.",
        wrongExplanations: ["block starts on a new line", "inline stays on same line but ignores width/height", "Correct!", "flex is for container layout, not inline placement"]
    },

    {
        id: 319, topic: "CSS", subtopic: "Colors", type: "mcq", difficulty: "easy",
        question: "Which of the following is a valid CSS HEX color format?",
        options: ["rgb(255, 0, 0)", "#FF0000", "hsl(0, 100%, 50%)", "rgba(255, 0, 0, 0.5)"],
        answer: 1, explanation: "HEX colors start with # followed by 6 (or 3) hexadecimal digits. #FF0000 = red.",
        wrongExplanations: ["This is RGB format", "Correct!", "This is HSL format", "This is RGBA format (with alpha/transparency)"]
    },

    {
        id: 320, topic: "CSS", subtopic: "Animations", type: "tf", difficulty: "easy",
        question: "animation-fill-mode: forwards means the element keeps its final keyframe style after the animation ends.",
        answer: true, explanation: "'forwards' retains the styles from the last keyframe after the animation completes."
    },

    {
        id: 321, topic: "CSS", subtopic: "CSS Fonts", type: "mcq", difficulty: "easy",
        question: "Which CSS property specifies the TYPEFACE of text?",
        options: ["font-weight", "font-style", "font-family", "font-variant"],
        answer: 2, explanation: "font-family specifies the typeface (e.g., Arial, Times New Roman, 'Google Font name').",
        wrongExplanations: ["font-weight controls boldness", "font-style controls italic/oblique", "Correct!", "font-variant controls small-caps"]
    },

    {
        id: 322, topic: "CSS", subtopic: "Float", type: "mcq", difficulty: "medium",
        question: "What does the CSS 'float' property do?",
        options: ["Centers an element", "Moves an element left or right and allows text to wrap around it", "Makes an element disappear", "Changes an element's background"],
        answer: 1, explanation: "float moves an element to the left or right of its container, allowing other content to flow around it.",
        wrongExplanations: ["margin: auto centers elements horizontally", "Correct!", "display: none hides elements", "background-color changes background"]
    },

    // ============================================================
    // JAVASCRIPT
    // ============================================================
    {
        id: 401, topic: "JavaScript", subtopic: "Basics", type: "mcq", difficulty: "easy",
        question: "What does JavaScript PRIMARILY add to web pages?",
        options: ["Style", "Behavior", "Structure", "Layout"],
        answer: 1, explanation: "JavaScript adds behavior and interactivity (responding to user events, manipulating DOM, AJAX calls, etc.).",
        wrongExplanations: ["CSS adds style", "Correct!", "HTML provides structure", "CSS handles layout"]
    },

    {
        id: 402, topic: "JavaScript", subtopic: "Variables", type: "mcq", difficulty: "easy",
        question: "Which of the following is the correct way to DECLARE a JavaScript variable?",
        options: ["let myVar = 5", "variable myVar = 5", "myVar : 5", "All of the above"],
        answer: 0, explanation: "In modern JavaScript, use 'let' or 'const' to declare variables. 'var' is older but also valid.",
        wrongExplanations: ["Correct!", "'variable' is not a JavaScript keyword", "Colon is not used for assignment (that's for objects)", "Only 'let myVar = 5' (and var/const) are valid"]
    },

    {
        id: 403, topic: "JavaScript", subtopic: "Operators", type: "mcq", difficulty: "medium",
        question: "What is the difference between '==' and '===' in JavaScript?",
        options: ["They are identical", "== checks value and type; === checks value only", "== checks value only (loose); === checks value AND type (strict)", "None of the above"],
        answer: 2, explanation: "== is loose equality (coerces types: '5' == 5 is true). === is strict equality (no coercion: '5' === 5 is false).",
        wrongExplanations: ["They have important differences", "This is reversed", "Correct!", "One of the above is correct"]
    },

    {
        id: 404, topic: "JavaScript", subtopic: "Variables", type: "mcq", difficulty: "medium",
        question: "What is the VALUE of 'typeof null' in JavaScript?",
        options: ['"null"', '"undefined"', '"object"', '"number"'],
        answer: 2, explanation: "typeof null returns 'object' — this is a well-known JavaScript quirk/bug that has been kept for historical compatibility.",
        wrongExplanations: ["null is not reported as 'null' by typeof", "undefined is a separate primitive type", "Correct — this is a famous JS bug!", "null is not a number"]
    },

    {
        id: 405, topic: "JavaScript", subtopic: "Code Output", type: "output", difficulty: "medium",
        question: "What is the OUTPUT of this code?\n\nlet score = 85;\nlet grade = score >= 90 ? 'A' :\n  score >= 70 ? 'C' :\n  score >= 80 ? 'B' :\n  score >= 60 ? 'D' : 'F';\nconsole.log('Grade:', grade);",
        answer: "Grade: C", explanation: "Ternary operators evaluate left to right. score=85: Is 85>=90? No. Is 85>=70? YES → returns 'C'. The check for B (>=80) never gets evaluated because >=70 matched first."
    },

    {
        id: 406, topic: "JavaScript", subtopic: "Scope", type: "output", difficulty: "hard",
        question: "What is the OUTPUT of this code?\n\nconst age = 10;\nconsole.log(age);\n{\n  const age = 2;\n  console.log(age);\n}\nconsole.log(age);",
        answer: "10\n2\n10", explanation: "'const' has block scope. Inside the block, a new 'age' is declared (=2) shadowing the outer one. Outside the block, the original age=10 is restored."
    },

    {
        id: 407, topic: "JavaScript", subtopic: "Scope", type: "output", difficulty: "hard",
        question: "What is the OUTPUT of this code?\n\n<script>\n  let x = 1;\n  if (true) {\n    let x = 2;\n  }\n  document.body.innerHTML = x;\n</script>",
        answer: "1", explanation: "'let' has block scope. The x=2 inside the if block is a different variable from the outer x=1. After the block ends, x is still 1."
    },

    {
        id: 408, topic: "JavaScript", subtopic: "Type Coercion", type: "output", difficulty: "medium",
        question: "What does this code output?\n\n<script>\n  document.body.innerHTML = 5 + '5' + 1;\n</script>",
        answer: "551", explanation: "Left to right: 5 + '5' = '55' (number + string = string concatenation). Then '55' + 1 = '551'. Type coercion converts numbers to strings when added with a string."
    },

    {
        id: 409, topic: "JavaScript", subtopic: "DOM", type: "mcq", difficulty: "easy",
        question: "Which JavaScript method selects an element BY ITS ID?",
        options: ["getElementById('id')", "selectElement('id')", "querySelector('#id')", "getElementByTag('id')"],
        answer: 0, explanation: "document.getElementById('id') returns the element with the matching id attribute. Note: no # prefix needed.",
        wrongExplanations: ["Correct!", "selectElement() does not exist", "querySelector('#id') also works but uses CSS selector syntax", "getElementsByTagName() selects by tag name, not ID"]
    },

    {
        id: 410, topic: "JavaScript", subtopic: "DOM", type: "mcq", difficulty: "easy",
        question: "What is the PURPOSE of the 'innerHTML' property in the DOM?",
        options: ["To get or set the HTML content of an element", "To hide an element", "To change the element's font size", "To access the element's parent"],
        answer: 0, explanation: "innerHTML gets or sets the HTML content (including tags) inside an element.",
        wrongExplanations: ["Correct!", "display: none hides elements", "style.fontSize changes font size", "parentElement or parentNode accesses the parent"]
    },

    {
        id: 411, topic: "JavaScript", subtopic: "Events", type: "mcq", difficulty: "easy",
        question: "What is an EVENT LISTENER in JavaScript?",
        options: ["A way to add audio to a web page", "A function that runs when an event occurs", "A type of error message", "A method to style an element"],
        answer: 1, explanation: "An event listener is a function attached to an element that executes when a specific event (click, keypress, etc.) occurs.",
        wrongExplanations: ["Audio uses <audio> elements", "Correct!", "Errors are handled with try/catch", "Style is set with element.style"],
    },

    {
        id: 412, topic: "JavaScript", subtopic: "Arrays", type: "mcq", difficulty: "easy",
        question: "How do you REMOVE AN ELEMENT from the END of an array?",
        options: ["pop()", "shift()", "push()", "unshift()"],
        answer: 0, explanation: "pop() removes and returns the last element of an array. push() adds to the end. shift() removes from the start. unshift() adds to the start.",
        wrongExplanations: ["Correct!", "shift() removes from the BEGINNING", "push() ADDS to the end", "unshift() ADDS to the beginning"]
    },

    {
        id: 413, topic: "JavaScript", subtopic: "Functions", type: "mcq", difficulty: "easy",
        question: "Which keyword is used to DECLARE A FUNCTION in JavaScript?",
        options: ["def", "function", "func", "fn"],
        answer: 1, explanation: "'function' is the keyword to declare a named function in JavaScript: function myFunc() { }",
        wrongExplanations: ["'def' is Python syntax", "Correct!", "'func' is Go/Swift syntax", "'fn' is Rust syntax"]
    },

    {
        id: 414, topic: "JavaScript", subtopic: "Loops", type: "mcq", difficulty: "easy",
        question: "What will this code output?\n\nfor (var i = 0; i < 5; i++) { console.log(i); }",
        options: ["0, 1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4, 5", "5, 4, 3, 2, 1, 0"],
        answer: 0, explanation: "The loop starts at i=0, runs while i<5, and increments i each time. So it logs 0, 1, 2, 3, 4 (stops before 5).",
        wrongExplanations: ["Correct!", "Would need i=1 to start and i<=5 to end at 5", "The loop stops BEFORE i=5", "Would need the loop to decrement"]
    },

    {
        id: 415, topic: "JavaScript", subtopic: "Variables", type: "mcq", difficulty: "medium",
        question: "JavaScript statements: let x = ''; and let y;\n\nWhat is true about x and y?",
        options: ["Both x and y are undefined", "x is undefined", "y is undefined", "None of the above"],
        answer: 2, explanation: "x = '' is an empty string (defined but empty). y has been declared but not assigned, so its value is 'undefined'.",
        wrongExplanations: ["x has a value (empty string), so x is NOT undefined", "x is an empty string, not undefined", "Correct!", "y is indeed undefined"]
    },

    {
        id: 416, topic: "JavaScript", subtopic: "OOP", type: "mcq", difficulty: "medium",
        question: "What is a CLOSURE in JavaScript?",
        options: ["A function that takes no arguments", "A variable only accessible within a function", "A function that has access to variables from its outer (enclosing) scope", "A built-in JavaScript class"],
        answer: 2, explanation: "A closure is a function that 'remembers' and can access variables from its outer scope even after the outer function has finished executing.",
        wrongExplanations: ["Closures can have arguments", "That just describes local variable scope", "Correct!", "Closures are not built-in classes"]
    },

    {
        id: 417, topic: "JavaScript", subtopic: "Events", type: "mcq", difficulty: "easy",
        question: "Which method PREVENTS the default behavior of an event (like form submission)?",
        options: ["event.preventDefault()", "event.stopPropagation()", "event.pause()", "event.stop()"],
        answer: 0, explanation: "event.preventDefault() stops the browser's default action (e.g., prevents form from submitting, prevents link navigation).",
        wrongExplanations: ["Correct!", "stopPropagation() stops event bubbling up the DOM tree", "pause() is not a valid event method", "stop() is not a valid event method"]
    },

    {
        id: 418, topic: "JavaScript", subtopic: "Error Handling", type: "mcq", difficulty: "medium",
        question: "What is the PURPOSE of the 'try...catch' statement in JavaScript?",
        options: ["To create a loop", "To handle exceptions and errors", "To define a function", "To declare a variable"],
        answer: 1, explanation: "try...catch handles runtime errors gracefully: code in 'try' is attempted; if an error occurs, code in 'catch' runs.",
        wrongExplanations: ["Loops use for/while/do-while", "Correct!", "Functions are declared with 'function'", "Variables are declared with let/const/var"]
    },

    {
        id: 419, topic: "JavaScript", subtopic: "Variables", type: "mcq", difficulty: "medium",
        question: "What is the difference between 'var' and 'let' in terms of SCOPE?",
        options: ["var has block scope; let has function scope", "var has function scope; let has block scope", "var is for declarations; let is for assignments", "var is a reserved keyword; let is a data type"],
        answer: 1, explanation: "var: function-scoped (or global if outside function), hoisted. let: block-scoped (limited to the {} block it's in), not hoisted to usable state.",
        wrongExplanations: ["This is backwards", "Correct!", "Both can declare and be assigned", "Both are keywords for variable declaration"]
    },

    {
        id: 420, topic: "JavaScript", subtopic: "OOP", type: "mcq", difficulty: "medium",
        question: "What is the purpose of the 'super' keyword in JavaScript classes?",
        options: ["To call the constructor of the parent class", "To create a new instance of an object", "To stop execution of a function", "To access the parent object's properties"],
        answer: 0, explanation: "super() calls the parent class constructor. It must be called in a child class constructor before using 'this'.",
        wrongExplanations: ["Correct!", "'new' creates instances", "'return' stops function execution", "'super.propertyName' accesses parent properties but 'super()' calls the constructor"]
    },

    // ============================================================
    // PHP
    // ============================================================
    {
        id: 501, topic: "PHP", subtopic: "Basics", type: "mcq", difficulty: "easy",
        question: "PHP is a ________ scripting language.",
        options: ["client-side", "server-side", "desktop", "mobile"],
        answer: 1, explanation: "PHP is a server-side scripting language. It runs on the web server, not in the user's browser.",
        wrongExplanations: ["JavaScript is client-side", "Correct!", "PHP is web-based, not a desktop application", "PHP is not specifically for mobile development"]
    },

    {
        id: 502, topic: "PHP", subtopic: "Basics", type: "mcq", difficulty: "easy",
        question: "PHP code is wrapped inside which tags?",
        options: ["<php>", "<script>", "<?php ... ?>", "[php]...[/php]"],
        answer: 2, explanation: "PHP code is enclosed in <?php ... ?> tags. The file extension is .php.",
        wrongExplanations: ["<php> is not a valid opening tag", "<script> is for JavaScript", "Correct!", "Square brackets are not PHP delimiters"]
    },

    {
        id: 503, topic: "PHP", subtopic: "Variables", type: "mcq", difficulty: "easy",
        question: "PHP variables must begin with:",
        options: ["@", "$", "#", "%"],
        answer: 1, explanation: "All PHP variables start with a dollar sign ($). Example: $name = 'John';",
        wrongExplanations: ["@ is used in PHP for error suppression, not variables", "Correct!", "# is used for comments in some languages", "% is a modulo operator in PHP"]
    },

    {
        id: 504, topic: "PHP", subtopic: "Output", type: "mcq", difficulty: "easy",
        question: "To PRINT TEXT in PHP, you use:",
        options: ["print()", "echo", "printf", "message()"],
        answer: 1, explanation: "'echo' outputs one or more strings. 'print' also works but is slower and can only output one string. Both are commonly used.",
        wrongExplanations: ["print() works too but echo is more common", "Correct!", "printf() formats output like C's printf", "message() is not a PHP function"]
    },

    {
        id: 505, topic: "PHP", subtopic: "XAMPP", type: "mcq", difficulty: "easy",
        question: "XAMPP contains which web server?",
        options: ["Nginx", "Apache", "IIS", "Tornado"],
        answer: 1, explanation: "XAMPP includes Apache (web server), MariaDB/MySQL (database), PHP, and Perl.",
        wrongExplanations: ["Nginx is a separate web server", "Correct!", "IIS is Microsoft's web server", "Tornado is a Python web server"]
    },

    {
        id: 506, topic: "PHP", subtopic: "Strings", type: "mcq", difficulty: "easy",
        question: "What does the strlen() function return?",
        options: ["Reverses a string", "Counts words", "Finds the string LENGTH", "Replaces text"],
        answer: 2, explanation: "strlen() returns the number of characters in a string. strlen('Hello world!') returns 12.",
        wrongExplanations: ["strrev() reverses strings", "str_word_count() counts words", "Correct!", "str_replace() replaces text"]
    },

    {
        id: 507, topic: "PHP", subtopic: "Strings", type: "mcq", difficulty: "easy",
        question: "What is the output of strrev('Hello world!')?",
        options: ["dlrow olleH!", "!dlrow olleH", "Hello world", "world hello"],
        answer: 1, explanation: "strrev() reverses the entire string character by character. 'Hello world!' reversed is '!dlrow olleH'.",
        wrongExplanations: ["Missing the exclamation mark reversal", "Correct!", "This would mean the function does nothing", "This is not a reversal"]
    },

    {
        id: 508, topic: "PHP", subtopic: "Strings", type: "mcq", difficulty: "medium",
        question: "What does str_replace('world', 'Dolly', 'Hello world!') return?",
        options: ["Hello world!", "Hello Dolly!", "Hello Dolly world!", "Dolly Hello!"],
        answer: 1, explanation: "str_replace(search, replace, subject) — replaces 'world' with 'Dolly' in 'Hello world!', resulting in 'Hello Dolly!'",
        wrongExplanations: ["No replacement happened", "Correct!", "The original 'world' is replaced, not kept", "The word order is preserved"]
    },

    {
        id: 509, topic: "PHP", subtopic: "Scope", type: "mcq", difficulty: "medium",
        question: "To use a GLOBAL variable inside a PHP function, you must:",
        options: ["include", "require", "static", "global"],
        answer: 3, explanation: "Use the 'global' keyword inside a function to access global variables: global $x, $y;",
        wrongExplanations: ["include includes files", "require includes required files", "static preserves variable value between function calls", "Correct!"]
    },

    {
        id: 510, topic: "PHP", subtopic: "Cookies", type: "mcq", difficulty: "medium",
        question: "Which PHP function is used to CREATE A COOKIE?",
        options: ["createcookie()", "addcookie()", "setcookie()", "makecookie()"],
        answer: 2, explanation: "setcookie(name, value, expire, path, domain, secure, httponly) creates a cookie.",
        wrongExplanations: ["createcookie() does not exist in PHP", "addcookie() does not exist in PHP", "Correct!", "makecookie() does not exist in PHP"]
    },

    {
        id: 511, topic: "PHP", subtopic: "Cookies", type: "mcq", difficulty: "easy",
        question: "Where are cookies STORED?",
        options: ["Server", "Database", "Client computer", "PHP session file"],
        answer: 2, explanation: "Cookies are stored on the CLIENT's computer (browser). Sessions are stored on the server.",
        wrongExplanations: ["Sessions are stored on the server, not cookies", "Database stores persistent application data", "Correct!", "Session files are stored on the server"]
    },

    {
        id: 512, topic: "PHP", subtopic: "Sessions", type: "mcq", difficulty: "easy",
        question: "Which function STARTS A SESSION in PHP?",
        options: ["start_session()", "begin_session()", "session_start()", "init_session()"],
        answer: 2, explanation: "session_start() must be called at the beginning of the PHP file (before any HTML output) to start or resume a session.",
        wrongExplanations: ["start_session() does not exist", "begin_session() does not exist", "Correct!", "init_session() does not exist"]
    },

    {
        id: 513, topic: "PHP", subtopic: "Sessions", type: "mcq", difficulty: "easy",
        question: "Where are SESSION VARIABLES stored?",
        options: ["Client computer", "Database", "Server temporary directory", "Browser cache"],
        answer: 2, explanation: "Session data is stored on the SERVER (in temporary files). Only the session ID is stored on the client (as a cookie).",
        wrongExplanations: ["Cookies store client-side data; sessions are server-side", "Database stores persistent data", "Correct!", "Browser cache stores web assets, not session data"]
    },

    {
        id: 514, topic: "PHP", subtopic: "Sessions", type: "mcq", difficulty: "easy",
        question: "Which PHP superglobal stores SESSION variables?",
        options: ["$_COOKIE", "$_SESSION", "$_SERVER", "$_GLOBAL"],
        answer: 1, explanation: "$_SESSION is the superglobal array that stores and accesses session variables.",
        wrongExplanations: ["$_COOKIE stores cookie data", "Correct!", "$_SERVER contains server environment info", "$_GLOBALS accesses all global variables (note the correct spelling)"]
    },

    {
        id: 515, topic: "PHP", subtopic: "Cookies", type: "mcq", difficulty: "easy",
        question: "Which PHP superglobal stores COOKIE data?",
        options: ["$_SESSION", "$_COOKIE", "$_FILES", "$_POST"],
        answer: 1, explanation: "$_COOKIE is the superglobal array that contains all cookie values sent by the client.",
        wrongExplanations: ["$_SESSION is for session data", "Correct!", "$_FILES handles file uploads", "$_POST contains POST form data"]
    },

    {
        id: 516, topic: "PHP", subtopic: "Arrays", type: "mcq", difficulty: "easy",
        question: "Which PHP function COUNTS the number of elements in an array?",
        options: ["length()", "sizeof()", "number()", "count()"],
        answer: 3, explanation: "count() returns the number of elements in an array. sizeof() is an alias for count().",
        wrongExplanations: ["length() is not a PHP array function", "sizeof() is actually an alias for count()", "number() is not a PHP function", "Correct!"]
    },

    {
        id: 517, topic: "PHP", subtopic: "Arrays", type: "mcq", difficulty: "medium",
        question: "Which PHP function sorts an ASSOCIATIVE ARRAY BY VALUE in ascending order?",
        options: ["arsort()", "sort()", "ksort()", "asort()"],
        answer: 3, explanation: "asort() sorts an associative array by value (ascending) while maintaining key-value pairs. sort() is for indexed arrays.",
        wrongExplanations: ["arsort() sorts by value in DESCENDING order", "sort() is for indexed arrays (loses key associations)", "ksort() sorts by KEY, not value", "Correct!"]
    },

    {
        id: 518, topic: "PHP", subtopic: "Constants", type: "mcq", difficulty: "easy",
        question: "Which PHP function is used to DEFINE A CONSTANT?",
        options: ["setConstant()", "const()", "define()", "newConstant()"],
        answer: 2, explanation: "define('CONSTANT_NAME', value) creates a constant. In class context, you can also use the const keyword.",
        wrongExplanations: ["setConstant() does not exist", "const() is not a function (const is a keyword in classes)", "Correct!", "newConstant() does not exist"]
    },

    {
        id: 519, topic: "PHP", subtopic: "OOP", type: "mcq", difficulty: "medium",
        question: "What is the output of this PHP code?\n\nclass Car {\n  function Car() { $this->model = 'VW'; }\n}\n$herbie = new Car();\necho $herbie->model;",
        options: ["Car", "model", "VW", "Error"],
        answer: 2, explanation: "The Car constructor sets $this->model = 'VW'. Creating a new Car() runs the constructor, and echo $herbie->model outputs 'VW'.",
        wrongExplanations: ["'Car' is the class name, not the output", "'model' is the property name, not the value", "Correct!", "This is valid PHP code that runs correctly"]
    },

    {
        id: 520, topic: "PHP", subtopic: "Basics", type: "tf", difficulty: "easy",
        question: "PHP variables are case-sensitive.",
        answer: true, explanation: "PHP variable names are case-sensitive: $age, $Age, and $AGE are three different variables."
    },

    {
        id: 521, topic: "PHP", subtopic: "Strings", type: "mcq", difficulty: "easy",
        question: "The OPERATOR used to JOIN (concatenate) strings in PHP is:",
        options: ["+", ".", "*", "&"],
        answer: 1, explanation: "PHP uses the dot (.) operator for string concatenation: 'Hello' . ' World' = 'Hello World'. Note: JavaScript uses +.",
        wrongExplanations: ["+ is for arithmetic addition in PHP (doesn't concatenate strings)", "Correct!", "* is multiplication", "& is bitwise AND"]
    },

    {
        id: 522, topic: "PHP", subtopic: "Cookies", type: "mcq", difficulty: "medium",
        question: "Cookies must be set BEFORE which HTML tag?",
        options: ["<body>", "<head>", "<html>", "<title>"],
        answer: 0, explanation: "Cookies (and all PHP headers) must be sent before any HTML output, including the <body> tag, because they are part of the HTTP header.",
        wrongExplanations: ["Correct! Must be before any output including <body>", "The <head> still comes after the doctype and <html>, so cookies must be before all HTML", "Must be before all HTML output", "Must be before all HTML output"]
    },

    // ============================================================
    // EXAM-STYLE TRACING & OUTPUT PREDICTION
    // ============================================================
    {
        id: 601, topic: "CSS", subtopic: "CSS Output", type: "output", difficulty: "medium",
        question: "What is the OUTPUT/RESULT of this CSS code?\n\n#hide { display: none; }\n\n<p id='hide'>Hidden</p>\n<p>Visible</p>",
        answer: "Only 'Visible' appears on the page. The 'Hidden' paragraph is completely removed from view.",
        explanation: "display: none hides the element completely and removes it from the document flow. The 'Hidden' text is not shown."
    },

    {
        id: 602, topic: "CSS", subtopic: "CSS Specificity", type: "output", difficulty: "medium",
        question: "What color will the text 'Hello' appear?\n\n.box { color: blue; }\n\n<p class='box' style='color: red;'>Hello</p>",
        answer: "Red", explanation: "Inline styles have the highest specificity and override class selectors. Even though .box sets blue, the inline style='color:red' wins."
    },

    {
        id: 603, topic: "HTML", subtopic: "CSS pseudo-elements", type: "output", difficulty: "hard",
        question: "Describe the visual output of this code:\n\nbody { display: flex; justify-content: center; align-items: center; }\np::before { content: ''; background: red; display: block; width: 10px; height: 10px; }\np::after { content: ''; background: green; display: block; width: 10px; height: 10px; }\n\n<p>Here is some generic content</p>",
        answer: "A centered paragraph with a small red square before the text and a small green square after it.",
        explanation: "::before and ::after pseudo-elements insert content before and after the element's content. With display:block they appear as colored squares above and below the text."
    },

    // ============================================================
    // EXAM-STYLE CODING QUESTIONS
    // ============================================================
    {
        id: 701, topic: "JavaScript", subtopic: "DOM Events", type: "code", difficulty: "medium",
        question: "Complete this JavaScript code to CHANGE the HTML content of <p id='demo'>Hi.</p> to 'Hello World!'",
        answer: "document.getElementById('demo').innerHTML = 'Hello World!';",
        explanation: "getElementById('demo') selects the element, and setting innerHTML changes its HTML content."
    },

    {
        id: 702, topic: "CSS", subtopic: "ID Selector", type: "code", difficulty: "easy",
        question: "Create a CSS ID selector named 'special' that sets the text color to blue:",
        answer: "#special {\n  color: blue;\n}",
        explanation: "ID selectors use # prefix. The property is 'color' with value 'blue'."
    },

    {
        id: 703, topic: "JavaScript", subtopic: "Counter", type: "code", difficulty: "medium",
        question: "Write HTML/JavaScript code that counts button clicks and displays the count. When clicked, it shows 'You have clicked the button X times.'",
        answer: '<button onclick="countClicks()">Click me!</button>\n<p id="result">You have clicked the button 0 times.</p>\n<script>\n  let count = 0;\n  function countClicks() {\n    count++;\n    document.getElementById("result").innerHTML = "You have clicked the button " + count + " times.";\n  }\n</script>',
        explanation: "A counter variable tracks clicks. Each button click increments the counter and updates the displayed text via innerHTML."
    },

    {
        id: 704, topic: "HTML", subtopic: "Smile/Sad Button", type: "code", difficulty: "medium",
        question: "Write HTML/JavaScript code with two buttons: 'Smile' shows a smile emoji, 'Sad' shows a sad emoji when clicked.",
        answer: '<img id="face" src="" alt="face" width="100">\n<button onclick="document.getElementById(\'face\').src=\'smile.gif\'">Smile</button>\n<button onclick="document.getElementById(\'face\').src=\'sad.gif\'">Sad</button>',
        explanation: "Each button uses onclick to change the src attribute of an image element via getElementById and .src property."
    },

    // ============================================================
    // TRUE/FALSE COMPILATION
    // ============================================================
    {
        id: 801, topic: "PHP", subtopic: "PHP Basics", type: "tf", difficulty: "easy",
        question: "PHP runs inside the user's browser.",
        answer: false, explanation: "PHP runs on the SERVER, not the browser. The browser receives the HTML output generated by PHP."
    },

    {
        id: 802, topic: "PHP", subtopic: "PHP Basics", type: "tf",
        difficulty: "easy", question: "About 70% of known websites use PHP.",
        answer: true, explanation: "PHP powers approximately 70% of websites, including WordPress, Facebook (originally), and many others."
    },

    {
        id: 803, topic: "PHP", subtopic: "Sessions", type: "tf", difficulty: "easy",
        question: "Sessions are safer than cookies because session data is stored on the server.",
        answer: true, explanation: "Server-side session storage is more secure because the client cannot directly modify the data."
    },

    {
        id: 804, topic: "PHP", subtopic: "Cookies", type: "tf", difficulty: "easy",
        question: "Cookies can store large amounts of data.",
        answer: false, explanation: "Cookies are limited by browser settings (typically 4KB per cookie). For large data, use server-side sessions or databases."
    },

    {
        id: 805, topic: "CSS", subtopic: "Box Model", type: "tf", difficulty: "easy",
        question: "Padding is the space between the element's content and its border.",
        answer: true, explanation: "Padding sits between content and border. Margin is outside the border."
    },

    {
        id: 806, topic: "CSS", subtopic: "Flexbox", type: "tf", difficulty: "medium",
        question: "flex-direction: row arranges items vertically.",
        answer: false, explanation: "flex-direction: row (the default) arranges items HORIZONTALLY. Use 'column' for vertical arrangement."
    },

    {
        id: 807, topic: "JavaScript", subtopic: "Variables", type: "tf", difficulty: "medium",
        question: "If a variable is declared using the 'let' keyword, it can never change its data type.",
        answer: false, explanation: "JavaScript is dynamically typed. A let variable can be reassigned to any type: let x = 5; x = 'hello'; is valid."
    },

    {
        id: 808, topic: "JavaScript", subtopic: "DOM", type: "tf", difficulty: "easy",
        question: "alert(8) and window.alert(8) produce the same result.",
        answer: true, explanation: "In browser context, 'alert' is a shorthand for 'window.alert'. Both display a popup dialog."
    },

    {
        id: 809, topic: "CSS", subtopic: "Animations", type: "tf", difficulty: "medium",
        question: "animation-duration must be written in seconds only.",
        answer: false, explanation: "animation-duration accepts both seconds (s) and milliseconds (ms). E.g., animation-duration: 500ms; is valid."
    },

    {
        id: 810, topic: "PHP", subtopic: "Variables", type: "tf", difficulty: "easy",
        question: "PHP variable names cannot start with a number.",
        answer: true, explanation: "PHP variable names must start with $ followed by a letter or underscore, not a number. $1name is invalid."
    },

    {
        id: 811, topic: "CSS", subtopic: "Transform", type: "tf", difficulty: "medium",
        question: "The transform property can only apply one transformation at a time.",
        answer: false, explanation: "Multiple transformations can be combined: transform: rotate(45deg) scale(2) translateX(50px); — all in one declaration."
    },

    {
        id: 812, topic: "PHP", subtopic: "Functions", type: "tf", difficulty: "easy",
        question: "PHP function names are case-sensitive.",
        answer: false, explanation: "PHP function names are case-INSENSITIVE. myFunction() and MYFUNCTION() call the same function. Variable names are case-sensitive."
    },

    // ============================================================
    // MATCHING QUESTIONS (2025/2026 exam style)
    // ============================================================
    {
        id: 901, topic: "HTML Forms", subtopic: "Attributes Matching", type: "matching", difficulty: "medium",
        question: "Match each HTML attribute with the element it belongs to:",
        pairs: [
            { left: "type", "right": "<input>" },
            { left: "src", "right": "<img>" },
            { left: "href", "right": "<a>" },
            { left: "alt", "right": "<img>" }
        ],
        answer: "type→<input>, src→<img>, href→<a>, alt→<img>",
        explanation: "Each HTML element has specific attributes: <input> uses 'type', <img> uses 'src' and 'alt', <a> uses 'href'."
    },

    {
        id: 902, topic: "PHP", subtopic: "PHP Terms Matching", type: "matching", difficulty: "medium",
        question: "Match each PHP/Web term with its correct description:",
        pairs: [
            { left: "Apache", right: "The main web server in XAMPP" },
            { left: "htdocs", right: "Folder where website files are stored in XAMPP" },
            { left: "index.php", right: "Default homepage file in a website" },
            { left: "$_SESSION", right: "Superglobal for session variables" }
        ],
        answer: "Apache→web server, htdocs→folder, index.php→homepage, $_SESSION→superglobal",
        explanation: "XAMPP components: Apache handles web serving, htdocs stores files, index.php is the default page."
    }

];

// Question bank statistics
const TOPICS = [...new Set(QUESTIONS.map(q => q.topic))];
const SUBTOPICS = [...new Set(QUESTIONS.map(q => q.subtopic))];
const DIFFICULTIES = ['easy', 'medium', 'hard'];
const TYPES = ['mcq', 'tf', 'fill', 'output', 'code', 'matching'];