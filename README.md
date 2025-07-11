# Risk Dashboard

A modern, responsive risk dashboard built with React, TypeScript, Vite, and Material UI (MUI). The dashboard visualizes security findings, asset risk, and summary analytics with interactive charts and tables.

---

## 🚀 Features

- **Dashboard Overview**: Modular header with summary chips, donut/pie charts, and key metrics.
- **Findings Table**: Filterable table using MUI X DataGrid with custom columns, icons, avatars, and real-time filtering.
- **Responsive Layout**: Fixed sidebar navigation, modern layout, and mobile-friendly design.
- **Custom Theming**: Centralized color palette using CSS variables and MUI theme mapping for consistent branding.
- **Reusable Components**: DataGrid with filters, summary chips, and chart components for easy extension.
- **Mock Data**: Easily swappable mock data for rapid prototyping and testing.

---

## 🛠️ Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (fast dev/build tooling)
- [Material UI (MUI)](https://mui.com/) (core + X DataGrid + X Charts)
- [ESLint](https://eslint.org/) (with recommended React/TS rules)

---

## 📁 Project Structure

```
src/
  components/
    Dashboard/         # Dashboard widgets & summary components
    layouts/           # Layout & sidebar
    ui/                # Reusable UI (DataGridWithFilters, icons, etc)
  columns/             # DataGrid column definitions
  constants/           # Mock data, types, sidebar items, color constants
  theme.ts             # MUI theme setup (palette, typography, etc)
  App.tsx              # Main app shell
```

---

## 🎨 Theming & Styling

- **Roboto font** is used throughout (imported via Google Fonts and set in both CSS and MUI theme).
- **Colors**: All color values are defined as CSS variables in `index.css` and mapped to `palette.custom` in the MUI theme. Use `useTheme()` and the function form of `sx` for referencing theme colors in components.
- **DataGrid**: Custom scrollbars, header/cell styling, and support for header text wrapping or truncation as needed.

---

## 🧑‍💻 Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the dev server:**
   ```sh
   npm run dev
   ```
3. **Open** [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📝 Contribution Guidelines

- Use feature branches and submit pull requests for review.
- Follow the existing code style and structure.
- Keep color and theme values centralized.
- Add/Update documentation for new features.
