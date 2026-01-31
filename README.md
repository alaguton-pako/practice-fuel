# React + TypeScript + Vite + shadcn/ui
# kindly find below aswers to the required questions

1. Component & Styling Decisions

**** Structure:

- Single PracticeCard component for reusability : I defined a comprehenive reusable component that encompass all the required metrics to be displayed as defined in the assessmet requirement. This is efficient for scalability as the component is easily imported and data is passed as props while mapping them

- Created a file to store my types, ie type definnation for the status and for the practice summary type, this is good for scalability as both data can be easily managed from this file and ensure repeating and redifining types across the code base

- Created a utils.ts for my helper functions (for separation of concerns)


**** Styling Approach:

- Tailwind for rapid, consistent styling without CSS files,

- Shadcn for accessible, pre-styled base components. I also use shadcn because big company uses it and it component are easy to modiify as need arises using tailwind css.


**** Visual Consistency & Responsiveness:

- Grid with breakpoints (grid-cols-1 md:grid-cols-2 xl:grid-cols-3) // I made it 2 on tablet and large screen so the card have enough space to display it content if we use grid-col-3 on large screen it makes the card content look a little clumsy

- Mobile-first design approach for scalability




2. Scaling & Real-World Use

**** Integration into larger dashboard: I will apply the following approach in a real world scalng approach

- Export PracticeCard as standalone component

- Make data fetching external (props only)

- Add loading/error states to conditonally render the card and it information from an endpoint

With one extra day I will add the following feature to better improve the implemetation:

- Accessibility: ARIA labels, keyboard navigation, screen reader support

- Animations: Framer Motion for card enter/exit transitions

- Theming: Dark mode support via CSS variables because I am big fan of the dark mode design 



3. Time Management (2 hr 15 minutes total)

0-25m: Understanding the fuctional requiremet of the projet / application
25-40m: Setup (Vite + TS + Tailwind + Shadcn) configuration
40-60m: Data modeling & component structure
<!-- end of the first hour -->
0-30m: Core card layout & key metrics
30-55m: Trend visualization & styling polish
55-60m: Responsive testing & bug fixes
<!-- end of second hour -->
0-15m: Documentation & Q&A responses

Priorities:

Functional requirements first

System Architecture definiton (Folder structure defination, Data types defination, Component defination)

Responsive layout early

Polish last (colors, spacing, hover states)



Note: To run the application kindly clone the repo or extract the zip file and open on your preffered editor tool, change directory to practice-summary-asssesment by running cd practice-summary-assesment after clonnig then run npm install followed by npm run dev.


