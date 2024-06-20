/* empty css                       */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, e as addAttribute, f as renderComponent, u as unescapeHTML, F as Fragment, g as renderHead, h as renderSlot } from '../astro_DvdZoOsb.mjs';
import 'kleur/colors';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                       */
import 'clsx';

const icons = {"local":{"prefix":"local","lastModified":1718774332,"icons":{"logo":{"body":"<g fill-rule=\"evenodd\"><path fill=\"#f6f5f5\" d=\"M-.5-.5h139v155H-.5V-.5Z\"/><path fill=\"#f6f2f2\" d=\"M95.5 32.5c3.616 2.796 7.283 3.13 11 1 6.216.336 12.55.836 19 1.5-2.399 3.947-5.232 4.114-8.5.5-1 2.667-2 2.667-3 0a34.094 34.094 0 0 1-10.5 3c-1.773-1.932-3.94-3.266-6.5-4l-.5 1a308.585 308.585 0 0 0 14.5 15c10.985 19.111 11.318 38.445 1 58-.21-1.558-.71-2.891-1.5-4a65.446 65.446 0 0 1-18 2 1419.07 1419.07 0 0 1-41-4 98.604 98.604 0 0 0 4-8.5c-.708-2.724-2.375-3.724-5-3-1.549 5.263-4.049 10.096-7.5 14.5-.684 1.284-.517 2.451.5 3.5 18.443-.821 36.443 1.679 54 7.5l7 2c-.333 1-1 1.667-2 2a16000.34 16000.34 0 0 0-22 12.5 200.09 200.09 0 0 1-14 1.5 72.78 72.78 0 0 1-25-6c-.79-.901-1.79-1.568-3-2-6.715-4.049-12.049-9.382-16-16 6.345-2.173 11.012-6.339 14-12.5l-1-1.5a42.494 42.494 0 0 1-11 5.5c-2.727.818-5.394.652-8-.5-8.549-23.795-3.882-44.462 14-62 1.294-.79 2.46-1.79 3.5-3l1 1c.69-1.85 1.856-3.184 3.5-4 14.1-7.086 28.767-8.586 44-4.5a98.107 98.107 0 0 0 12 5.5c.797-.457 1.13-1.124 1-2Z\"/><path fill=\"#d94239\" d=\"M95.5 32.5c.13.876-.203 1.543-1 2a98.107 98.107 0 0 1-12-5.5c-15.233-4.086-29.9-2.586-44 4.5-1.006-.438-1.006-1.104 0-2 8.733-5.558 18.233-7.892 28.5-7 4.82.62 9.653 1.12 14.5 1.5a51.225 51.225 0 0 0 14 6.5Z\"/><path fill=\"#e28280\" d=\"M38.5 31.5c-1.006.896-1.006 1.562 0 2-1.644.816-2.81 2.15-3.5 4l-1-1a14.692 14.692 0 0 1-3.5 3c-.342-.838-1.008-1.172-2-1 2.775-3.105 6.108-5.438 10-7Z\"/><path fill=\"#d52e27\" d=\"M62.5 40.5v3h8a29.134 29.134 0 0 1 9-.5 4.938 4.938 0 0 1 1 2.5c-3.305 3.64-6.638 7.307-10 11 6.555.684 13.055 1.351 19.5 2a206.22 206.22 0 0 1-1.5 27c-18.355.705-36.688 1.372-55 2-1.049-4.33.618-6.497 5-6.5a968.43 968.43 0 0 1 44-.5c.968-2.107 1.302-4.44 1-7a441.618 441.618 0 0 0-42 1h-6c-.423-2.281.244-3.948 2-5h46c.295-2.235-.039-4.235-1-6-14.52-1.309-29.187-1.309-44 0-2.415-.219-3.415-1.552-3-4a60.94 60.94 0 0 1-11-.5c-2.107-1.264-3.107-3.097-3-5.5 13.64-1.744 26.307-6.244 38-13.5 1.25-.74 2.25-.574 3 .5Z\"/><path fill=\"#e48c8b\" d=\"M62.5 40.5a26.87 26.87 0 0 0 8 3h-8v-3Z\"/><path fill=\"#f4e7e7\" d=\"M60.5 47.5a25.87 25.87 0 0 1 10 1 134.132 134.132 0 0 0-7 8.5c-8.333.667-16.667.667-25 0a97.787 97.787 0 0 0 15-8c2.536-.186 4.869-.686 7-1.5Z\"/><path fill=\"#edc6c6\" d=\"M82.5 63.5c.961 1.765 1.295 3.765 1 6h-46a506.865 506.865 0 0 1 45-1v-5Z\"/><path fill=\"#eaafac\" d=\"M41.5 74.5a441.618 441.618 0 0 1 42-1c.302 2.56-.032 4.893-1 7v-6h-41Z\"/><path fill=\"#d83b32\" d=\"M103.5 38.5c21.627 22.053 24.627 46.386 9 73-1.648-1.956-2.315-4.289-2-7 .79 1.109 1.29 2.442 1.5 4 10.318-19.555 9.985-38.889-1-58a308.585 308.585 0 0 1-14.5-15l.5-1c2.56.734 4.727 2.068 6.5 4Z\"/><path fill=\"#d7372e\" d=\"M72.5 89.5c3.725.28 4.892 2.28 3.5 6a24.922 24.922 0 0 1-6.5 5 4.455 4.455 0 0 1-2-1.5 58.165 58.165 0 0 1 5-9.5Z\"/><path fill=\"#d62f28\" d=\"M110.5 104.5c-.315 2.711.352 5.044 2 7-2.194 4.737-5.528 8.404-10 11v-2c1-.333 1.667-1 2-2 .789-.283 1.456-.783 2-1.5a40.914 40.914 0 0 0-9-.5c-17.557-5.821-35.557-8.321-54-7.5-1.017-1.049-1.184-2.216-.5-3.5 3.451-4.404 5.951-9.237 7.5-14.5 2.625-.724 4.292.276 5 3a98.604 98.604 0 0 1-4 8.5 1419.07 1419.07 0 0 0 41 4 65.446 65.446 0 0 0 18-2Z\"/><path fill=\"#d52f28\" d=\"M88.5 91.5c2.76-.585 4.427.415 5 3-2.314 3.821-5.647 6.154-10 7 .782-3.78 2.448-7.113 5-10Z\"/><path fill=\"#d63029\" d=\"M28.5 38.5c.992-.172 1.658.162 2 1-17.882 17.538-22.549 38.205-14 62 2.606 1.152 5.273 1.318 8 .5a42.494 42.494 0 0 0 11-5.5l1 1.5c-2.988 6.161-7.655 10.327-14 12.5-.904.709-1.237 1.709-1 3-9.04-10.98-12.872-23.647-11.5-38 1.144-14.941 7.31-27.275 18.5-37Z\"/><path fill=\"#da483f\" d=\"M22.5 110.5c3.951 6.618 9.285 11.951 16 16 .172.992-.162 1.658-1 2-6.612-3.611-11.946-8.611-16-15-.237-1.291.096-2.291 1-3Z\"/><path fill=\"#e17874\" d=\"M97.5 116.5a40.914 40.914 0 0 1 9 .5c-.544.717-1.211 1.217-2 1.5l-7-2Z\"/><path fill=\"#e58e8c\" d=\"M38.5 126.5c1.21.432 2.21 1.099 3 2-.838.342-1.172 1.008-1 2-1.21-.432-2.21-1.099-3-2 .838-.342 1.172-1.008 1-2Z\"/><path fill=\"#d7372d\" d=\"M41.5 128.5a72.78 72.78 0 0 0 25 6l-1 2c-8.888.025-17.22-1.975-25-6-.172-.992.162-1.658 1-2Z\"/><path fill=\"#db534d\" d=\"M102.5 120.5v2c-8.284 7.894-18.284 12.561-30 14-2.187-.572-4.52-.572-7 0l1-2a200.09 200.09 0 0 0 14-1.5c7.32-4.167 14.653-8.333 22-12.5Z\"/></g>"},"logo23":{"body":"<g fill=\"currentColor\"><path d=\"M55.2 26.2c-5.6.8-21 7.4-19.9 8.4.8.8 9.7-2.5 11.9-4.4 1-.8 5.6-1.9 10.8-2.4 12.2-1.3 23 .1 31.1 4.2 3.3 1.7 6.4 2.9 6.7 2.6.7-.8.8-.7-7.8-4.9-6.9-3.4-8.4-3.7-17.5-4-5.5-.2-12.4 0-15.3.5zM97 35.9c0 .6.6 1.1 1.3 1.2 2.1.1 13 13.5 16.4 20.1 6.9 13.7 7.2 31.7.7 46.3-2.6 5.9-4.5 7.9-4.1 4.3.2-2.6.6-2.5-9.5-.7-5.6 1.1-8.5 1-18.5-.4-6.5-.9-16.2-2-21.5-2.3-5.4-.4-9.8-.8-9.8-1 0-.2 1-2.4 2.2-5 2.2-4.4 2.2-4.6.4-5.9-2.7-2-4.3-.9-5.5 3.9-.6 2.3-2 5.4-3.1 6.8-1.1 1.5-2 3.4-2 4.5 0 1.7 1.1 1.8 13.8 1.9 11.9.2 15.2.6 25.7 3.4 15.3 4.1 19.5 4.9 21.2 4.3 2.2-.9 1.4 1.2-1.4 3.8-3.5 3-8 6.1-11.3 7.5-1.4.6-5.2 2.3-8.5 3.8-3.3 1.4-6.7 2.5-7.5 2.4-.8 0-2.6 0-4 .1-2.5.2-2.5.2-.3 1.1 1.5.6 4 .4 7.5-.6 7.3-2 8.2-2.2 9.1-2.3.5-.1.5-.6.2-1.1-.3-.6 0-1 .7-1.1 3-.2 5.1-.8 6.6-2.2 1-.8 2.2-1.6 2.9-1.8.7-.2 3.6-2.7 6.4-5.4 13.7-13.2 19.8-31.7 16.5-50.3-1.7-9.8-7.4-20.8-14.6-28.3-5.1-5.3-10-8.7-10-7zm-71.2 6.4c-20.7 21.4-20.4 55.9.7 77.1 6.2 6.2 12.5 10.6 12.5 8.7 0-.6-1.2-1.7-2.7-2.5-3.2-1.7-13.3-12-13.3-13.6 0-.5.6-1 1.3-1 3.3 0 14.1-12 12.3-13.7-.3-.3-1.7.4-3.3 1.4-3.7 2.6-8.8 4.3-12.8 4.3-2.6 0-3.5-.5-4.3-2.7-7.1-18.2-3.5-38.7 9.8-55.1 2.8-3.5 4.9-6.6 4.6-6.9-.2-.3-2.4 1.5-4.8 4z\"/><path d=\"M55.3 43.4c-6 3.7-21.4 9.1-28.5 10.1-5.5.7-6.2 2.5-2.3 5.1 1.9 1.3 3.8 1.5 7.6 1.1 4.2-.5 5-.4 4.5.8-.3.8 0 1.7.5 2.1.6.3 11.3.7 23.7.8l22.7.1.3 3.2.3 3.3-23.8.2c-23 .3-23.8.4-23.8 2.3 0 2 .5 2 23.8 1.6l23.7-.4v3c0 1.6-.5 3.4-1.1 4-.7.7-6.3.9-17.2.6-8.9-.2-19.6-.1-23.7.4-7.1.8-7.5.9-7.5 3.3 0 2.1.4 2.5 2.5 2.3 1.4-.2 13.5-.4 27-.5l24.4-.3.7-3.3c.4-1.8.8-8.1 1-14l.4-10.7-9.7-.3c-5.4-.1-9.8-.6-9.8-1 0-.3 2.3-3 5.1-5.8 7.2-7.3 6.5-8.5-4.1-7.7-7.7.6-8.1.5-8.7-1.5-.7-2.9-1.8-2.7-8 1.2zM71 48.6c0 .4-1.6 2.7-3.6 5L63.9 58H38.5l7-3.6c3.9-2 7.5-4 8-4.4 1.8-1.5 17.5-2.7 17.5-1.4zm-.3 45.9c-2.9 6.1-1.8 7.1 3.3 3.3 3.8-2.7 4.1-6.8.7-6.8-1.7 0-2.8 1-4 3.5zm17.6-1.3c-1.8 2.2-4.5 8-4 8.5.6.5 5.2-1.8 8-4.1 1-.8 1.7-2.3 1.5-3.3-.4-2.2-4.1-2.9-5.5-1.1zM40 129.4c0 .8 5.1 3.3 10.5 5.2 5.2 1.7 18.8 2.8 17.9 1.3-.3-.5-2.5-.9-4.9-.9-2.4 0-5.6-.5-7.2-1.1-1.5-.6-4.8-1.7-7.3-2.4s-5.5-1.6-6.7-2c-1.3-.4-2.3-.5-2.3-.1z\"/></g>"},"logo333":{"body":"<g fill=\"currentColor\"><path d=\"M55.2 26.2c-5.6.8-21 7.4-19.9 8.4.8.8 9.7-2.5 11.9-4.4 1-.8 5.6-1.9 10.8-2.4 12.2-1.3 23 .1 31.1 4.2 3.3 1.7 6.4 2.9 6.7 2.6.7-.8.8-.7-7.8-4.9-6.9-3.4-8.4-3.7-17.5-4-5.5-.2-12.4 0-15.3.5zM97 35.9c0 .6.6 1.1 1.3 1.2 2.1.1 13 13.5 16.4 20.1 6.9 13.7 7.2 31.7.7 46.3-2.6 5.9-4.5 7.9-4.1 4.3.2-2.6.6-2.5-9.5-.7-5.6 1.1-8.5 1-18.5-.4-6.5-.9-16.2-2-21.5-2.3-5.4-.4-9.8-.8-9.8-1 0-.2 1-2.4 2.2-5 2.2-4.4 2.2-4.6.4-5.9-2.7-2-4.3-.9-5.5 3.9-.6 2.3-2 5.4-3.1 6.8-1.1 1.5-2 3.4-2 4.5 0 1.7 1.1 1.8 13.8 1.9 11.9.2 15.2.6 25.7 3.4 15.3 4.1 19.5 4.9 21.2 4.3 2.2-.9 1.4 1.2-1.4 3.8-3.5 3-8 6.1-11.3 7.5-1.4.6-5.2 2.3-8.5 3.8-3.3 1.4-6.7 2.5-7.5 2.4-.8 0-2.6 0-4 .1-2.5.2-2.5.2-.3 1.1 1.5.6 4 .4 7.5-.6 7.3-2 8.2-2.2 9.1-2.3.5-.1.5-.6.2-1.1-.3-.6 0-1 .7-1.1 3-.2 5.1-.8 6.6-2.2 1-.8 2.2-1.6 2.9-1.8.7-.2 3.6-2.7 6.4-5.4 13.7-13.2 19.8-31.7 16.5-50.3-1.7-9.8-7.4-20.8-14.6-28.3-5.1-5.3-10-8.7-10-7zm-71.2 6.4c-20.7 21.4-20.4 55.9.7 77.1 6.2 6.2 12.5 10.6 12.5 8.7 0-.6-1.2-1.7-2.7-2.5-3.2-1.7-13.3-12-13.3-13.6 0-.5.6-1 1.3-1 3.3 0 14.1-12 12.3-13.7-.3-.3-1.7.4-3.3 1.4-3.7 2.6-8.8 4.3-12.8 4.3-2.6 0-3.5-.5-4.3-2.7-7.1-18.2-3.5-38.7 9.8-55.1 2.8-3.5 4.9-6.6 4.6-6.9-.2-.3-2.4 1.5-4.8 4z\"/><path d=\"M55.3 43.4c-6 3.7-21.4 9.1-28.5 10.1-5.5.7-6.2 2.5-2.3 5.1 1.9 1.3 3.8 1.5 7.6 1.1 4.2-.5 5-.4 4.5.8-.3.8 0 1.7.5 2.1.6.3 11.3.7 23.7.8l22.7.1.3 3.2.3 3.3-23.8.2c-23 .3-23.8.4-23.8 2.3 0 2 .5 2 23.8 1.6l23.7-.4v3c0 1.6-.5 3.4-1.1 4-.7.7-6.3.9-17.2.6-8.9-.2-19.6-.1-23.7.4-7.1.8-7.5.9-7.5 3.3 0 2.1.4 2.5 2.5 2.3 1.4-.2 13.5-.4 27-.5l24.4-.3.7-3.3c.4-1.8.8-8.1 1-14l.4-10.7-9.7-.3c-5.4-.1-9.8-.6-9.8-1 0-.3 2.3-3 5.1-5.8 7.2-7.3 6.5-8.5-4.1-7.7-7.7.6-8.1.5-8.7-1.5-.7-2.9-1.8-2.7-8 1.2zM71 48.6c0 .4-1.6 2.7-3.6 5L63.9 58H38.5l7-3.6c3.9-2 7.5-4 8-4.4 1.8-1.5 17.5-2.7 17.5-1.4zm-.3 45.9c-2.9 6.1-1.8 7.1 3.3 3.3 3.8-2.7 4.1-6.8.7-6.8-1.7 0-2.8 1-4 3.5zm17.6-1.3c-1.8 2.2-4.5 8-4 8.5.6.5 5.2-1.8 8-4.1 1-.8 1.7-2.3 1.5-3.3-.4-2.2-4.1-2.9-5.5-1.1zM40 129.4c0 .8 5.1 3.3 10.5 5.2 5.2 1.7 18.8 2.8 17.9 1.3-.3-.5-2.5-.9-4.9-.9-2.4 0-5.6-.5-7.2-1.1-1.5-.6-4.8-1.7-7.3-2.4s-5.5-1.6-6.7-2c-1.3-.4-2.3-.5-2.3-.1z\"/></g>"},"urgent_1":{"body":"<g fill=\"currentColor\"><path d=\"M55.2 26.2c-5.6.8-21 7.4-19.9 8.4.8.8 9.7-2.5 11.9-4.4 1-.8 5.6-1.9 10.8-2.4 12.2-1.3 23 .1 31.1 4.2 3.3 1.7 6.4 2.9 6.7 2.6.7-.8.8-.7-7.8-4.9-6.9-3.4-8.4-3.7-17.5-4-5.5-.2-12.4 0-15.3.5zM97 35.9c0 .6.6 1.1 1.3 1.2 2.1.1 13 13.5 16.4 20.1 6.9 13.7 7.2 31.7.7 46.3-2.6 5.9-4.5 7.9-4.1 4.3.2-2.6.6-2.5-9.5-.7-5.6 1.1-8.5 1-18.5-.4-6.5-.9-16.2-2-21.5-2.3-5.4-.4-9.8-.8-9.8-1 0-.2 1-2.4 2.2-5 2.2-4.4 2.2-4.6.4-5.9-2.7-2-4.3-.9-5.5 3.9-.6 2.3-2 5.4-3.1 6.8-1.1 1.5-2 3.4-2 4.5 0 1.7 1.1 1.8 13.8 1.9 11.9.2 15.2.6 25.7 3.4 15.3 4.1 19.5 4.9 21.2 4.3 2.2-.9 1.4 1.2-1.4 3.8-3.5 3-8 6.1-11.3 7.5-1.4.6-5.2 2.3-8.5 3.8-3.3 1.4-6.7 2.5-7.5 2.4-.8 0-2.6 0-4 .1-2.5.2-2.5.2-.3 1.1 1.5.6 4 .4 7.5-.6 7.3-2 8.2-2.2 9.1-2.3.5-.1.5-.6.2-1.1-.3-.6 0-1 .7-1.1 3-.2 5.1-.8 6.6-2.2 1-.8 2.2-1.6 2.9-1.8.7-.2 3.6-2.7 6.4-5.4 13.7-13.2 19.8-31.7 16.5-50.3-1.7-9.8-7.4-20.8-14.6-28.3-5.1-5.3-10-8.7-10-7zm-71.2 6.4c-20.7 21.4-20.4 55.9.7 77.1 6.2 6.2 12.5 10.6 12.5 8.7 0-.6-1.2-1.7-2.7-2.5-3.2-1.7-13.3-12-13.3-13.6 0-.5.6-1 1.3-1 3.3 0 14.1-12 12.3-13.7-.3-.3-1.7.4-3.3 1.4-3.7 2.6-8.8 4.3-12.8 4.3-2.6 0-3.5-.5-4.3-2.7-7.1-18.2-3.5-38.7 9.8-55.1 2.8-3.5 4.9-6.6 4.6-6.9-.2-.3-2.4 1.5-4.8 4z\"/><path d=\"M55.3 43.4c-6 3.7-21.4 9.1-28.5 10.1-5.5.7-6.2 2.5-2.3 5.1 1.9 1.3 3.8 1.5 7.6 1.1 4.2-.5 5-.4 4.5.8-.3.8 0 1.7.5 2.1.6.3 11.3.7 23.7.8l22.7.1.3 3.2.3 3.3-23.8.2c-23 .3-23.8.4-23.8 2.3 0 2 .5 2 23.8 1.6l23.7-.4v3c0 1.6-.5 3.4-1.1 4-.7.7-6.3.9-17.2.6-8.9-.2-19.6-.1-23.7.4-7.1.8-7.5.9-7.5 3.3 0 2.1.4 2.5 2.5 2.3 1.4-.2 13.5-.4 27-.5l24.4-.3.7-3.3c.4-1.8.8-8.1 1-14l.4-10.7-9.7-.3c-5.4-.1-9.8-.6-9.8-1 0-.3 2.3-3 5.1-5.8 7.2-7.3 6.5-8.5-4.1-7.7-7.7.6-8.1.5-8.7-1.5-.7-2.9-1.8-2.7-8 1.2zM71 48.6c0 .4-1.6 2.7-3.6 5L63.9 58H38.5l7-3.6c3.9-2 7.5-4 8-4.4 1.8-1.5 17.5-2.7 17.5-1.4zm-.3 45.9c-2.9 6.1-1.8 7.1 3.3 3.3 3.8-2.7 4.1-6.8.7-6.8-1.7 0-2.8 1-4 3.5zm17.6-1.3c-1.8 2.2-4.5 8-4 8.5.6.5 5.2-1.8 8-4.1 1-.8 1.7-2.3 1.5-3.3-.4-2.2-4.1-2.9-5.5-1.1zM40 129.4c0 .8 5.1 3.3 10.5 5.2 5.2 1.7 18.8 2.8 17.9 1.3-.3-.5-2.5-.9-4.9-.9-2.4 0-5.6-.5-7.2-1.1-1.5-.6-4.8-1.7-7.3-2.4s-5.5-1.6-6.7-2c-1.3-.4-2.3-.5-2.3-.1z\"/></g>"}},"width":139,"height":155}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$4 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "D:/demo/googlesheetonstream/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$3 = createAstro();
const $$WorkCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$WorkCard;
  const { data } = Astro2.props;
  const startDate = new Date(data.startdate);
  const endDate = new Date(data.enddate);
  const timeDifference = endDate.getTime() - startDate.getTime();
  const dayDifference = timeDifference / (1e3 * 3600 * 24);
  const currentDate = /* @__PURE__ */ new Date();
  const overdue = endDate < currentDate;
  const cardStyle = dayDifference < 3 || overdue ? "bg-red-200" : "bg-green-200";
  const showLogo = data.priority === "\u6025";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`card ${cardStyle} shadow-md hover:shadow-xl transition-shadow duration-300 relative`, "class")} data-astro-cid-r7kjq4ip> ${showLogo && renderTemplate`<div class="absolute top-0 right-0 m-1 logo-container" data-astro-cid-r7kjq4ip> ${renderComponent($$result, "Icon", $$Icon, { "name": "logo23", "size": 80, "class": "text-red-500", "data-astro-cid-r7kjq4ip": true })} </div>`} <div class="title font-bold mb-2" data-astro-cid-r7kjq4ip>申请人: ${data.name}</div> <div data-astro-cid-r7kjq4ip>申请日期: ${new Date(data.startdate).toLocaleDateString()}</div> <div data-astro-cid-r7kjq4ip>需求日期: ${new Date(data.enddate).toLocaleDateString()}</div> <div data-astro-cid-r7kjq4ip>工单号码:${data.workorder}</div> <div data-astro-cid-r7kjq4ip>任务内容: ${data.works}</div> </div> `;
}, "D:/demo/googlesheetonstream/src/components/WorkCard.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="container" data-astro-cid-sz7xmlte> <div class="element" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>Copyright &copy; ${/* @__PURE__ */ new Date()} Sanmina SCI </p> </div> </footer> `;
}, "D:/demo/googlesheetonstream/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "\u7CFB\u7EDF\u5DE5\u5355", description = "\u8FFD\u8E2A" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="msapplication-TileColor" content="#F46633"><meta name="theme-color" content="#202020"><meta name="color-scheme" content="dark"><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderHead()}</head> <body class="bg-gray-100 text-gray-900 flex flex-col min-h-screen"> <header class="text-center py-6 bg-gray-800 text-white"> <h1 class="text-3xl font-bold">Work Order Tracking Board</h1> <nav class="mt-4"> <a href="/" class="text-blue-300 hover:underline mx-2">HOME</a> <a href="/ae" class="text-blue-300 hover:underline mx-2">AE</a> <a href="/auto" class="text-blue-300 hover:underline mx-2">AUTO</a> </nav> </header> <main class="container mx-auto my-6 flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "D:/demo/googlesheetonstream/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
const GET = (data) => {
  return new Response(
    JSON.stringify({
      message: "This was a GET!"
    })
  );
};
const $$Ae = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ae;
  const response = await fetch("https://opensheet.elk.sh/1ge-pyzr0uMTxlALiiUh_sEzdVo1ikGJGavLF04u6AVU/4");
  const data = await response.json();
  const filteredData = data.filter((item) => item.\u5B8C\u6210\u72B6\u6001 === "\u672A\u5B8C\u6210" && item.\u6025\u5355 === "\u6025").map((item) => ({
    workorder: item.\u5DE5\u5355\u53F7,
    name: item.\u7533\u8BF7\u4EBA,
    works: item.\u6CBB\u5177\u540D\u79F0,
    startdate: item.\u7533\u8BF7\u65E5\u671F,
    enddate: item.\u9700\u6C42\u65E5\u671F,
    priority: item.\u6025\u5355
  }));
  const filteredData2 = data.filter((item) => item.\u5B8C\u6210\u72B6\u6001 === "\u672A\u5B8C\u6210" && item.\u6025\u5355 !== "\u6025").map((item) => ({
    workorder: item.\u5DE5\u5355\u53F7,
    name: item.\u7533\u8BF7\u4EBA,
    works: item.\u6CBB\u5177\u540D\u79F0,
    startdate: item.\u7533\u8BF7\u65E5\u671F,
    enddate: item.\u9700\u6C42\u65E5\u671F,
    priority: item.\u6025\u5355
  }));
  if (!data) {
    return {
      status: 404
    };
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 px-2"> ${filteredData.map((data2) => renderTemplate`${renderComponent($$result2, "WorkCard", $$WorkCard, { "data": data2 })}`)} ${filteredData2.map((data2) => renderTemplate`${renderComponent($$result2, "WorkCard", $$WorkCard, { "data": data2 })}`)} </main> ` })} <!-- 
<style>
  .card-container {
      display: flex;
      flex-wrap: wrap; /* 这里设置 flex-wrap: wrap; 让卡片容器可以换行 */
      justify-content: space-between /* 这里可以调整卡片在行内的对齐方式，我设置为 space-between，让卡片之间的间隔尽可能平均 */
    }
  
</style> --> <!-- 
//1IUhdPTAzGZP3ijSUdKOjqAgB2kg-RkublJK16JjXiSk
//1ge-pyzr0uMTxlALiiUh_sEzdVo1ikGJGavLF04u6AVU -->`;
}, "D:/demo/googlesheetonstream/src/pages/ae.astro", void 0);

const $$file = "D:/demo/googlesheetonstream/src/pages/ae.astro";
const $$url = "/ae";

const ae = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  default: $$Ae,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Icon as $, $$BaseLayout as a, ae as b };
