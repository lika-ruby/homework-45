let text = "";

let i = 0;
console.log("--------------------------- Task 1 ---------------------------");
while (i < 11) {
  text += `${i}, `;
  i += 1;
}
console.log(text);

text = "";
console.log("--------------------------- Task 2 ---------------------------");
for (let i = 2; i < 21; i += 1) {
  if (i % 2 === 0) {
    text += `${i}, `;
  }
}
console.log(text);

text = "";
console.log("--------------------------- Task 3 ---------------------------");
console.log("Таблиця множення на 7");
for (let i = 1; i < 11; i += 1) {
  text += `${i}   `;
}
console.log(text);

text = "";
for (let i = 1; i < 71; i += 1) {
  if (i % 7 === 0) {
    text += `${i}  `;
  }
}
console.log(text);

// У завданні сказано зробити масив, так як ми не вивчали масиви, тому я зробила без масивів
i = 0;
text = "";
console.log("--------------------------- Task 4 ---------------------------");
while (i < 6) {
  text += `${i}, `;
  i += 1;
}
console.log(text);

i = 0;
text = "";
console.log("--------------------------- Task 5 ---------------------------");
for (let i = 0; i < 11; i += 1) {
  if (i === 7) {
    break;
  } else {
    text += `${i}, `;
  }
}
console.log(text);

i = 0;
text = "";
const n = Number(prompt("Введіть число"));
console.log("--------------------------- Task 6 ---------------------------");

while (true) {
  i += 1;
  if (i === n) {
    break;
  } else {
    text += `${i}, `;
  }
}
console.log(text);

i = 0;
text = "";
console.log("--------------------------- Task 7 ---------------------------");

while (i < 21) {
  i += 1;
  if (i % 3 === 0) {
    continue;
  } else {
    text += `${i}, `;
  }
}
console.log(text);
