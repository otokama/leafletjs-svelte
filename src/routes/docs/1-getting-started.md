---
title: Installation
category: Getting Started
order: 1
---

# Installation

Make sure you have at least `node v14.0` installed.
  ```bash
  $ npm install -D leafletjs-svelte leaflet
  ```
Import stylesheet for Leaflet in your app entry point, or in `src/routes/layout.svelte`:
  ```js
  import 'leaflet/dist/leaflet.css';
  ```
Component Import:
  ```svelte
  <script>
    import { Leaflet } from 'leafletjs-svelte';
  </script>
  ```