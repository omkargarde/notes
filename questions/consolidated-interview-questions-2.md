# Frontend & JavaScript Interview Questions (Consolidated)

## General & Behavioral

- What projects have you worked on?
- What challenges did you face?
- How much logic did you work on?
- How do you handle high-pressure situations?
- How do you handle conflicts or disagreements?
- Explain your folder structure.
- Do you follow any component design pattern?

## Testing

- How do you test?
- How do you test responsive design?
- How do you test accessibility?
- What are unit tests, integration tests, and end-to-end tests?

## JavaScript – Core

- Explain `map`, `filter`, and `reduce`.
- What are callbacks? Give examples (non-fetch).
- What are promises? Give examples.
- Difference between async/await and promises.
- What is currying?
- Difference between debounce and throttle.
- What is hoisting?
- Difference between `var`, `let`, and `const`.
- What are macro-tasks and micro-tasks?
- What is the Event Loop?
- Explain this output:

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```

- Return count of letters in a string.
- Replace `"some things some"` → `"s things s"`.
- Difference between shallow copy and deep copy.
- How to do deep copy in JavaScript.
- What is prototype?
- What are higher-order functions?

## JavaScript – ES6+

- What are ES6 features?
- Arrow functions vs normal functions.
- Spread operator and destructuring.
- Template literals.
- Optional chaining.

## React – Basics

- What are React hooks?
- Difference between `useState` and `useEffect`.
- When would you use `useReducer` over `useState`?
- Difference between `useEffect` and `useLayoutEffect`.
- Difference between `useRef` and `useState`.
- What are rules of React?
- What is React Fiber?
- What is the Virtual DOM and why is it needed?
- What are Pure Components / memoized components?
- What are Higher Order Components (HOC)?
- What are render props?

## React – Advanced & Performance

- How does React batch state updates?
- Explain stale props & tearing problem.
- Why does Context cause performance issues?
- Concurrent Rendering & `useTransition`.
- Render phase vs commit phase.
- What is `useSyncExternalStore` and why does it exist?
- Will async errors be caught in Error Boundaries?
- How to avoid Suspense waterfalls?
- Difference between `useMemo` and memoization.
- When do you use `useMemo`? Use cases.
- When do you use `useCallback`? Use cases.
- How do you find performance issues in React?
- How do you identify which component is re-rendering?
- How do you fix unnecessary re-renders?
- How do you optimize a React application?
- How do you optimize without web frameworks?

## Redux & State Management

- What is Redux?
- What are components of Redux?
- What are ways of writing Redux?
- Difference between Redux action and action creator.
- Difference between reducer and selector.
- Redux Thunk vs Redux Saga.
- When do you use Redux? Drawbacks?
- Architecture behind Redux / Flux.
- Why Redux has reducers and selectors?

## TypeScript

- What are generics?
- What are intersection types?
- What are enums? (both approaches)
- Template literal types vs template literals.

## CSS & HTML

- Difference between Flexbox and Grid.
- What is `calc()` in CSS?
- Difference between `display: none` and `display: block`.
- What are CSS selectors?
- What is the CSS box model?
- How do you make a page responsive?
- Difference between `id` and `class`.
- How do you display a list of data in HTML?

## Accessibility

- What are ARIA attributes?
- What is `aria-label`?
- What is `sr-only`?
- How do you test accessibility?

## Angular

- What are standalone components?
- What is Zone.js?
- Change detection strategies in Angular.
- What are route guards?
- What are auth guards?
- What are Angular modules?
- What are components in Angular?
- What are pipes in Angular?
- What is data binding in Angular?
- Difference between pure and impure pipes.
- How do you optimize in Angular?

## Authentication & Security

- How do you implement authentication?
- How do you manage API integration?
- Frontend security best practices.
- What is an HTTP interceptor?

## Web Performance

- What are Web Vitals?
- INP, LCP, CLS explained.

## Node.js & Misc

- Node.js Event Loop.
- What is REPL?
- What is Reactor pattern?

## Resume-Based / Experience Questions (STAR Answers)

### Tell me about the project you worked on at Terralogic

**Situation:** Worked on an internal dashboard project for
Fujitsu’s network team.  
**Task:** Build a UI to monitor router health, network links, and possible
geo-locations of failures.  
**Action:** Integrated APIs, fixed functional bugs, and improved UI stability
and styling.  
**Result:** Delivered a reliable monitoring dashboard used by internal teams for
faster issue detection.

**1-line crisp answer:**

- _High-level summary you can say in 10–15 seconds._

**Deep dive follow-ups interviewers may ask:**

- Why did you choose this approach?
- What alternatives did you consider?
- What trade-offs were involved?
- What would you improve if you did this again?

**Expected answer hints:**

- Client + domain context
- Business problem solved
- Your role vs team role
- Impact on users

---

### What were your main contributions?

**Situation:** Joined an ongoing React dashboard project.  
**Task:** Stabilize features and complete pending frontend work.  
**Action:** Integrated REST APIs, resolved functional bugs, and fixed
CSS issues affecting usability.  
**Result:** Improved feature reliability and reduced UI-related issues before release.

**1-line crisp answer:**

- _High-level summary you can say in 10–15 seconds._

**Deep dive follow-ups interviewers may ask:**

- Why did you choose this approach?
- What alternatives did you consider?
- What trade-offs were involved?
- What would you improve if you did this again?

**Expected answer hints:**

- Be specific (APIs, bugs, UI)
- Avoid vague “worked on frontend” answers
- Show ownership

---

### How did you ensure your React components were reusable and modular?

**Situation:** Application had growing UI complexity.  
**Task:** Prevent large, tightly-coupled components.  
**Action:** Broke components into smaller units, used props effectively, avoided
unnecessary Redux usage, and shared common components.  
**Result:** Easier maintenance, better readability, and reusable UI pieces.

**1-line crisp answer:**

- _High-level summary you can say in 10–15 seconds._

**Deep dive follow-ups interviewers may ask:**

- Why did you choose this approach?
- What alternatives did you consider?
- What trade-offs were involved?
- What would you improve if you did this again?

**Expected answer hints:**

- Component splitting
- Props vs global state
- Reusability trade-offs

---

### How did you handle API integration? Why RTK Query?

**Situation:** Application required frequent API calls with caching.  
**Task:** Implement a scalable and clean API layer.  
**Action:** Used RTK Query since it was already adopted; centralized API definitions
using `createApi`, leveraged caching and auto-refetching.  
**Result:** Less boilerplate, fewer redundant network calls, cleaner components.

**1-line crisp answer:**

- _High-level summary you can say in 10–15 seconds._

**Deep dive follow-ups interviewers may ask:**

- Why did you choose this approach?
- What alternatives did you consider?
- What trade-offs were involved?
- What would you improve if you did this again?

**Expected answer hints:**

- Centralized API logic
- Caching & refetching
- DX improvements

---

### How did you optimize front-end performance?

**Situation:** Risk of unnecessary re-renders as app grew.  
**Task:** Keep UI performant without premature optimization.  
**Action:** Broke components down, used `useCallback` for function props,
optimized `useEffect` dependencies, relied on RTK Query caching.  
**Result:** Stable performance with minimal re-render issues.

**1-line crisp answer:**

- _High-level summary you can say in 10–15 seconds._

**Deep dive follow-ups interviewers may ask:**

- Why did you choose this approach?
- What alternatives did you consider?
- What trade-offs were involved?
- What would you improve if you did this again?

**Expected answer hints:**

- Component-level optimizations
- Hooks usage
- Avoid overclaiming

---

### How did you ensure accessibility and responsiveness?

**Situation:** Accessibility was required late in development.  
**Task:** Make UI usable across devices and assistive tech.  
**Action:** Tested layouts at multiple breakpoints, used media queries, followed
W3C guidelines, checked ARIA labels and contrast in DevTools, tested with
NVDA screen reader.  
**Result:** Improved accessibility compliance and responsive UX.

**1-line crisp answer:**

- _High-level summary you can say in 10–15 seconds._

**Deep dive follow-ups interviewers may ask:**

- Why did you choose this approach?
- What alternatives did you consider?
- What trade-offs were involved?
- What would you improve if you did this again?

**Expected answer hints:**

- Practical testing methods
- Tools used (NVDA, DevTools)
- Semantic HTML

---

### Explain the folder structure or architecture you followed

**Situation:** Needed a scalable React codebase.  
**Task:** Organize code for long-term maintainability.  
**Action:** Used route-based structure, feature folders, shared components, Redux
store folder, utilities, and custom hooks.  
**Result:** Clear separation of concerns and easier onboarding.

**1-line crisp answer:**

- _High-level summary you can say in 10–15 seconds._

**Deep dive follow-ups interviewers may ask:**

- Why did you choose this approach?
- What alternatives did you consider?
- What trade-offs were involved?
- What would you improve if you did this again?

**Expected answer hints:**

- Route vs feature split
- Shared vs local components
- Scalability mindset

---

### What challenges did you face integrating REST APIs?

**Situation:** APIs had async states and evolving contracts.  
**Task:** Handle loading, error, and refetch states cleanly.  
**Action:** Used RTK Query / TanStack Query to manage caching, loading, and
error handling automatically.  
**Result:** Reduced manual state handling and cleaner components.

**1-line crisp answer:**

- _High-level summary you can say in 10–15 seconds._

**Deep dive follow-ups interviewers may ask:**

- Why did you choose this approach?
- What alternatives did you consider?
- What trade-offs were involved?
- What would you improve if you did this again?

**Expected answer hints:**

- Async complexity
- Error/loading handling
- Tooling choice

---

### How did you collaborate with backend teams and designers?

**Situation:** APIs and UI requirements evolved during sprints.  
**Task:** Align frontend with backend contracts.  
**Action:** Coordinated via Swagger docs, discussed request/response formats,
raised feasibility concerns early, communicated changes clearly.  
**Result:** Fewer integration issues and smoother sprint delivery.

**1-line crisp answer:**

- _High-level summary you can say in 10–15 seconds._

**Deep dive follow-ups interviewers may ask:**

- Why did you choose this approach?
- What alternatives did you consider?
- What trade-offs were involved?
- What would you improve if you did this again?

**Expected answer hints:**

- Communication clarity
- Cross-team collaboration
- Proactive problem solving

## Node.js – Core Concepts

- How does the Node.js event loop work, and how is it different from the browser?
- Difference between `process.nextTick`, `setImmediate`, and `setTimeout`.
- What are worker threads, and when would you use them?
- How does Node.js handle asynchronous operations internally?
- How does garbage collection work in Node.js?
- How do streams work, and when would you use them?
- What is the cluster module and how does it help with scaling?

## Node.js – Performance & Optimization

- How would you detect and handle memory leaks in Node.js?
- How do you optimize a high-throughput Node.js API?
- Trade-offs between child processes, worker threads, and clustering.
- How do you monitor and profile a Node.js app in production?
- How do you prevent blocking the event loop?

## Node.js – Security

- How do you prevent prototype pollution?
- What security risks does `eval()` introduce?
- How do you securely handle JWT authentication?
- How does CSRF protection work? Is it needed for REST APIs?
- Best practices for handling secrets and environment variables.

## Node.js – Coding Challenges

- Implement a custom Promise.
- Limit concurrency of async tasks.
- Build a rate-limiter middleware in Express.
- Implement an LRU cache.
- Create an async task queue with concurrency limits.
