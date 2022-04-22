function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    replacer: document.querySelector("#replacer").value,
    refresh: document.querySelector("#refresh").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#replacer").value = result.replacer || "(?)";
    document.querySelector("#refresh").value = result.refresh || "50";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  browser.storage.sync.get("replacer").then(setCurrentChoice, onError);
  browser.storage.sync.get("refresh").then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

