//This page creates the template for all other pages
const React = require('react')
function Def (html) {
    return (
        <html>
        <head>
            <title>Title</title>
            {/* Bootstrap */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
            {/* Style */}
            <link rel="stylesheet" href="/css/style.css" />
        </head>
        <body>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/places">Dogs</a>
                    </li>
                    <li>
                        <a href="/places/new">New Pup</a>
                    </li>
                </ul>
            </nav>
            {html.children}
        </body>
        </html>
    )
}
 
module.exports = Def