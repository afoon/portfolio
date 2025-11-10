import styles from "./Badge.module.css";
const SKILLS = {
  react: { name: "React.js", icon: "bx-react", color: "#58C4DC" },
  js: { name: "Javascript", icon: "bx-javascript", color: "#EFD81C" },
  next: { name: "Next.js", icon: "bx-next-js", color: "#000" },
node: { name: "Node.js", icon: "bx-nodejs", color: "#549d4a" },
  css: { name: "CSS", icon: "bx-css3", color: "#3178C6" },
  ts: { name: "Typescript", icon: "bx-react", color: "#3178C6" },
  vue: { name: "Vue.js", icon: "bx-vuejs", color: "#42D392" },
  mongo: { name: "MongoDB", icon: "bx-mongodb", color: "#00c04c" },
  tailwind: { name: "Tailwind CSS", icon: "bx-tailwind-css", color: "#00BCFF" },
  tanquery: { name: "React Query", icon: "bx-react-query", color: "#FB3334" },
  shadcn: { name: "Shadcn", icon: "bx-shadcn", color: "#000" },
  nest: { name: "Nest.js", icon: "bx-nest-js", color: "#EA2857" },
  go: { name: "GoLang", icon: "bx-go-lang", color: "#007D9C" },
  html: { name: "HTML", icon: "bx-html5", color: "#DD4B25" },
  python: { name: "Python", icon: "bx-python", color: "#3572A4" },
  vite: {name: "Vite", icon: "bx-vite-js", color: "#BB60E7"},
  panda: {name: "Panda CSS", icon: "bx-bear", color: "#EFD81C"}
};
const Badge = ({ skill }) => {
    const {color, name, icon} = SKILLS[skill]
  return (
    <div className={styles.badge} style={{"--color": color}}>
      <i className={`bxl bx-sm ${icon}`}></i><span>{name}</span>
    </div>
  );
};

export default Badge;
