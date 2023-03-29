const table = document.getElementById("table-content");

async function getUsers() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  const row = function (user) {
    return `
          <tr class="border border-black">
            <td class="border border-slate-700">${user.id}</td>
            <td class="border border-slate-700">${user.name}</td>
            <td class="border border-slate-700">${user.username}</td>
            <td class="border border-slate-700">${user.email}</td>
            <td class="border border-slate-700">
              Street: ${user.address.street} <br>
              Suite: ${user.address.suite} <br>
              City: ${user.address.city} <br>
              Zipcode: ${user.address.zipcode} <br>
              Geo: <br>
              lat: ${user.address.geo.lat} lng: ${user.address.geo.lng}
              </td>
            <td class="border border-slate-700">${user.phone}</td>
            <td class="border border-slate-700">${user.website}</td>
            <td class="border border-slate-700">
              Name: ${user.company.name} <br>
              CatchPhrase: ${user.company.catchPhrase} <br>
              bs: ${user.company.bs}
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
