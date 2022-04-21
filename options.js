function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    replacer: document.querySelector("#replacer").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#replacer").value = result.replacer || "(?)";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("replacer");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

