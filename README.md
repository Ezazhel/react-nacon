## **Part A: Store Component Wireframe & Design**

---

### **Why I Did Not Choose Infinite Scroll**

Google used infinite scroll instead of pagination years ago — then decided to switch back.

Infinite scroll **increases user retention** (we all know how scrolling through just *one* Instagram reel can turn into hours), but does it really help **product relevance** when you're trying to sell something?

The products you want to highlight will show up at the top, while the less relevant ones get buried.

> You want your players to **play your game**, not get stuck in an endless scroll.

Giving them more time **in-game** — instead of trapped in a doomscroll loop — improves communication around your game, brings in more players, and ultimately, **more buyers**.

Sure, infinite scroll can allow more flexibility in how items are presented. But keep in mind:

> **Infinite scroll is a navigation method — not a display style.**

---

### **Carousel**

A carousel layout allows a single item to take up more space than a grid layout — which is great when your goal is to **highlight a specific item**, like on a homepage.

> *Steam uses a carousel, for example — though they sell games, not MTX. Games come with a lot of visuals to showcase.*

If you're selling **skins**, a carousel could show:

- On the **left**: the skin displayed on the character (large visual area)
- On the **right**: info such as name, price, rarity, etc.

---

### **Grid**

A **grid** is just a layout — it works with both infinite scroll **and** pagination.

Personally, I prefer a **grid with pagination**.  
If the store offers filters or sorting options, a player might sort by descending price and jump to the **last page** to find the cheapest MTX.

With infinite scroll, they'd have to scroll all the way down manually.

> **Need I say more?**

---

### 🔗 [Link to Figma Wireframe](https://www.figma.com/design/uxaljHfUjF1US1QwtKhOmA/Nacon?node-id=0-1&t=vPI00svRjg3k3nZV-1)

## **Part B: Technical Implementation – In-Game Store Page**

### **Technologies Used**

- **React + Vite + TailwindCSS**
- **Vitest** (thanks to Vite)
- **JSDOM / Jest / Testing Library** (to simulate end-user interactions)

---

### **Project Structure**

I organized the source code into the following folders:

- **`/components`**  
  Contains reusable UI components. Each component lives in its own folder with its corresponding test and type files.

- **`/entities`**  
  Stores shared interfaces, types, and classes used across the entire app (not tied to a specific feature).

- **`/features`**  
  Should ideally include one folder per feature. In this case, I didn’t fully follow that structure. For example, I fetched `data.json` twice, instead of doing it once in `App` and passing the data down as props.  
  I made this choice **intentionally**, assuming that we might want to display **different data** in the grid view and the carousel.

- **`/services`**  
  Groups all shared services (e.g., for data fetching or utilities).

> Anything feature-specific should stay within its corresponding `feature` folder.

If I had implemented routing (instead of using `useState` in `App` to toggle between Grid and Carousel views), I would have used `react-router` and added a `pages` folder — similar to how Next.js or Nuxt handle it.

---

### **Limitations**

- **My current React knowledge.**  
  I’m still learning and used this project as an opportunity to explore more of the ecosystem.

- **Time constraints.**  
  I had some close friends visiting from out of town — definitely worth it, but it cut into the available dev time. 😄

---

### **What I Didn't Do (Yet)**

Things I would have loved to implement, but didn’t due to time or technical limitations:

- A **shopping basket** (possibly with React Context or a global store)
- **"Add to basket"** buttons on each item
- **Sections/sessions** from the wireframe (easy to implement as a reusable component with `children` and a `title` prop — just didn’t feel essential at this stage)
- **Sorting and filtering**
- **Seasonal items display**
- Support for different **grid sizes** or **carousel types**  
  (e.g. a carousel for on-sale items, another for most purchased — would require additional data)

---

### **Possible Improvements**

- **CSS/styling**:  
  I started with the wireframe, but I should have kept the styling cleaner and more minimal.  
  Also — not sure why I went with a dark color scheme 😅.  
  I usually do wireframes in black and white because it makes layering colors later much easier.

- **Component reusability**:  
  Some components are still too dependent on others.  
  For example, `PaginatedGrid` requires a `Grid` — it could have been refactored into a higher-order component.

- **Routing**:  
  Switching from `useState` to actual routing would scale better in a real-world app.

- **Effects and icon packages**:  
  I could add them, but they're not strictly necessary.

- **Expanded features**:  
  Such as the basket, different grid layouts, or even a grid inside a carousel — depending on the UX goals.

---

### **What I’m Proud Of**

I challenged myself to work with a stack I’m not yet fully comfortable with — and I had fun doing it.  
Thanks for the opportunity 🙌

---
## **Part C: Store Administration Interface Concept** *(Optional & Exploratory)*

---

### **Flowchart Overview**

The current flowchart displays only two main paths, but it could easily be expanded depending on the back office's goals.

At this stage, I’ve illustrated two flows:

- A **CRUD flow** for MTX items (create, read, update, delete)
- A flow to **add banners**, possibly to feature content on the front page

That said, the flowchart itself isn’t the most critical part of this concept.  
What really matters is **how we define the tech stack**—which typically comes through meetings, experimentation, and collaboration.

---

### **Key Questions & Considerations**

- **MongoDB or SQL?**
- Should we use the **same back office** across all shops?
- Is **database replication** necessary?
    - If yes, what are the **monthly/yearly costs** of maintaining that infrastructure?
- How **scalable** is the solution?

There are still many open questions that need to be addressed as the project evolves.

---

### 🔗 [Link to the Wireframe](https://www.figma.com/board/uiEcVbfJXR1lqczyv6IOV9/Nacon?t=NP33G0gAY8fZ3nIP-1)
