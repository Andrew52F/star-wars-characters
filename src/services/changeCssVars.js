export const changeCssVars = (theme) => {
  const root = document.querySelector(':root');
  // console.log(root.style, theme); 
  const cssVariables = ['header', 'bgimage'];
  cssVariables.forEach(variable => {
    root.style.setProperty(`--theme-default-${variable}`, `var(--theme-${theme}-${variable})`);
  })
}