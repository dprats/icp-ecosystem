import { icp_ecosystem } from "../../declarations/icp_ecosystem";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with icp_ecosystem actor, calling the greet method
  const greeting = await icp_ecosystem.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
