var profiles = [
  {
    name: "vibhu",
    class: 10,
    hobby: "cricket",
  },
  {
    name: "vibhanshu",
    class: 12,
    hobby: "football",
  },
];
function find(name, prop) {
  for (var i = 0; i < profiles.length; i++) {
    if (profiles[i].name == name) {
      return profiles[i][prop] || "Property doesnot exist";
    }
  }

  return "User doesnot exist";
}

console.log(find("aa", "hobby"));
