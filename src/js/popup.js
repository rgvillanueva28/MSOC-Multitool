const defanger = document.getElementById("defanger");
const defangerResult = document.getElementById("defanger-result");
const fanger = document.getElementById("fanger");
const fangerResult = document.getElementById("fanger-result");

defanger.addEventListener("input", () => {
  defangerResult.value = defang(defanger.value);
});

fanger.addEventListener("input", () => {
  fangerResult.value = fang(fanger.value);
});

function defang(originalUrl) {
  let defangedUrl = originalUrl
    .replace(/\./g, "[.]")
    .replace(/http/gi, "hxxp")
    .replace(/:\/\//g, "[://]");
  return defangedUrl;
}

function fang(originalUrl) {
  let fangedUrl = originalUrl
    .replace(/\[.]/g, ".")
    .replace(/hxxp/gi, "http")
    .replace(/\[:\/\/\]/g, "://");
  return fangedUrl;
}
