# searchusers

    Purpose:
        Showcase Understanding of HTML, CSS, JavaScript
        Showcase Code-structure and organisation, Simplicity and Readability
        Attention to details

    Exercise:
        Create a user list JSON data object
        Take the user input from the search form and perform a search on the user list
        Display the valid search results in the results section
        Apply filters on the user list
        
    Technology:
        Use Angular 1.x or similar Modern JS Framework
        In case of Angular, use the following features:
            Router
            A Controller
            A Directive
            A Service
            A Filter
            Using an external library (eg: moment.js or similar)
            A proper build system
            
    Solution:

    Workflow and Build Tools:
        Package Manager: npm
        Dependency Manager: Bower
        Frontend Task Runner: Grunt (+ additional plugins)
        Scaffloding tool: Yeoman (used sparingly)
        Linting tool: JSHint
        CSS Preprocessor: less

    JS Frameworks:
        angular 1.6.9 (Primary)
        ngRoute (routing)
        bootstrap (Responsiveness)
        other: jQuery, moment.js etc

    Further improvements:
        extend MainCtrl for additional filtering (flags are already present in json)
        use Less variables, mixins and avoid redundant values in .less files
        use fonts and/or css-sprites for icons/images
        make the concatination, minification and obfuscation work
        write unit-tests for the services, filters (karma/jasmine etc)
        Host on github/jsfiddle
