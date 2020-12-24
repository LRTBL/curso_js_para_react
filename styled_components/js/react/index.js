function component(strings, ...dynamicValues) {
  return function (props) {
    let newContent = strings.slice();
    dynamicValues.forEach((value, index) => {
      newContent[index] += props[value];
    });
    return newContent.join("");
  };
}

export default function React() {
  console.log("Soy React");
}

export { component };
