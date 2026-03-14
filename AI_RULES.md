# AI Development Rules

## Tech Stack
- **React (TypeScript)**: Core framework for building the user interface with type safety.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for all styling and responsive design.
- **Shadcn/UI**: Primary library for accessible and customizable UI components.
- **Lucide React**: Standard library for consistent iconography.
- **React Router**: Handles client-side navigation and routing.
- **Framer Motion**: Used for smooth animations and interactive transitions.

## Library Usage Rules
- **UI Components**: Always prioritize using `shadcn/ui` components. Do not create custom UI elements (buttons, inputs, cards) from scratch if a Shadcn equivalent exists.
- **Icons**: Use `lucide-react` for all icons. Avoid using external CDN-based icon sets like Material Symbols.
- **Styling**: Use Tailwind CSS classes exclusively. Avoid writing raw CSS or using inline styles unless absolutely necessary for dynamic values.
- **File Structure**: 
  - Pages must be placed in `src/pages/`.
  - Reusable components must be placed in `src/components/`.
  - All routes must be defined in `src/App.tsx`.
- **TypeScript**: Always use TypeScript for new files. Define interfaces/types for props and data structures.
- **Animations**: Use `framer-motion` for any complex animations or page transitions to ensure a premium feel.