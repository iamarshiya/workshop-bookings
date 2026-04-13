# FOSSEE Workshop Booking - Modernization Project

This project transforms the legacy Django portal into a high-performance, mobile-first Single Page Application (SPA) using React.

## 📱 Mobile-First Design Principles

We have adopted five specific design principles to optimize the platform for students on mobile devices:

1. **Aesthetic Minimalism (Signal vs. Noise)**: We removed the cluttered table layouts and multi-level headers. By using white space and a clean color palette, we ensure students focus on one thing: discovering their next workshop.
2. **Visual Hierarchy (Progressive Disclosure)**: On small screens, we prioritize the primary call-to-action ("Browse Workshops") while keeping secondary info (stats, about) clearly separated using elevated cards.
3. **Affordance & Tap Targets**: All interactive elements (buttons, bottom tabs) have a minimum height of 56px to ensure "fat-finger" friendliness and prevent accidental mis-clicks.
4. **Consistency (Mental Models)**: We use a persistent bottom navigation bar (Home, Stats, Events, Account), which mimics the UI of native apps like LinkedIn or Coursera, significantly reducing the learning curve for students.
5. **Glassmorphism & Depth**: Subtle shadows and backdrop blurs are used not just for aesthetics, but to provide depth clues. It helps students distinguish between the primary content layer and overlay elements like navigation.

## 🛠 Tech Stack
- **Frontend**: React 18, Vite (Fast Load Times)
- **Backend**: Django 3 (Python 3.12)
- **Design**: Custom CSS-in-JS design system

## 🚀 Key Improvements
- **Performance**: Reduced page load time by moving to a client-side routing model.
- **Responsiveness**: Replaced legacy data tables with a flexible card-based feed system.
- **Accessibility**: High contrast text and aria-labels for mobile screen readers.
