import type { CSSProperties } from "react";
const paths: Record<string, string[]> = {
  arrow: ["M5 12h14", "m13 6 6 6-6 6"], diagonal: ["M6 18 18 6", "M6 6h12v12"],
  shield: ["M12 3 3.5 6.5v5c0 5 5 8.5 8.5 10 3.5-1.5 8.5-5 8.5-10v-5L12 3Z", "m8 12 2.5 2.5 5.5-5.5"],
  building: ["M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16", "M2 21h20", "M8 7h2m4 0h2M8 11h2m4 0h2M10 21v-5h4v5"],
  box: ["m12 3 9 5-9 5-9-5 9-5Z", "M3 8v9l9 5 9-5V8", "M12 13v9", "m7.5 5.5 9 5"],
  scale: ["M12 3v18M7 21h10M4 7h16", "m6 7-4 8h8L6 7Zm12 0-4 8h8l-4-8Z"],
  car: ["m5 6-2 6v7h3v-3h12v3h3v-7l-2-6H5Z", "M3 12h18M7 6l1-3h8l1 3M6 14h2m8 0h2"],
  people: ["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"],
  heart: ["M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"],
  clock: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "M12 6v6l4 2"], cyber: ["M7 3h10v4h4v10h-4v4H7v-4H3V7h4V3Z", "M9 9h6v6H9z"],
  check: ["m5 12 4 4L19 6"], home: ["m3 10 9-7 9 7v11h-7v-7h-4v7H3V10Z"], plane: ["m22 2-7 20-4-9-9-4 20-7Z", "m22 2-11 11"],
  pin: ["M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z", "M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"],
  phone: ["M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3l1 5-2 1a16 16 0 0 0 7 7l1-2 5 1Z"],
  mail: ["M3 4h18v16H3z", "m3 5 9 8 9-8"], menu: ["M4 6h16M4 12h16M4 18h16"], close: ["m6 6 12 12M6 18 18 6"], chevron: ["m6 9 6 6 6-6"],
  spark: ["m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"],
  document: ["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z", "M14 2v6h6M8 13h8m-8 4h5"],
  coffee: ["M3 8h14v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8ZM17 8h1a4 4 0 0 1 0 8h-1M6 2v3m4-3v3m4-3v3"],
  tools: ["M14 6a5 5 0 0 1 6-3l-3 3 1 3 3-3a5 5 0 0 1-6 6L6 21a2 2 0 0 1-3-3l9-9a5 5 0 0 1 2-3Z"],
  laptop: ["M4 3h16v13H4z", "M2 20h20l-2-4H4l-2 4Z"], plus: ["M12 5v14M5 12h14"],
};
export function Icon({ name = "shield", size = 24, className = "", style }: { name?: string; size?: number; className?: string; style?: CSSProperties }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">{(paths[name] || paths.shield).map((d, i) => <path d={d} key={i} />)}</svg>;
}
