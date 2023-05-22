<script>
  import { page } from "$app/stores";
</script>

<ul>
  <li>
    <span class='nav-title'>Getting Started</span>
  </li>
  <li>
    <a
      href='/docs/getting-started'
      class={$page.url.pathname === '/docs/getting-started' ? 'active-link' : ''}
    >
        Installation
    </a>
  </li>
  <li>
    <a href='/sandbox'>Demo</a>
  </li>

  <li>
    <span class='nav-title'>Map</span>
  </li>
  <li>
    <a
      href='/docs/map'
      class={$page.url.pathname === '/docs/map' ? 'active-link' : ''}
    >
      Usage
    </a>
  </li>
  
  <li>
    <span class='nav-title'>UI Layers</span>
  </li>
  <li>
    <a
      href='/docs/ui-layers/marker'
      class={$page.url.pathname === '/docs/ui-layers/marker' ? 'active-link' : ''}
    >
      Marker
    </a>
  </li>
  <li>
    <a
      href='/docs/ui-layers/popup'
      class={$page.url.pathname === '/docs/ui-layers/popup' ? 'active-link' : ''}
    >
      Popup
    </a>
  </li>
  <li>
    <a
      href='/docs/ui-layers/tooltip'
      class={$page.url.pathname === '/docs/ui-layers/tooltip' ? 'active-link' : ''}
    >
      Tooltip
    </a>
  </li>

  <li>
    <span class='nav-title'>Raster Layers</span>
  </li>
  <li>
    <a
      href='/docs/raster-layers/image-overlay'
      class={$page.url.pathname === '/docs/raster-layers/image-overlay' ? 'active-link' : ''}
    >
      Image Overlay
    </a>
  </li>
  <li>
    <a
      href='/docs/raster-layers/tilelayer'
      class={$page.url.pathname === '/docs/raster-layers/tilelayer' ? 'active-link' : ''}
    >
      TileLayer
    </a>
  </li>
  <li>
    <a
      href='/docs/raster-layers/video-overlay'
      class={$page.url.pathname === '/docs/raster-layers/video-overlay' ? 'active-link' : ''}
    >
      Video Overlay
    </a>
  </li>

  <li>
    <span class='nav-title'>Vector Layers</span>
  </li>
  <li>
    <a
      href='/docs/vector-layers/circle'
      class={$page.url.pathname === '/docs/vector-layers/circle' ? 'active-link' : ''}
    >
      Circle
    </a>
  </li>
  <li>
    <a
      href='/docs/vector-layers/circlemarker'
      class={$page.url.pathname === '/docs/vector-layers/circlemarker' ? 'active-link' : ''}
    >
      CircleMarker
    </a>
  </li>
  <li>
    <a
      href='/docs/vector-layers/polygon'
      class={$page.url.pathname === '/docs/vector-layers/polygon' ? 'active-link' : ''}
    >
      Polygon
    </a>
  </li>
  <li>
    <a
      href='/docs/vector-layers/polyline'
      class={$page.url.pathname === '/docs/vector-layers/polyline' ? 'active-link' : ''}
    >
      Polyline
    </a>
  </li>
  <li>
    <a
      href='/docs/vector-layers/rectangle'
      class={$page.url.pathname === '/docs/vector-layers/rectangle' ? 'active-link' : ''}
    >
      Rectangle
    </a>
  </li>

  <li>
    <span class='nav-title'>Other Layers</span>
  </li>
  <li>
    <a
      href='/docs/other-layers/geojson'
      class={$page.url.pathname === '/docs/other-layers/geojson' ? 'active-link' : ''}
    >
      GeoJSON
    </a>
  </li>
</ul>

<style>
  ul {
    float: left;
    position: sticky;
    top: 10em;
    left: 0.5em;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-family: 'Overpass Variable', sans-serif;
    list-style-type: none;
  }

  li {
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
  }

  li a {
    margin-left: 0.8em;
    text-decoration: none;
    color: rgb(93, 93, 93);
    font-weight: 500;
    transition: 250ms;
  }

  li a:hover {
    color: rgb(0, 77, 202);
  }
  
  .active-link {
    color: rgb(0, 116, 248);
  }

  .nav-title {
    color: rgb(34, 34, 34);
    font-size: 19px;
    font-weight: 700;
  }
</style>