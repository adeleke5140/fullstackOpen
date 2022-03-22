title Posting a new note

note over Browser:
user fills in the form
user clicks on the add note button
end note

Browser->Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
Server->Browser: Status code 302

note over Browser:
browser initiates a url redirect
makes 4 additional request
end note

Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
Server->Browser: HTML-Code
Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/new_note
Server->Browser: main.css
Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/new_note
Server->Browser: main.js
Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server-->Browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]
Browser->Server: HTTP GET https://studies.cs.helsinki.fi/favicon.ico
Server-->Browser: favicon.ico

note over Browser:
browser executes the event handler
that renders notes plus new note to the page
end note

