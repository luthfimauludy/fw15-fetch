const table = document.getElementById("table-content");

async function getUsers() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  const row = function (user) {
    return `
          <tr class="align-top border border-black bg-[#C7E9B0]">
            <td class="border border-slate-700">${user.id}</td>
            <td class="border border-slate-700">${user.name}</td>
            <td class="border border-slate-700">${user.username}</td>
            <td class="border border-slate-700">${user.email}</td>
            <td class="border border-slate-700">
              <span class="font-semibold">Street:</span> ${user.address.street} <br>
              <span class="font-semibold">Suite:</span> ${user.address.suite} <br>
              <span class="font-semibold">City:</span> ${user.address.city} <br>
              <span class="font-semibold">Zipcode:</span> ${user.address.zipcode} <br>
              <span class="font-semibold">Geo:</span> <br>
              <span class="font-semibold">lat:</span> ${user.address.geo.lat} lng: ${user.address.geo.lng}
              </td>
            <td class="border border-slate-700">${user.phone}</td>
            <td class="border border-slate-700">${user.website}</td>
            <td class="border border-slate-700">
              <span class="font-semibold">Name:</span> ${user.company.name} <br>
              <span class="font-semibold">CatchPhrase:</span> ${user.company.catchPhrase} <br>
              <span class="font-semibold">bs:</span> ${user.company.bs}
            </td>
          </tr>
          `;
  };
  // for (let i = 0; i < users.length; i++) {
  //   table.innerHTML += row(users[i]);
  // }
  users.forEach((user) => {
    table.innerHTML += row(user);
  });
}
getUsers();
