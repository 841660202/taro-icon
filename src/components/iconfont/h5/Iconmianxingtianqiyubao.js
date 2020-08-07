/* eslint-disable */

import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconmianxingtianqiyubao = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M733.581051 624.413035a14.6 14.6 0 1 0 4.678089-28.822829 14.6 14.6 0 1 0-4.678089 28.822829Z"
        fill={getIconColor(color, 0, '#FCF6F6')}
      />
      <path
        d="M756.3 701v9c0 21.5 17.5 39 39 39 12.6 0 24.2-6 31.7-16.3 6.5-8.9 19-10.9 27.9-4.4 8.9 6.5 10.9 19 4.5 27.9-14.9 20.6-38.9 32.9-64.1 32.9-43.6 0-79-35.4-79-79v-9c0-43.6 35.4-79 79-79 25.6 0 49.8 12.6 64.7 33.7 6.4 9 4.2 21.5-4.8 27.9-9 6.4-21.5 4.2-27.9-4.8-7.4-10.5-19.3-16.7-32-16.7-21.5-0.2-39 17.3-39 38.8zM858 469.4c-1.2 0-2.3-0.3-3.4-0.9 0.2 1.7 0.4 3.5 0.4 5.3 0 1.8-0.1 3.5-0.4 5.3 1.5-0.8 3.4-1.1 5.2-0.6l13.5 3.6c3.7 1 6 4.8 5 8.6-0.8 3.1-3.7 5.2-6.8 5.2-0.6 0-1.2-0.1-1.8-0.2l-11.5-3.1c2.5 4.9 3.9 10.5 3.9 16.4 0 20.1-16.4 36.5-36.5 36.5H741.4c-17 0-30.9-13.9-30.9-30.9 0-15.2 11-27.8 25.4-30.4 1.2-21.5 18.6-38.8 40.2-39.8l-6.7-6.7c-2.8-2.7-2.8-7.1-0.1-9.9 2.7-2.8 7.2-2.8 9.9-0.1l9.9 9.8c1.4 1.4 2.1 3.2 2.1 5 2.9-2.2 6-4 9.3-5.4-1.5-0.9-2.8-2.4-3.3-4.2l-3.6-13.5c-1-3.7 1.2-7.6 5-8.6 3.7-1 7.6 1.2 8.6 5l3.6 13.5c0.5 1.9 0.2 3.7-0.7 5.3 1.8-0.2 3.6-0.4 5.4-0.4 1.8 0 3.6 0.1 5.3 0.4-0.9-1.5-1.2-3.4-0.7-5.3l3.6-13.5c1-3.7 4.8-6 8.6-5 3.7 1 6 4.8 5 8.6l-3.6 13.5c-0.5 1.9-1.7 3.3-3.2 4.2 3.3 1.4 6.5 3.2 9.3 5.4 0-1.8 0.7-3.6 2.1-4.9l9.8-9.8c2.7-2.7 7.2-2.7 9.9 0s2.7 7.2 0 9.9l-9.8 9.8c-1.4 1.4-3.1 2-4.9 2 2.2 2.8 4 5.9 5.4 9.3 0.9-1.5 2.3-2.6 4.1-3.1l13.5-3.7c3.7-1 7.6 1.2 8.6 4.9s-1.2 7.6-4.9 8.6l-13.5 3.7c-0.9 0.1-1.5 0.2-2.1 0.2zM533.1 529.4l4.5 16.8c1 3.7-1.2 7.6-5 8.6-0.6 0.2-1.2 0.2-1.8 0.2-3.1 0-5.9-2.1-6.8-5.2l-4.5-16.8c-1-3.7 1.2-7.6 5-8.6 3.7-1 7.6 1.3 8.6 5zM532.6 401.2c3.7 1 6 4.8 5 8.6l-4.5 16.8c-0.8 3.1-3.7 5.2-6.8 5.2-0.6 0-1.2-0.1-1.8-0.2-3.7-1-6-4.8-5-8.6l4.5-16.8c1-3.7 4.9-6 8.6-5zM555.8 512l12.3 12.3c2.7 2.7 2.7 7.2 0 9.9-1.4 1.4-3.2 2-5 2-1.8 0-3.6-0.7-5-2L546 521.8c-2.7-2.7-2.7-7.2 0-9.9s7.1-2.7 9.8 0.1zM568.2 431.8L555.8 444c-1.4 1.4-3.2 2-4.9 2-1.8 0-3.6-0.7-5-2-2.7-2.7-2.7-7.2 0-9.9l12.3-12.3c2.7-2.7 7.2-2.7 9.9 0 2.8 2.8 2.8 7.2 0.1 10zM588.8 498.6c-0.8 3.1-3.7 5.2-6.8 5.2-0.6 0-1.2-0.1-1.8-0.2l-16.8-4.5c-3.7-1-6-4.8-5-8.6 1-3.7 4.8-6 8.6-5l16.8 4.5c3.7 1 6 4.9 5 8.6zM588.8 457.4c1 3.7-1.2 7.6-5 8.6l-16.8 4.5c-0.6 0.2-1.2 0.2-1.8 0.2-3.1 0-5.9-2.1-6.8-5.2-1-3.7 1.2-7.6 5-8.6l16.8-4.5c3.7-1 7.6 1.3 8.6 5z"
        fill={getIconColor(color, 1, '#FCF6F6')}
      />
      <path
        d="M580 756.1c-14.8 20.6-38.8 32.9-64 32.9-1.8 0-3.6-0.1-5.4-0.2V852H182c-49.5 0-90-40.5-90-90V284c0-49.5 40.5-90 90-90h350v41c0 11-9 20-20 20-0.5 0-1 0-1.5-0.1V437h1.5c22.6 0 41 18.4 41 41s-18.4 41-41 41h-1.5v103.2c1.8-0.1 3.5-0.2 5.4-0.2 25.6 0 49.8 12.6 64.6 33.7 6.4 9 4.2 21.5-4.8 27.9-9 6.4-21.5 4.2-27.9-4.8-7.4-10.5-19.3-16.7-31.9-16.7-1.8 0-3.6 0.1-5.4 0.4v86.3c1.8 0.2 3.5 0.4 5.4 0.4 12.4 0 24.2-6.1 31.6-16.3 6.4-9 18.9-11 27.9-4.6 8.9 6.3 11 18.8 4.6 27.8zM622 194h40v41c0 11-9 20-20 20s-20-9-20-20v-41zM792 194v41c0 11-9 20-20 20s-20-9-20-20v-41h40z"
        fill={getIconColor(color, 2, '#FCF6F6')}
      />
      <path
        d="M533.1 529.4l4.5 16.8c1 3.7-1.2 7.6-5 8.6-0.6 0.2-1.2 0.2-1.8 0.2-3.1 0-5.9-2.1-6.8-5.2l-4.5-16.8c-1-3.7 1.2-7.6 5-8.6 3.7-1 7.6 1.3 8.6 5zM519.5 423l4.5-16.8c1-3.7 4.8-6 8.6-5s6 4.8 5 8.6l-4.5 16.8c-0.8 3.1-3.7 5.2-6.8 5.2-0.6 0-1.2-0.1-1.8-0.2-3.7-1-6-4.9-5-8.6zM555.8 512l12.3 12.3c2.7 2.7 2.7 7.2 0 9.9-1.4 1.4-3.2 2-5 2-1.8 0-3.6-0.7-5-2L546 521.8c-2.7-2.7-2.7-7.2 0-9.9s7.1-2.7 9.8 0.1zM546 444c-2.7-2.7-2.7-7.2 0-9.9l12.3-12.3c2.7-2.7 7.2-2.7 9.9 0s2.7 7.2 0 9.9L555.8 444c-1.4 1.4-3.2 2-4.9 2-1.8 0.1-3.6-0.6-4.9-2zM580.2 503.6l-16.8-4.5c-3.7-1-6-4.8-5-8.6 1-3.7 4.8-6 8.6-5l16.8 4.5c3.7 1 6 4.8 5 8.6-0.8 3.1-3.7 5.2-6.8 5.2-0.6 0-1.2-0.1-1.8-0.2zM563.4 456.9l16.8-4.5c3.7-1 7.6 1.2 8.6 5 1 3.7-1.2 7.6-5 8.6l-16.8 4.5c-0.6 0.2-1.2 0.2-1.8 0.2-3.1 0-5.9-2.1-6.8-5.2-1-3.7 1.3-7.6 5-8.6z"
        fill={getIconColor(color, 3, '#E2D7D7')}
      />
      <path
        d="M580 756.1c-14.8 20.6-38.8 32.9-64 32.9-1.8 0-3.6-0.1-5.4-0.2V852h-141V329h141v108h1.5c22.6 0 41 18.4 41 41s-18.4 41-41 41h-1.5v103.2c1.8-0.1 3.5-0.2 5.4-0.2 25.6 0 49.8 12.6 64.6 33.7 6.4 9 4.2 21.5-4.8 27.9-9 6.4-21.5 4.2-27.9-4.8-7.4-10.5-19.3-16.7-31.9-16.7-1.8 0-3.6 0.1-5.4 0.4v86.3c1.8 0.2 3.5 0.4 5.4 0.4 12.4 0 24.2-6.1 31.6-16.3 6.4-9 18.9-11 27.9-4.6 8.8 6.3 10.9 18.8 4.5 27.8z"
        fill={getIconColor(color, 4, '#E2D7D7')}
      />
      <path
        d="M532 194v41c0 11-9 20-20 20-0.5 0-1 0-1.5-0.1V329H92v-45c0-49.5 40.5-90 90-90h350zM622 194h40v41c0 11-9 20-20 20s-20-9-20-20v-41zM792 194v41c0 11-9 20-20 20s-20-9-20-20v-41h40z"
        fill={getIconColor(color, 5, '#E73F5F')}
      />
      <path
        d="M532 155v80c0 11-9 20-20 20-0.5 0-1 0-1.5-0.1-10.4-0.7-18.5-9.4-18.5-19.9v-80c0-10.6 8.2-19.2 18.5-19.9 0.5 0 1-0.1 1.5-0.1 11 0 20 9 20 20zM382 255c-11 0-20-9-20-20v-80c0-11 9-20 20-20s20 9 20 20v80c0 11-9 20-20 20zM662 155v80c0 11-9 20-20 20s-20-9-20-20v-80c0-11 9-20 20-20s20 9 20 20zM792 155v80c0 11-9 20-20 20s-20-9-20-20v-80c0-11 9-20 20-20s20 9 20 20zM252 255c-11 0-20-9-20-20v-80c0-11 9-20 20-20s20 9 20 20v80c0 11-9 20-20 20z"
        fill={getIconColor(color, 6, '#CE1743')}
      />
      <path
        d="M490.9 426.6c0.8 3.1 3.7 5.2 6.8 5.2 0.6 0 1.2-0.1 1.8-0.2 3.7-1 6-4.8 5-8.6l-4.5-16.8c-1-3.7-4.8-5.9-8.6-5-3.7 1-6 4.8-5 8.6l4.5 16.8zM468.2 444c1.4 1.4 3.2 2.1 4.9 2.1s3.6-0.7 4.9-2.1c2.7-2.7 2.7-7.2 0-9.9l-12.3-12.3c-2.7-2.7-7.2-2.7-9.9 0s-2.7 7.2 0 9.9l12.4 12.3zM440.2 466l16.8 4.5c0.6 0.2 1.2 0.2 1.8 0.2 3.1 0 5.9-2.1 6.8-5.2 1-3.7-1.2-7.6-5-8.6l-16.8-4.5c-3.7-1-7.6 1.2-8.6 5-1 3.7 1.3 7.6 5 8.6zM465.6 490.5c-1-3.7-4.8-5.9-8.6-5l-16.8 4.5c-3.7 1-6 4.8-5 8.6 0.8 3.1 3.7 5.2 6.8 5.2 0.6 0 1.2-0.1 1.8-0.2l16.8-4.5c3.7-1 6-4.9 5-8.6zM468.2 512l-12.3 12.3c-2.7 2.7-2.7 7.2 0 9.9 1.4 1.4 3.2 2.1 4.9 2.1 1.8 0 3.6-0.7 4.9-2L478 522c2.7-2.7 2.7-7.2 0-9.9-2.7-2.9-7.1-2.9-9.8-0.1zM499.5 524.4c-3.7-1-7.6 1.2-8.6 5l-4.5 16.8c-1 3.7 1.2 7.6 5 8.6 0.6 0.2 1.2 0.2 1.8 0.2 3.1 0 5.9-2.1 6.8-5.2l4.5-16.8c1-3.7-1.3-7.6-5-8.6zM532.6 554.8c-0.6 0.2-1.2 0.2-1.8 0.2-3.1 0-5.9-2.1-6.8-5.2l-4.5-16.8c-1-3.7 1.2-7.6 5-8.6 3.7-1 7.6 1.2 8.6 5l4.5 16.8c1 3.7-1.3 7.6-5 8.6zM568.2 534.2c-1.4 1.4-3.2 2-5 2-1.8 0-3.6-0.7-5-2L546 521.8c-2.7-2.7-2.7-7.2 0-9.9s7.2-2.7 9.9 0l12.3 12.3c2.7 2.8 2.7 7.2 0 10zM588.8 498.6c-0.8 3.1-3.7 5.2-6.8 5.2-0.6 0-1.2-0.1-1.8-0.2l-16.8-4.5c-3.7-1-6-4.8-5-8.6 1-3.7 4.8-6 8.6-5l16.8 4.5c3.7 1 6 4.9 5 8.6zM583.8 466l-16.8 4.5c-0.6 0.2-1.2 0.2-1.8 0.2-3.1 0-5.9-2.1-6.8-5.2-1-3.7 1.2-7.6 5-8.6l16.8-4.5c3.7-1 7.6 1.2 8.6 5 1 3.7-1.3 7.6-5 8.6zM568.2 431.8L555.8 444c-1.4 1.4-3.2 2-4.9 2-1.8 0-3.6-0.7-5-2-2.7-2.7-2.7-7.2 0-9.9l12.3-12.3c2.7-2.7 7.2-2.7 9.9 0 2.8 2.8 2.8 7.2 0.1 10zM537.6 409.8l-4.5 16.8c-0.8 3.1-3.7 5.2-6.8 5.2-0.6 0-1.2-0.1-1.8-0.2-3.7-1-6-4.8-5-8.6l4.5-16.8c1-3.7 4.8-6 8.6-5s6 4.9 5 8.6zM553 478c0 22.6-18.4 41-41 41h-1.5c-21.9-0.8-39.5-18.8-39.5-41s17.6-40.2 39.5-41h1.5c22.6 0 41 18.4 41 41z"
        fill={getIconColor(color, 7, '#ED9507')}
      />
      <path
        d="M878.3 490.6c-0.8 3.1-3.7 5.2-6.8 5.2-0.6 0-1.2-0.1-1.8-0.2l-11.5-3.1-2-0.5c-1.8-0.5-3.3-1.6-4.2-3.1-1.1 2.6-3.7 4.3-6.4 4.3-0.9 0-1.7-0.2-2.6-0.5-2.8-1.1-4.4-3.7-4.4-6.5l-47.9-0.1v-26.6c-1.6 0-3.2-0.6-4.5-1.7-2.4-2.1-3-5.5-1.8-8.2h-0.3c-1.8 0-3.6-0.7-4.9-2l-3.2-3.1-6.7-6.7c-2.8-2.7-2.8-7.1-0.1-9.9 2.7-2.8 7.2-2.8 9.9-0.1l9.9 9.8c1.4 1.4 2.1 3.2 2.1 5 2.9-2.2 6-4 9.3-5.4-1.5-0.9-2.8-2.4-3.3-4.2l-3.6-13.5c-1-3.7 1.2-7.6 5-8.6 3.7-1 7.6 1.2 8.6 5l3.6 13.5c0.5 1.9 0.2 3.7-0.7 5.3 1.8-0.2 3.6-0.4 5.4-0.4 1.8 0 3.6 0.1 5.3 0.4-0.9-1.5-1.2-3.4-0.7-5.3l3.6-13.5c1-3.7 4.8-6 8.6-5 3.7 1 6 4.8 5 8.6l-3.6 13.5c-0.5 1.9-1.7 3.3-3.2 4.2 3.3 1.4 6.5 3.2 9.3 5.4 0-1.8 0.7-3.6 2.1-4.9l9.8-9.8c2.7-2.7 7.2-2.7 9.9 0s2.7 7.2 0 9.9l-9.8 9.8c-1.4 1.4-3.1 2-4.9 2 2.2 2.8 4 5.9 5.4 9.3 0.9-1.5 2.3-2.6 4.1-3.1l13.5-3.7c3.7-1 7.6 1.2 8.6 4.9s-1.2 7.6-4.9 8.6l-13.5 3.7c-0.6 0.2-1.2 0.2-1.8 0.2-1.2 0-2.3-0.3-3.4-0.9 0.2 1.7 0.4 3.5 0.4 5.3 0 1.8-0.1 3.5-0.4 5.3 1.5-0.8 3.4-1.1 5.2-0.6l13.5 3.6c3.5 0.8 5.8 4.7 4.8 8.4z"
        fill={getIconColor(color, 8, '#ED9507')}
      />
      <path
        d="M265.7 446c-2.8 0-5.6 0.3-8.3 0.9a43.62 43.62 0 0 0-41.6-30.3c-23.4 0-42.5 18.5-43.6 41.6-15.1 2.6-26.6 15.7-26.6 31.5 0 17.6 14.4 32 32 32h45.5c3.9 0 7-3.1 7-7 0-0.6-0.1-1.2-0.2-1.8l57.4-15.1c0.5 2 2 3.8 4 4.7 3.6 1.5 7.7-0.2 9.2-3.7 2-4.8 3-9.9 3-15 0-20.8-17-37.8-37.8-37.8z"
        fill={getIconColor(color, 9, '#9DEAFF')}
      />
      <path
        d="M288.7 489.5c-1 0-1.9 0.1-2.9 0.2-4.3-10.2-14.5-17.3-26.1-17.3-14.4 0-26.3 10.8-28.1 24.6-9 2.6-15.5 10.9-15.5 20.7 0 11.9 9.6 21.5 21.5 21.5h51.2c13.7 0 24.9-11.2 24.9-25-0.1-13.6-11.4-24.7-25-24.7z"
        fill={getIconColor(color, 10, '#07DBFF')}
      />
      <path
        d="M456.4 610m-14.6 0a14.6 14.6 0 1 0 29.2 0 14.6 14.6 0 1 0-29.2 0Z"
        fill={getIconColor(color, 11, '#3F1E01')}
      />
      <path
        d="M580 756.1c-14.8 20.6-38.8 32.9-64 32.9-1.8 0-3.6-0.1-5.4-0.2C469.5 786 437 751.7 437 710v-9c0-41.8 32.6-76.1 73.6-78.8 1.8-0.1 3.5-0.2 5.4-0.2 25.6 0 49.8 12.6 64.6 33.7 6.4 9 4.2 21.5-4.8 27.9-9 6.4-21.5 4.2-27.9-4.8-7.4-10.5-19.3-16.7-31.9-16.7-1.8 0-3.6 0.1-5.4 0.4-19 2.6-33.6 18.9-33.6 38.6v9c0 19.7 14.7 36 33.6 38.6 1.8 0.2 3.5 0.4 5.4 0.4 12.4 0 24.2-6.1 31.6-16.3 6.4-9 18.9-11 27.9-4.6 8.8 6.4 10.9 18.9 4.5 27.9z"
        fill={getIconColor(color, 12, '#3F1E01')}
      />
      <path
        d="M735.9 610m-14.6 0a14.6 14.6 0 1 0 29.2 0 14.6 14.6 0 1 0-29.2 0Z"
        fill={getIconColor(color, 13, '#3F1E01')}
      />
      <path
        d="M859.4 756.1c-14.9 20.6-38.9 32.9-64.1 32.9-43.6 0-79-35.4-79-79v-9c0-43.6 35.4-79 79-79 25.6 0 49.8 12.6 64.7 33.7 6.4 9 4.2 21.5-4.8 27.9-9 6.4-21.5 4.2-27.9-4.8-7.4-10.5-19.3-16.7-32-16.7-21.5 0-39 17.5-39 39v9c0 21.5 17.5 39 39 39 12.6 0 24.2-6 31.7-16.3 6.5-8.9 19-10.9 27.9-4.4 9 6.3 11 18.8 4.5 27.7z"
        fill={getIconColor(color, 14, '#3F1E01')}
      />
      <path
        d="M177.1 610m-14.6 0a14.6 14.6 0 1 0 29.2 0 14.6 14.6 0 1 0-29.2 0Z"
        fill={getIconColor(color, 15, '#3F1E01')}
      />
      <path
        d="M236.5 789c-43.6 0-79-35.4-79-79v-9c0-43.6 35.4-79 79-79 25.6 0 49.8 12.6 64.7 33.7 6.4 9 4.2 21.5-4.8 27.9-9 6.4-21.5 4.2-27.9-4.8-7.4-10.5-19.3-16.7-31.9-16.7-21.5 0-39 17.5-39 39v9c0 21.5 17.5 39 39 39 12.4 0 24.2-6.1 31.6-16.3 6.4-9 18.9-11 27.9-4.6s11 18.9 4.6 27.9c-15 20.6-38.9 32.9-64.2 32.9z"
        fill={getIconColor(color, 16, '#3F1E01')}
      />
      <path
        d="M862.1 508.9c0 20.1-16.4 36.5-36.5 36.5H741.4c-17 0-30.9-13.9-30.9-30.9 0-15.2 11-27.8 25.4-30.4 1.2-21.5 18.6-38.8 40.2-39.8h1.9c18.5 0 34.4 12 39.9 29 2.6-0.6 5.2-0.8 7.8-0.8 14.2 0 26.6 8.2 32.6 20.1 2.4 4.8 3.8 10.4 3.8 16.3z"
        fill={getIconColor(color, 17, '#1EC6D8')}
      />
      <path
        d="M654.5 329v523H842c49.5 0 90-40.5 90-90V329H654.5z m140.8 420c12.6 0 24.2-6 31.7-16.3 6.5-8.9 19-10.9 27.9-4.4 8.9 6.5 10.9 19 4.5 27.9-14.9 20.6-38.9 32.9-64.1 32.9-43.6 0-79-35.4-79-79v-9c0-43.6 35.4-79 79-79 25.6 0 49.8 12.6 64.7 33.7 6.4 9 4.2 21.5-4.8 27.9-9 6.4-21.5 4.2-27.9-4.8-7.4-10.5-19.3-16.7-32-16.7-21.5 0-39 17.5-39 39v9c0 21.3 17.5 38.8 39 38.8z m-74-139c0-8.1 6.5-14.6 14.6-14.6s14.6 6.5 14.6 14.6-6.5 14.6-14.6 14.6-14.6-6.5-14.6-14.6zM855 473.8c0 1.8-0.1 3.5-0.4 5.3 1.5-0.8 3.4-1.1 5.2-0.6l13.5 3.6c3.7 1 6 4.8 5 8.6-0.8 3.1-3.7 5.2-6.8 5.2-0.6 0-1.2-0.1-1.8-0.2l-11.5-3.1c2.5 4.9 3.9 10.5 3.9 16.4 0 20.1-16.4 36.5-36.5 36.5H741.4c-17 0-30.9-13.9-30.9-30.9 0-15.2 11-27.8 25.4-30.4 1.2-21.5 18.6-38.8 40.2-39.8l-6.7-6.7c-2.8-2.7-2.8-7.1-0.1-9.9 2.7-2.8 7.2-2.8 9.9-0.1l9.9 9.8c1.4 1.4 2.1 3.2 2.1 5 2.9-2.2 6-4 9.3-5.4-1.5-0.9-2.8-2.4-3.3-4.2l-3.6-13.5c-1-3.7 1.2-7.6 5-8.6 3.7-1 7.6 1.2 8.6 5l3.6 13.5c0.5 1.9 0.2 3.7-0.7 5.3 1.8-0.2 3.6-0.4 5.4-0.4 1.8 0 3.6 0.1 5.3 0.4-0.9-1.5-1.2-3.4-0.7-5.3l3.6-13.5c1-3.7 4.8-6 8.6-5 3.7 1 6 4.8 5 8.6l-3.6 13.5c-0.5 1.9-1.7 3.3-3.2 4.2 3.3 1.4 6.5 3.2 9.3 5.4 0-1.8 0.7-3.6 2.1-4.9l9.8-9.8c2.7-2.7 7.2-2.7 9.9 0s2.7 7.2 0 9.9l-9.8 9.8c-1.4 1.4-3.1 2-4.9 2 2.2 2.8 4 5.9 5.4 9.3 0.9-1.5 2.3-2.6 4.1-3.1l13.5-3.7c3.7-1 7.6 1.2 8.6 4.9s-1.2 7.6-4.9 8.6l-13.5 3.7c-0.6 0.2-1.2 0.2-1.8 0.2-1.2 0-2.3-0.3-3.4-0.9 0 1.8 0.1 3.5 0.1 5.3z"
        fill={getIconColor(color, 18, '#E2D7D7')}
      />
      <path
        d="M733.581051 624.413035a14.6 14.6 0 1 0 4.678089-28.822829 14.6 14.6 0 1 0-4.678089 28.822829Z"
        fill={getIconColor(color, 19, '#1E0D01')}
      />
      <path
        d="M756.3 701v9c0 21.5 17.5 39 39 39 12.6 0 24.2-6 31.7-16.3 6.5-8.9 19-10.9 27.9-4.4 8.9 6.5 10.9 19 4.5 27.9-14.9 20.6-38.9 32.9-64.1 32.9-43.6 0-79-35.4-79-79v-9c0-43.6 35.4-79 79-79 25.6 0 49.8 12.6 64.7 33.7 6.4 9 4.2 21.5-4.8 27.9-9 6.4-21.5 4.2-27.9-4.8-7.4-10.5-19.3-16.7-32-16.7-21.5-0.2-39 17.3-39 38.8z"
        fill={getIconColor(color, 20, '#1E0D01')}
      />
      <path
        d="M510.5 329v108h1.5c22.6 0 41 18.4 41 41s-18.4 41-41 41h-1.5v103.2c1.8-0.1 3.5-0.2 5.4-0.2 25.6 0 49.8 12.6 64.6 33.7 6.4 9 4.2 21.5-4.8 27.9-9 6.4-21.5 4.2-27.9-4.8-7.4-10.5-19.3-16.7-31.9-16.7-1.8 0-3.6 0.1-5.4 0.4v86.3c1.8 0.2 3.5 0.4 5.4 0.4 12.4 0 24.2-6.1 31.6-16.3 6.4-9 18.9-11 27.9-4.6s11 18.9 4.6 27.9c-14.8 20.6-38.8 32.9-64 32.9-1.8 0-3.6-0.1-5.4-0.2V852h144V329H510.5z m27.1 80.8l-4.5 16.8c-0.8 3.1-3.7 5.2-6.8 5.2-0.6 0-1.2-0.1-1.8-0.2-3.7-1-6-4.8-5-8.6l4.5-16.8c1-3.7 4.8-6 8.6-5s6 4.9 5 8.6z m-5 145c-0.6 0.2-1.2 0.2-1.8 0.2-3.1 0-5.9-2.1-6.8-5.2l-4.5-16.8c-1-3.7 1.2-7.6 5-8.6 3.7-1 7.6 1.2 8.6 5l4.5 16.8c1 3.7-1.3 7.6-5 8.6z m18.3-108.7c-1.8 0-3.6-0.7-5-2-2.7-2.7-2.7-7.2 0-9.9l12.3-12.3c2.7-2.7 7.2-2.7 9.9 0s2.7 7.2 0 9.9L555.8 444c-1.3 1.4-3.1 2.1-4.9 2.1z m17.3 88.1c-1.4 1.4-3.2 2-5 2-1.8 0-3.6-0.7-5-2L546 521.8c-2.7-2.7-2.7-7.2 0-9.9s7.2-2.7 9.9 0l12.3 12.3c2.7 2.8 2.7 7.2 0 10z m20.6-35.6c-0.8 3.1-3.7 5.2-6.8 5.2-0.6 0-1.2-0.1-1.8-0.2l-16.8-4.5c-3.7-1-6-4.8-5-8.6 1-3.7 4.8-6 8.6-5l16.8 4.5c3.7 1 6 4.9 5 8.6z m-5-32.6l-16.8 4.5c-0.6 0.2-1.2 0.2-1.8 0.2-3.1 0-5.9-2.1-6.8-5.2-1-3.7 1.2-7.6 5-8.6l16.8-4.5c3.7-1 7.6 1.2 8.6 5 1 3.7-1.3 7.6-5 8.6z"
        fill={getIconColor(color, 21, '#D6C8C8')}
      />
      <path
        d="M533.1 529.4l4.5 16.8c1 3.7-1.2 7.6-5 8.6-0.6 0.2-1.2 0.2-1.8 0.2-3.1 0-5.9-2.1-6.8-5.2l-4.5-16.8c-1-3.7 1.2-7.6 5-8.6 3.7-1 7.6 1.3 8.6 5zM524.5 431.6c-3.7-1-6-4.8-5-8.6l4.5-16.8c1-3.7 4.8-6 8.6-5s6 4.8 5 8.6l-4.5 16.8c-0.8 3.1-3.7 5.2-6.8 5.2-0.6 0-1.2-0.1-1.8-0.2zM512 519h-1.5v-82h1.5c22.6 0 41 18.4 41 41s-18.4 41-41 41zM555.8 512l12.3 12.3c2.7 2.7 2.7 7.2 0 9.9-1.4 1.4-3.2 2-5 2-1.8 0-3.6-0.7-5-2L546 521.8c-2.7-2.7-2.7-7.2 0-9.9s7.1-2.7 9.8 0.1zM568.2 421.8c2.7 2.7 2.7 7.2 0 9.9L555.8 444c-1.4 1.4-3.2 2-4.9 2-1.8 0-3.6-0.7-5-2-2.7-2.7-2.7-7.2 0-9.9l12.3-12.3c2.8-2.7 7.2-2.7 10 0z"
        fill={getIconColor(color, 22, '#EA6A0A')}
      />
      <path
        d="M515.9 789c-1.8 0-3.6-0.1-5.4-0.2v-40.2c1.8 0.2 3.5 0.4 5.4 0.4 12.4 0 24.2-6.1 31.6-16.3 6.4-9 18.9-11 27.9-4.6s11 18.9 4.6 27.9c-14.9 20.7-38.8 33-64.1 33zM515.9 662c-1.8 0-3.6 0.1-5.4 0.4v-40.2c1.8-0.1 3.5-0.2 5.4-0.2 25.6 0 49.8 12.6 64.6 33.7 6.4 9 4.2 21.5-4.8 27.9-9 6.4-21.5 4.2-27.9-4.8-7.3-10.6-19.3-16.8-31.9-16.8z"
        fill={getIconColor(color, 23, '#1E0D01')}
      />
      <path
        d="M580.2 503.6l-16.8-4.5c-3.7-1-6-4.8-5-8.6 1-3.7 4.8-6 8.6-5l16.8 4.5c3.7 1 6 4.8 5 8.6-0.8 3.1-3.7 5.2-6.8 5.2-0.6 0-1.2-0.1-1.8-0.2zM583.8 466l-16.8 4.5c-0.6 0.2-1.2 0.2-1.8 0.2-3.1 0-5.9-2.1-6.8-5.2-1-3.7 1.2-7.6 5-8.6l16.8-4.5c3.7-1 7.6 1.2 8.6 5 1 3.7-1.3 7.6-5 8.6z"
        fill={getIconColor(color, 24, '#EA6A0A')}
      />
      <path
        d="M932 284v45H510.5v-74.1c0.5 0 1 0.1 1.5 0.1 11 0 20-9 20-20v-41h90v41c0 11 9 20 20 20s20-9 20-20v-41h90v41c0 11 9 20 20 20s20-9 20-20v-41h50c49.5 0 90 40.5 90 90z"
        fill={getIconColor(color, 25, '#CE1743')}
      />
      <path
        d="M532 155v80c0 11-9 20-20 20-0.5 0-1 0-1.5-0.1V135.1c0.5 0 1-0.1 1.5-0.1 11 0 20 9 20 20zM662 155v80c0 11-9 20-20 20s-20-9-20-20v-80c0-11 9-20 20-20s20 9 20 20zM792 155v80c0 11-9 20-20 20s-20-9-20-20v-80c0-11 9-20 20-20s20 9 20 20z"
        fill={getIconColor(color, 26, '#AF142B')}
      />
    </svg>
  );
};

Iconmianxingtianqiyubao.defaultProps = {
  size: 18,
};

export default Iconmianxingtianqiyubao;
