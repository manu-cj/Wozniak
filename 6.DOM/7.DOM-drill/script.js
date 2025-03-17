const ulElement = document.querySelector("ul");

const childNodes = ulElement.childNodes;

childNodes.forEach((node) => {
  if (node.nodeType === 1) {
    if (node.textContent.includes("Fast and Furious")) {
      ulElement.insertBefore(node, ulElement.firstChild);
      node.classList.add("important");
    }
    node.addEventListener("click", () => {
      if (node.textContent.includes("Fast and Furious")) {
        alert(
          "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family"
        );
      } else {
        alert(node.textContent);
      }
    });
    childNodes.forEach((ElementListed) => {
      if (node !== ElementListed && node.isEqualNode(ElementListed)) {
        ulElement.removeChild(ElementListed);
      }
    });
    document.body.addEventListener("keyup", (event) => {
      if (event.key === "r") {
        const items = Array.from(ulElement.children);
        for (let i = items.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          ulElement.appendChild(items[j]);
        }
        items.forEach((item) => {
          if (item.textContent.includes("Fast and Furious")) {
            ulElement.insertBefore(item, ulElement.firstChild);
          }
        });
      }

      if (event.key === "d") {
        if (node.textContent.includes("Fast and Furious")) {
          let clone = node.cloneNode(true);
          ulElement.appendChild(clone);
        }
      }
    });
  }
});

const newDiv = document.createElement("div");

document.body.insertBefore(newDiv, ulElement);

const selectElement = document.createElement("select");
const optionImportant = document.createElement("option");
optionImportant.value = "important";
optionImportant.textContent = "franchises importantes";
const optionNormal = document.createElement("option");
optionNormal.value = "normal";
optionNormal.textContent = "franchises normales";

selectElement.appendChild(optionImportant);
selectElement.appendChild(optionNormal);
newDiv.appendChild(selectElement);

selectElement.addEventListener("change", (event) => {
  const items = ulElement.children;
  if (event.target.value === "important") {
    Array.from(items).forEach((item) => {
      if (item.classList.contains("important")) {
        item.style.visibility = "visible";
      } else {
        item.style.visibility = "hidden";
      }
    });
  } else {
    Array.from(items).forEach((item) => {
      item.style.visibility = "visible";
    });
  }
});
