# Resume-Based / Experience Questions

## Possible questions

- ### Tell me about the project you worked on at Terralogic

It was a client project of Fujitsu network company, project was a internal dashboard
where user could see the health of the router and like between the router
and also display possible geo-location of where breakage might have happened

- ### What were your main contributions?

i have worked on integration of APIs, fixing minor functional bugs
and fixing some css.

- ### How did you ensure your React components were reusable and modular?

  i break bigger components into smaller components, try to use props instead
  redux where it is possible and try to share common components where it makes sense

- ### How did you handle API integration? Why did you choose RTK Query over regular Redux Thunks or useEffect calls?

  it was already being used and it handles caching and auto-refetching
  but main reason was it is very convenient to use i can use
  createAPi and define baseURl and endpoints in one place

- ### How did you optimize front-end performance? (expect to explain techniques like lazy loading, memoization, code splitting, etc.)

  i have broken components in smaller components, passed functions to
  child components with useCallback(), optimized deps in useEffect or removed useEffect

  i know about lazy() but i have not used it , rtk query also helps in avoid
  network call with caching but it has also not been issues for me so far

- ### How did you ensure accessibility and responsiveness?

  i manually check web page at different viewpoints in browser
  and add media queries to handle css to handle responsiveness
  for accessibility i follow W3C guidelines,use semantic

  use screen reader like NVDA to check what is being read, although
  i try to do this at last and i do not like this because of robotic voice giving
  me headache

  chrome devtools are also gives info about accessibility it shows what
  aria label of elements are and color contrast of elements

- ### Can you explain the folder structure or architecture you followed in your React project?

  i create folder and files route and features wise.
  route will have the as much component code as possible which will be
  divided into components.

  features has component of either route.

  shared component has component which has to be shared across multiple component.

  store has redux slices

  utils has reusable functions
  and hooks folder contains custom hooks

- ### What challenges did you face integrating REST APIs, and how did you resolve them?

  i use RTK query or tanstack query for this as they will handle caching,refetching
  and loading and error state, so, i do not have to setup all this myself

- ### How did you collaborate with the backend team and designers?

  i talked with backend devs about how the response or request should be ,
  api were shared with swagger and if any changes were required i was asking them
  and explain why it need to be certain way

  i have not needed to interact with designers a lot , it has been mostly about
  asking if something was changed mid sprint and Why
  or asking something has to be changed because it was not feasible
