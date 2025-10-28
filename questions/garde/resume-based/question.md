# Resume-Based / Experience Questions

## Terralogic (Jan–June 2025)

> React | Redux Toolkit | RTK Query | TypeScript | REST APIs | Performance Optimization

### Possible questions

- #### Tell me about the project you worked on at Terralogic

It was a client project of Fujitsu network company, project was a internal dashboard
where user could see the health of the router and like between the router
and also display possible geo-location of where breakage might have happened

- #### What were your main contributions?

i have worked on integration of APIs, fixing minor functional bugs
and fixing some css.

- #### How did you ensure your React components were reusable and modular?

  i break bigger components into smaller components, try to use props instead
  redux where it is possible and try to share common components where it makes sense

- #### How did you handle API integration? Why did you choose RTK Query over regular Redux Thunks or useEffect calls?

  it was already being used and it handles caching and auto-refetching
  but main reason was it is very convenient to use i can use
  createAPi and define baseURl and endpoints in one place

- #### How did you optimize front-end performance? (expect to explain techniques like lazy loading, memoization, code splitting, etc.)

  i have broken components in smaller components, passed functions to
  child components with useCallback(), optimized deps in useEffect or removed useEffect
  i know about lazy() but i have not used it , rtk query also helps in avoid
  network call with caching but it has also not been issues for me so far

- #### How did you ensure accessibility and responsiveness?

  i manually check web page at different viewpoints in browser
  and add media queries to handle css to handle responsiveness
  for accessibility i follow W3C guidelines,use semantic and use screen reader
  like NVDA to check what is being read, although i try to do this at last
  and i do not like this because of robotic voice giving me headache
  chrome devtools are also gives info about accessibility it shows what
  aria label of elements are and color contrast of elements

- #### Can you explain the folder structure or architecture you followed in your React project?

  i create folder and files route and features wise
