const ele = document.getElementById("main");
const p = document.createElement("p");
p.textContent = "This is a para";
// ele.appendChild(p);
ele.innerHTML += `<div>This is a para 
<ul>
    <li>
        item1
    </li>
    <li>
        item2
    </li>
    </ul>
</div>`;
