# Project Discussion

FWIW I made a couple of quick typing and react error fixes on main before the first PR

Commits:

- 3010f9f2db9f2bb7a04066169a169ec50ab116f2
- eb16f4ed5fa7d0790b5ae3f8d9d2ed90b7c834f3

# Thoughts

Frontend

- As a fullstack engineer, I lean backend a bit, so I leaned on the AI for all the CSS
- My goal here is to get the styling for the takehome search page to "okay for a 2 hour prototype"
- After the prototype phase, I like to consult my frontend wizard teammates before styling too heavily
- This strategy helps me implement quickly while also following best practices

Backend

- Having said that, I did spend enough time getting the frontend to "Okay" that the advocates API still does select \*
- Most important next step is to add search query parameters to the advocates route
- Followed by database indexes on the most commonly searched fields

Search

- Right now, we search on every field, but I think the most important search field is Specialties
- Users (probably?) don't know the name of the doctor they want
- But the probably do know the specialty (and the target location)

## Next steps

Frontend:

- Add a search wizard (like in Solace production!) to narrow down to advocates in the user's state
- This will be better than a text search on the current location field
- Add paging for search results, since there are 100k+ advocates
- If we want to still search as the user is typing, we need to debounce the search API calls
- Alternatively, since we are paging the search results, we can have the user click to search or hit enter
- Lots of little things, e.g. formatting the phone number
- Light frontend unit testing on the Search UX components

Backend Search

- We need to add query parameters to the search API call - start with "searchTerm"
- I would like to add database indexes on the fields we will be searching on most frequently
- Name and specialties for sure.
- We can do a full text search on specialities (since it is JSONB already)
- We should implement paging with a standard limit + offset pager
- Add in unit tests as we continue to add features

Architecture

- Long term, we can consider using an indexed search database like Elasticsearch
- I think searching on indexed fields in postgres will continue to be fast for quite a while
- But, Elasticsearch is especially useful when searches get complicated
- e.g. a combination of full text and location search (possibly with GeoIP data for the user, not just by state)
- That's a good long term vision as we continue to add features
- It's good to keep options in mind for when "lots of parameters DB query" search becomes unwieldy
- I worked extensively on Search at Rover, and I have lots of thoughts here
- Rover search had probably upwards of 75 parameters!

Curious

- I liked using Drizzle for the project, and I'm interested to see a well thought out Drizzle setup
- I also want to think through a bit more how typing works in the project, and how to make it consistent
